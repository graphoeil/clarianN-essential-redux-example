// Imports
import './App.css';
import Counter from "./features/counter/Counter";

// Component
const App = () => {

	// Return
	return(
		<div className="App">
			<header>
				<h1>Counter Redux Example</h1>
				<Counter/>
			</header>
		</div>
	);

};

// Export
export default App;