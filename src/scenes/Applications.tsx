import React from 'react';
import {useCurrentFrame, useVideoConfig, interpolate, spring} from 'remotion';

export const Applications: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const titleProgress = spring({frame, fps, config: {damping: 200}});
  const apps = ['long-context', 'streaming', 'efficient'].map((_, i) =>
    spring({frame: frame - 30 * (i + 1), fps, config: {damping: 200}})
  );

  const applications = [
    {
      title: '长序列建模',
      subtitle: 'Long-Context Modeling',
      description: '支持超长文本处理（100K+ tokens），突破传统 Transformer 的上下文限制',
      examples: ['文档摘要', '代码分析', '长对话理解'],
      icon: '📄',
    },
    {
      title: '流式处理',
      subtitle: 'Streaming Inference',
      description: '实时增量计算，无需重新计算整个序列的注意力',
      examples: ['实时翻译', '语音识别', '在线推荐'],
      icon: '⚡',
    },
    {
      title: '高效推理',
      subtitle: 'Efficient Inference',
      description: '降低计算复杂度和内存占用，支持边缘设备部署',
      examples: ['移动端 AI', 'IoT 设备', '嵌入式系统'],
      icon: '🚀',
    },
  ];

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h2 style={{...headingStyle, transform: `translateY(${interpolate(titleProgress, [0, 1], [20, 0])}px)`, opacity: titleProgress}}>
          应用场景
        </h2>

        <div style={gridStyle}>
          {applications.map((app, index) => (
            <div
              key={index}
              style={{
                ...cardStyle,
                opacity: apps[index],
                transform: `translateY(${interpolate(apps[index], [0, 1], [30, 0])}px)`,
              }}
            >
              <div style={iconStyle}>{app.icon}</div>
              <h3 style={cardTitleStyle}>{app.title}</h3>
              <h4 style={cardSubtitleStyle}>{app.subtitle}</h4>
              <p style={cardDescriptionStyle}>{app.description}</p>
              <div style={examplesStyle}>
                {app.examples.map((example, i) => (
                  <span key={i} style={exampleTagStyle}>
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{...footerStyle, opacity: apps[2]}}>
          <p style={footerTextStyle}>
            线性注意力使 Transformer 能够处理之前无法处理的任务
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

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2rem',
  marginBottom: '3rem',
};

const cardStyle: React.CSSProperties = {
  backgroundColor: '#1e293b',
  padding: '2rem',
  borderRadius: '1rem',
  border: '1px solid #334155',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
};

const iconStyle: React.CSSProperties = {
  fontSize: '4rem',
  marginBottom: '1.5rem',
};

const cardTitleStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 600,
  color: '#f8fafc',
  marginBottom: '0.5rem',
};

const cardSubtitleStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#3b82f6',
  marginBottom: '1rem',
};

const cardDescriptionStyle: React.CSSProperties = {
  fontSize: '0.95rem',
  color: '#94a3b8',
  lineHeight: 1.6,
  marginBottom: '1.5rem',
};

const examplesStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  justifyContent: 'center',
};

const exampleTagStyle: React.CSSProperties = {
  backgroundColor: '#334155',
  color: '#f8fafc',
  padding: '0.5rem 1rem',
  borderRadius: '2rem',
  fontSize: '0.85rem',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
};

const footerTextStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  color: '#64748b',
  fontStyle: 'italic',
};
