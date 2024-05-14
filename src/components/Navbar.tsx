import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar flex justify-between relative z-10'>
      <div className='logo text-white absolute top-16 start-28'>
        <img src='./assets/images/Group 550.svg' alt='Logo' ></img>
        </div>
      <div className='contact-button bg-pink-base1 w-32 h-10 text-center text-white  font-[Medium] rounded-[29px] px-5 py-2 absolute  top-16 end-28'>
        <button>Contact</button>
        </div>
    </div>
  )
}

export default Navbar
