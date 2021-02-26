import {
  CCard,
  CCardBody,
  CDataTable,
  CBadge,
  CButton,
  CCollapse,
} from '@coreui/react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from 'reactstrap'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function SchoolTable() {

  useEffect(async () => {
    getData()
  }, [])  
  


  /// DONDE LA INFORMACION DE LAS ESCUELAS VA A SER GUARDADA.
  const [Schools, setSchools] = useState({})

  async function getData() {
    await fetch("https://neometrics-64670-default-rtdb.firebaseio.com/.json")
      .then(response => response.json())
      .then(json => setSchools(json))
  }

  ///////Modal
  const [deleteId, setDeleteId] = useState();
  const [modal, setModal] = useState(false);
  const toggle = (id) => {
    setModal(!modal)
    setDeleteId(id)
    console.log("El id a eliminar es: ", id)
  };
  const cancel = () => {
    setModal(!modal)
  }
  const confirmDelete = () => {
    setModal(!modal)
    deleteHandler(deleteId)
  }

  ////////////


  const [details, setDetails] = useState([])

  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }

  const deleteHandler = (id) => {
    fetch(`https://neometrics-64670-default-rtdb.firebaseio.com/${id}.json`, { method: 'DELETE' })
      .then(() => console.log('Delete successful'))
      .then(() => window.location.reload(false))
  }

  const fields = [
    { key: 'schoolName', _style: { width: '40%' } },
    { key: 'tier', _style: { width: '10%' } },
    { key: 'users', _style: { width: '20%' } },
    { key: 'status', _style: { width: '20%' } },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      sorter: false,
      filter: false
    }
  ]

  const getBadge = (status) => {
    switch (status) {
      case true: return 'success'
      case false: return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'primary'
    }
  }

  const getStatus = (status) => {
    if (status) {
      return { color: 'success', message: 'Active' }
    } else {
      return { color: 'secondary', message: 'Inactive' }
    }
  }

  let schoolItems = []

  let SchoolKeys = Object.keys(Schools)
  let SchoolValues = Object.values(Schools)
  console.log(SchoolKeys.length)

  for (const schoolId in Schools){
    let schoolObj = Schools[schoolId]
    schoolObj.id = schoolId
    schoolItems.push(schoolObj)
  }

  return (
    <CCard className="tableCard align-self-center">
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Delete School</ModalHeader>
        <ModalBody>
          Are you sure that you want to delete this School? This action cannot be undone.
        </ModalBody>
        <ModalFooter>
          <Link to='/'><Button color="danger" onClick={confirmDelete}>Yes, I want to delete</Button></Link>{' '}
          <Button color="secondary" onClick={cancel}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <CDataTable
        items={schoolItems}
        fields={fields}
        columnFilter

        footer
        itemsPerPage={10}
        hover
        responsive
        sorter
        pagination
        scopedSlots={{
          'status':
            (item) => {
              let status = getStatus(item.status)
              return (
                <td>
                  <CBadge color={status.color}>
                    {status.message}
                  </CBadge>
                </td>
              )
            },
          'show_details':
            (item, index) => {
              return (
                <td className="py-2">
                  <CButton
                    color="info"
                    shape="square"
                    size="sm"
                    onClick={() => { toggleDetails(index) }}>
                    {details.includes(index) ? 'Hide' : 'Show'}
                  </CButton>
                </td>
              )
            },
          'details':
            (item, index) => {
              return (
                <CCollapse show={details.includes(index)}>
                  <CCardBody>
                    <p className="text-muted">User since: {item.registred}</p>
                    <p> Address: {item.address}, {item.city}, {item.country} </p>
                    <p> Contact: {item.contact} </p>
                    <p> Credit Card Info: {item.creditCard} </p>
                    <p> Phone Number: {item.phone}</p>
                    <p>ID: {item.id}</p>
                    <Link to={`/editschool/?schoolid=${item.id}`}>
                      <CButton size="sm" color="info" >
                        Edit School
                  </CButton>
                    </Link>
                    <CButton size="sm" color="danger" className="ml-1" onClick={() => { toggle(item.id) }}>
                      Delete
                  </CButton>
                  </CCardBody>
                </CCollapse>
              )
            }
        }}
      />
    </CCard>
  )

}
export default SchoolTable
