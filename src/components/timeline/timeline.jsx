import React from 'react';
import './timeline.css';

const Timeline = () => {
  const events = [
    { start: '9:30 AM', end: '10:00 AM', title: 'Registration, Networking' },
    { start: '10:00 AM', end: '11:00 AM', title: 'Immersive Experiences Walk Through' },
    { start: '11:00 AM', end: '11:10 AM', title: 'Opening Ceremony' },
    { 
      start: '11:10 AM', 
      end: '11:20 AM', 
      title: 'Keynote Address',
      description: 'Her Excellency Sarah bint Yousef Al Amiri\nMember of State Research Institute Advanced Technology\nChancement of the College Board of Trustees'
    },
    { start: '11:20 AM', end: '11:25 AM', title: 'A Student’s View', speaker: 'Anna Al Mansoori, Grade 12' },
    { start: '11:25 AM', end: '11:40 AM', title: 'Logo Reveal' },
    { start: '11:40 AM', end: '11:50 AM', title: 'Intermission' },
    { start: '11:50 AM', end: '12:20 PM', title: 'Presentation', description: 'Joint Foresight Research Study with Cambridge University' },
    { start: '12:20 PM', end: '12:30 PM', title: 'Presentation' },
    { start: '12:20 PM', end: '12:30 PM', title: 'Presentation' },
  ];

  return (
    <div className="timeline-wrapper">
    <div className="timeline-container">
      <h1 className="timeline-heading">Event Agenda</h1>
      
      <div className="timeline-wrapper">
        <div className="timeline-vertical-line"></div>

        {events.map((event, index) => (
          <div key={index} className="event-item">
            <div className="time-section">
              {event.start}
              {event.end && <span>{event.end}</span>}
            </div>

            <div className="dot-container">
              <div className="dot"></div>
            </div>

            <div className="event-content">
              <h3 className="event-title">{event.title}</h3>
              {event.speaker && (
                <p className="event-speaker">{event.speaker}</p>
              )}
              {event.description && (
                <p className="event-description">{event.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Timeline;