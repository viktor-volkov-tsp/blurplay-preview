import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import VideoThumbnail from "@/components/VideoThumbnail";
import { toast } from "@/hooks/use-toast";

// Video data - can be expanded for more videos
const videoData: Record<string, { title: string; description: string; thumbnail: string }> = {
  "1": {
    title: "Video 1",
    description: "Watch this exclusive video content",
    thumbnail: "/images/video-thumbnail.png"
  },
  "2": {
    title: "Video 2", 
    description: "Another exciting video to watch",
    thumbnail: "/images/video-thumbnail.png"
  },
  "3": {
    title: "Video 3",
    description: "Premium video content",
    thumbnail: "/images/video-thumbnail.png"
  }
};

const VideoPage = () => {
  const { id } = useParams<{ id: string }>();
  const video = id ? videoData[id] : null;

  if (!video) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">Video not found</h1>
        </div>
      </div>
    );
  }

  const handlePlay = () => {
    toast({
      title: "Play clicked",
      description: "Video playback would start here",
    });
  };

  const baseUrl = window.location.origin;

  return (
    <>
      <Helmet>
        <title>{video.title}</title>
        <meta name="description" content={video.description} />
        <meta property="og:title" content={video.title} />
        <meta property="og:description" content={video.description} />
        <meta property="og:image" content={`${baseUrl}${video.thumbnail}`} />
        <meta property="og:type" content="video.other" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={video.title} />
        <meta name="twitter:description" content={video.description} />
        <meta name="twitter:image" content={`${baseUrl}${video.thumbnail}`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Video player */}
          <VideoThumbnail 
            thumbnailSrc={video.thumbnail}
            title={video.title}
            onClick={handlePlay}
          />

          {/* Video description */}
          <p className="mt-6 text-center text-muted-foreground max-w-2xl mx-auto">
            {video.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default VideoPage;
