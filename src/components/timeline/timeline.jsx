import React, { useEffect, useState } from 'react';
import './timeline.css';

const Timeline = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    { start: "11:20 am", end: "11:25 am", title: "A Student’s View Amna Al Mansoori, Grade 12",  },
    { start: "11:25 am", end: "11:40 am", title: "Logo Reveal" },
    { start: "11:40 am", end: "11:50 am", title: "Intermission" },
    { start: "11:50 am", end: "12:20 pm", boldDescDesktop: "Presentation", title: "Joint Foresight Research Study with Cambridge University" },
    { start: "12:20 pm", end: "12:30 pm", title: "Partnership Awards" },
    { start: "12:30 pm", end: "12:35 pm", title: "Closing Remarks" },
  ];

  const mobileEvents = [
    { start: "10:00 am", end: "11:00 am", title: "Registration, Networking, and " ,boldDesc :"Immersive Experiences"},
    { start: "11:00 am", end: "11:05 am", title: "Opening Ceremony" },
    { start: "11:05 am", end: "11:10 am", title: "Education First & New Logo Reveal Video" },
    { 
      start: "11:10 am", 
      end: "11:20 am", 
      title: "Keynote Address",

      boldDesc:"H.E. Sarah Yousef Al Amiri",
      description: "Minister of State for Public Education & Advanced Technology"
    },
    { start: "11:20 am", end: "11:25 am", title: "A Student’s View: Asma Al Mansoori, Grade 12",  },
    { start: "11:25 am", end: "11:30 am", title: "Intermission" },
    { start: "11:30 am", end: "12:00 pm", title: "Presentation", description: "Joint Foresight Research Study with Cambridge University" },
    { start: "12:00 pm", end: "12:10 pm", title: "Partnership Awards" },
    { start: "12:10 pm", end: "12:15 pm", title: "Closing Remarks" },
  ];

  const events = isMobile ? mobileEvents : desktopEvents;

  return (
    <div className="timeline-wrapper">
    <div className="timeline-container">
      <h1 className="timeline-heading">Event Agenda</h1>
      
      <div className="timeline-wrapper">
        <div className="timeline-vertical-line"></div>

        {events.map((event, index) => (
          <div key={index} className="event-item">
     

            <div className="dot-container">
              <div className="dot"></div>
            </div>

            <div className="event-content">
            <div className="time-section">
              {event.start}
              {event.end && <span>{event.end}</span>}
            </div>

            {event.boldDescDesktop && (
                <p className="event-boldDescDesktop">{event.boldDescDesktop}</p>
              )}
              <h3 className="event-title">{event.title}</h3>
              {event.boldDesc && (
                <p className="event-boldDesc">{event.boldDesc}</p>
              )}
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



      <img src="/eventsOverview/Layer_1 (2).png" alt="" className='timelineRightIcon' />
    </div >
      <img src="/eventsOverview/Layer_1 (3).png" alt="" className='timelineLefttIcon' />
    </div>
  );
};

export default Timeline;







// import React, { useState, useEffect } from "react";
// import "./timeline.css";

// const Timeline = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const desktopEvents = [
//     { start: "9:30 AM", end: "10:00 AM", title: "Registration, Networking" },
//     { start: "10:00 AM", end: "11:00 AM", title: "Immersive Experiences Walk Through" },
//     { start: "11:00 AM", end: "11:10 AM", title: "Opening Ceremony" },
//     { 
//       start: "11:10 AM", 
//       end: "11:20 AM", 
//       title: "Keynote Address",
//       description: "Her Excellency Sarah bint Yousef Al Amiri\nMinister of State for General Education & Advanced Technology\nChairwoman of the College’s Board of Trustees"
//     },
//     { start: "11:20 AM", end: "11:25 AM", title: "A Student’s View", speaker: "Amna Al Mansoori, Grade 12" },
//     { start: "11:25 AM", end: "11:40 AM", title: "Logo Reveal" },
//     { start: "11:40 AM", end: "11:50 AM", title: "Intermission" },
//     { start: "11:50 AM", end: "12:20 PM", title: "Presentation", description: "Joint Foresight Research Study with Cambridge University" },
//     { start: "12:20 PM", end: "12:30 PM", title: "Partnership Awards" },
//     { start: "12:30 PM", end: "12:35 PM", title: "Closing Remarks" },
//   ];

//   const mobileEvents = [
//     { start: "10:00 AM", end: "11:00 AM", title: "Registration, Networking, and Immersive Experiences" },
//     { start: "11:00 AM", end: "11:05 AM", title: "Opening Ceremony" },
//     { start: "11:05 AM", end: "11:10 AM", title: "Education First & New Logo Reveal Video" },
//     { 
//       start: "11:10 AM", 
//       end: "11:20 AM", 
//       title: "Keynote Address",
//       description: "H.E. Sarah Yousef Al Amiri\nMinister of State for Public Education & Advanced Technology"
//     },
//     { start: "11:20 AM", end: "11:25 AM", title: "A Student’s View", speaker: "Asma Al Mansoori, Grade 12" },
//     { start: "11:25 AM", end: "11:30 AM", title: "Intermission" },
//     { start: "11:30 AM", end: "12:00 PM", title: "Presentation", description: "Joint Foresight Research Study with Cambridge University" },
//     { start: "12:00 PM", end: "12:10 PM", title: "Partnership Awards" },
//     { start: "12:10 PM", end: "12:15 PM", title: "Closing Remarks" },
//   ];

//   const events = isMobile ? mobileEvents : desktopEvents;

//   return (
//     <div className="timeline-wrapper">
//       <div className="timeline-container">
//         <h1 className="timeline-heading">Event Agenda</h1>

//         <div className="timeline-wrapper">
//           <div className="timeline-vertical-line"></div>

//           {events.map((event, index) => (
//             <div key={index} className="event-item">
//               <div className="dot-container">
//                 <div className="dot"></div>
//               </div>

//               <div className="event-content">
//                 <div className="time-section">
//                   {event.start}
//                   {event.end && <span>{event.end}</span>}
//                 </div>
//                 <h3 className="event-title">{event.title}</h3>
//                 {event.speaker && (
//                   <p className="event-speaker">{event.speaker}</p>
//                 )}
//                 {event.description && (
//                   <p className="event-description">{event.description}</p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         <img
//           src="/eventsOverview/Layer_1 (2).png"
//           alt=""
//           className="timelineRightIcon"
//         />
//       </div>
//       <img
//         src="/eventsOverview/Layer_1 (1).png"
//         alt=""
//         className="timelineLeftIcon"
//       />
//     </div>
//   );
// };

// export default Timeline;
