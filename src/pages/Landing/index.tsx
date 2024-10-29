import React from 'react'
import Navbar from '../../component/Navbar'
import Content from '../../component/Content'
import Footer from '../../component/Footer'

const Landing = () => {
  return (
    <div>
      <div className='absolute bg-custom-gradient'>

        </div>
        <Navbar flag = {false} />
        <Content />
        <Footer />
        
    </div>
  )
}

export default Landing
