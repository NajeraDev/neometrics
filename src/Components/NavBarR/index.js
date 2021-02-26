import { CButton, CImg } from '@coreui/react';
import React, { useState } from 'react';
import {
    Navbar,
    Col,
    Container,
    Row
} from 'reactstrap';
import Logo from '../../Images/logo.png'
import { Link } from 'react-router-dom'



const NavBarR = (props) => {
    return (

        <>
            <Navbar className="tablenavbar dlfex justify-content-between" light expand="md">
                <CImg className="navlogo" src={Logo}></CImg>
                <Link to='/newschool'><CButton className="addbutton">Add School</CButton></Link>
            </Navbar>
        </>
    );
}

export default NavBarR;