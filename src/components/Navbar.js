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
                <div className="collapse navbar-collapse order-3 dual-collapse2" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item px-3">
                            <button type="button" class="btn btn-sm mx-1 btn-block btn-dark">Logheaza-te</button>
                        </li>
                        <li className="nav-item px-3">
                            <button type="button" class="btn btn-sm mx-1 btn-block btn-link" id="butt" style={{backgroundColor: 'white'}}>Creeaza cont</button>
                        </li>
                        <li className="nav-item px-3">
                            <button type="button" class="btn btn-sm mx-1 btn-block btn-link" style={{backgroundColor: 'white',}}>Contact</button>
                        </li>
                    </ul>
                </div>
                </nav>
        </div>
    )
}

export default Navbar;