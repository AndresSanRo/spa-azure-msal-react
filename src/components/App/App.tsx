import { useIsAuthenticated } from '@azure/msal-react';
import { Label } from '@fluentui/react';
import React from 'react';
import { NavBar } from '../NavBar';
import { SignInButton } from '../SignInButton';
import './App.css';

export const App = () => {
  const isAuthenticated = useIsAuthenticated();
  return (
    <div className="App">
      <NavBar><h2>@azure/msal-react</h2>{isAuthenticated ? <h2>Logged in!</h2> : <SignInButton />}</NavBar>      
    </div>
  );
}
