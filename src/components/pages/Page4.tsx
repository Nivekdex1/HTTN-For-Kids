import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, X } from 'lucide-react';
import svgPaths from "../../imports/svg-r37e3lqi43";
import imgBg from "figma:asset/2b413809168f2a8f44334a5f662eff90d7c97ee4.png";

function Comic({ 
  isVisible, 
  panelId,
  videoSrc,
  videoRef,
  isPlaying
}: { 
  isVisible: boolean; 
  panelId: number;
  videoSrc: string;
  videoRef: React.RefObject<HTMLVideoElement>;
  isPlaying: boolean;
}) {
  return (
    <motion.div 
      className="absolute content-stretch flex flex-col items-start left-[calc(50%-0.5px)] top-[588px] translate-x-[-50%]" 
      data-name={`Comic ${panelId}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Comic panel with video */}
      <motion.div 
        className="h-[790px] relative shrink-0 w-[1455px]" 
        data-name="Video Panel"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <video 
          ref={videoRef}
          className="block max-w-none object-cover size-full" 
          controlsList="nodownload" 
          playsInline
        >
          <source src={videoSrc} />
        </video>
        
        {/* Playing indicator overlay */}
        {isPlaying && (
          <motion.div
            className="absolute top-4 right-4 bg-red-600/90 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="font-bold">Playing</span>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[42px] left-[calc(50%-0.087px)] top-[2385px] translate-x-[-50%] w-[43.826px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 42">
        <g id="Frame 36">
          <rect fill="var(--fill-0, #FF0000)" height="42" rx="21" width="43.8261" />
          <g id="04">
            <path d={svgPaths.p37a41a80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p30eb4d00} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Page4() {
  const [currentPanel, setCurrentPanel] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlayingPanel, setCurrentPlayingPanel] = useState<number | null>(null);
  const [showInstructionModal, setShowInstructionModal] = useState(false);
  const isMountedRef = useRef(true);
  const timersRef = useRef<number[]>([]);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  const playVideosSequentially = async () => {
    if (isPlaying) {
      // Stop playback
      setIsPlaying(false);
      setCurrentPlayingPanel(null);
      if (video1Ref.current) {
        video1Ref.current.pause();
        video1Ref.current.currentTime = 0;
      }
      if (video2Ref.current) {
        video2Ref.current.pause();
        video2Ref.current.currentTime = 0;
      }
    } else {
      // Start playback
      setIsPlaying(true);
      
      // Reveal both panels
      if (isMountedRef.current) {
        setCurrentPanel(0);
        setTimeout(() => {
          if (isMountedRef.current) {
            setCurrentPanel(1);
          }
        }, 800);
      }

      // Play first video
      if (video1Ref.current) {
        setCurrentPlayingPanel(1);
        video1Ref.current.currentTime = 0;
        try {
          await video1Ref.current.play();
        } catch (error) {
          console.error('Error playing video 1:', error);
          setIsPlaying(false);
          setCurrentPlayingPanel(null);
        }
      }
    }
  };

  const handleVideo1Ended = async () => {
    if (!isPlaying || !isMountedRef.current) return;
    
    // Play second video when first one ends
    if (video2Ref.current) {
      setCurrentPlayingPanel(2);
      video2Ref.current.currentTime = 0;
      try {
        await video2Ref.current.play();
      } catch (error) {
        console.error('Error playing video 2:', error);
        setIsPlaying(false);
        setCurrentPlayingPanel(null);
      }
    }
  };

  const handleVideo2Ended = () => {
    if (!isMountedRef.current) return;
    
    // Story complete
    setIsPlaying(false);
    setCurrentPlayingPanel(null);
  };

  // Set up video event listeners
  useEffect(() => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;

    if (video1) {
      video1.addEventListener('ended', handleVideo1Ended);
    }
    if (video2) {
      video2.addEventListener('ended', handleVideo2Ended);
    }

    return () => {
      if (video1) {
        video1.removeEventListener('ended', handleVideo1Ended);
      }
      if (video2) {
        video2.removeEventListener('ended', handleVideo2Ended);
      }
    };
  }, [isPlaying]);

  // Check modal display on mount
  useEffect(() => {
    const hasSeenInstructions = localStorage.getItem('page4InstructionsSeen');
    if (!hasSeenInstructions) {
      // Show modal after a brief delay
      const timer = window.setTimeout(() => {
        if (isMountedRef.current) {
          setShowInstructionModal(true);
        }
      }, 1500);
      timersRef.current.push(timer);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismissModal = () => {
    setShowInstructionModal(false);
    localStorage.setItem('page4InstructionsSeen', 'true');
  };

  // Sequential panel reveal on mount (if not playing)
  useEffect(() => {
    if (!isPlaying) {
      const timer1 = window.setTimeout(() => {
        if (isMountedRef.current) {
          setCurrentPanel(0);
        }
      }, 600);
      const timer2 = window.setTimeout(() => {
        if (isMountedRef.current) {
          setCurrentPanel(1);
        }
      }, 1800);
      
      timersRef.current.push(timer1, timer2);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [isPlaying]);

  // Cleanup on unmount
  useEffect(() => {
    isMountedRef.current = true;
    
    return () => {
      isMountedRef.current = false;
      
      // Clear all timers
      timersRef.current.forEach(timer => clearTimeout(timer));
      timersRef.current = [];
      
      // Pause videos
      if (video1Ref.current) {
        video1Ref.current.pause();
      }
      if (video2Ref.current) {
        video2Ref.current.pause();
      }
    };
  }, []);

  return (
    <div className="bg-white relative size-full" data-name="4">
      {/* Background - must be first with z-0 */}
      <div className="absolute h-[2480px] left-0 top-0 w-[1754px] z-0" data-name="BG">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Background" className="absolute h-[128.91%] left-[-36.66%] max-w-none top-[-16.21%] w-[273.37%]" src={imgBg} />
        </div>
      </div>
      
      {/* Two Comic panels with videos */}
      <Comic 
        isVisible={currentPanel !== null && currentPanel >= 0} 
        panelId={1}
        videoSrc="/_videos/v1/3569ce2b34dadfd78d8d2b336a0582c264b81304"
        videoRef={video1Ref}
        isPlaying={currentPlayingPanel === 1}
      />
      
      <Comic 
        isVisible={currentPanel !== null && currentPanel >= 1} 
        panelId={2}
        videoSrc="/_videos/v1/3569ce2b34dadfd78d8d2b336a0582c264b81304"
        videoRef={video2Ref}
        isPlaying={currentPlayingPanel === 2}
      />
      
      <Frame1 />

      {/* Main Playback Control */}
      <motion.div
        className="absolute top-16 left-1/2 -translate-x-1/2 z-40"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.button
          onClick={playVideosSequentially}
          className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-white rounded-full px-10 py-5 shadow-2xl transition-all flex items-center gap-4 border-4 border-white"
          whileHover={{ scale: 1.08, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          animate={isPlaying ? {
            boxShadow: [
              "0 10px 40px rgba(251, 146, 60, 0.5)",
              "0 10px 60px rgba(251, 146, 60, 0.8)",
              "0 10px 40px rgba(251, 146, 60, 0.5)",
            ],
          } : {}}
          transition={{
            boxShadow: {
              duration: 1.5,
              repeat: isPlaying ? Infinity : 0,
              ease: "easeInOut"
            }
          }}
        >
          {isPlaying ? (
            <>
              <Pause className="w-8 h-8" />
              <span className="text-2xl font-black">STOP STORY</span>
            </>
          ) : (
            <>
              <Play className="w-8 h-8" />
              <span className="text-2xl font-black">PLAY FULL STORY</span>
            </>
          )}
        </motion.button>
      </motion.div>

      {/* Instruction Modal */}
      <AnimatePresence>
        {showInstructionModal && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleDismissModal}
            />
            
            {/* Modal */}
            <motion.div
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white p-16 rounded-[40px] shadow-2xl z-50 max-w-5xl w-[90%] border-8 border-yellow-400"
              initial={{ opacity: 0, scale: 0.8, y: -50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              {/* Close Button */}
              <button
                onClick={handleDismissModal}
                className="absolute top-6 right-6 bg-red-500 hover:bg-red-600 rounded-full p-4 transition-colors shadow-lg"
                aria-label="Close instructions"
              >
                <X className="w-10 h-10" />
              </button>

              {/* Content */}
              <div className="text-center space-y-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <h2 className="text-6xl font-black mb-4 text-yellow-300 leading-tight">🎬 How to Watch<br/>the Story</h2>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-6"
                >
                  <p className="text-3xl leading-relaxed font-semibold">
                    Click <span className="font-black text-yellow-300 text-4xl bg-purple-950/50 px-4 py-2 rounded-xl inline-block">"PLAY FULL STORY"</span> to watch the videos play automatically with audio!
                  </p>
                  <p className="text-2xl text-purple-100 leading-relaxed font-medium">
                    The videos will play one after another. Sit back and enjoy! 🎥
                  </p>
                </motion.div>

                <motion.button
                  onClick={handleDismissModal}
                  className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-black text-3xl px-12 py-6 rounded-full transition-colors shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Got it! Let's Begin 🚀
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
