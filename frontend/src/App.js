
import './App.css';
import { Fragment } from 'react';
import Navbar from './components/Navbar.js';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import MostrarEstudiante from './components/MostrarEstudiante.js'
import CrearEstudiantes from './components/CrearEstudiante.js';
import EditarEstudiante from './components/EditarEstudiante.js';
import Metodos from './components/Metodos.js';
import MostrarProfesor from './components/MostrarProfesor.js';
import CrearProfesor from './components/CrearPorfesor.js';
import EditarProfesor from './components/EditarProfesor.js';
function App() {

  // const [estudiantes, setEstudiantes]= useState([])

  // useEffect(() =>{
  //   fetch('http://127.0.0.1:8000/api/estudiantes/',{
  //     'method':'GET',
  //      headers:{
  //        'Content-Type':'application/json',
  //        'Authorization':'Token 1c0acfd8891edb9273f7860b2c1842b9f4c0aef9'
  //      }
  //   })
  //   .then(resp => resp.json())
  //   .then(resp=>setEstudiantes(resp))
  //   .catch(error => console.log(error))


  // },[])

  return (
    <div>
      <Fragment>
        <Navbar estudiantes='Estudiantes' asignatura='Asignaturas' profesor='Profesor' clase='Clases' metodos='Metodos' />
      </Fragment>
      <BrowserRouter>
      <Routes>
      <Route path='/metodos' element= {<Metodos/>} />
      <Route path='/profesor' element= {<MostrarProfesor/>} />
      <Route path='/crear' element= {<CrearProfesor/>} />
      <Route path='/estudiantes' element= {<MostrarEstudiante/>} />
      <Route path='/create' element= {<CrearEstudiantes/>} />
      <Route path='/edit/:id/' element= {<EditarEstudiante/>} />
      <Route path='/editprofesor/:id/' element= {<EditarProfesor/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//2:59:00