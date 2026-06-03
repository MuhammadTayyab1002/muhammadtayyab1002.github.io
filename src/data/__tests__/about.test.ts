import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '../about';

describe('about data', () => {
  it('exports aboutMarkdown as a string', () => {
    expect(typeof aboutMarkdown).toBe('string');
    expect(aboutMarkdown.length).toBeGreaterThan(0);
  });

  it('contains the intro section', () => {
    expect(aboutMarkdown).toContain('# Intro');
  });

  it('contains the likes section', () => {
    expect(aboutMarkdown).toContain('# I Like');
  });

  it('contains the dreams section', () => {
    expect(aboutMarkdown).toContain('# I Dream Of');
  });

  it('contains the admired websites section', () => {
    expect(aboutMarkdown).toContain(
      '# Websites from People I like working with',
    );
  });

  it('contains valid markdown links', () => {
    // Check for markdown link format [text](url)
    const linkRegex = /\[.+?\]\(.+?\)/g;
    const links = aboutMarkdown.match(linkRegex);

    expect(links).not.toBeNull();
  });

  it('contains properly formatted headers', () => {
    // Check for markdown headers
    const headerRegex = /^#+ .+$/gm;
    const headers = aboutMarkdown.match(headerRegex);

    expect(headers).not.toBeNull();
  });
});
