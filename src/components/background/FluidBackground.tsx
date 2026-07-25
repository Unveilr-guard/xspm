import React from 'react';
import { Player } from '@remotion/player';
import { RemotionScene } from './RemotionScene';

const FluidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full bg-[#030014]">
      <Player
        component={RemotionScene}
        durationInFrames={600}
        compositionWidth={1920}
        compositionHeight={1080}
        fps={30}
        autoPlay
        loop
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.8,
        }}
      />
    </div>
  );
};

export default FluidBackground;
