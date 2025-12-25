import React from 'react'
import "./Home.css"
import img from "../assets/paskitbol.png"
const Home = () => {
  return (
    <>

    <section className="programs">
      <span className="caption">CAPTION</span>
      <h2 className="title">Our Programs</h2>

      <div className="cards">
        <div className="card">
          <div className="image placeholder"></div>
          <div className="content">
            <span className="age">Ages 4 - 13</span>
            <h3>2023 GTA Mavericks Summer Camps</h3>
            <p>
              GTA Mavericks Basketball Association is passionately dedicated
              to inspiring and empowering players and athletes, both male and female.
            </p>
            <button className="btn">
              More Info <span>→</span>
            </button>
          </div>
        </div>

        <div className="card">
          <div className="image real"></div>
          <div className="content">
            <span className="age">Ages 13 - 18</span>
            <h3>Mavericks Elite Summer Training Camp 2023</h3>
            <p>
              Seize the chance to unlock your full potential with the Mavericks
              Elite Basketball Academy, and witness as a passion ignites a life-changing journey!
            </p>
            <button className="btn">
              More Info <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>



    </>
  )
}

export default Home