import logo from './logo.svg';
import './App.css';

function App() {
  let nombre = "Jon";
  let auth = true;
  let estaciones = ["Primavera","Verano","Otoño","Inverno"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor='nombre'>Nombre</label>
        <input type="text" id='nombre'></input>
        <h1>{nombre}</h1>
        <p>{auth ? "El Usuario no esta Logueado":"El usuario esta logueado"}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {estaciones.map((el,index) =>(
            <li key={index}>{el}</li>
          ))}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
