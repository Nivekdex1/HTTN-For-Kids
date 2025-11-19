import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';
import svgPaths from "../../imports/svg-kobx6qfc5s";
import imgAnimateThisCharacter2025110913331 from "figma:asset/990777126fef31e8e933864f8f566f9ab216c2b7.png";
import imgImage12 from "figma:asset/049a00b00444c80a7b0a6af12f5d99687b8f3a29.png";
import imgImage29 from "figma:asset/ac26a9e2c88e5d8066bb0142b09917147b99d160.png";
import imgImage11 from "figma:asset/b556745659e98264d6da7e13b006d3103255e2bc.png";
import imgImage10 from "figma:asset/2dc35538354a9a3bf8a52f1eedbcaf6eaaf6fcab.png";

function Top() {
  return (
    <div className="absolute left-0 size-[0.01px] top-0 z-20" data-name="Top">
      <motion.div
        className="absolute left-[828px] size-[904px] top-[95px]"
        data-name="Animate_this_character_202511091333 1"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img 
          key="pastor-chris-gif" 
          alt="Pastor Chris animated" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
          src={imgAnimateThisCharacter2025110913331}
          loading="eager"
        />
      </motion.div>
      <motion.div
        className="absolute h-[677.5px] left-[calc(50%+512.028px)] top-[149.63px] translate-x-[-50%] w-[695.5px]"
        data-name="image 12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage12} />
      </motion.div>
    </div>
  );
}

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
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {
    // Initialize audio for Pastor Chris voiceover
    audioRef.current = new Audio();
  // Resolve audio from `src/assets` (you currently have the file at src/assets/pastor-chris-voiceover.mp3)
  // Use import.meta URL so Vite resolves the correct bundled path.
  const audioSrc = new URL('../../assets/pastor-chris-voiceover.mp3', import.meta.url).href;
  audioRef.current.src = audioSrc;
  // Set a reasonable default volume
  audioRef.current.volume = 0.95;
  // helpful debug when testing: uncomment to log the resolved URL
  // console.log('Page3 audioSrc ->', audioSrc);
    audioRef.current.loop = false;

    // Auto-play voiceover when page loads
    const playTimer = setTimeout(async () => {
      try {
        await audioRef.current?.play();
        setIsPlaying(true);
        setAutoplayBlocked(false);
      } catch (err) {
        // Autoplay blocked or resource missing — show UI so user can start playback.
        console.log('Auto-play blocked or no audio file:', err);
        setAutoplayBlocked(true);
        setIsPlaying(false);
      }
    }, 800); // Delay to let animations start
    
    return () => {
      clearTimeout(playTimer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlayback = async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setAutoplayBlocked(false);
      } catch (err) {
        console.log('User-initiated play failed:', err);
        setAutoplayBlocked(true);
      }
    }
  };

  return (
    <div className="bg-white relative size-full" data-name="3">
      {/* Background image - z-0 */}
      <div className="absolute h-[2480px] left-0 top-0 w-[1754px] z-0" data-name="image 29">
        <img alt="Background" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage29} />
      </div>
      <motion.div
        className="absolute h-[984px] left-[143px] top-[1154px] w-[1483px] z-10"
        data-name="image 11"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[217.28%] left-[-9.64%] max-w-none top-[-117.28%] w-[109.64%]" src={imgImage11} />
        </div>
      </motion.div>
      <Top />
      <motion.div
        className="absolute h-[296px] left-[143px] top-[858px] w-[1420px] z-20"
        data-name="image 10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage10} />
      </motion.div>
      <Pagination />

      {/* Play / Pause control for Pastor Chris voiceover */}
      <motion.button
        onClick={togglePlayback}
        className="fixed bottom-32 right-8 z-50 pointer-events-auto bg-gradient-to-br from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform border-4 border-white"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        title={isPlaying ? 'Pause voiceover' : 'Play voiceover'}
      >
        {isPlaying ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}
