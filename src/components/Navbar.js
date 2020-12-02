import React from 'react';
import SVG from './SVG';

const Navbar = () => {
    return (
        <div>   
            <nav className="navbar navbar-expand-lg navbar-light p-5">
                <SVG />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item px-3">
                            <button type="button" className="btn btn-dark btn-lg">
                                <a className="nav-link" href="#">Logare</a>
                            </button>
                        </li>
                        <li className="nav-item px-3">
                            <button type="button" className="btn btn-link">
                                <a className="nav-link" href="#">Creare cont</a>
                            </button>
                        </li>
                        <li className="nav-item px-3">
                            <button type="button" className="btn btn-link">
                                <a className="nav-link" href="#">Contact</a>
                            </button>
                        </li>
                    </ul>
                </div>
                </nav>
        </div>
    )
}

export default Navbar;