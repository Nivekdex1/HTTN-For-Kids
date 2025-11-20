import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';
import imgBg from "figma:asset/f38a37dc9e5b322c2fcd7aa63b5238408097f202.png";
import dennisMiracleVideo from "../../assets/Dennis' miracle.mp4";

function Pagination() {
  return (
    <div className="absolute bg-[red] box-border content-stretch flex gap-[6.087px] h-[42px] items-center justify-center left-[calc(50%-0.087px)] p-[6.087px] rounded-[60.87px] top-[2385px] translate-x-[-50%] w-[43.826px]" data-name="Pagination">
      <p className="font-['Comic_Sans_MS:Bold',sans-serif] leading-[29.318px] not-italic relative shrink-0 text-[25.653px] text-center text-nowrap text-white whitespace-pre">10</p>
    </div>
  );
}

export default function Page10() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 0.9;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handlePause);

    const autoplay = async () => {
      try {
        await video.play();
      } catch (err) {
        console.warn("Auto-play blocked for Dennis' Miracle video", err);
      }
    };

    autoplay();

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handlePause);
      video.pause();
    };
  }, []);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch (err) {
        console.warn("Unable to play Dennis' Miracle video", err);
      }
    } else {
      video.pause();
    }
  };

  return (
    <>
      {/* Main Page Content */}
      <div className="bg-white relative size-full" data-name="10">
        <div className="absolute h-[2480px] left-0 top-0 w-[1754px]" data-name="BG">
          <img alt="Background" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBg} />
        </div>
        <motion.div
          className="absolute inset-0 z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative size-full border-[12px] border-white rounded-[48px] overflow-hidden shadow-[0_40px_120px_rgba(38,16,74,0.35)] bg-black">
            <video
              ref={videoRef}
              className="block size-full object-cover"
              controls={false}
              playsInline
              preload="auto"
            >
              <source src={dennisMiracleVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
        <Pagination />
      </div>

      {/* Voiceover Control Button - Outside Magazine Container */}
      <motion.button
        onClick={togglePlayback}
        className="fixed bottom-32 right-8 z-50 pointer-events-auto bg-gradient-to-br from-purple-600 to-pink-600 text-white p-6 rounded-full shadow-2xl hover:scale-110 transition-transform border-4 border-white"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        title={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <VolumeX className="w-10 h-10" />
        ) : (
          <Volume2 className="w-10 h-10" />
        )}
      </motion.button>
    </>
  );
}
