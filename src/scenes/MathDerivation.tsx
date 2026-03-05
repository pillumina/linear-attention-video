import React from 'react';
import {useCurrentFrame, useVideoConfig, interpolate, spring} from 'remotion';
import {LaTeX} from '../components/LaTeX';

export const MathDerivation: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const step1 = spring({frame, fps, config: {damping: 200}});
  const step2 = spring({frame: frame - 30, fps, config: {damping: 200}});
  const step3 = spring({frame: frame - 60, fps, config: {damping: 200}});
  const step4 = spring({frame: frame - 90, fps, config: {damping: 200}});

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h2 style={headingStyle}>数学推导</h2>

        <div style={stepsContainerStyle}>
          <div style={{...stepStyle, opacity: step1, transform: `translateX(${interpolate(step1, [0, 1], [-20, 0])}px)`}}>
            <div style={stepNumberStyle}>1</div>
            <div style={stepContentStyle}>
              <p style={stepLabelStyle}>标准注意力</p>
              <LaTeX formula="\text{Attention}(Q,K,V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d}}\right)V" size="1.2em" color="#f8fafc" />
            </div>
          </div>

          <div style={{...stepStyle, opacity: step2, transform: `translateX(${interpolate(step2, [0, 1], [-20, 0])}px)`}}>
            <div style={stepNumberStyle}>2</div>
            <div style={stepContentStyle}>
              <p style={stepLabelStyle}>引入特征映射</p>
              <LaTeX formula="\text{softmax}(x_i) = \frac{e^{x_i}}{\sum_j e^{x_j}}" size="1.2em" color="#f8fafc" />
              <p style={noteStyle}>使用 φ(x) 近似 softmax</p>
            </div>
          </div>

          <div style={{...stepStyle, opacity: step3, transform: `translateX(${interpolate(step3, [0, 1], [-20, 0])}px)`}}>
            <div style={stepNumberStyle}>3</div>
            <div style={stepContentStyle}>
              <p style={stepLabelStyle}>线性化形式</p>
              <LaTeX formula="V'_i = \frac{\sum_j \phi(q_i)^T \phi(k_j) v_j}{\sum_j \phi(q_i)^T \phi(k_j)}" size="1.2em" color="#f8fafc" />
            </div>
          </div>

          <div style={{...stepStyle, opacity: step4, transform: `translateX(${interpolate(step4, [0, 1], [-20, 0])}px)`}}>
            <div style={stepNumberStyle}>4</div>
            <div style={stepContentStyle}>
              <p style={stepLabelStyle}>矩阵形式（关键！）</p>
              <LaTeX formula="V' = \phi(Q) \cdot \frac{\phi(K)^T V}{\phi(K)^T \mathbf{1}}" size="1.3em" color="#10b981" />
              <p style={highlightStyle}>复杂度: O(nd²)</p>
            </div>
          </div>
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

const stepsContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
};

const stepStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1.5rem',
};

const stepNumberStyle: React.CSSProperties = {
  width: '3rem',
  height: '3rem',
  borderRadius: '50%',
  backgroundColor: '#3b82f6',
  color: '#f8fafc',
  fontSize: '1.5rem',
  fontWeight: 700,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
};

const stepContentStyle: React.CSSProperties = {
  flex: 1,
  backgroundColor: '#1e293b',
  padding: '1.5rem 2rem',
  borderRadius: '0.75rem',
  border: '1px solid #334155',
};

const stepLabelStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#94a3b8',
  marginBottom: '0.75rem',
};

const noteStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#64748b',
  marginTop: '0.5rem',
  fontStyle: 'italic',
};

const highlightStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  color: '#10b981',
  fontWeight: 600,
  marginTop: '0.75rem',
};
