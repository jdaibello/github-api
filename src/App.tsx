import React from 'react';
import Routes from './Routes';
import './App.css';
import NavBar from './pages/Home/components/NavBar';

const App = () => {
	return (
		<>
			<NavBar />
			<Routes />
		</>
	);
}

export default App;