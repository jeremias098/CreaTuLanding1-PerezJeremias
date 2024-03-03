import React from 'react'
import "./navBar.css"
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
  return (
    <div className='contenedor_nav'>
        <div className="logo">
            <h1>Logo</h1>
        </div>

        <nav className="navBar">
            <ul className="navBar_list">
                <li className="navBar_link"><a href="#">Inicio</a></li>
                <li className="navBar_link"><a href="#">Productos</a></li>
                <li className="navBar_link"><a href="#">Nosotros</a></li>
                <CartWidget/>
            </ul>
        </nav>

    </div>
  )
}

export default NavBar