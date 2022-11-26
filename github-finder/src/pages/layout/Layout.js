import React from 'react'
import MyAlert from '../../components/myalert/MyAlert'
import NavBar from '../../components/navbar/NavBar'
const Layout = ({alert, show, setShow}) => {
  return (
    <>
        <NavBar />
        <MyAlert alert={alert} show={show} setShow={setShow} />
    </>
  )
}

export default Layout