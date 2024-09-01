import React from 'react'
import { FaFacebook,FaFontAwesomeFlag,FaGamepad,FaHome,FaSistrix, FaUsers, FaVideo } from 'react-icons/fa'
function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar_first">
            <div className="navbar_first-logo">
                <FaFacebook className='navbar-logo'/>
            </div>
            <div className="navbar_first-search">
                <input type="text" className='navbar_first-searchbar' placeholder='Facebook Search' />
                <FaSistrix className='navbar_searchIcon'/>
            </div>
        </div>
        <div className="navbar_middle">
            <span className='middleIcon'>
                <FaHome className='navbar_middle-Icons'/>
            </span>
            <span className='middleIcon'>
                <FaFontAwesomeFlag className='navbar_middle-Icons'/>
                <span className="navbar-notify">3</span>
            </span>
            <span className='middleIcon'>
                <FaVideo className='navbar_middle-Icons' />
                <span className="navbar-notify">10</span>
            </span>
            <span className='middleIcon'>
                <FaUsers className='navbar_middle-Icons'/>
            </span>
            <span className='middleIcon'>
                <FaGamepad className='navbar_middle-Icons'/>
                <span className="navbar-notify">7</span>
            </span>
        </div>
       
    </div>
  )
}

export default Navbar