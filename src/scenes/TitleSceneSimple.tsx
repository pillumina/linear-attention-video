import React from 'react';
import {useCurrentFrame, interpolate, spring} from 'remotion';

export const TitleSceneSimple: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const subtitleProgress = spring({
    frame: frame - 20,
    fps: 30,
    config: {damping: 200},
  });

  const subtitleOpacity = interpolate(subtitleProgress, [0, 1], [0, 1]);

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={{...titleStyle, opacity: titleOpacity}}>
          线性注意力机制
        </h1>
        <h2 style={{...subtitleStyle, opacity: subtitleOpacity}}>
          Linear Attention Mechanism
        </h2>
        <div style={{...formulaContainerStyle, opacity: subtitleOpacity}}>
          <div style={formulaStyle}>O(n²) → O(n)</div>
        </div>
        <p style={{...authorStyle, opacity: subtitleOpacity}}>
          深度技术解析 · AI 工程师必修
        </p>
      </div>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  backgroundColor: '#0f172a',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'system-ui, -apple-system, sans-serif',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#f8fafc',
};

const titleStyle: React.CSSProperties = {
  fontSize: '5rem',
  fontWeight: 700,
  marginBottom: '1rem',
  background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

const subtitleStyle: React.CSSProperties = {
  fontSize: '2.5rem',
  fontWeight: 300,
  color: '#94a3b8',
  marginBottom: '2rem',
};

const formulaContainerStyle: React.CSSProperties = {
  marginBottom: '2rem',
};

const formulaStyle: React.CSSProperties = {
  fontSize: '2.5rem',
  color: '#3b82f6',
  fontFamily: 'monospace',
  fontWeight: 600,
};

const authorStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  color: '#64748b',
  marginTop: '2rem',
};
