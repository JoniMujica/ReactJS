import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos';


function App() {
  /*let nombre = "Jon";
  let auth = true;
  let estaciones = ["Primavera","Verano","Otoño","Inverno"];*/
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          {/*<label htmlFor='nombre'>Nombre</label>
          <input type="text" id='nombre'></input>
          <h1>{nombre}</h1>
    <p>{auth ? "El Usuario no esta Logueado":"El usuario esta logueado"}</p>*/}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {/*<ul>
            {estaciones.map((el,index) =>(
              <li key={index}>{el}</li>
            ))}
            </ul>*/}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          </section>
          <section>
          <hr/>
          <Componente msg="Hola soy un componente funcional expresado desde una prop" /> <br/><br/><br/><br/><br/><br/><br/><br/>
          <Propiedades 
            cadena="Esto es una cadena de texto" 
            numero={19} 
            booleano={true}
            arreglo={[1,2,3]}
            objeto={{Nombre:"Joni",Correo:"jonimujica34@gmail.com"}}
            function={(num)=> num*num}
            elementoReact={<i>Esto es un elemento ReactJS</i>}
            componenteReact={<Componente msg="Soy un componente pasado como Prop " />}
          />
          <hr/>
          <Estado />
          <hr/>
          <RenderizadoCondicional />
          <hr/>
          <RenderizadoElementos />
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreEventos />
        </section>
      </header>
    </div>
  );
}

export default App;
