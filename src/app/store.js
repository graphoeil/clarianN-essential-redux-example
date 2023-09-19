// Imports
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

// Store
const store = configureStore({
	reducer:{
		counter:counterReducer
	}
});

// Export
export default store;