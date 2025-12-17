import { Play } from "lucide-react";

interface VideoThumbnailProps {
  thumbnailSrc: string;
  title?: string;
  onClick?: () => void;
}

const VideoThumbnail = ({ thumbnailSrc, title, onClick }: VideoThumbnailProps) => {
  return (
    <div 
      className="relative w-full max-w-4xl mx-auto cursor-pointer group"
      onClick={onClick}
    >
      {/* Video thumbnail container with aspect ratio */}
      <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
        {/* Blurred thumbnail image */}
        <img 
          src={thumbnailSrc}
          alt={title || "Video thumbnail"}
          className="w-full h-full object-cover"
        />
        
        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-background/20 group-hover:bg-background/30 transition-colors duration-300" />
        
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-play-button flex items-center justify-center group-hover:bg-play-button-hover group-hover:scale-110 transition-all duration-300 shadow-lg">
            <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground fill-primary-foreground ml-1" />
          </div>
        </div>
      </div>
      
      {/* Optional title */}
      {title && (
        <h2 className="mt-4 text-xl md:text-2xl font-semibold text-foreground text-center">
          {title}
        </h2>
      )}
    </div>
  );
};

export default VideoThumbnail;
