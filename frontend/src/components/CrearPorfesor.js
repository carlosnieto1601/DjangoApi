import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://127.0.0.1:8000/api/profesor/";

const CrearProfesor = () => {
  
  const [nombre, setnombre] = useState("");
  const [apellido, setapellido] = useState("");
  const navigate = useNavigate();

  // procedimiento de guardar

  const guardar = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      nombre: nombre,
      apellido: apellido,
    });
    navigate("/profesor");
  };

  return (
    <div className="container">
        <div className="row">
            <div className="col-11">
            <h1> Crear Profesor </h1>
            
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
                
            </div>
            <button type='submit' className='btn btn-primary' > Guardar </button>
            {"     "},{"  "}
            <a name="" id="" class="btn btn-danger" href='http://localhost:3000/profesor'>Cancelar</a>

        </form>
            </div>

        </div>
       
    </div>
  );
};

export default CrearProfesor;
