import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'

const URI = "http://127.0.0.1:8000/api/profesor/";

const MostrarProfesor = () => {


    const [profesor, setProfesor] = useState([]);
    useEffect(() => {
      
    getProfesores();
  }, [])

  const getProfesores = async () => {
    const res = await axios.get(URI);
    setProfesor(res.data);
  };
  const deleteprofesor = async (id) => {
    await axios.delete(`${URI}${id}`)
    getProfesores()
  };

  return (
    <div className="container" >
      <div className="row">
        <div className="col-md-6">
          <br></br>
          <Link to={'/crear'} className="btn btn-primary center"> Crear Profesor </Link>
          {/* <Link to={'/consumir'} className="btn btn-primary center"> Consumir Api </Link> */}

          <br></br>
          <br></br>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col"> Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
              </tr>
            </thead>
            <tbody>
                {profesor.map((profe)=>(
                  <tr key={profe.id}>
                    <td>{profe.id}</td>
                    <td>{profe.nombre}</td>
                    <td>{profe.apellido}</td>
                    <td>
                    <Link to={`/editprofesor/${profe.id}`} className="btn btn-primary"> Editar Profesor </Link>{' '}
                      <button onClick={()=>deleteprofesor(profe.id)} className='btn btn-danger'> Eliminar</button>
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

export default MostrarProfesor;