import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "materialize-css/dist/css/materialize.min.css";
import Controller from './components/Controller';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/portfolio';

function App() {
  return (
    <>
    <Navbar/>
    <Portfolio/>
    </>
  );
}

export default App;
