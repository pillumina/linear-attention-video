import React from 'react';
import {useCurrentFrame, useVideoConfig, interpolate, spring} from 'remotion';
import {LaTeX} from '../components/LaTeX';

export const FeatureMaps: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const titleProgress = spring({frame, fps, config: {damping: 200}});
  const map1Progress = spring({frame: frame - 20, fps, config: {damping: 200}});
  const map2Progress = spring({frame: frame - 40, fps, config: {damping: 200}});
  const map3Progress = spring({frame: frame - 60, fps, config: {damping: 200}});

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h2 style={{...headingStyle, transform: `translateY(${interpolate(titleProgress, [0, 1], [20, 0])}px)`, opacity: titleProgress}}>
          特征映射函数 φ(x)
        </h2>

        <div style={mapsContainerStyle}>
          <div style={{...mapCardStyle, opacity: map1Progress, transform: `translateY(${interpolate(map1Progress, [0, 1], [20, 0])}px)`}}>
            <h3 style={mapTitleStyle}>ELU + 1</h3>
            <div style={formulaBoxStyle}>
              <LaTeX formula="\phi(x) = \text{elu}(x) + 1" size="1.5em" color="#f8fafc" />
            </div>
            <p style={descriptionStyle}>
              简单高效，保持非负性
            </p>
            <div style={prosStyle}>
              <span style={prosLabelStyle}>优点:</span> 计算快速，易于实现
            </div>
          </div>

          <div style={{...mapCardStyle, opacity: map2Progress, transform: `translateY(${interpolate(map2Progress, [0, 1], [20, 0])}px)`}}>
            <h3 style={mapTitleStyle}>随机特征映射</h3>
            <div style={formulaBoxStyle}>
              <LaTeX formula="\phi(x) = \frac{1}{\sqrt{m}}[f(w_1^T x), ..., f(w_m^T x)]" size="1.3em" color="#f8fafc" />
            </div>
            <p style={descriptionStyle}>
              近似 softmax 的随机特征
            </p>
            <div style={prosStyle}>
              <span style={prosLabelStyle}>优点:</span> 理论保证，精度高
            </div>
          </div>

          <div style={{...mapCardStyle, opacity: map3Progress, transform: `translateY(${interpolate(map3Progress, [0, 1], [20, 0])}px)`}}>
            <h3 style={mapTitleStyle}>Performer (FAVOR+)</h3>
            <div style={formulaBoxStyle}>
              <LaTeX formula="\phi(x) = \exp(x) \cdot \text{RandomProjection}" size="1.3em" color="#f8fafc" />
            </div>
            <p style={descriptionStyle}>
              快速注意力正随机核
            </p>
            <div style={prosStyle}>
              <span style={prosLabelStyle}>优点:</span> 无需近似，精确等价
            </div>
          </div>
        </div>

        <div style={{...noteStyle, opacity: map3Progress}}>
          <p style={noteTextStyle}>
            💡 核心思想：φ(x) 的选择决定了线性注意力与标准注意力的近似程度
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
  maxWidth: '1400px',
};

const headingStyle: React.CSSProperties = {
  fontSize: '3rem',
  fontWeight: 600,
  color: '#f8fafc',
  marginBottom: '3rem',
  textAlign: 'center',
};

const mapsContainerStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2rem',
  marginBottom: '3rem',
};

const mapCardStyle: React.CSSProperties = {
  backgroundColor: '#1e293b',
  padding: '2rem',
  borderRadius: '1rem',
  border: '1px solid #334155',
};

const mapTitleStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 600,
  color: '#3b82f6',
  marginBottom: '1.5rem',
  textAlign: 'center',
};

const formulaBoxStyle: React.CSSProperties = {
  backgroundColor: '#0f172a',
  padding: '1.5rem',
  borderRadius: '0.5rem',
  marginBottom: '1rem',
  textAlign: 'center',
};

const descriptionStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#94a3b8',
  marginBottom: '1rem',
  textAlign: 'center',
};

const prosStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#10b981',
  textAlign: 'center',
};

const prosLabelStyle: React.CSSProperties = {
  fontWeight: 600,
};

const noteStyle: React.CSSProperties = {
  backgroundColor: '#1e3a5f',
  padding: '1.5rem',
  borderRadius: '0.75rem',
  border: '1px solid #3b82f6',
};

const noteTextStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  color: '#f8fafc',
  textAlign: 'center',
  margin: 0,
};
