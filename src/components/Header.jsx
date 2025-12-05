import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Header(){
return (
<header className="header">
<div className="brand">BookBrowse</div>
<nav className="nav">
<NavLink to="/" end className={({isActive})=> isActive? 'active' : ''}>Home</NavLink>
<NavLink to="/about" className={({isActive})=> isActive? 'active' : ''}>About</NavLink>
<NavLink to="/login" className={({isActive})=> isActive? 'active' : ''}>Login</NavLink>
<NavLink to="/register" className={({isActive})=> isActive? 'active' : ''}>Register</NavLink>
</nav>
</header>
)
}