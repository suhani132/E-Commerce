import React from 'react'
import Navbar from './components/navbar/Navbar'
import Admin from './pages/admin/Admin'

const App = () => {
  return (
    <div className=' container mx-auto '>
      <Navbar/>
      <Admin/>
    </div>
  )
}

export default App
