import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-secondary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Counter">Counter</Link>
        </li>
       <li className="nav-item">
          <Link className="nav-link active" to="/GrandParent">Grand Parent</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/BasicCard">Basic Card</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/NoteApp">NoteApp</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2 bg-white text-dark" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-info" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar