import React from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='lgbg'>
      <div className='row'>

        <div className='header_logo_section col-lg-3 col-md-3 col-sm-12'>
          <img className='nav_logo' src={ logo } />
        </div>
        
        <div className='col-lg-6 col-md-6 col-sm-12' >
          <Link className='nav_actions' to='/' >HOME</Link>
          <Link className='nav_actions' to='/divission' >DIVISSION</Link>
          <Link className='nav_actions' to='/about' >ABOUT US</Link>
        </div>

        <div className='col-lg-3 col-md-3 col-sm-12'>
          <Link className='nav_actions nav_reg_button' to='/register'>REGISTER</Link>
        </div>

      </div>
    </nav>
  )
}

export default Header