import { forwardRef, useEffect, useRef, useState, type RefObject } from "react";
import { motion } from "motion/react";
import { Play, Pause } from "lucide-react";
import svgPaths from "../../imports/svg-o8msnsnofx";
import imgBg from "figma:asset/fea052f26c11aeec3b284255c89c87d1ec54a8ed.png";
import imgTitle1 from "figma:asset/aa97184b78cc19a8201b076de18714abb5e92a4a.png";
import imgJesusHealsTheCrippledWoman1 from "figma:asset/58fd468a5dcfe4e0a04933d719da8770b8f5fa9f.png";
import imgMemoryVerse from "figma:asset/57a728b73006b2bec9bc05441c69d4807301de4b.png";
import comicVideoFive from "../../assets/comic 5.mp4";
import memoryVerseAudio from "../../assets/P6.mp3";

const BUTTON_BASE = "rounded-2xl px-8 py-4 shadow-2xl transition-all flex items-center gap-3 text-white font-bold";
const DEFAULT_PANEL_OFFSET = 820;

type PanelPlaybackButtonProps = {
  buttonGradient: string;
  isActive: boolean;
  onClick: () => void;
  playLabel: string;
  pauseLabel?: string;
  className?: string;
};

function PanelPlaybackButton({
  buttonGradient,
  isActive,
  onClick,
  playLabel,
  pauseLabel = "Pause",
  className = ""
}: PanelPlaybackButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`${BUTTON_BASE} bg-gradient-to-br ${buttonGradient} ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      aria-pressed={isActive}
    >
      {isActive ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7" />}
      <span>{isActive ? pauseLabel : playLabel}</span>
    </motion.button>
  );
}

type VideoPanelProps = {
  isVisible: boolean;
  panelId: number;
  buttonGradient: string;
  onTogglePlayback: () => void;
  isPanelPlaying: boolean;
  videoRef: RefObject<HTMLVideoElement | null>;
  videoSrc: string;
  containerClass: string;
};

function VideoPanel({
  isVisible,
  panelId,
  buttonGradient,
  onTogglePlayback,
  isPanelPlaying,
  videoRef,
  videoSrc,
  containerClass
}: VideoPanelProps) {
  return (
    <motion.div
      className={containerClass}
      data-name={`Comic ${panelId}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="w-full flex justify-end">
        <PanelPlaybackButton
          buttonGradient={buttonGradient}
          isActive={isPanelPlaying}
          onClick={onTogglePlayback}
          playLabel="Play Panel"
          pauseLabel="Pause Panel"
        />
      </div>

      <div className="relative w-full border-[12px] border-white rounded-[48px] overflow-hidden shadow-[0_40px_120px_rgba(38,16,74,0.35)] bg-black/80">
        <video
          ref={videoRef}
          className="block w-full h-auto"
          preload="auto"
          playsInline
          controls={false}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </motion.div>
  );
}

const TitleHeader = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="absolute content-stretch flex gap-[132px] items-center left-[146px] top-[150.48px] z-20"
    >
      <motion.div
        className="h-[340px] relative shrink-0 w-[649px]"
        data-name="Title 1"
        initial={{ opacity: 0, x: -50, rotate: -3 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
      >
        <img
          alt="Healing Adventures from the Bible - Luke 13:10-17"
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgTitle1}
        />
      </motion.div>
      <motion.div
        className="h-[372px] relative shrink-0 w-[675px]"
        data-name="Jesus Heals the Crippled Woman"
        initial={{ opacity: 0, x: 50, rotate: 3 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
      >
        <img
          alt="Jesus Heals the Crippled Woman"
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgJesusHealsTheCrippledWoman1}
        />
      </motion.div>
    </div>
  );
});

TitleHeader.displayName = "TitleHeader";

type MemoryVerseProps = {
  isPlaying: boolean;
  onToggle: () => void;
};

