import React from 'react';

interface SimpleFormulaProps {
  text: string;
  style?: React.CSSProperties;
  color?: string;
  size?: string;
}

export const SimpleFormula: React.FC<SimpleFormulaProps> = ({
  text,
  style = {},
  color = '#f8fafc',
  size = '1.2em'
}) => {
  return (
    <div
      style={{
        color,
        fontSize: size,
        fontFamily: 'monospace',
        backgroundColor: '#0f172a',
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        display: 'inline-block',
        ...style,
      }}
    >
      {text}
    </div>
  );
};
