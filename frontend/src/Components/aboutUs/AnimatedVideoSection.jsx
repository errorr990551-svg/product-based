import React from 'react';
import './anime.css';
import sampleVideo from '../../images/animation.mp4';

function AnimatedVideoSection() {
  return (
    <div className="video-container">
      <video 
        className="video-player"
        src={sampleVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      
    </div>
  );
}

export default AnimatedVideoSection;
