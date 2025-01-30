import React from 'react'
import "./hero.css"
import MenuAppBar from '../header/herader'

function Hero() {
  return (
    <div className='hero-wrapper'>
        <MenuAppBar className="nav"/>
    <div class="container">

        <div className="first-section">

        <h1 class="arabic">التعليم أولاً</h1>
        <h1>EDUCATION FIRST</h1>
        </div>
        <p class="subheading">FROM ASK TO ACTION</p>
        <div class="details">
            <div>
                <span>
                    <img src="/hero/Vector (1).png" alt="" className='iconsImg' />
                    </span> <span>January 24, 2023</span>
            </div>
            <div>
                <span> <img src="/hero/clock-history.png" alt="" className='iconsImg' /> </span> <span>10:00 AM - 12:00 PM</span>
            </div>
            <div>
                <span> <img src="/hero/calendar2-week.png" alt="" className='iconsImg' /> </span> <span>Marina Hall, ADNEC</span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero
