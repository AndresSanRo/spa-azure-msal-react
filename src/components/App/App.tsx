import React, { useState } from 'react';
import { NavBar } from '../NavBar';
import { UserArea } from '../UserArea';
import './App.css';

export const App: React.FC = () => {
	const [token, setToken] = useState<string>();

	return (
		<div className="App">
			<NavBar>
				<h2>@azure/msal-react</h2>
				<UserArea setToken={setToken} />
			</NavBar>
			<div className="body">ª</div>
		</div>
	);
};
