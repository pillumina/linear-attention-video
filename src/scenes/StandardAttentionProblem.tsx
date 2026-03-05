import React from 'react';
import {useCurrentFrame, useVideoConfig, interpolate, spring} from 'remotion';
import {LaTeX} from '../components/LaTeX';

export const StandardAttentionProblem: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const titleProgress = spring({frame, fps, config: {damping: 200}});
  const formulaProgress = spring({frame: frame - 30, fps, config: {damping: 200}});
  const complexityProgress = spring({frame: frame - 60, fps, config: {damping: 200}});

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h2 style={{...headingStyle, transform: `translateY(${interpolate(titleProgress, [0, 1], [20, 0])}px)`, opacity: titleProgress}}>
          标准注意力机制的复杂度问题
        </h2>

        <div style={{...formulaSectionStyle, opacity: formulaProgress}}>
          <div style={formulaBoxStyle}>
            <p style={labelStyle}>标准注意力计算</p>
            <LaTeX
              formula="\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V"
              size="1.5em"
              color="#f8fafc"
            />
          </div>

          <div style={arrowStyle}>↓</div>

          <div style={formulaBoxStyle}>
            <p style={labelStyle}>复杂度分析</p>
            <LaTeX
              formula="O(n^2 \cdot d)"
              size="2em"
              color="#ef4444"
            />
            <p style={explanationStyle}>
              n = 序列长度, d = 特征维度
            </p>
          </div>
        </div>

        <div style={{...problemSectionStyle, opacity: complexityProgress}}>
          <div style={problemBoxStyle}>
            <h3 style={problemTitleStyle}>问题</h3>
            <ul style={listStyle}>
              <li>长序列处理困难 (n &gt; 4096)</li>
              <li>内存占用随 n² 增长</li>
              <li>计算时间随 n² 增加</li>
            </ul>
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

const formulaSectionStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  marginBottom: '3rem',
};

const formulaBoxStyle: React.CSSProperties = {
  backgroundColor: '#1e293b',
  padding: '2rem 3rem',
  borderRadius: '1rem',
  border: '1px solid #334155',
  textAlign: 'center',
};

const labelStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#94a3b8',
  marginBottom: '1rem',
};

const arrowStyle: React.CSSProperties = {
  fontSize: '2rem',
  color: '#64748b',
};

const explanationStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#64748b',
  marginTop: '1rem',
};

const problemSectionStyle: React.CSSProperties = {
  marginTop: '2rem',
};

const problemBoxStyle: React.CSSProperties = {
  backgroundColor: '#1e293b',
  padding: '2rem',
  borderRadius: '1rem',
  border: '2px solid #ef4444',
};

const problemTitleStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 600,
  color: '#ef4444',
  marginBottom: '1rem',
};

const listStyle: React.CSSProperties = {
  listStyle: 'disc',
  paddingLeft: '2rem',
  color: '#f8fafc',
  fontSize: '1.2rem',
  lineHeight: 2,
};
