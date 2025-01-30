import React from 'react'
import "./eventsOverview.css"
function EventsOverview() {
  return (
    <div className='events-wrapper'>
            <div class="events-container">
        <h1>Event Overview</h1>
        <p>The Education First Forum welcomes you back to its second edition on January 24th, 2024, aligning with the International Day of Education continuing ECAE’s commitment to advancing education.</p>
        <p>This flagship event, inaugurated last year on January 24, 2023 under the theme “Power of Educators” brought together over 200 stakeholders to engage in human-centric design and co-creation sessions, the findings of which significantly shaped strategies to advance the UAE’s education sector in alignment with the Centennial 2071 vision.</p>
        <p>ECAE is now poised to unveil its new strategy and brand identity at this year’s event under the overarching theme: ‘From Ask to Action’. This encapsulates our journey, emphasizing the progression from initial inquiries and insights to tangible strategies and transformative actions.</p>
        <a href="/" class="download-link">DOWNLOAD 2023 REPORT</a>
        
    </div>
    <div class="events-container-two">

        <img src="/eventsOverview/Layer_1 (1).png" alt="" className='left-cornerImg' />

        <div class="text-box">
            ECAE is now poised to unveil its new strategy and brand identity at this year's event under the overarching theme: <span>‘From Ask to Action’.</span>
            This encapsulates our journey, emphasizing the progression from initial inquiries and insights to tangible strategies and transformative actions.
            <div class="highlight">505 | 264</div>
        </div>

    </div>


      
    </div>
  )
}

export default EventsOverview
