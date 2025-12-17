import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import VideoThumbnail from "@/components/VideoThumbnail";

const videos = [
  { id: "1", title: "Video 1", thumbnail: "/images/video-thumbnail.png" },
  { id: "2", title: "Video 2", thumbnail: "/images/video-thumbnail.png" },
  { id: "3", title: "Video 3", thumbnail: "/images/video-thumbnail.png" },
];

const Index = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';

  return (
    <>
      <Helmet>
        <title>Video Gallery</title>
        <meta name="description" content="Browse and watch exclusive video content" />
        <meta property="og:title" content="Video Gallery" />
        <meta property="og:description" content="Browse and watch exclusive video content" />
        <meta property="og:image" content={`${baseUrl}/images/video-thumbnail.png`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Video Gallery" />
        <meta name="twitter:description" content="Browse and watch exclusive video content" />
        <meta name="twitter:image" content={`${baseUrl}/images/video-thumbnail.png`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Video Gallery
            </h1>
            <p className="text-muted-foreground">
              Select a video to watch
            </p>
          </header>

          {/* Video grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <Link 
                key={video.id} 
                to={`/video/${video.id}`}
                className="block transform hover:scale-[1.02] transition-transform duration-300"
              >
                <VideoThumbnail 
                  thumbnailSrc={video.thumbnail}
                  title={video.title}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
