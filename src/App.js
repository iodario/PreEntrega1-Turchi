import './App.css';
import NavBar from './components/NavBar/NavBar';
import "bulma/css/bulma.css";
import imgLogo from "./assets/logo.png";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";



function App() {
  return (
    <div className="App">
      
      <NavBar logo={imgLogo}/>
      <ItemListContainer greetings= "Bienvenidos"/>

    </div>
  );
}

export default App;