function MemoryVerse({ isPlaying, onToggle }: MemoryVerseProps) {
  return (
    <motion.div
      className="absolute left-1/2 top-[1886.57px] -translate-x-1/2 w-[992.5px] max-w-[95%] z-20 flex flex-col items-center gap-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      <div className="relative w-full" style={{ aspectRatio: "992.5 / 316.5" }}>
        <img
          alt="Memory Verse: So, if the Son sets you free, you will be free indeed. John 8:36"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
          src={imgMemoryVerse}
        />
      </div>
      <PanelPlaybackButton
        buttonGradient="from-sky-500 to-blue-700"
        isActive={isPlaying}
        onClick={onToggle}
        playLabel="Play Memory Verse"
        pauseLabel="Pause Memory Verse"
        className="text-base"
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
  const videoPanelRef = useRef<HTMLVideoElement | null>(null);
  const titleHeaderRef = useRef<HTMLDivElement | null>(null);
  const [panelVisible, setPanelVisible] = useState(false);
  const [isStoryPlaying, setIsStoryPlaying] = useState(false);
  const [isMemoryVersePlaying, setIsMemoryVersePlaying] = useState(false);
  const [panelOffset, setPanelOffset] = useState(DEFAULT_PANEL_OFFSET);
  const isMountedRef = useRef(true);
  const memoryVerseAudioRef = useRef<HTMLAudioElement | null>(null);

  const pauseVideo = () => {
    videoPanelRef.current?.pause();
  };

  const resetVideo = () => {
    if (videoPanelRef.current) {
      videoPanelRef.current.currentTime = 0;
    }
  };

  const stopMemoryVerseAudio = () => {
    const audio = memoryVerseAudioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setIsMemoryVersePlaying(false);
  };

  const playMemoryVerseAudio = async () => {
    const audio = memoryVerseAudioRef.current;
    if (!audio) return;
    try {
      await audio.play();
      if (isMountedRef.current) {
        setIsMemoryVersePlaying(true);
      }
    } catch (error) {
      console.error("Unable to play memory verse audio", error);
      if (isMountedRef.current) {
        setIsMemoryVersePlaying(false);
      }
    }
  };

  const handleMemoryVerseToggle = async () => {
    if (isMemoryVersePlaying) {
      stopMemoryVerseAudio();
      return;
    }

    pauseVideo();
    setIsStoryPlaying(false);
    stopMemoryVerseAudio();
    await playMemoryVerseAudio();
  };

  const playVideo = async () => {
    if (!videoPanelRef.current) return;
    stopMemoryVerseAudio();
    try {
      await videoPanelRef.current.play();
      if (isMountedRef.current) {
        setIsStoryPlaying(true);
      }
    } catch (error) {
      console.error("Unable to play Page 6 video", error);
      if (isMountedRef.current) {
        setIsStoryPlaying(false);
      }
    }
  };

  const isStoryActive = isStoryPlaying || isMemoryVersePlaying;

  const handleStoryToggle = async () => {
    if (isStoryActive) {
      pauseVideo();
      stopMemoryVerseAudio();
      setIsStoryPlaying(false);
      return;
    }

    resetVideo();
    await playVideo();
  };

  const handlePanelToggle = async () => {
    if (isStoryActive) {
      pauseVideo();
      stopMemoryVerseAudio();
      setIsStoryPlaying(false);
      return;
    }

    resetVideo();
    await playVideo();
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (isMountedRef.current) {
        setPanelVisible(true);
      }
    }, 600);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const updatePanelOffset = () => {
      const headerEl = titleHeaderRef.current;
      const parentEl = headerEl?.offsetParent as HTMLElement | null;
      if (!headerEl || !parentEl) {
        setPanelOffset(DEFAULT_PANEL_OFFSET);
        return;
      }

      const headerRect = headerEl.getBoundingClientRect();
      const parentRect = parentEl.getBoundingClientRect();
      const headerBottom = headerRect.bottom - parentRect.top;
      const safeOffset = Math.max(headerBottom + 80, DEFAULT_PANEL_OFFSET);
      setPanelOffset(safeOffset);
    };

    // Keep the comic panel pinned below the header even as the layout rescales.
    updatePanelOffset();
    window.addEventListener("resize", updatePanelOffset);

    const images = titleHeaderRef.current?.querySelectorAll<HTMLImageElement>("img") ?? [];
    const cleanup: Array<() => void> = [];
    images.forEach((img) => {
      if (img.complete) {
        return;
      }
      const handleLoad = () => updatePanelOffset();
      img.addEventListener("load", handleLoad);
      img.addEventListener("error", handleLoad);
      cleanup.push(() => {
        img.removeEventListener("load", handleLoad);
        img.removeEventListener("error", handleLoad);
      });
    });

    return () => {
      window.removeEventListener("resize", updatePanelOffset);
      cleanup.forEach((dispose) => dispose());
    };
  }, []);

  useEffect(() => {
    const video = videoPanelRef.current;
    if (!video) return;

    const handleEnded = () => {
      if (isMountedRef.current) {
        setIsStoryPlaying(false);
      }
      void playMemoryVerseAudio();
    };

    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const audio = new Audio(memoryVerseAudio);
    audio.preload = "auto";
    memoryVerseAudioRef.current = audio;

    const handleAudioEnded = () => {
      if (isMountedRef.current) {
        setIsMemoryVersePlaying(false);
      }
    };

    audio.addEventListener("ended", handleAudioEnded);

    return () => {
      audio.removeEventListener("ended", handleAudioEnded);
      audio.pause();
    };
  }, []);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
      pauseVideo();
      stopMemoryVerseAudio();
    };
  }, []);

  const buttonLabel = isStoryActive ? "PAUSE STORY" : "PLAY FULL STORY";
  const buttonIcon = isStoryActive ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />;

  return (
    <div className="bg-white relative size-full" data-name="6">
      <div className="absolute h-[2480px] left-0 top-0 w-[1754px] z-0" data-name="Background">
        <img alt="Background" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      </div>

      <TitleHeader ref={titleHeaderRef} />

      <div
        className="absolute left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-12 px-6"
        style={{ top: `${panelOffset}px`, width: "min(1455px, 95%)" }}
      >
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            onClick={handleStoryToggle}
            className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-white rounded-full px-12 py-5 shadow-[0_25px_60px_rgba(251,146,60,0.55)] border-4 border-white flex items-center gap-4 text-2xl font-black tracking-wide"
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            aria-pressed={isStoryActive}
            animate={isStoryActive ? {
              boxShadow: [
                "0 10px 40px rgba(251, 146, 60, 0.5)",
                "0 10px 60px rgba(251, 146, 60, 0.8)",
                "0 10px 40px rgba(251, 146, 60, 0.5)",
              ],
            } : {}}
            transition={{
              boxShadow: {
                duration: 1.5,
                repeat: isStoryActive ? Infinity : 0,
                ease: "easeInOut"
              }
            }}
          >
            {buttonIcon}
            <span>{buttonLabel}</span>
          </motion.button>
        </motion.div>

        <VideoPanel
          isVisible={panelVisible}
          panelId={1}
          buttonGradient="from-emerald-500 to-emerald-700"
          onTogglePlayback={handlePanelToggle}
          isPanelPlaying={isStoryActive}
          videoRef={videoPanelRef}
          videoSrc={comicVideoFive}
          containerClass="flex flex-col gap-6 w-full"
        />
      </div>

      <MemoryVerse isPlaying={isMemoryVersePlaying} onToggle={handleMemoryVerseToggle} />
      <Pagination />
    </div>
  );
}
