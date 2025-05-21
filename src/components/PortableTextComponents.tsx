import React from 'react';
import { PortableTextComponents } from '@portabletext/react';
import { urlFor } from '../lib/sanity';

// Minimal interface for type assertion
interface ChainableUrl {
  url: () => string;
}

// Helper function to extract YouTube or Vimeo video ID
const getVideoId = (url: string) => {
  // YouTube
  let match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
  if (match && match[1]) {
    return { platform: 'youtube', id: match[1] };
  }

  // Vimeo
  match = url.match(/(?:vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|)(\d+)(?:$|\/|\?))/);
  if (match && match[1]) {
    return { platform: 'vimeo', id: match[1] };
  }

  return null;
};

// Component for rendering embedded videos
const VideoEmbed: React.FC<{ value: any }> = ({ value }) => {
  const { videoUrl, caption } = value;
  const videoInfo = getVideoId(videoUrl);

  if (!videoInfo) {
    return <div>Invalid video URL</div>;
  }

  let embedUrl = '';
  if (videoInfo.platform === 'youtube') {
    embedUrl = `https://www.youtube.com/embed/${videoInfo.id}`;
  } else if (videoInfo.platform === 'vimeo') {
    embedUrl = `https://player.vimeo.com/video/${videoInfo.id}`;
  }

  return (
    <div className="video-container my-8">
      <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full">
        <iframe
          src={embedUrl}
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={caption || 'Embedded video'}
        ></iframe>
      </div>
      {caption && <p className="text-sm text-black mt-2">{caption}</p>}
    </div>
  );
};

// Define custom components for Portable Text
export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }

      return (
        <figure className="my-8">
          <img
            src={(urlFor(value).width(800) as unknown as ChainableUrl).url()}
            alt={value.alt || 'Image'}
            className="rounded-lg"
            loading="lazy"
          />
          {value.caption && (
            <figcaption className="text-sm text-black mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    videoEmbed: ({ value }) => <VideoEmbed value={value} />,
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4 text-black">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-8 mb-4 text-black">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mt-6 mb-3 text-black">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold mt-4 mb-2 text-black">{children}</h4>,
    normal: ({ children }) => <p className="mb-4 leading-relaxed text-black text-lg">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-brand-rose pl-4 italic my-6 text-black">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-brand-rose hover:underline"
          target={!value.href.startsWith('/') ? '_blank' : undefined}
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm">
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },
};
