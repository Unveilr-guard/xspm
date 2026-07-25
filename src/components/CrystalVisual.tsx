import React from 'react';

const CrystalVisual: React.FC = () => {
  return (
    <div className="relative w-[420px] h-[420px]" style={{ animation: 'crystal-float 8s ease-in-out infinite' }}>
      {/* Ambient glow behind everything */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle, rgba(47, 107, 255,0.2) 0%, rgba(6,182,212,0.1) 40%, transparent 70%)',
        filter: 'blur(60px)',
      }} />

      {/* Outer ring */}
      <div className="crystal-ring-outer" />

      {/* Inner ring */}
      <div className="crystal-ring" />

      {/* Core crystal - rotated diamond */}
      <div className="crystal-core">
        {/* Inner highlight */}
        <div style={{
          position: 'absolute',
          inset: '20%',
          background: 'linear-gradient(135deg, rgba(6,182,212,0.1), transparent)',
          borderRadius: '8px',
        }} />
      </div>

      {/* Floating shards */}
      <div className="crystal-shard" style={{ width: 24, height: 24, top: 30, right: 60 }} />
      <div className="crystal-shard" style={{ width: 16, height: 16, bottom: 80, left: 40, animationDelay: '1s' }} />
      <div className="crystal-shard" style={{ width: 20, height: 20, top: 80, left: 30, animationDelay: '2s' }} />
      <div className="crystal-shard" style={{ width: 14, height: 14, bottom: 50, right: 40, animationDelay: '0.5s' }} />
      <div className="crystal-shard" style={{ width: 18, height: 18, top: '50%', left: 10, animationDelay: '1.5s' }} />

      {/* Code snippets floating inside */}
      <div className="absolute font-mono text-[10px] text-cyan-400/30" style={{ top: '25%', left: '35%', transform: 'rotate(-15deg)' }}>
        {'{'}
      </div>
      <div className="absolute font-mono text-[9px] text-purple-400/25" style={{ top: '45%', right: '30%', transform: 'rotate(10deg)' }}>
        return
      </div>
      <div className="absolute font-mono text-[10px] text-cyan-400/20" style={{ bottom: '30%', left: '40%', transform: 'rotate(-5deg)' }}>
        {'}'}
      </div>
    </div>
  );
};

export default CrystalVisual;
