import React from 'react'
import {
  FaBasketballBall,
  FaBrain,
  FaLeaf,
  FaClock,
  FaUsers,
  FaFire
} from "react-icons/fa";
import img from "../assets/Frame 19.png"
import img1 from "../assets/section.png"
import "./Ciemdi.css";
const Ciemdi = () => {
  return (
    <>


    <section className="why">
     <div className='titi_why'>
         <span className="caption">CAPTION</span>
      <h2 className="title">Why are we here?</h2>
     </div>

      <div className="why-wrapper">
        {/* LEFT */}
        <div className="why-grid">
          <div className="item">
            <FaBasketballBall className="icon" />
            <h4>GET SKILLED</h4>
            <p>
              With our high-level coaches and exceptional drills, we take skill
              development seriously and prepare athletes for elite level play.
            </p>
          </div>

          <div className="item">
            <FaBrain className="icon" />
            <h4>BE MENTALLY STRONG</h4>
            <p>
              Basketball requires more than athleticism. We develop strong,
              confident, and focused minds.
            </p>
          </div>

          <div className="item">
            <FaLeaf className="icon" />
            <h4>STAY HEALTHY</h4>
            <p>
              We promote healthy lifestyles on and off the court through
              conditioning and education.
            </p>
          </div>

          <div className="item">
            <FaClock className="icon" />
            <h4>STAY ORGANIZED</h4>
            <p>
              Time management and discipline are essential. School always
              comes first.
            </p>
          </div>

          <div className="item">
            <FaUsers className="icon" />
            <h4>BE A TEAM PLAYER</h4>
            <p>
              Teamwork builds trust and leadership. Athletes learn to rely on
              each other.
            </p>
          </div>

          <div className="item">
            <FaFire className="icon" />
            <h4>GET COMPETITIVE</h4>
            <p>
              We create competitive environments that help athletes grow and
              improve their game.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="why-image"></div>
      </div>
    </section>
      <div>
        <img id='igem' src={img1} alt="" />
      </div>
  




    </>
  )
}

export default Ciemdi