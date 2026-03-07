import React from 'react';
import {useCurrentFrame, interpolate, spring} from 'remotion';
import katex from 'katex';
import 'katex/dist/katex.min.css';

// ============ 动画组件库 ============

// 1. 淡入 + 上滑动画
export const FadeInUp: React.FC<{
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}> = ({children, delay = 0, duration = 30}) => {
  const frame = useCurrentFrame();
  
  const opacity = interpolate(
    frame - delay,
    [0, duration],
    [0, 1],
    {extrapolateRight: 'clamp', extrapolateLeft: 'clamp'}
  );
  
  const translateY = interpolate(
    frame - delay,
    [0, duration],
    [50, 0],
    {extrapolateRight: 'clamp', extrapolateLeft: 'clamp'}
  );
  
  return (
    <div style={{
      opacity,
      transform: `translateY(${translateY}px)`,
    }}>
      {children}
    </div>
  );
};

// 2. 弹性缩放动画
export const SpringScale: React.FC<{
  children: React.ReactNode;
  delay?: number;
}> = ({children, delay = 0}) => {
  const frame = useCurrentFrame();
  
  const scale = spring({
    frame: frame - delay,
    fps: 30,
    config: {
      damping: 12,
      stiffness: 200,
      mass: 0.5,
    },
  });
  
  return (
    <div style={{
      transform: `scale(${scale})`,
    }}>
      {children}
    </div>
  );
};

// 3. 逐步显示公式
export const StepByStepFormula: React.FC<{
  parts: Array<{formula: string; delay: number; color?: string}>;
}> = ({parts}) => {
  const frame = useCurrentFrame();
  
  return (
    <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
      {parts.map((part, index) => {
        const opacity = frame >= part.delay ? 1 : 0;
        const html = katex.renderToString(part.formula, {
          displayMode: false,
          throwOnError: false,
        });
        
        return (
          <span 
            key={index}
            dangerouslySetInnerHTML={{__html: html}}
            style={{
              opacity,
              color: part.color || '#f8fafc',
              transition: 'opacity 0.3s',
            }}
          />
        );
      })}
    </div>
  );
};

// 4. 逐行显示列表
export const AnimatedList: React.FC<{
  items: Array<{text: string; delay: number}>;
}> = ({items}) => {
  const frame = useCurrentFrame();
  
  return (
    <ul style={{listStyle: 'none', padding: 0}}>
      {items.map((item, index) => {
        const opacity = interpolate(
          frame - item.delay,
          [0, 15],
          [0, 1],
          {extrapolateRight: 'clamp', extrapolateLeft: 'clamp'}
        );
        
        const translateX = interpolate(
          frame - item.delay,
          [0, 15],
          [-30, 0],
          {extrapolateRight: 'clamp', extrapolateLeft: 'clamp'}
        );
        
        return (
          <li 
            key={index}
            style={{
              opacity,
              transform: `translateX(${translateX}px)`,
              marginBottom: '1rem',
            }}
          >
            {item.text}
          </li>
        );
      })}
    </ul>
  );
};

// 5. LaTeX 渲染组件
export const Latex: React.FC<{
  formula: string;
  displayMode?: boolean;
  color?: string;
}> = ({formula, displayMode = false, color = '#f8fafc'}) => {
  const html = katex.renderToString(formula, {
    displayMode,
    throwOnError: false,
    trust: true,
  });
  
  return (
    <span
      dangerouslySetInnerHTML={{__html: html}}
      style={{color}}
    />
  );
};
