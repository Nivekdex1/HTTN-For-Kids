import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import svgPaths from "../../imports/svg-o8msnsnofx";
import imgImage24 from "figma:asset/343d41e8521997919dafeaea602342eeb1afd520.png";
import imgImage23 from "figma:asset/2f7fd107b4364e766dd950bbb92624b7fc92bdc5.png";
import imgImage22 from "figma:asset/f14a4bf4900d665fa98c33b77b12088e3965fc9c.png";
import imgTitle1 from "figma:asset/aa97184b78cc19a8201b076de18714abb5e92a4a.png";
import imgJesusHealsTheCrippledWoman1 from "figma:asset/58fd468a5dcfe4e0a04933d719da8770b8f5fa9f.png";
import imgImage26 from "figma:asset/fea052f26c11aeec3b284255c89c87d1ec54a8ed.png";
import imgImage25 from "figma:asset/57a728b73006b2bec9bc05441c69d4807301de4b.png";

// Narration content for Page 6
const narrationScripts = [
  {
    id: 1,
    text: "Jesus responds to the synagogue leader, You hypocrites! Doesn't each of you on the Sabbath untie your ox or donkey from the stall and lead it out to give it water? Then should not this woman, a daughter of Abraham, whom Satan has kept bound for eighteen long years, be set free on the Sabbath day from what binds her?",
    duration: 18000,
    voice: 'female'
  },
  {
    id: 2,
    text: "When he says this, all his opponents are humiliated, but the people delight in all the wonderful things he is doing.",
    duration: 8000,
    voice: 'female'
  },
  {
    id: 3,
    text: "Memory Verse: So, if the Son sets you free, you will be free indeed. John chapter 8, verse 36.",
    duration: 7000,
    voice: 'male'
  }
];

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
  const [showCaption, setShowCaption] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShowCaption(true), 1200);
      return () => clearTimeout(timer);
    } else {
      setShowCaption(false);
    }
  }, [isVisible]);

  return (
    <motion.div 
      className="absolute h-[1295px] left-[106px] top-[579px] w-[1502px] z-10" 
      data-name="Comic 6"
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Panel Audio Button */}
      <motion.button
        onClick={onPlayAudio}
        className="absolute -top-16 right-4 z-30 bg-gradient-to-br from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white rounded-2xl px-8 py-4 shadow-2xl transition-all flex items-center gap-3"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          scale: currentPlayingPanel === 1 && isPlaying ? [1, 1.05, 1] : 1,
          boxShadow: currentPlayingPanel === 1 && isPlaying 
            ? [
                "0 10px 40px rgba(22, 163, 74, 0.5)",
                "0 10px 60px rgba(22, 163, 74, 0.8)",
                "0 10px 40px rgba(22, 163, 74, 0.5)",
              ]
            : "0 10px 40px rgba(0, 0, 0, 0.3)"
        }}
        transition={{ 
          delay: 0.8,
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
        className="absolute h-[1033px] left-[43px] top-[201px] w-[1459px]" 
        data-name="image 24"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <img 
          alt="Jesus speaking to the crowd in the synagogue" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
          src={imgImage24} 
        />
      </motion.div>

      <motion.div 
        className="absolute h-[454px] left-[45px] top-0 w-[1455px]" 
        data-name="image 23"
        initial={{ opacity: 0, y: -30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img 
          alt="You hypocrites! Doesn't each of you on the Sabbath untie your ox or donkey..." 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full drop-shadow-2xl" 
          src={imgImage23} 
        />
      </motion.div>

      <AnimatePresence>
        {showCaption && (
          <motion.div 
            className="absolute h-[110px] left-[154px] top-[1144px] w-[1234px]" 
            data-name="image 22"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              alt="When he says this, all his opponents are humiliated, but the people delight" 
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
              src={imgImage22} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Frame({ 
  onAutoPlayToggle, 
  isAutoPlaying 
}: { 
  onAutoPlayToggle: () => void; 
  isAutoPlaying: boolean;
}) {
  return (
    <div className="absolute content-stretch flex gap-[132px] items-center left-[144px] top-[158px] z-10">
      <motion.div 
        className="h-[340px] relative shrink-0 w-[649px]" 
        data-name="Title 1"
        initial={{ opacity: 0, x: -50, rotate: -3 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
      >
        <img 
          alt="Healing Adventures from the Bible - Luke 13:10-17" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
          src={imgTitle1} 
        />
      </motion.div>
      <motion.div 
        className="h-[372px] relative shrink-0 w-[675px]" 
        data-name="Jesus Heals the Crippled Woman 1"
        initial={{ opacity: 0, x: 50, rotate: 3 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
      >
        <img 
          alt="Jesus Heals the Crippled Woman" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
          src={imgJesusHealsTheCrippledWoman1} 
        />
      </motion.div>
    </div>
  );
}

function MemoryVerse({ 
  onPlayAudio, 
  isPlaying,
  currentPlayingPanel 
}: { 
  onPlayAudio: () => void; 
  isPlaying: boolean;
  currentPlayingPanel: number | null;
}) {
  return (
    <motion.div 
      className="absolute h-[316.5px] left-[354.85px] top-[1886.57px] w-[992.5px] z-20"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    >
      {/* Memory Verse Audio Button */}
      <motion.button
        onClick={onPlayAudio}
        className="absolute -top-20 right-0 z-30 bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-2xl px-8 py-4 shadow-2xl transition-all flex items-center gap-3"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          scale: currentPlayingPanel === 3 && isPlaying ? [1, 1.05, 1] : 1,
          boxShadow: currentPlayingPanel === 3 && isPlaying 
            ? [
                "0 10px 40px rgba(37, 99, 235, 0.5)",
                "0 10px 60px rgba(37, 99, 235, 0.8)",
                "0 10px 40px rgba(37, 99, 235, 0.5)",
              ]
            : "0 10px 40px rgba(0, 0, 0, 0.3)"
        }}
        transition={{ 
          delay: 2,
          scale: {
            duration: 1.5,
            repeat: currentPlayingPanel === 3 && isPlaying ? Infinity : 0,
            ease: "easeInOut"
          },
          boxShadow: {
            duration: 1.5,
            repeat: currentPlayingPanel === 3 && isPlaying ? Infinity : 0,
            ease: "easeInOut"
          }
        }}
      >
        <motion.div
          animate={currentPlayingPanel !== 3 || !isPlaying ? { 
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0]
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {currentPlayingPanel === 3 && isPlaying ? (
            <VolumeX className="w-7 h-7" />
          ) : (
            <Volume2 className="w-7 h-7" />
          )}
        </motion.div>
        <span className="text-lg font-bold">
          {currentPlayingPanel === 3 && isPlaying ? 'Stop Verse' : 'Play Memory Verse'}
        </span>
      </motion.button>

      <img 
        alt="Memory Verse: So, if the Son sets you free, you will be free indeed. John 8:36" 
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
        src={imgImage25} 
      />
    </motion.div>
  );
}

function Pagination() {
  return (
    <div className="absolute h-[42px] left-[calc(50%-0.087px)] top-[2385px] translate-x-[-50%] w-[43.826px] z-30" data-name="Pagination">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 42">
        <g id="Pagination">
          <rect fill="var(--fill-0, #FF0000)" height="42" rx="21" width="43.8261" />
          <g id="06">
            <path d={svgPaths.pd5f9400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p29ad4f00} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Page6() {
  const [currentPanel, setCurrentPanel] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentPlayingPanel, setCurrentPlayingPanel] = useState<number | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const autoPlayStoppedRef = useRef(false);
  const isMountedRef = useRef(true);
  const timersRef = useRef<number[]>([]);

  // Get voice based on gender preference
  const getVoice = (gender: 'male' | 'female') => {
    const voices = window.speechSynthesis.getVoices();
    
    if (gender === 'male') {
      const maleVoice = voices.find(voice => 
        voice.lang.startsWith('en') && 
        (voice.name.toLowerCase().includes('male') || 
         voice.name.toLowerCase().includes('david') ||
         voice.name.toLowerCase().includes('daniel') ||
         voice.name.toLowerCase().includes('james'))
      );
      return maleVoice || voices.find(voice => voice.lang.startsWith('en')) || voices[0];
    } else {
      const femaleVoice = voices.find(voice => 
        voice.lang.startsWith('en') && 
        (voice.name.toLowerCase().includes('female') || 
         voice.name.toLowerCase().includes('zira') ||
         voice.name.toLowerCase().includes('samantha') ||
         voice.name.toLowerCase().includes('victoria'))
      );
      return femaleVoice || voices.find(voice => voice.lang.startsWith('en')) || voices[0];
    }
  };

  const speak = (text: string, panelId: number, voiceGender: 'male' | 'female' = 'female'): Promise<void> => {
    return new Promise((resolve, reject) => {
      if ('speechSynthesis' in window && isMountedRef.current) {
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        const selectedVoice = getVoice(voiceGender);
        
        if (selectedVoice) {
          utterance.voice = selectedVoice;
        }
        
        // Adjust rate and pitch based on voice gender
        if (voiceGender === 'male') {
          utterance.rate = 0.8;
          utterance.pitch = 0.9;
        } else {
          utterance.rate = 0.85;
          utterance.pitch = 1.1;
        }
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
        await speak(script.text, panelId, script.voice);
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
          await speak(script.text, script.id, script.voice);
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
      
      timersRef.current.push(timer1);
      
      return () => {
        clearTimeout(timer1);
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
    <div className="bg-white relative size-full" data-name="6">
      {/* Background - z-0 */}
      <div className="absolute h-[2480px] left-0 top-0 w-[1754px] z-0" data-name="image 26">
        <img alt="Background" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage26} />
      </div>

      {/* Content components */}
      <MemoryVerse 
        onPlayAudio={() => handlePanelAudio(3)}
        isPlaying={isSpeaking}
        currentPlayingPanel={currentPlayingPanel}
      />
      <Comic 
        isVisible={currentPanel !== null && currentPanel >= 0} 
        onPlayAudio={() => handlePanelAudio(1)}
        isPlaying={isSpeaking}
        currentPlayingPanel={currentPlayingPanel}
      />
      <Frame onAutoPlayToggle={handleAutoPlay} isAutoPlaying={isAutoPlaying} />
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
