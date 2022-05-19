import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate , useParams} from 'react-router-dom';

const URI = "http://127.0.0.1:8000/api/estudiantes/";

const EditarEstudiante= () => {
   
    const [nombre, setnombre] = useState('')
    const [apellido, setapellido] = useState('')
    const [numero, setnumero] = useState("");
    const [correo, setcorreo] = useState("");
    const [programa, setprograma] = useState("");
    const navigate = useNavigate()
    const {id} = useParams()

        const update = async (e) =>{
            e.preventDefault()
            await axios.put(URI+ id, {
                id:e.id,
                nombre: nombre,
                apellido: apellido,
                numero: numero,
                correo: correo,
                programa: programa,
            })
            navigate('/')

        }

   useEffect(() => {
    getEstudiantesById()
},[]);

const getEstudiantesById=  async (e) => {
   const res =  await axios.get(URI+id)
    setnombre (res.data.nombre)
    setapellido (res.data.apellido)
    setnumero(res.data.numero)
    setcorreo(res.data.correo)
    setprograma(res.data.programa)

}

return(
    <div className="container" >
        <div className="row">
            <div className="col-8">
            <br></br>
            <h1 style={{textAlign:'center'}}> Editar Estudiante </h1>
            
        <form onSubmit={update.id} >
            <div>
            <div className='col-6 mb-4'>
                <label className="mb-3"> Nombre </label>
                 <input 
                    value={nombre}
                    id='nombre'
                    onChange= {(e) => setnombre(e.target.value)}
                    type='text'
                    className='form-control'
                    placeholder='nombre'
                    required
                   
                 /> 
                 </div>
                 <div className='col-6 mb-3'>
                <label className="mb-3"> Apellido </label>
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
                <label className="mb-3"> Numero de Identificacion </label>
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
                <label  className="mb-3"> Correo Electronico </label>
                 <input 
                    id='correo'
                    name='correo'
                    value={correo}
                    onChange= {(e) => setcorreo(e.target.value)}
                    type='email'
                    className='form-control'
                    placeholder='correo'
                    required
                    
                 /> 
                 </div>
                 <div className='col-6 mb-3'>
                <label className="mb-3"> Programa Academico </label>
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
            
                  
            <button type='submit' className='btn btn-primary' > Editar Estudiante </button>
        </form>
            </div>

        </div>
       
    </div>
)


}

export default EditarEstudiante;