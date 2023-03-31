
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import '../NavBar/navBar.css'
import { Link, NavLink } from 'react-router-dom'
import { IoCaretForward } from "react-icons/io5";
// import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/' className='logo'>MarketPro</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* <a className="nav-link active" aria-current="page"  >Inicio</a> */}
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item">Deportes</a></li>                                
                                <li className='dropend'>
                                    <a className="nav-item nav-link-item dropdown-item" href="#">
                                        Electrónica
                                        <IoCaretForward className='icon-header' />
                                    </a>
                                    <ul className="dropdown-menu dropdown-submenu">
                                        <li>
                                            <NavLink
                                                to="/category/celular"
                                                className="nav-link-item dropdown-item"
                                            >

                                                Celulares
                                            </NavLink>
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            <NavLink
                                                to="/category/tv"
                                                className="nav-link-item dropdown-item"
                                            >

                                                TV
                                            </NavLink>
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            <NavLink
                                                to="/category/tablet"
                                                className="nav-link-item dropdown-item"
                                            >

                                                Tablets
                                            </NavLink>
                                        </li>


                                    </ul>
                                </li>
                                <li><a className="dropdown-item">Indumentaria</a></li>
                                <li><a className="dropdown-item">Hogar</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item">Todos los productos</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;