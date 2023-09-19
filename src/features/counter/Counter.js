// Imports
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, incrementAsync } from "./counterSlice";

// Component
const Counter = () => {

	// Store
	const { value:count, status } = useSelector((store) => { return store.counter; });

	// Dispatch
	const dispatch = useDispatch();

	// State
	const [amount, setAmount] = useState('2');

	// Return
	return(
		<div>
			<button style={ { margin:'0 10px 0 0' } } type="button" 
				onClick={ () => { dispatch(increment()); } }>
				+
			</button>
			<span>{ status === 'loading' ? `${ status }...` : count }</span>
			<button style={ { margin:'0 0 0 10px' } } type="button" 
				onClick={ () => { dispatch(decrement()); } }>
				-
			</button>
			<input style={ { margin:'0 0 0 10px' } } type="number" aria-label="Set amount" 
				value={ amount } onChange={ (e) => { setAmount(e.target.value); } } />
			<button type="button" 
				onClick={ () => { dispatch(incrementByAmount(Number(amount) || 0)); } }>
				Add amount
			</button>
			<button type="button" onClick={ () => { dispatch(incrementAsync(Number(amount) || 1)); } }>
				Add async
			</button>
		</div>
	);

};

// Export
export default Counter;