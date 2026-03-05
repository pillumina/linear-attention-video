import React from 'react';
import {useCurrentFrame, useVideoConfig, interpolate, spring} from 'remotion';
import {LaTeX} from '../components/LaTeX';

export const LinearAttentionCore: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const titleProgress = spring({frame, fps, config: {damping: 200}});
  const formula1Progress = spring({frame: frame - 20, fps, config: {damping: 200}});
  const formula2Progress = spring({frame: frame - 40, fps, config: {damping: 200}});
  const complexityProgress = spring({frame: frame - 60, fps, config: {damping: 200}});

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h2 style={{...headingStyle, transform: `translateY(${interpolate(titleProgress, [0, 1], [20, 0])}px)`, opacity: titleProgress}}>
          线性注意力的核心思想
        </h2>

        <div style={{...comparisonStyle, opacity: formula1Progress}}>
          <div style={boxStyle}>
            <h3 style={boxTitleStyle}>标准注意力</h3>
            <LaTeX
              formula="\text{softmax}(QK^T)V"
              size="1.5em"
              color="#f8fafc"
            />
            <p style={complexityStyle}>复杂度: <span style={badStyle}>O(n²)</span></p>
          </div>

          <div style={vsStyle}>VS</div>

          <div style={{...boxStyle, borderColor: '#10b981'}}>
            <h3 style={{...boxTitleStyle, color: '#10b981'}}>线性注意力</h3>
            <LaTeX
              formula="\phi(Q) \cdot (\phi(K)^T V)"
              size="1.5em"
              color="#f8fafc"
            />
            <p style={complexityStyle}>复杂度: <span style={goodStyle}>O(n)</span></p>
          </div>
        </div>

        <div style={{...keyInsightStyle, opacity: formula2Progress}}>
          <h3 style={insightTitleStyle}>关键洞察</h3>
          <div style={insightBoxStyle}>
            <LaTeX
              formula="\text{softmax}(QK^T)V \approx \phi(Q) \cdot (\phi(K)^T V)"
              size="1.3em"
              color="#fbbf24"
            />
          </div>
          <p style={insightTextStyle}>
            利用矩阵结合律，改变计算顺序，避免 n×n 的注意力矩阵
          </p>
        </div>

        <div style={{...formulaDetailStyle, opacity: complexityProgress}}>
          <div style={formulaRowStyle}>
            <LaTeX formula="QK^T \in \mathbb{R}^{n \times n}" size="1em" color="#94a3b8" />
            <span style={arrowTextStyle}>→</span>
            <LaTeX formula="\phi(K)^T V \in \mathbb{R}^{d \times d}" size="1em" color="#10b981" />
          </div>
          <p style={explanationStyle}>
            注意力矩阵大小从 n×n 降到 d×d（d ≪ n）
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
  alignItems: 'center',
  gap: '2rem',
  marginBottom: '3rem',
};

const boxStyle: React.CSSProperties = {
  backgroundColor: '#1e293b',
  padding: '2rem 3rem',
  borderRadius: '1rem',
  border: '2px solid #334155',
  textAlign: 'center',
  flex: 1,
  maxWidth: '400px',
};

const boxTitleStyle: React.CSSProperties = {
  fontSize: '1.3rem',
  fontWeight: 600,
  color: '#f8fafc',
  marginBottom: '1.5rem',
};

const vsStyle: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: 700,
  color: '#64748b',
};

const complexityStyle: React.CSSProperties = {
  marginTop: '1.5rem',
  fontSize: '1.1rem',
  color: '#94a3b8',
};

const badStyle: React.CSSProperties = {
  color: '#ef4444',
  fontWeight: 700,
};

const goodStyle: React.CSSProperties = {
  color: '#10b981',
  fontWeight: 700,
};

const keyInsightStyle: React.CSSProperties = {
  marginBottom: '3rem',
};

const insightTitleStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 600,
  color: '#fbbf24',
  marginBottom: '1rem',
  textAlign: 'center',
};

const insightBoxStyle: React.CSSProperties = {
  backgroundColor: '#1e293b',
  padding: '1.5rem 2rem',
  borderRadius: '1rem',
  border: '1px solid #fbbf24',
  textAlign: 'center',
  marginBottom: '1rem',
};

const insightTextStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  color: '#94a3b8',
  textAlign: 'center',
  lineHeight: 1.6,
};

const formulaDetailStyle: React.CSSProperties = {
  textAlign: 'center',
};

const formulaRowStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
  marginBottom: '1rem',
};

const arrowTextStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  color: '#64748b',
};

const explanationStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#64748b',
};
