import React, { useRef, useEffect } from 'react';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handlePlay = () => {
      try {
        if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen();
        } else if ((videoElement as any).webkitRequestFullscreen) {
          (videoElement as any).webkitRequestFullscreen();
        } else if ((videoElement as any).msRequestFullscreen) {
          (videoElement as any).msRequestFullscreen();
        }
      } catch (error) {
        console.error('Error attempting to enable fullscreen:', error);
      }
    };

    videoElement.addEventListener('play', handlePlay);

    return () => {
      videoElement.removeEventListener('play', handlePlay);
    };
  }, []);

  return (
    <section className="py-20 relative" id="demo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-orbitron text-glow">
            See Unveilr in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-gray-400 text-lg">
            See how Unveilr provides unified security management across your infrastructure.
          </p>
        </div>
        
        <div className="reveal glass-card p-6 rounded-lg overflow-hidden w-full max-w-[90%] mx-auto" style={{ transitionDelay: '0.2s' }}>
          <div className="aspect-video w-full relative overflow-hidden rounded-lg border border-white/10 shadow-2xl">
            <video 
              ref={videoRef}
              className="w-full h-full object-cover cursor-pointer"
              controls
              preload="metadata"
            >
              <source src="/unveilrrecording.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-400 mb-6">
              Watch a brief overview of Unveilr's capabilities and interface.
            </p>
            <a 
              href="#demo-request"
              className="inline-block px-8 py-4 bg-gradient-to-r from-unveilr-blue to-unveilr-purple text-white font-medium rounded-lg glow-button"
            >
              Request Full Personalized Demo
            </a>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-[30vw] h-[30vw] rounded-full bg-unveilr-blue opacity-[0.02] blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-0 w-[25vw] h-[25vw] rounded-full bg-unveilr-purple opacity-[0.02] blur-[100px] pointer-events-none"></div>
    </section>
  );
};

export default VideoSection;
