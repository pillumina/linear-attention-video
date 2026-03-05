import React from 'react';
import {useCurrentFrame, useVideoConfig, interpolate, spring} from 'remotion';
import {LaTeX} from '../components/LaTeX';

export const Summary: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const titleProgress = spring({frame, fps, config: {damping: 200}});
  const points = [1, 2, 3, 4].map((_, i) =>
    spring({frame: frame - 20 * (i + 1), fps, config: {damping: 200}})
  );
  const formulaProgress = spring({frame: frame - 100, fps, config: {damping: 200}});

  const summaryPoints = [
    {
      icon: '📊',
      text: '复杂度从 O(n²) 降至 O(n·d²)',
    },
    {
      icon: '🧮',
      text: '利用矩阵结合律重新排列计算',
    },
    {
      icon: '🎯',
      text: '通过特征映射近似 softmax',
    },
    {
      icon: '⚡',
      text: '支持超长序列和流式处理',
    },
  ];

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h2 style={{...headingStyle, transform: `translateY(${interpolate(titleProgress, [0, 1], [20, 0])}px)`, opacity: titleProgress}}>
          核心要点总结
        </h2>

        <div style={pointsContainerStyle}>
          {summaryPoints.map((point, index) => (
            <div
              key={index}
              style={{
                ...pointStyle,
                opacity: points[index],
                transform: `translateX(${interpolate(points[index], [0, 1], [-30, 0])}px)`,
              }}
            >
              <span style={iconStyle}>{point.icon}</span>
              <span style={pointTextStyle}>{point.text}</span>
            </div>
          ))}
        </div>

        <div style={{...formulaSectionStyle, opacity: formulaProgress}}>
          <div style={formulaBoxStyle}>
            <p style={formulaLabelStyle}>核心公式</p>
            <LaTeX
              formula="V' = \phi(Q) \cdot (\phi(K)^T V)"
              size="2em"
              color="#10b981"
            />
          </div>
        </div>

        <div style={{...footerStyle, opacity: formulaProgress}}>
          <p style={footerTextStyle}>
            线性注意力是构建高效、可扩展 Transformer 的关键技术
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

const pointsContainerStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1.5rem',
  marginBottom: '3rem',
};

const pointStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  backgroundColor: '#1e293b',
  padding: '1.5rem 2rem',
  borderRadius: '0.75rem',
  border: '1px solid #334155',
};

const iconStyle: React.CSSProperties = {
  fontSize: '2.5rem',
};

const pointTextStyle: React.CSSProperties = {
  fontSize: '1.3rem',
  color: '#f8fafc',
  fontWeight: 500,
};

const formulaSectionStyle: React.CSSProperties = {
  marginBottom: '3rem',
};

const formulaBoxStyle: React.CSSProperties = {
  backgroundColor: '#1e3a5f',
  padding: '2rem 3rem',
  borderRadius: '1rem',
  border: '2px solid #10b981',
  textAlign: 'center',
};

const formulaLabelStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#94a3b8',
  marginBottom: '1rem',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
};

const footerTextStyle: React.CSSProperties = {
  fontSize: '1.3rem',
  color: '#64748b',
  fontStyle: 'italic',
};
