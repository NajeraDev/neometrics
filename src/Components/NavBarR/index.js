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
import style from './../NavBarR/index.css'

const NavBarR = (props) => {
    return (

        <>
            <Navbar className=" dflex justify-content-between topnavbar pb-3 pr-0 pl-0" light expand="md">
                <CImg className="logo" src={Logo}></CImg>
                <Link to='/newschool'><CButton className="addbutton">Add School</CButton></Link>
            </Navbar>
        </>
    );
}

export default NavBarR;