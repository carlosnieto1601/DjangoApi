import React from 'react'

const Navbar = ({brand,api,asignatura,clase}) => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
        <div className='container'>
            <a href='http://localhost:3000' className='navbar-brand'> {brand}</a>
            <a href='http://localhost:3000/consumir' className='navbar-brand'> {api}</a>
            <a href='http://localhost:3000/asignatura' className='navbar-brand'> {asignatura}</a>
            <a href='http://localhost:3000/clase' className='navbar-brand'> {clase}</a>
        </div>
    </nav>
  )
}

export default Navbar