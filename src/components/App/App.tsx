import { NavBar } from '../NavBar';
import { UserArea } from '../UserArea';
import './App.css';


export const App = () => {
  return (
    <div className="App">
      <NavBar><h2>@azure/msal-react</h2><UserArea /></NavBar>      
    </div>
  );
}
