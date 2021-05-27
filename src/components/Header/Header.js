import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

let Header;
export default Header=(props)=> {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className={"container-fluid navDiv"}>
                    <a class="navbar-brand" href="/">Tasks</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" exact to="/">Home</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link active" exact to="/add">Add-Task</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        
    )
}
