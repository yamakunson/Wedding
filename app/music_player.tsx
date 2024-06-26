import React, { useState, useEffect, useRef } from 'react';

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  // Specify HTMLAudioElement as the type for the audio element reference
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Play or pause the audio based on isMuted state
    const audio = audioRef.current;
    if (audio) {
      const playPromise = isMuted ? audio.pause() : audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // Handle audio playback error (e.g., file not found or decoding error)
          console.error("Audio playback failed:", error);
        });
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
          backgroundColor: 'transparent',
          border: 'solid',
          borderRadius: '50%',
          borderColor: '#ff0000',
          cursor: 'pointer',
        }}
      >
        <img src={isMuted ? "/images/Sound off.png" : "/images/Sound on.png"} alt={isMuted ? 'Click to unmute' : 'Click to mute'} style={{ width: '24px', height: '24px' }} />
      </button>
    </div>
  );
};

export default MusicPlayer;