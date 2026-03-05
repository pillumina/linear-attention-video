import React from 'react';
import {useCurrentFrame, useVideoConfig, interpolate, spring} from 'remotion';

export const ComplexityComparison: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const titleProgress = spring({frame, fps, config: {damping: 200}});
  const standardProgress = spring({frame: frame - 20, fps, config: {damping: 200}});
  const linearProgress = spring({frame: frame - 40, fps, config: {damping: 200}});
  const chartProgress = spring({frame: frame - 60, fps, config: {damping: 200}});

  // 模拟复杂度数据
  const standardData = [100, 400, 900, 1600, 2500, 3600, 4900, 6400];
  const linearData = [100, 200, 300, 400, 500, 600, 700, 800];

  const standardHeight = interpolate(standardProgress, [0, 1], [0, 400]);
  const linearHeight = interpolate(linearProgress, [0, 1], [0, 200]);

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h2 style={{...headingStyle, transform: `translateY(${interpolate(titleProgress, [0, 1], [20, 0])}px)`, opacity: titleProgress}}>
          复杂度对比
        </h2>

        <div style={comparisonStyle}>
          <div style={{...comparisonBoxStyle, opacity: standardProgress}}>
            <h3 style={standardTitleStyle}>标准注意力</h3>
            <div style={complexityDisplayStyle}>
              <span style={complexityNumberStyle}>O(n²)</span>
            </div>
            <div style={barContainerStyle}>
              <div style={{...barStyle, height: standardHeight, backgroundColor: '#ef4444'}} />
            </div>
            <div style={metricsStyle}>
              <div style={metricStyle}>
                <span style={metricLabelStyle}>序列长度 1024</span>
                <span style={metricValueStyle}>~1M ops</span>
              </div>
              <div style={metricStyle}>
                <span style={metricLabelStyle}>序列长度 4096</span>
                <span style={metricValueStyle}>~16M ops</span>
              </div>
            </div>
          </div>

          <div style={{...comparisonBoxStyle, opacity: linearProgress}}>
            <h3 style={linearTitleStyle}>线性注意力</h3>
            <div style={complexityDisplayStyle}>
              <span style={complexityNumberStyle}>O(n·d²)</span>
            </div>
            <div style={barContainerStyle}>
              <div style={{...barStyle, height: linearHeight, backgroundColor: '#10b981'}} />
            </div>
            <div style={metricsStyle}>
              <div style={metricStyle}>
                <span style={metricLabelStyle}>序列长度 1024</span>
                <span style={metricValueStyle}>~16K ops</span>
              </div>
              <div style={metricStyle}>
                <span style={metricLabelStyle}>序列长度 4096</span>
                <span style={metricValueStyle}>~64K ops</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{...speedupStyle, opacity: chartProgress}}>
          <div style={speedupBoxStyle}>
            <span style={speedupNumberStyle}>256x</span>
            <span style={speedupLabelStyle}>长序列加速比</span>
          </div>
          <p style={speedupNoteStyle}>
            当 n=4096, d=64 时，线性注意力比标准注意力快 256 倍
          </p>
        </div>
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
  padding: '4rem',
};

const contentStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '1200px',
};

const headingStyle: React.CSSProperties = {
  fontSize: '3rem',
  fontWeight: 600,
  color: '#f8fafc',
  marginBottom: '3rem',
  textAlign: 'center',
};

const comparisonStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '4rem',
  marginBottom: '3rem',
};

const comparisonBoxStyle: React.CSSProperties = {
  textAlign: 'center',
  flex: 1,
  maxWidth: '400px',
};

const standardTitleStyle: React.CSSProperties = {
  fontSize: '1.8rem',
  fontWeight: 600,
  color: '#ef4444',
  marginBottom: '1rem',
};

const linearTitleStyle: React.CSSProperties = {
  fontSize: '1.8rem',
  fontWeight: 600,
  color: '#10b981',
  marginBottom: '1rem',
};

const complexityDisplayStyle: React.CSSProperties = {
  marginBottom: '2rem',
};

const complexityNumberStyle: React.CSSProperties = {
  fontSize: '3rem',
  fontWeight: 700,
  color: '#f8fafc',
};

const barContainerStyle: React.CSSProperties = {
  width: '100%',
  height: '400px',
  backgroundColor: '#1e293b',
  borderRadius: '0.5rem',
  marginBottom: '2rem',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  overflow: 'hidden',
};

const barStyle: React.CSSProperties = {
  width: '60%',
  borderRadius: '0.5rem 0.5rem 0 0',
  transition: 'height 0.3s ease',
};

const metricsStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
};

const metricStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0.75rem 1rem',
  backgroundColor: '#1e293b',
  borderRadius: '0.5rem',
};

const metricLabelStyle: React.CSSProperties = {
  color: '#94a3b8',
  fontSize: '1rem',
};

const metricValueStyle: React.CSSProperties = {
  color: '#f8fafc',
  fontSize: '1rem',
  fontWeight: 600,
};

const speedupStyle: React.CSSProperties = {
  textAlign: 'center',
};

const speedupBoxStyle: React.CSSProperties = {
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#1e3a5f',
  padding: '1.5rem 3rem',
  borderRadius: '1rem',
  border: '2px solid #3b82f6',
  marginBottom: '1rem',
};

const speedupNumberStyle: React.CSSProperties = {
  fontSize: '4rem',
  fontWeight: 700,
  color: '#3b82f6',
};

const speedupLabelStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  color: '#94a3b8',
};

const speedupNoteStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#64748b',
};
