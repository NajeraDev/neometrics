import React, { useState, useEffect } from 'react';

import {
    CCol,
    CCard,
    CContainer,
    CRow,
    CCardHeader,
    CCardBody,
    CFormText,
    CLabel,
    CInput,
    CForm,
    CFormGroup,
    CCardFooter,
    CButton,
    CModal,
    CModalHeader,
    CModalBody,
    CModalFooter,
    CAlert,
    CSwitch
} from '@coreui/react'
import Axios from 'axios'
import '../EditSchool/index.css'
import '../../App.css'
import { Link } from 'react-router-dom';


function EditSchool() {

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        const postId = urlParams.get('schoolid')
        console.log('se traen cosas')
        fetch(`https://neometrics-64670-default-rtdb.firebaseio.com/${postId}.json`)
            .then(response => response.json())
            .then(json => {
                setSchoolData(json)
            })
    }, [])
    const [schoolData, setSchoolData] = useState({})

    let { address, city, contact, country, creditCard, phone, registred, schoolName, status, tier, users } = schoolData
    
    const [modal, setModal] = useState(false);
    const [show, setshow] = useState(false)
    
    const cSwitch = (state)=>{
        if(state == "Activo"){
            return(
        <CSwitch  name="status" color={"primary"} defaultChecked onClick={switchHandler}/>
            )}
            else{
                return(
        <CSwitch  name="status" color={"primary"} onClick={switchHandler}/>            
                )
            }
    }

    const changeHandler = (event) => {
        setSchoolData({ ...schoolData, [event.target.name]: event.target.value })
    }
    const switchHandler = (event) => {
        let value = event.target.checked ? "Activo" : "Inactivo"
        setSchoolData({ ...schoolData, [event.target.name]: value })
        
    }

    const toggleSave = () => {
        console.log("time to update")
        setModal(!modal)

        const urlParams = new URLSearchParams(window.location.search)
        const postId = urlParams.get('schoolid')
        Axios.put(`https://neometrics-64670-default-rtdb.firebaseio.com/${postId}.json`, schoolData)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setshow(true)
            })
    }

    const toggle = () => {
        setModal(!modal);
    }

    return (

        <CContainer className="smallContainer">
            <CRow>
                <CCol>
                    <>
                        <CModal show={modal} onClose={toggle} color="primary">
                            <CModalHeader closeButton>Save Changes?</CModalHeader>
                            <CModalBody>
                                This action cannot be undone
                             </CModalBody>
                            <CModalFooter>
                                <CButton color="primary" onClick={toggleSave} >Yes, save</CButton>
                                <CButton
                                    color="secondary"
                                    onClick={toggle}
                                >Cancel</CButton>
                            </CModalFooter>
                        </CModal>
                    </>
                    <CCard>
                        <CCardHeader>
                            School Edition
                        </CCardHeader>
                        <CForm action="" className="p-3" method="post">
                            <CFormGroup>
                                <CLabel htmlFor="nf-email">School Name</CLabel>
                                <CInput
                                    name="schoolName"
                                    type="string"
                                    defaultValue={schoolName}
                                    onChange={changeHandler}
                                />

                            </CFormGroup>
                            <CFormGroup>
                                <CLabel htmlFor="nf-password">Registred On</CLabel>
                                <CInput
                                    name="registred"
                                    type="date"
                                    onChange={changeHandler}

                                />
                                <CFormText className="help-block">{`The original register date was on: ${registred}`}</CFormText>
                            </CFormGroup>

                            <CFormGroup>
                                <CLabel htmlFor="nf-password">Credit Card</CLabel>
                                <CInput
                                    name="creditCard"
                                    type="password"
                                    defaultValue={creditCard}
                                    maxLength="16"
                                    onChange={changeHandler}
                                />
                            </CFormGroup>
                            <CFormGroup>
                                <CLabel htmlFor="nf-password">Tier</CLabel>
                                <CInput
                                    name="tier"
                                    type="number"
                                    defaultValue={tier}
                                    min="1"
                                    max="3"
                                    onChange={changeHandler}
                                />

                            </CFormGroup>
                            <CFormGroup>
                                <CLabel htmlFor="nf-password">Ammount of Users</CLabel>
                                <CInput
                                    name="users"
                                    defaultValue={users}
                                    type="number"
                                    min="1"
                                    onChange={changeHandler}

                                />
                            </CFormGroup>
                            <strong className="mb-3">Status</strong>
                            <CFormGroup>

                                <CLabel for="Active" className=" mr-3 mt-3">Active
                                {cSwitch(status)}</CLabel>
                                <CFormText>{`El valor actual es: ${status}`}</CFormText>

                            </CFormGroup>
                            <CFormGroup>
                                <CLabel htmlFor="nf-password">Phone</CLabel>
                                <CInput
                                    defaultValue={phone}
                                    type="tel"
                                    name="phone"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    onChange={changeHandler}
                                />
                                <CFormText className="help-block">Format: 123-456-5678</CFormText>
                            </CFormGroup>
                            <CFormGroup>
                                <CLabel htmlFor="nf-password">Contact Name</CLabel>
                                <CInput
                                    name="contact"
                                    type="string"
                                    defaultValue={contact}
                                    onChange={changeHandler}
                                />
                                <CFormText className="help-block">Please enter Full Name</CFormText>
                            </CFormGroup>
                            <CFormGroup>
                                <CLabel htmlFor="nf-password">Address</CLabel>
                                <CInput
                                    name="address"
                                    type="string"
                                    defaultValue={address}
                                    onChange={changeHandler}
                                />
                                <CFormText className="help-block">Please enter street and number</CFormText>
                            </CFormGroup>
                            <CFormGroup>
                                <CLabel htmlFor="nf-password">City</CLabel>
                                <CInput
                                    name="city"
                                    type="string"
                                    defaultValue={city}
                                    onChange={changeHandler}
                                />
                            </CFormGroup>
                            <CFormGroup>
                                <CLabel htmlFor="nf-password">Country</CLabel>
                                <CInput
                                    name="country"
                                    type="string"
                                    defaultValue={country}
                                    onChange={changeHandler}
                                />
                            </CFormGroup>
                        </CForm>

                        <CCardFooter>
                            <CButton
                                onClick={toggle}
                                className="mr-1"
                                color="success"
                            >Save</CButton>
                            <Link to='/'><CButton color="danger">Cancel</CButton></Link>
                        </CCardFooter>
                    </CCard>
                    <CAlert color="success" show={show} closeButton > School Updated Successfully! </CAlert>
                </CCol>

            </CRow>
        </CContainer >
    )

}

export default EditSchool;