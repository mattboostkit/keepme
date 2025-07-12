// --- Custom Preview Button for Sanity Studio v3 ---
// Remove this file when upgrading to v4 (Presentation Tool will provide Locations UI)
import React from 'react';

const PreviewButton = ({ document }) => {
  const slug = document.displayed?.slug?.current;
  if (!slug) return null;
  const url = `https://keepme.co.uk/post/${slug}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-block',
        margin: '1em 0',
        padding: '0.5em 1em',
        background: '#0070f3',
        color: '#fff',
        borderRadius: '4px',
        textDecoration: 'none',
      }}
    >
      Preview Post
    </a>
  );
};

export default PreviewButton; 