import React from 'react'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import PersonIcon from '@mui/icons-material/Person';
import InboxIcon from '@mui/icons-material/Inbox';
import SettingsIcon from '@mui/icons-material/Settings';
import './Navbar.css'

function Navbar() {
  return (
    <div className="navBarBox">
        <div className="navBarLeft">
            <span className="logo">
                Facebook
            </span>
        </div>
        <div className="navBarCenter">
           <div className='searchIcon'> <ManageSearchIcon/></div>
           <div> <input placeholder='Search For your friend' className='searchInput'/></div>

        </div>
        <div className="navBarRight">
           <div className='navBarLink'>
            <span className="navBarLink">Home</span>
            <span className="navBraLink">Profile</span>
        </div>
        <div className='navBarIcons'>
            <div className="navBarIcon">
                <PersonIcon/> 
                <span className="iconTag">3</span>
            </div>
            <div className="navBarIcon">
                <InboxIcon/>
                <span className="iconTag">4</span>
            </div>
            <div className="navBarIcon">
                <SettingsIcon/>
                <span className="iconTag">1</span>
            </div>
            <div className="profilePic">
                <img src='../../public/images/dp.jpg'  alt='profileImage' className='proifileImg'></img>
            </div>

        </div>

        </div>
    </div>
  )
}

export default Navbar
