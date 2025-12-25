import React from 'react'
import img from "../assets/Mask.png"
import img2 from "../assets/button.png"
import img3 from  "../assets/button1.png"
import img4 from  "../assets/User.png"
import img5 from  "../assets/Group.png"
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
    <div>
      <header>
        <nav>
          <div className=''>
            <img src={img5} alt="" />
          </div>
          <ul>
            <li><a className='header_list' href="/">Home</a></li>
            <li><a className='header_list' href="/">About Us</a></li>
            <li><a className='header_list' href="/">Blog</a></li>
            <li><a className='header_list' href="/">Our Sponsors</a></li>
            <li><a className='header_list' href="/">Rep Basketball</a></li>
            <li><a className='header_list' href="/">House Leagues</a></li>
          </ul>
          <div className='header_img'>
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />



          </div>
        </nav>
        <div className='header_meni'>
          <h1>BE BETTER THAN YESTERDAY!.</h1>
<p className='text_horo'>Empowering young men and women to become the best versions of themselves
Basketball for all ages in Vaughan, Maple, Thornhill and Richmond Hill</p>
<div className='header_btn'>
  <button className='butrn' >Sign Up Now</button>
  <button className='butrn1'>Contact Us</button>
</div>
        </div>
      </header>

      </div> 
    </>
  )
}

export default Navbar