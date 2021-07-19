import { useIsAuthenticated } from '@azure/msal-react';
import React from 'react';
import { SignInButton } from '../SignInButton';
import './App.css';

export const App = () => {
  const isAuthenticated = useIsAuthenticated();
  return (
    <div className="App">
      {isAuthenticated ? 'Estas dentro' : <SignInButton />}
    </div>
  );
}
