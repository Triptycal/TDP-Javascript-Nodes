import logo from './logo.svg';
import './App.css';
//import Game from './Game.jsx';
import Store from './Store.jsx';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Shopping List:</h1>
        <Store/>
        
        <p>
        
        </p>
      </header>
     
      
      

    </div>
    
  );
}

export default App;
