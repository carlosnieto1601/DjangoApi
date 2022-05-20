
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'

const URI = "http://127.0.0.1:8000/api/estudiantes/";

const MostrarEstudiantes = () => {


    const [estudiantes, setEstudiantes] = useState([]);
    useEffect(() => {
      
    getEstudiantes();
  }, [])

  const getEstudiantes = async () => {
    const res = await axios.get(URI);
    setEstudiantes(res.data);
  };
  const deleteestudiantes = async (id) => {
    await axios.delete(`${URI}${id}${"/"}`)
    getEstudiantes()
  };

  return (
    <div className="container" >
      <div className="row">
        <div className="col-md-50">
          <br></br>
          <Link to={'/create'} className="btn btn-primary center"> Crear Estudiante </Link>
          {/* <Link to={'/consumir'} className="btn btn-primary center"> Consumir Api </Link> */}

          <br></br>
          <br></br>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col"> Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Numero de Identificacion</th>
                <th scope="col">Correo</th>
                <th scope="col">Programa Academico</th>
                <th scope="col">Accion</th>
              </tr>
            </thead>
            <tbody>
                {estudiantes.map((estudiante)=>(
                  <tr key={estudiante.id}>
                    <td>{estudiante.id}</td>
                    <td>{estudiante.nombre}</td>
                    <td>{estudiante.apellido}</td>
                    <td>{estudiante.numero}</td>
                    <td>{estudiante.correo}</td>
                    <td>{estudiante.programa}</td>
                    <td>
                      
                    <Link to={`/edit/${estudiante.id}`} className="btn btn-primary"> Editar Paciente </Link>{' '}
                      <button onClick={()=>deleteestudiantes(estudiante.id)} className='btn btn-danger'> Eliminar</button>
                    </td>
                  </tr>

                ))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MostrarEstudiantes;