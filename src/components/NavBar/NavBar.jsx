import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
  return (
    <div className='contenedor_nav'>
        <div className="logo">
            <h1>Logo</h1>
        </div>

        <nav className="navBar">
            <ul className="navBar_list">
                <li className="navBar_link">Inicio</li>
                <li className="navBar_link">Productos</li>
                <li className="navBar_link">Nosotros</li>
                <CartWidget/>
            </ul>
        </nav>

    </div>
  )
}

export default NavBar