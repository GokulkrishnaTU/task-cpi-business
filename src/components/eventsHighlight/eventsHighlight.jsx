import React from 'react'
import "./eventsHighlight.css"

function EventsHighlight() {
  return (
    <div className='highlight-wrapper'>
         <div class="highlight-container">
        <div class="title">Event Highlights</div>
        <div class="subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
        
        <div class="circles">
            <div class="circle circle1">
                <strong>Immersive Experiences:</strong> Leveraging digital-first engagements, the forum will offer immersive experiences emphasizing future-readiness.
            </div>
            <div class="circle circle2">
                <strong>Brand Identity Reveal:</strong> Unveiling the updated brand persona and messaging.
            </div>
            <div class="circle circle3">
                <strong>Stakeholder Engagement:</strong> A platform to hear directly from students and educators, ensuring alignment with their needs.
            </div>
            <div class="circle circle4">
                <strong>Strategy Launch:</strong> Rollout of ECAE’s refreshed strategic direction.
            </div>
            <div class="circle circle5">
                <strong>Future Foresight:</strong> Presentation of Future Foresight findings involving students, teachers, and principals.
            </div>
        </div>
    </div>

      
    </div>
  )
}

export default EventsHighlight
