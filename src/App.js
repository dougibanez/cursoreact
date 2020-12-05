import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// importar componentes
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas'
function hola(nombre,edad){
  var presentacion = <div>
    <h2>Hola. Soy {nombre}!</h2>
    <h3>Tengo {edad} años.</h3>
  </div>;
  return presentacion;
}

function App() {

  var nombre = "Doug Ibáñez";
  var edad = 39;
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          dougibanez. curso react 30/10/2020
        </p>
        {hola(nombre,edad)}
      
        <section className="componentes">
        <MiComponente />
        <Peliculas />
        </section>
      </header>
    </div>
  );
}

export default App;
