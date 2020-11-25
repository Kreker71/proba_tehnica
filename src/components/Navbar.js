import React from 'react';
import SVG from './SVG';

const Navbar = () => {
    return (
        <div>   
            <nav class="navbar navbar-expand-lg navbar-light p-5">
                <SVG />
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item px-3">
                            <button type="button" class="btn btn-dark btn-lg">
                                <a class="nav-link" href="#">Logare</a>
                            </button>
                        </li>
                        <li class="nav-item px-3">
                            <button type="button" class="btn btn-link">
                                <a class="nav-link" href="#">Creare cont</a>
                            </button>
                        </li>
                        <li class="nav-item px-3">
                            <button type="button" class="btn btn-link">
                                <a class="nav-link" href="#">Contact</a>
                            </button>
                        </li>
                    </ul>
                </div>
                </nav>
        </div>
    )
}

export default Navbar;