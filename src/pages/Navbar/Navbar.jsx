import React from 'react'
import "./navbar.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input className='txtbox' type="text" placeholder='Search' />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon />English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <SettingsSuggestOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" alt='Engineer' className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar
