import React from 'react'


export default function Navbar(props) {
  return (
    <div>

        <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href='/'>{props.navbar}</a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">{props.Search}</button>
    </form>
  </div>
</nav>
      

      
    </div>
  )
}
