import './App.css';
import NavBar from './components/NavBar/NavBar';
import "bulma/css/bulma.css";
import imgLogo from "./assets/logo.png";


function App() {
  return (
    <div className="App">
      
      <NavBar logo={imgLogo}/>
    </div>
  );
}

export default App;
