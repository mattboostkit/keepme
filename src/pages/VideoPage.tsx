import React from 'react';
import { useParams } from 'react-router-dom';
import { useSanityDocumentById, useSanityDocuments } from '../lib/useSanity';
import { urlFor } from '../lib/sanity';

// Helper function to extract YouTube or Vimeo video ID
const getVideoId = (url: string) => {
  // YouTube
  let match = url.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/);
  if (match && match[1]) {
    return { platform: 'youtube', id: match[1] };
  }

  // Vimeo
  match = url.match(/(?:vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^/]*)\/videos\/|album\/(?:\d+)\/video\/|)(\d+)(?:$|\/|\?))/);
  if (match && match[1]) {
    return { platform: 'vimeo', id: match[1] };
  }

  return null;
};

// Define the Video interface
interface VideoType {
  _id: string;
  _type: string;
  title?: string;
  videoUrl: string;
  description?: string;
  thumbnail?: {
    asset: {
      _ref: string;
    };
  };
}

// Component to display a single video
const SingleVideoPage: React.FC = () => {
  // Get the ID from the URL
  const { id } = useParams<{ id: string }>();

  // Use our custom hook to fetch a single video by ID
  const { data: video, loading, error } = useSanityDocumentById<VideoType>(id || '');

  if (loading) return <div className="p-4">Loading video...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error.message}</div>;
  if (!video) return <div className="p-4">Video not found</div>;

  const videoInfo = getVideoId(video.videoUrl);

  if (!videoInfo) {
    return <div className="p-4 text-red-500">Invalid video URL</div>;
  }

  let embedUrl = '';
  if (videoInfo.platform === 'youtube') {
    embedUrl = `https://www.youtube.com/embed/${videoInfo.id}`;
  } else if (videoInfo.platform === 'vimeo') {
    embedUrl = `https://player.vimeo.com/video/${videoInfo.id}`;
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">{video.title}</h1>

      <div className="video-container my-8">
        <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full">
          <iframe
            src={embedUrl}
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.title || 'Video'}
          ></iframe>
        </div>
      </div>

      {video.description && (
        <div className="prose max-w-none mb-8">
          <p>{video.description}</p>
        </div>
      )}

      <div className="mt-8">
        <a
          href="/videos"
          className="px-4 py-2 bg-brand-rose text-white rounded-full hover:bg-brand-mauve transition-colors"
        >
          Back to all videos
        </a>
      </div>
    </div>
  );
};

// Component to display a list of all videos
const VideosListPage: React.FC = () => {
  // Use our custom hook to fetch all videos
  const { data: videos, loading, error } = useSanityDocuments<VideoType>('video');

  if (loading) return <div className="p-4">Loading videos...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error.message}</div>;
  if (!videos || videos.length === 0) return <div className="p-4">No videos found</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Videos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video._id} className="border rounded-lg overflow-hidden shadow-md">
            <div className="relative pb-[56.25%] h-0 overflow-hidden">
              {video.thumbnail ? (
                <img
                  src={urlFor(video.thumbnail).width(600).height(338).url()}
                  alt={video.title || 'Video thumbnail'}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute top-0 left-0 w-full h-full bg-gray-200 flex items-center justify-center">
                  <span>No thumbnail</span>
                </div>
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white bg-opacity-75 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-red-600 border-b-8 border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
              {video.description && (
                <p className="text-gray-700 mb-4 line-clamp-2">{video.description}</p>
              )}
              <a
                href={`/video/${video._id}`}
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Watch Video
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { VideosListPage, SingleVideoPage };
