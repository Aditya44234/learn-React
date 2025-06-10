import React from 'react'


export default function Navbar(props) {

  let cond=true;

  const toggleDarkMode=(props)=>{
    if(cond===true){
      document.body.style.backgroundColor='rgba(0, 0, 0)';
      document.body.style.color='green';
      cond=false;
      
    }else{
      document.body.style.backgroundColor='white';
      document.body.style.color='rgb(0, 0, 0)';
      cond=true;

    }
  }




  return (
    <div>

  <nav className="navbar navbar-expand-lg bg-body-tertiary" >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About Us</a>
            </li>

          </ul>


          

        </div>

        {/* Dark mode Button */}
          <div  className="form-check form-switch text-dark "  onClick={toggleDarkMode}>

            <input  type="checkbox" className="form-check-input" id='flexSwitchCheckDefault' />
            <label htmlFor="flexSwitchCheckDefault" className='form-check-label' >Enable DarkMode</label>

          </div>

      </div>
  </nav>
      

      
    </div>
  )
}
