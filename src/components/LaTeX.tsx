import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface LaTeXProps {
  formula: string;
  displayMode?: boolean;
  style?: React.CSSProperties;
  color?: string;
  size?: string;
}

export const LaTeX: React.FC<LaTeXProps> = ({
  formula,
  displayMode = true,
  style = {},
  color = '#1a1a1a',
  size = '1.2em'
}) => {
  const html = katex.renderToString(formula, {
    displayMode,
    throwOnError: false,
    strict: false,
  });

  return (
    <div
      style={{
        color,
        fontSize: size,
        ...style,
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
