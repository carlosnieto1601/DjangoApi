import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://127.0.0.1:8000/api/estudiantes/";

const CrearEstudiantes = () => {
  
  const [nombre, setnombre] = useState("");
  const [apellido, setapellido] = useState("");
  const [numero, setnumero] = useState("");
  const [correo, setcorreo] = useState("");
  const [programa, setprograma] = useState("");
  const navigate = useNavigate();

  // procedimiento de guardar

  const guardar = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      nombre: nombre,
      apellido: apellido,
      numero: numero,
      correo: correo,
      programa: programa,
    });
    navigate("/");
  };

  return (
    <div className="container">
        <div className="row">
            <div className="col-11">
            <h1> Crear Estudiante </h1>
            
        <form onSubmit={guardar} >
            <div>
            <div className='col-6 mb-4'>
                <label htmlFor="nombre" className="mb-3"> Nombre </label>
                 <input 
                    id="nombre"
                    value={nombre}
                    onChange= {(e) => setnombre(e.target.value)}
                    type='text'
                    className='form-control'
                    placeholder='nombre'
                    required
                 /> 
                 </div>
                 <div className='col-6 mb-3'>
                <label htmlFor='apellido' className='mb-3'> Apellido </label>
                 <input 
                     id='apellido'
                    value={apellido}
                    onChange= {(e) => setapellido(e.target.value)}
                    type='text'
                    className='form-control'
                    placeholder='apellido'
                    required
                 /> 
                 </div>
                 <div className='col-6 mb-3'>
                <label htmlFor='cedula' className='mb-3'> Numero de Identificacion </label>
                 <input 
                     id='numero'
                    value={numero}
                    onChange= {(e) => setnumero(e.target.value)}
                    type='text'
                    className='form-control'
                    placeholder='Numero de Identificacion'
                    required
                 /> 
                 </div>
                 <div className='col-6 mb-3'>
                <label htmlFor="correo" className='mb-3'> Correo Electronico </label>
                 <input 
                     id='correo'
                    value={correo}
                    onChange= {(e) => setcorreo(e.target.value)}
                    type='email'
                    className='form-control'
                    placeholder='correo'
                    required
                 /> 
                 </div>
                 <div className='col-6 mb-3'>
                <label htmlFor='programa' className='mb-3'> Programa Academico </label>
                 <input 
                     id='programa'
                    value={programa}
                    onChange= {(e) => setprograma(e.target.value)}
                    type='text'
                    className='form-control'
                    placeholder='Programa Academico'
                    required
                 /> 
                 </div>
                
            </div>
            
                  
            <button type='submit' className='btn btn-primary' > Guardar </button>
        </form>
            </div>

        </div>
       
    </div>
  );
};

export default CrearEstudiantes;
