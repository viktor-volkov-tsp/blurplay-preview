import { Helmet } from "react-helmet-async";
import VideoThumbnail from "@/components/VideoThumbnail";
import { toast } from "@/hooks/use-toast";

// ========== EDIT YOUR VIDEO DETAILS HERE ==========
const VIDEO_TITLE = "42:36";
const VIDEO_DESCRIPTION = "Watch the full video.";
const VIDEO_THUMBNAIL = "/images/video-thumbnail.png";
// ==================================================

const VideoPage = () => {
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
        <title>{VIDEO_TITLE}</title>
        <meta name="description" content={VIDEO_DESCRIPTION} />
        <meta property="og:title" content={VIDEO_TITLE} />
        <meta property="og:description" content={VIDEO_DESCRIPTION} />
        <meta property="og:image" content={`${baseUrl}${VIDEO_THUMBNAIL}`} />
        <meta property="og:type" content="video.other" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={VIDEO_TITLE} />
        <meta name="twitter:description" content={VIDEO_DESCRIPTION} />
        <meta name="twitter:image" content={`${baseUrl}${VIDEO_THUMBNAIL}`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <VideoThumbnail 
            thumbnailSrc={VIDEO_THUMBNAIL}
            title={VIDEO_TITLE}
            onClick={handlePlay}
          />

          <p className="mt-6 text-center text-muted-foreground max-w-2xl mx-auto">
            {VIDEO_DESCRIPTION}
          </p>
        </div>
      </div>
    </>
  );
};

export default VideoPage;
