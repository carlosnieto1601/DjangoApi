
import './App.css';
import { Fragment } from 'react';
import Navbar from './components/Navbar.js';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import MostrarEstudiante from './components/MostrarEstudiante.js'
import CrearEstudiantes from './components/CrearEstudiante.js';
import EditarEstudiante from './components/EditarEstudiante';
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
        <Navbar brand='Estudiantes' api='Mostar Api' 
      asignatura='Asignaturas' clase='Clases' />
      </Fragment>
      <BrowserRouter>
      <Routes>
      <Route  path='/' element= {<MostrarEstudiante/>} />
      <Route path='/create' element= {<CrearEstudiantes/>} />
      <Route path='/edit/:id/' element= {<EditarEstudiante/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//2:59:00