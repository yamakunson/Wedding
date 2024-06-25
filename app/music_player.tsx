import React, { useState, useEffect, useRef } from 'react';

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null); // Reference to the audio element

  useEffect(() => {
    // Play or pause the audio based on isMuted state
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  }, [isMuted]);

  return (
    <div>
      <audio ref={audioRef} src="/images/music.mp3" loop>
        Your browser does not support the audio element.
      </audio>
      <button
        onClick={() => setIsMuted(!isMuted)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          padding: '10px',
          backgroundColor: '#f0f0f0',
          border: 'none',
          borderColor:'#FF4B4B',
          borderRadius: '50%',
          cursor: 'pointer',
        }}
      >
        <img src={isMuted ? "/images/Sound off.png" : "/images/Sound on.png"} alt={isMuted ? 'Unmute' : 'Mute'} style={{ width: '24px', height: '24px' }} />
      </button>
    </div>
  );
};

export default MusicPlayer;