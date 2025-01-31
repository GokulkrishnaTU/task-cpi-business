import React from 'react';
import './videoSection.css';

function VideoSection() {
  return (
    <div className="video-wrapper">
      <div className="video-container">
        
        {/* Video Section: Image Display */}
        <div className="videoSection">
          <img src="/video/videoImg.png" alt="Video Thumbnail" className="video" />

{/* add the video vide now i have added the demo video image */}

          {/* <video src="" autoPlay></video> */}
        </div>

        {/* Video Section Bottom: Description and Icon */}
        <div className="videoSectionBottom">
          {/* Description Text */}
          <div className="descVideo">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </div>

          {/* Icon for Video Action (e.g., Play icon) */}
          <div className="iconVideo">
            <img src="/video/videoIconBottom.png" alt="Video Play Icon" className="videoIconBottom" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default VideoSection;
