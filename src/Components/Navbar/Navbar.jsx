import React from 'react'
import './Navbar.css'
import menuIcon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import SearchIcon from '../../assets/search.png'
import UploadIcon from '../../assets/upload.png'
import MoreIcon from '../../assets/more.png'
import NotificationIcon from '../../assets/notification.png'
import ProfileIcon from '../../assets/jack.png'
import { Link } from 'react-router-dom'






const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
        <div className="nav-left flex-div">
            <img src={menuIcon} onClick={()=>{setSidebar(prev=>prev===false?true:false)}} className='menu-icon' alt="" />
            <Link to='/'><img src={logo} className='logo' alt="" /></Link>
        </div>
        <div className="nav-middle flex-div">
            <div className="search-box flex-div">
                <input type="text"  placeholder='Search'/>
                <img src={SearchIcon} alt="" />
            </div>
        
        </div>
        <div className="nav-right flex-div">
            <img src={UploadIcon} alt="" />
            <img src={MoreIcon} alt="" />
            <img src={NotificationIcon} alt="" />
            <img src={ProfileIcon} alt=""  className='user-icon'/>

        </div>
      
    </nav>
  )
}

export default Navbar
