import React from 'react'

const Navbar = ({estudiantes,asignatura,clase,metodos,profesor}) => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
        <div className='container'>
            <a href='http://localhost:3000/estudiantes' className='navbar-brand'> {estudiantes}</a>
            <a href='http://localhost:3000/profesor' className='navbar-brand'> {profesor}</a>
            <a href='http://localhost:3000/asignatura' className='navbar-brand'> {asignatura}</a>
            <a href='http://localhost:3000/clase' className='navbar-brand'> {clase}</a>
            <a href='http://localhost:3000/metodos' className='navbar-brand'> {metodos}</a>
        </div>
    </nav>
  )
}

export default Navbar