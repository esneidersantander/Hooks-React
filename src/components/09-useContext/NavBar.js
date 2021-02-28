import React from 'react'
import { NavLink} from 'react-router-dom'
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink activeClassName="active" exact to="/" className="nav-item nav-link active" >Home <span className="sr-only">(current)</span></NavLink>
                    <NavLink activeClassName="active" exact to="/about" className="nav-item nav-link" >About</NavLink>
                    <NavLink activeClassName="active" exact to="/login" className="nav-item nav-link" >Login</NavLink>
                </div>
            </div>
        </nav>
    )
}
