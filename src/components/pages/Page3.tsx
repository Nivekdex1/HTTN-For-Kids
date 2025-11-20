import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { motion } from 'motion/react';
import svgPaths from "../../imports/svg-kobx6qfc5s";

const videoSource = new URL('../../assets/page3.mp4', import.meta.url).href;

function Pagination() {
  return (
    <div className="absolute h-[42px] left-[calc(50%-0.087px)] top-[2385px] translate-x-[-50%] w-[43.826px] z-30" data-name="Pagination">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 42">
        <g id="Pagination">
          <rect fill="var(--fill-0, #FF0000)" height="42" rx="21" width="43.8261" />
          <g id="03">
            <path d={svgPaths.pc35e9f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p252ba900} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Page3() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    videoElement.loop = true;
    videoElement.autoplay = true;
    videoElement.playsInline = true;

    const playTimer = setTimeout(async () => {
      try {
        await videoElement.play();
        setIsPlaying(true);
        setAutoplayBlocked(false);
      } catch (err) {
        console.log('Auto-play blocked for Page 3 video:', err);
        setAutoplayBlocked(true);
        setIsPlaying(false);
      }
    }, 400);

    return () => {
      clearTimeout(playTimer);
      videoElement.pause();
    };
  }, []);

  const togglePlayback = async () => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (isPlaying) {
      videoElement.pause();
      setIsPlaying(false);
    } else {
      try {
        await videoElement.play();
        setIsPlaying(true);
        setAutoplayBlocked(false);
      } catch (err) {
        console.log('User-initiated play failed:', err);
        setAutoplayBlocked(true);
      }
    }
  };

  return (
    <div className="bg-black relative size-full" data-name="3">
      <video
        ref={videoRef}
        src={videoSource}
        className="absolute inset-0 size-full object-cover"
        playsInline
        loop
        preload="auto"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" aria-hidden />

      <Pagination />

      <motion.button
        onClick={togglePlayback}
        className="fixed bottom-32 right-8 z-50 pointer-events-auto bg-gradient-to-br from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform border-4 border-white"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        title={isPlaying ? 'Pause video narration' : 'Play video narration'}
      >
        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
      </motion.button>

      {autoplayBlocked && (
        <div className="fixed bottom-24 right-8 z-40 rounded-lg bg-white/90 px-4 py-2 text-sm text-gray-800 shadow-lg">
          Tap play to start the video with sound.
        </div>
      )}
    </div>
  );
}
