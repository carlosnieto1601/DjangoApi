import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate , useParams} from 'react-router-dom';


const URI = 'http://127.0.0.1:8000/api/profesor/';

const EditarProfesor= () => {
   
    const [nombre, setnombre] = useState('');
    const [apellido, setapellido] = useState('');
    const navigate = useNavigate()
    const {id} = useParams()

        const update = async (e) =>{
            e.preventDefault()
            await axios.put(URI+ id + "/", {
                id:e.id,
                nombre: nombre,
                apellido: apellido,
            })
            navigate('/profesor')

        }

   useEffect(() => {
    getProfesorById()
},[]);

const getProfesorById=  async (e) => {
   const res =  await axios.get(URI+id)
    setnombre (res.data.nombre)
    setapellido (res.data.apellido)
    
}

return(
    <div className="container" >
        <div className="row">
            <div className="col-8">
            <br></br>
            <h1 style={{textAlign:'center'}}> Editar Profesor </h1>
            
        <form onSubmit={update} >
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
                
            </div>
            
                  
            <button type='submit' className='btn btn-primary' > Editar Profesor </button>
            {"     "},{"  "}
            <a name="" id="" class="btn btn-danger" href='http://localhost:3000/profesor'>Cancelar</a>
            
        </form>
            </div>

        </div>
       
    </div>
)


}

export default EditarProfesor;