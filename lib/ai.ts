// AI-powered utilities for blog content

/**
 * Generates a summary of the post content using heuristic-based approach
 */
export function generateSummary(content: string, maxLength: number = 150): string {
  // Remove HTML tags and trim whitespace
  const cleanContent = content.replace(/<[^>]*>/g, '').trim();
  
  // Split content into sentences
  const sentences = cleanContent.split(/(?<=[.!?])\s+/);
  
  // Take the first few sentences and join them
  let summary = '';
  let currentLength = 0;
  
  for (const sentence of sentences) {
    if (currentLength + sentence.length <= maxLength) {
      summary += sentence + ' ';
      currentLength += sentence.length + 1;
    } else {
      break;
    }
  }
  
  // Ensure the summary doesn't exceed the max length
  if (summary.length > maxLength) {
    summary = summary.substring(0, maxLength).trim();
    // Find the last space to avoid cutting words
    const lastSpace = summary.lastIndexOf(' ');
    if (lastSpace > 0) {
      summary = summary.substring(0, lastSpace).trim();
    }
    summary += '...';
  }
  
  return summary.trim();
}

/**
 * Suggests relevant tags based on content
 */
export function suggestTags(content: string, existingTags: string[] = []): string[] {
  const cleanContent = content.toLowerCase();
  const suggestedTags: string[] = [];
  
  // Common programming and tech-related keywords
  const techKeywords = [
    { keyword: 'javascript', tag: 'javascript' },
    { keyword: 'typescript', tag: 'typescript' },
    { keyword: 'react', tag: 'react' },
    { keyword: 'nextjs', tag: 'nextjs' },
    { keyword: 'node', tag: 'nodejs' },
    { keyword: 'api', tag: 'api' },
    { keyword: 'web development', tag: 'web-development' },
    { keyword: 'frontend', tag: 'frontend' },
    { keyword: 'backend', tag: 'backend' },
    { keyword: 'database', tag: 'database' },
    { keyword: 'security', tag: 'security' },
    { keyword: 'performance', tag: 'performance' },
    { keyword: 'testing', tag: 'testing' },
    { keyword: 'ai', tag: 'ai' },
    { keyword: 'machine learning', tag: 'machine-learning' },
    { keyword: 'css', tag: 'css' },
    { keyword: 'html', tag: 'html' },
    { keyword: 'design', tag: 'design' },
    { keyword: 'tutorial', tag: 'tutorial' },
    { keyword: 'guide', tag: 'guide' },
  ];
  
  // Find relevant tags based on content
  for (const { keyword, tag } of techKeywords) {
    if (cleanContent.includes(keyword) && !suggestedTags.includes(tag) && !existingTags.includes(tag)) {
      suggestedTags.push(tag);
    }
  }
  
  // If no specific tags were found, add some general ones
  if (suggestedTags.length === 0 && existingTags.length === 0) {
    suggestedTags.push('blog', 'article', 'tech');
  }
  
  // Combine with existing tags and limit to 5
  const allTags = [...new Set([...existingTags, ...suggestedTags])];
  return allTags.slice(0, 5);
}

/**
 * Calculates reading time based on content length
 */
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200; // Average reading speed
  const cleanContent = content.replace(/<[^>]*>/g, ' ').trim();
  const wordCount = cleanContent.split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  
  return `${minutes} min read`;
}