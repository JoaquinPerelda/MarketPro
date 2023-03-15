import React from 'react';
import CartWidget from './CartWidget';
// import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        // <div className='container'>s        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand"  >MarketPro</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page"  >Inicio</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item">Deportes</a></li>
                                <li><a className="dropdown-item">Electrónica</a></li>
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
        // </div>
    );
};

export default NavBar;