import React from 'react'
import { Bar, Nav, NavIcon, NavImg, NavLink } from './NavBar/Navbarstyle'
import navimg from '../images/logo.png'


const Navbar = ({toggle}) => {
    return (
        <Nav>
        <NavLink to='/'>
            <NavImg src={navimg} /></NavLink>
        <NavIcon onClick={toggle}>
            <p>Menu</p>
            <Bar />
        </NavIcon>
        </Nav>
    )
}

export default Navbar
