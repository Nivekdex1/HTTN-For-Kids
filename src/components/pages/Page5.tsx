import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import svgPaths from "../../imports/svg-0eozkmxqgd";
import imgImage20 from "figma:asset/bdc078fa503ed889195975b7e40e324b0b4796ac.png";
import imgImage19 from "figma:asset/a07b66fd1223858ce903554807a8af1c01ba5ec0.png";
import imgImage18 from "figma:asset/97d75d1021e2fb5834f224335a336fbc5096c281.png";
import imgImage16 from "figma:asset/20c1d0b0b227feb93dd5b967772d7ccdffbea91f.png";
import imgImage17 from "figma:asset/e9fd8e6dcdd8572c25c668faa031e65cf5492777.png";
import imgImage21 from "figma:asset/625faa7bdb865743835f93d71f6553bdec3184d0.png";

// Narration content for Page 5
const narrationScripts = [
  {
    id: 1,
    text: "Then he puts his hands on her, and immediately she straightens up and praises God.",
    duration: 7000
  },
  {
    id: 2,
    text: "Angry because Jesus heals on the Sabbath, which is a day meant for rest, the synagogue leader says to the people, There are six days for work. So come and be healed on those days, not on the Sabbath.",
    duration: 14000
  }
];

function Frame({ 
  isVisible, 
  onPlayAudio, 
  isPlaying, 
  currentPlayingPanel 
}: { 
  isVisible: boolean; 
  onPlayAudio: () => void; 
  isPlaying: boolean;
  currentPlayingPanel: number | null;
}) {
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShowSpeechBubble(true), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowSpeechBubble(false);
    }
  }, [isVisible]);

  return (
    <div className="h-[1110px] relative shrink-0 w-full">
      <motion.div 
        className="absolute h-[1110px] left-0 top-0 w-[1455px]" 
        data-name="image 20"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <img 
          alt="Synagogue leader speaking to the people" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
          src={imgImage20} 
        />
      </motion.div>

      {/* Speech Bubble with Animation */}
      <AnimatePresence>
        {showSpeechBubble && (
          <motion.div 
            className="absolute h-[163px] left-[503px] top-[29px] w-[824px] z-10" 
            data-name="image 19"
            initial={{ scale: 0, opacity: 0, rotate: -10 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              rotate: 0,
              y: [0, -5, 0]
            }}
            exit={{ scale: 0, opacity: 0, rotate: 10 }}
            transition={{ 
              scale: { type: 'spring', stiffness: 300, damping: 20 },
              opacity: { duration: 0.3 },
              rotate: { duration: 0.4 },
              y: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <img 
              alt="There are six days for work. So come and be healed on those days, not on the Sabbath." 
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full drop-shadow-2xl" 
              src={imgImage19} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Comic1({ 
  isVisible, 
  onPlayAudio, 
  isPlaying,
  currentPlayingPanel 
}: { 
  isVisible: boolean; 
  onPlayAudio: () => void; 
  isPlaying: boolean;
  currentPlayingPanel: number | null;
}) {
  return (
    <motion.div 
      className="absolute content-stretch flex flex-col items-end left-[150px] top-[1156px] w-[1455px] z-10" 
      data-name="Comic 6"
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Panel Audio Button */}
      <motion.button
        onClick={onPlayAudio}
        className="absolute -top-16 right-4 z-30 bg-gradient-to-br from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white rounded-2xl px-8 py-4 shadow-2xl transition-all flex items-center gap-3"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          scale: currentPlayingPanel === 2 && isPlaying ? [1, 1.05, 1] : 1,
          boxShadow: currentPlayingPanel === 2 && isPlaying 
            ? [
                "0 10px 40px rgba(147, 51, 234, 0.5)",
                "0 10px 60px rgba(147, 51, 234, 0.8)",
                "0 10px 40px rgba(147, 51, 234, 0.5)",
              ]
            : "0 10px 40px rgba(0, 0, 0, 0.3)"
        }}
        transition={{ 
          delay: 0.8,
          scale: {
            duration: 1.5,
            repeat: currentPlayingPanel === 2 && isPlaying ? Infinity : 0,
            ease: "easeInOut"
          },
          boxShadow: {
            duration: 1.5,
            repeat: currentPlayingPanel === 2 && isPlaying ? Infinity : 0,
            ease: "easeInOut"
          }
        }}
      >
        <motion.div
          animate={currentPlayingPanel !== 2 || !isPlaying ? { 
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0]
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {currentPlayingPanel === 2 && isPlaying ? (
            <VolumeX className="w-7 h-7" />
          ) : (
            <Volume2 className="w-7 h-7" />
          )}
        </motion.div>
        <span className="text-lg font-bold">
          {currentPlayingPanel === 2 && isPlaying ? 'Stop Audio' : 'Play Panel Audio'}
        </span>
      </motion.button>

      <motion.div 
        className="h-[113px] relative shrink-0 w-[1455px]" 
        data-name="image 18"
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img 
          alt="Angry because Jesus heals on the Sabbath" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
          src={imgImage18} 
        />
      </motion.div>
      <Frame 
        isVisible={isVisible} 
        onPlayAudio={onPlayAudio} 
        isPlaying={isPlaying}
        currentPlayingPanel={currentPlayingPanel}
      />
    </motion.div>
  );
}

function Comic({ 
  isVisible, 
  onPlayAudio, 
  isPlaying,
  currentPlayingPanel 
}: { 
  isVisible: boolean; 
  onPlayAudio: () => void; 
  isPlaying: boolean;
  currentPlayingPanel: number | null;
}) {
  return (
    <motion.div 
      className="absolute content-stretch flex flex-col items-center left-[139px] top-[153px] w-[1455px] z-10" 
      data-name="Comic 5"
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Panel Audio Button */}
      <motion.button
        onClick={onPlayAudio}
        className="absolute -top-16 right-4 z-30 bg-gradient-to-br from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white rounded-2xl px-8 py-4 shadow-2xl transition-all flex items-center gap-3"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          scale: currentPlayingPanel === 1 && isPlaying ? [1, 1.05, 1] : 1,
          boxShadow: currentPlayingPanel === 1 && isPlaying 
            ? [
                "0 10px 40px rgba(220, 38, 38, 0.5)",
                "0 10px 60px rgba(220, 38, 38, 0.8)",
                "0 10px 40px rgba(220, 38, 38, 0.5)",
              ]
            : "0 10px 40px rgba(0, 0, 0, 0.3)"
        }}
        transition={{ 
          delay: 0.5,
          scale: {
            duration: 1.5,
            repeat: currentPlayingPanel === 1 && isPlaying ? Infinity : 0,
            ease: "easeInOut"
          },
          boxShadow: {
            duration: 1.5,
            repeat: currentPlayingPanel === 1 && isPlaying ? Infinity : 0,
            ease: "easeInOut"
          }
        }}
      >
        <motion.div
          animate={currentPlayingPanel !== 1 || !isPlaying ? { 
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0]
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {currentPlayingPanel === 1 && isPlaying ? (
            <VolumeX className="w-7 h-7" />
          ) : (
            <Volume2 className="w-7 h-7" />
          )}
        </motion.div>
        <span className="text-lg font-bold">
          {currentPlayingPanel === 1 && isPlaying ? 'Stop Audio' : 'Play Panel Audio'}
        </span>
      </motion.button>

      <motion.div 
        className="h-[72px] relative shrink-0 w-[1455px]" 
        data-name="image 16"
        initial={{ opacity: 0, x: -40 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img 
          alt="...and immediately she straightens up and praises God." 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
          src={imgImage16} 
        />
      </motion.div>
      <motion.div 
        className="h-[858px] relative shrink-0 w-[1455px]" 
        data-name="image 17"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <img 
          alt="Woman straightening up and praising God" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
          src={imgImage17} 
        />
      </motion.div>
    </motion.div>
  );
}

function Pagination() {
  return (
    <div className="absolute h-[42px] left-[calc(50%-0.087px)] top-[2385px] translate-x-[-50%] w-[43.826px] z-30" data-name="Pagination">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 42">
        <g id="Pagination">
          <rect fill="var(--fill-0, #FF0000)" height="42" rx="21" width="43.8261" />
          <g id="05">
            <path d={svgPaths.pb828000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p16fe9e70} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Page5() {
  const [currentPanel, setCurrentPanel] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentPlayingPanel, setCurrentPlayingPanel] = useState<number | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const autoPlayStoppedRef = useRef(false);
  const isMountedRef = useRef(true);
  const timersRef = useRef<number[]>([]);

  // Get female voice
  const getFemaleVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(voice => 
      voice.lang.startsWith('en') && 
      (voice.name.toLowerCase().includes('female') || 
       voice.name.toLowerCase().includes('zira') ||
       voice.name.toLowerCase().includes('samantha') ||
       voice.name.toLowerCase().includes('victoria'))
    );
    return femaleVoice || voices.find(voice => voice.lang.startsWith('en')) || voices[0];
  };

  const speak = (text: string, panelId: number): Promise<void> => {
    return new Promise((resolve, reject) => {
      if ('speechSynthesis' in window && isMountedRef.current) {
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        const femaleVoice = getFemaleVoice();
        
        if (femaleVoice) {
          utterance.voice = femaleVoice;
        }
        
        utterance.rate = 0.85;
        utterance.pitch = 1.1;
        utterance.volume = 1;

        utterance.onstart = () => {
          if (isMountedRef.current) {
            setIsSpeaking(true);
            setCurrentPlayingPanel(panelId);
          }
        };

        utterance.onend = () => {
          if (isMountedRef.current) {
            setIsSpeaking(false);
            setCurrentPlayingPanel(null);
          }
          resolve();
        };

        utterance.onerror = () => {
          if (isMountedRef.current) {
            setIsSpeaking(false);
            setCurrentPlayingPanel(null);
          }
          reject();
        };

        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
      } else {
        resolve();
      }
    });
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setCurrentPlayingPanel(null);
    }
  };

  const handlePanelAudio = async (panelId: number) => {
    if (currentPlayingPanel === panelId && isSpeaking) {
      stopSpeaking();
    } else {
      const script = narrationScripts.find(s => s.id === panelId);
      if (script) {
        await speak(script.text, panelId);
      }
    }
  };

  const handleAutoPlay = async () => {
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      autoPlayStoppedRef.current = true;
      stopSpeaking();
    } else {
      setIsAutoPlaying(true);
      autoPlayStoppedRef.current = false;
      if (isMountedRef.current) {
        setCurrentPanel(0);
      }
      
      for (let i = 0; i < narrationScripts.length; i++) {
        if (autoPlayStoppedRef.current || !isMountedRef.current) break;
        
        if (isMountedRef.current) {
          setCurrentPanel(i);
        }
        const script = narrationScripts[i];
        
        try {
          await speak(script.text, script.id);
          if (i < narrationScripts.length - 1 && !autoPlayStoppedRef.current && isMountedRef.current) {
            await new Promise(resolve => {
              const timer = window.setTimeout(resolve, 800);
              timersRef.current.push(timer);
            });
          }
        } catch (error) {
          console.error('Speech error:', error);
          break;
        }
      }
      
      if (!autoPlayStoppedRef.current && isMountedRef.current) {
        setIsAutoPlaying(false);
      }
    }
  };

  // Load voices on mount
  useEffect(() => {
    if ('speechSynthesis' in window) {
      const loadVoices = () => {
        window.speechSynthesis.getVoices();
      };
      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  // Sequential panel reveal on mount
  useEffect(() => {
    if (!isAutoPlaying) {
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
  }, [isAutoPlaying]);

  // Cleanup on unmount - stop all speech synthesis and timers
  useEffect(() => {
    isMountedRef.current = true;
    
    return () => {
      isMountedRef.current = false;
      autoPlayStoppedRef.current = true;
      
      // Clear all timers
      timersRef.current.forEach(timer => clearTimeout(timer));
      timersRef.current = [];
      
      // Stop speech synthesis
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <div className="bg-white relative size-full" data-name="5">
      {/* Background - z-0 */}
      <div className="absolute h-[2480px] left-0 top-0 w-[1754px] z-0" data-name="image 21">
        <img alt="Background" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage21} />
      </div>

      {/* Content components */}
      <Comic1 
        isVisible={currentPanel !== null && currentPanel >= 1} 
        onPlayAudio={() => handlePanelAudio(2)}
        isPlaying={isSpeaking}
        currentPlayingPanel={currentPlayingPanel}
      />
      <Comic 
        isVisible={currentPanel !== null && currentPanel >= 0} 
        onPlayAudio={() => handlePanelAudio(1)}
        isPlaying={isSpeaking}
        currentPlayingPanel={currentPlayingPanel}
      />
      <Pagination />

      {/* Main Playback Control */}
      <motion.div
        className="absolute top-16 left-1/2 -translate-x-1/2 z-40"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.button
          onClick={handleAutoPlay}
          className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-white rounded-full px-10 py-5 shadow-2xl transition-all flex items-center gap-4 border-4 border-white"
          whileHover={{ scale: 1.08, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          animate={isAutoPlaying ? {
            boxShadow: [
              "0 10px 40px rgba(251, 146, 60, 0.5)",
              "0 10px 60px rgba(251, 146, 60, 0.8)",
              "0 10px 40px rgba(251, 146, 60, 0.5)",
            ],
          } : {}}
          transition={{
            boxShadow: {
              duration: 1.5,
              repeat: isAutoPlaying ? Infinity : 0,
              ease: "easeInOut"
            }
          }}
        >
          {isAutoPlaying ? (
            <>
              <Pause className="w-8 h-8" />
              <span className="text-2xl font-black">PAUSE STORY</span>
            </>
          ) : (
            <>
              <Play className="w-8 h-8" />
              <span className="text-2xl font-black">PLAY FULL STORY</span>
            </>
          )}
        </motion.button>
      </motion.div>
    </div>
  );
}
