import homevideo from "../assets/hero/herovideo1.mp4";

const LazyVideo = () => {
  return (
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src={homevideo}
      autoPlay
      loop
      muted
      playsInline
      preload="none" // Improves performance by loading video only when needed
    />
  );
};

export default LazyVideo;
