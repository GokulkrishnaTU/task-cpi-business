import React from 'react'
import "./videoSection.css"
function VideoSection() {
  return (
    <div className='video-wrapper'>

        <div className="video-container">
<div className="videoSection">


            <img src="/video/videoImg.png" alt="" className='video' />
</div>

            <div className="videoSectionBottom">
                <div className="descVideo">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                </div>
                <div className="iconVideo">
                    <img src="/video/videoIconBottom.png" alt="" className='videoIconBottom' />
    
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default VideoSection
