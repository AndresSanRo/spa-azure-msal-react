import { SignInOutButton } from '..';
import { NavBar } from '../NavBar';

import './App.css';

export const App = () => {
  return (
    <div className="App">
      <NavBar><h2>@azure/msal-react</h2><SignInOutButton /></NavBar>      
    </div>
  );
}
