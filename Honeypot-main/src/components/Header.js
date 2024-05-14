
import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <header>
        <div className='header-main'>
            <div className="header-logo">
                <Link to="/dashboard" className='logo'>Honeypot</Link>
            </div>
            <div className="header-menu">
                <div><Link to="/dashboard" className='header-menu-com'>Dashboard</Link></div>
                <div><Link to="/token-generator" className='header-menu-com'>Token Generator</Link></div>
                <div><Link to="/token-history" className='header-menu-com'>Token History</Link></div>
                {/* <div><Link to="/contact" className='header-menu-com'>Contact Us</Link></div> */}
                <div><Link to="/" className='header-menu-com'>Logout</Link></div>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Header
