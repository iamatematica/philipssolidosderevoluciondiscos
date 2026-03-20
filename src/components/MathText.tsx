import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathTextProps {
  text: string;
  display?: boolean;
  className?: string;
}

export const MathText: React.FC<MathTextProps> = ({ text, display = false, className = "" }) => {
  // Function to render a single LaTeX string
  const renderLatex = (latexStr: string, isDisplay: boolean) => {
    try {
      const html = katex.renderToString(latexStr, {
        throwOnError: false,
        displayMode: isDisplay,
      });
      return <span dangerouslySetInnerHTML={{ __html: html }} />;
    } catch (e) {
      return <span>{latexStr}</span>;
    }
  };

  // If the text contains $, it's mixed content
  if (text.includes('$')) {
    const parts = text.split(/(\$.*?\$)/g);
    return (
      <span className={className}>
        {parts.map((part, i) => {
          if (part.startsWith('$') && part.endsWith('$')) {
            return <React.Fragment key={i}>{renderLatex(part.slice(1, -1), false)}</React.Fragment>;
          }
          return <span key={i}>{part}</span>;
        })}
      </span>
    );
  }

  // Fallback for strings that don't use $ but might be "Text: Math"
  if (text.includes(':') && (text.includes('\\') || text.includes('^') || text.includes('_'))) {
    const colonIndex = text.indexOf(':');
    const label = text.substring(0, colonIndex + 1);
    const math = text.substring(colonIndex + 1).trim();
    return (
      <span className={className}>
        <span className="mr-1">{label}</span>
        {renderLatex(math, display)}
      </span>
    );
  }

  // Only replace if not already in LaTeX format to avoid double-escaping
  let latex = text;
  
  if (!text.includes('\\')) {
    latex = text
      .replace(/π/g, '\\pi ')
      .replace(/√/g, '\\sqrt')
      .replace(/≈/g, '\\approx ')
      .replace(/u³/g, 'u^3');
  }

  return (
    <span className={`inline-block align-middle ${className}`}>
      {renderLatex(latex, display)}
    </span>
  );
};
