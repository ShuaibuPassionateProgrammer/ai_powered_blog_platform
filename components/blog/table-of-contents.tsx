'use client';

import { useState, useEffect } from 'react';

interface TableOfContentsProps {
  htmlContent: string;
}

export function TableOfContents({ htmlContent }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Array<{ id: string; text: string; level: number }>>([]);

  useEffect(() => {
    // Parse the HTML content to extract headings
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    
    const headingElements = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const extractedHeadings = Array.from(headingElements).map(heading => ({
      id: heading.id,
      text: heading.textContent || '',
      level: parseInt(heading.tagName.charAt(1)),
    }));
    
    setHeadings(extractedHeadings);
  }, [htmlContent]);

  if (headings.length === 0) return null;

  return (
    <div className="border-l pl-4 py-2 my-6">
      <h3 className="font-semibold mb-2 text-lg">Table of Contents</h3>
      <ul className="space-y-1">
        {headings.map((heading, index) => (
          <li 
            key={index} 
            className={`${heading.level === 2 ? 'ml-2' : heading.level === 3 ? 'ml-4' : heading.level === 4 ? 'ml-6' : heading.level === 5 ? 'ml-8' : 'ml-0'}`}
          >
            <a 
              href={`#${heading.id}`} 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}