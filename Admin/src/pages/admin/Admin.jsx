import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom';
import Addproduct from '../../components/addproduct/Addproduct';
import Listproduct from '../../components/listproduct/Listproduct';

const Admin = () => {
  return (
    <div className='Admin container mx-auto items-end flex'>
        <Sidebar/>
        <Routes>
          <Route path='/addproduct' element={<Addproduct/>}/>
          <Route path='/listproduct' element={<Listproduct/>}/>
        
        </Routes>
    </div> 
  )
}

export default Admin
