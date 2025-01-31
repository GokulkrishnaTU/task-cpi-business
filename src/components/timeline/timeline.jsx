import React, { useEffect, useState } from 'react';
import './timeline.css';

const Timeline = () => {
  // State to determine if the screen is mobile (width <= 768px)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Function to handle resizing the window and setting the mobile state
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Adding event listener for window resize to adjust mobile state
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Desktop-specific events array
  const desktopEvents = [
    { start: "9:30 am", end: "10:00 am", title: "Registration, Networking" },
    { start: "10:00 am", end: "11:00 am", title: "Immersive Experiences Walk Through" },
    { start: "11:00 am", end: "11:10 am", title: "Opening Ceremony" },
    { 
      start: "11:10 am", 
      end: "11:20 am", 
      title: "Minister of State for General Education & Advanced Technology\nChairwoman of the College’s Board of Trustees",
      boldDescDesktop: "Keynote Address\nHer Excellency Sarah bint Yousef Al Amiri",
    },
    { start: "11:20 am", end: "11:25 am", title: "A Student’s View Amna Al Mansoori, Grade 12" },
    { start: "11:25 am", end: "11:40 am", title: "Logo Reveal" },
    { start: "11:40 am", end: "11:50 am", title: "Intermission" },
    { start: "11:50 am", end: "12:20 pm", boldDescDesktop: "Presentation", title: "Joint Foresight Research Study with Cambridge University" },
    { start: "12:20 pm", end: "12:30 pm", title: "Partnership Awards" },
    { start: "12:30 pm", end: "12:35 pm", title: "Closing Remarks" },
  ];

  // Mobile-specific events array
  const mobileEvents = [
    { start: "10:00 am", end: "11:00 am", title: "Registration, Networking, and ", boldDesc: "Immersive Experiences" },
    { start: "11:00 am", end: "11:05 am", title: "Opening Ceremony" },
    { start: "11:05 am", end: "11:10 am", title: "Education First & New Logo Reveal Video" },
    { 
      start: "11:10 am", 
      end: "11:20 am", 
      title: "Keynote Address",
      boldDesc: "H.E. Sarah Yousef Al Amiri",
      description: "Minister of State for Public Education & Advanced Technology"
    },
    { start: "11:20 am", end: "11:25 am", title: "A Student’s View: Asma Al Mansoori, Grade 12" },
    { start: "11:25 am", end: "11:30 am", title: "Intermission" },
    { start: "11:30 am", end: "12:00 pm", title: "Presentation", description: "Joint Foresight Research Study with Cambridge University" },
    { start: "12:00 pm", end: "12:10 pm", title: "Partnership Awards" },
    { start: "12:10 pm", end: "12:15 pm", title: "Closing Remarks" },
  ];

  // Choose events based on mobile or desktop view
  const events = isMobile ? mobileEvents : desktopEvents;

  return (
    <div className="timeline-wrapper">
      <div className="timeline-container">
        <h1 className="timeline-heading">Event Agenda</h1>

        <div className="timeline-wrapper">
          {/* Vertical line for timeline */}
          <div className="timeline-vertical-line"></div>

          {/* Map over events and display each item */}
          {events.map((event, index) => (
            <div key={index} className="event-item">
              {/* Dot indicating the event */}
              <div className="dot-container">
                <div className="dot"></div>
              </div>

              <div className="event-content">
                {/* Displaying time section */}
                <div className="time-section">
                  {event.start}
                  {event.end && <span>{event.end}</span>}
                </div>

                {/* Conditionally render bold description for desktop */}
                {event.boldDescDesktop && (
                  <p className="event-boldDescDesktop">{event.boldDescDesktop}</p>
                )}

                {/* Event title */}
                <h3 className="event-title">{event.title}</h3>

                {/* Conditionally render bold description for mobile */}
                {event.boldDesc && (
                  <p className="event-boldDesc">{event.boldDesc}</p>
                )}

                {/* Speaker information */}
                {event.speaker && (
                  <p className="event-speaker">{event.speaker}</p>
                )}

                {/* Event description */}
                {event.description && (
                  <p className="event-description">{event.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right icon for additional design or decoration */}
        <img src="/eventsOverview/Layer_1 (2).png" alt="" className="timelineRightIcon" />
      </div>

      {/* Left icon for additional design or decoration */}
      <img src="/eventsOverview/Layer_1 (3).png" alt="" className="timelineLeftIcon" />
    </div>
  );
};

export default Timeline;
