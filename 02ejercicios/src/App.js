import ContactForm from "./components/ContactForm";
import { CrudApi } from "./components/CrudApi";
import { CrudApp } from "./components/CrudApp";
import SelectsAnidados from "./components/SelectsAnidados";
import { SongSearch } from "./components/SongSearch";


const Persona = {
  nombre:"Joni",
  Apellido:"Mujica"
}

console.log(Persona);
function App() {
  return (
    <>
        <h1>Ejercicios con react</h1> 
        <hr />
        <ContactForm />
        <hr />
        <SelectsAnidados />
        <hr/>
        <SongSearch />
        <hr/>
        <CrudApi />
        <hr/>
        <CrudApp />
    </>
  );
}

export default App;
