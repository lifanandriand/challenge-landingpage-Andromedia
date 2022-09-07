import React from 'react'
import logo from "/public/images/logo.png"
import  {Container}  from 'src/base/layout/container'

function Navbar() {
  return (
    <nav className="bg-green-army pt-6 pb-[50px]">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center">
            <div>
              <img src={logo} alt="img" />
            </div>
            <div className="ml-4 text-xl text-white font-bold"></div>
          </div>
          <div className="hidden md:flex text-[#C0CBCB]">
            <div className="mx-7">Pricing</div>
            <div className="mx-7">About</div>
            <div className="mx-7">Learn</div>
            <div className="mx-7">Corporate</div>
            <div className="mx-7">News</div>
          </div>
          <div>
            <button className="bg-green-army py-3 px-8 rounded-3xl text-white border-2">
              Contact Us
            </button>
          </div>
        </div>
      </Container>
    </nav>  
  )
}

export default Navbar