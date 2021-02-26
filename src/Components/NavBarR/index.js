import { CButton, CImg } from '@coreui/react';
import React, { useState } from 'react';
import {
    Navbar,
    Col,
    Container,
    Row
} from 'reactstrap';
import Logo from '../../Images/logo.png'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'


const NavBarR = (props) => {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const { history } = useHistory()


    async function handleLogout() {
        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Cannot Log Out')
        }


    }

    return (

        <>
            <Navbar className="tablenavbar dlfex justify-content-between" light expand="md">
                <CImg className="navlogo" src={Logo}></CImg>
                <div>
                    <Link to='/newschool'><CButton className="addbutton mr-3">Add School</CButton></Link>
                    <CButton color="danger" onClick={handleLogout}>Sign Out</CButton>
                </div>
            </Navbar>
        </>
    );
}

export default NavBarR;