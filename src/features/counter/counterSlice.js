// Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";

// Initial state
const initialState = {
	value:0,
	status:'idle'
};

// Async methods
export const incrementAsync = createAsyncThunk('counter/incrementAsync', async(amount, thunkAPI) => {
	try {
		const response = await fetchCount(amount);
		return response.data;
	} catch (error){
		return thunkAPI.rejectWithValue(error);
	}
});

// Slice
const counterSlice = createSlice({
	name:'counter',
	initialState,
	reducers:{
		// Increment
		increment:(state) => {
			// We can do += thanks of immer library ;-)
			state.value += 1;
		},
		// Decrement
		decrement:(state) => {
			state.value -= 1;
		},
		// Increment by amount
		incrementByAmount:(state, { payload }) => {
			state.value += payload;
		},
	},
	extraReducers:(builder) => {
		// Increment async
		builder.addCase(incrementAsync.pending, (state) => {
			state.status = 'loading';
		}).addCase(incrementAsync.fulfilled, (state, { payload }) => {
			state.status = 'idle';
			state.value += payload;
		}).addCase(incrementAsync.rejected, (state) => {
			state.status = 'idle';
		});
	}
});

// Actions export
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Slice export
export default counterSlice.reducer;