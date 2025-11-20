import { useState, useEffect, useRef, type RefObject } from "react";
import { motion } from "motion/react";
import { Play, Pause } from "lucide-react";
import svgPaths from "../../imports/svg-0eozkmxqgd";
import imgImage21 from "figma:asset/625faa7bdb865743835f93d71f6553bdec3184d0.png";
import comicVideoThree from "../../assets/comic 3.mp4";
import comicVideoFour from "../../assets/comic 4.mp4";

const BUTTON_BASE = "rounded-2xl px-8 py-4 shadow-2xl transition-all flex items-center gap-3 text-white font-bold";

type StoryStage = "idle" | "video1" | "video2" | "finished";


type PanelButtonProps = {
  buttonGradient: string;
  isPanelPlaying: boolean;
  onClick: () => void;
  label: string;
};

function PanelPlaybackButton({ buttonGradient, isPanelPlaying, onClick, label }: PanelButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`${BUTTON_BASE} bg-gradient-to-br ${buttonGradient}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      aria-pressed={isPanelPlaying}
    >
      {isPanelPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7" />}
      <span>{isPanelPlaying ? "Pause Panel" : label}</span>
    </motion.button>
  );
}

type VideoPanelProps = {
  isVisible: boolean;
  panelId: number;
  buttonGradient: string;
  onTogglePlayback: (panelId: number) => void;
  isPanelPlaying: boolean;
  videoRef: RefObject<HTMLVideoElement | null>;
  videoSrc: string;
  containerClass: string;
  videoWrapperClass?: string;
};

function VideoPanel({
  isVisible,
  panelId,
  buttonGradient,
  onTogglePlayback,
  isPanelPlaying,
  videoRef,
  videoSrc,
  containerClass,
  videoWrapperClass
}: VideoPanelProps) {
  return (
    <motion.div
      className={containerClass}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="w-full flex justify-end">
        <PanelPlaybackButton
          buttonGradient={buttonGradient}
          isPanelPlaying={isPanelPlaying}
          onClick={() => onTogglePlayback(panelId)}
          label="Play"
        />
          </div>
      <div className={`relative w-full ${videoWrapperClass ?? ""}`}>
        <div className="relative w-full border-[12px] border-white rounded-[48px] overflow-hidden shadow-[0_40px_120px_rgba(38,16,74,0.35)] bg-black/90">
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
      </div>
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
  const videoThreeRef = useRef<HTMLVideoElement | null>(null);
  const videoFourRef = useRef<HTMLVideoElement | null>(null);
  const [visiblePanels, setVisiblePanels] = useState(0);
  const [storyStage, setStoryStage] = useState<StoryStage>("idle");
  const [isStoryPlaying, setIsStoryPlaying] = useState(false);
  const [panelPlaying, setPanelPlaying] = useState<number | null>(null);
  const isMountedRef = useRef(true);
  const timersRef = useRef<number[]>([]);

  const pauseAllVideos = () => {
    videoThreeRef.current?.pause();
    videoFourRef.current?.pause();
  };

  const resetVideos = () => {
    if (videoThreeRef.current) {
      videoThreeRef.current.currentTime = 0;
    }
    if (videoFourRef.current) {
      videoFourRef.current.currentTime = 0;
    }
  };

  const handleStoryToggle = async () => {
    if (isStoryPlaying) {
      pauseAllVideos();
      setIsStoryPlaying(false);
      setPanelPlaying(null);
      return;
    }

    pauseAllVideos();
    resetVideos();
    setStoryStage("video1");
    setIsStoryPlaying(true);

    if (videoThreeRef.current) {
      try {
        await videoThreeRef.current.play();
        setPanelPlaying(1);
      } catch (error) {
        console.error("Unable to start first video", error);
        setIsStoryPlaying(false);
        setPanelPlaying(null);
      }
    }
  };

  const handlePanelToggle = async (panelId: number) => {
    setIsStoryPlaying(false);
    setStoryStage("idle");

    if (panelPlaying === panelId) {
      pauseAllVideos();
      setPanelPlaying(null);
      return;
    }

    pauseAllVideos();

    const targetRef = panelId === 1 ? videoThreeRef : videoFourRef;
    if (targetRef.current) {
      targetRef.current.currentTime = 0;
      try {
        await targetRef.current.play();
        setPanelPlaying(panelId);
      } catch (error) {
        console.error("Unable to play panel video", error);
        setPanelPlaying(null);
      }
    }
  };

  useEffect(() => {
    const timer1 = window.setTimeout(() => {
      if (isMountedRef.current) {
        setVisiblePanels(1);
      }
    }, 600);
    const timer2 = window.setTimeout(() => {
      if (isMountedRef.current) {
        setVisiblePanels(2);
      }
    }, 1800);

    timersRef.current.push(timer1, timer2);

    return () => {
      window.clearTimeout(timer1);
      window.clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const videoOne = videoThreeRef.current;
    if (!videoOne) return;

    const handleEnded = async () => {
      if (!isMountedRef.current) return;

      if (panelPlaying === 1) {
        setPanelPlaying(null);
      }

      if (isStoryPlaying) {
        setStoryStage("video2");
        if (videoFourRef.current) {
          videoFourRef.current.currentTime = 0;
          try {
            await videoFourRef.current.play();
            setPanelPlaying(2);
          } catch (error) {
            console.error("Unable to start second video", error);
            setIsStoryPlaying(false);
            setPanelPlaying(null);
          }
        }
      }
    };

    videoOne.addEventListener("ended", handleEnded);
    return () => {
      videoOne.removeEventListener("ended", handleEnded);
    };
  }, [isStoryPlaying, panelPlaying]);

  useEffect(() => {
    const videoTwo = videoFourRef.current;
    if (!videoTwo) return;

    const handleEnded = () => {
      if (!isMountedRef.current) return;
      if (panelPlaying === 2) {
        setPanelPlaying(null);
      }

      if (isStoryPlaying) {
        setIsStoryPlaying(false);
        setStoryStage("finished");
      }
    };

    videoTwo.addEventListener("ended", handleEnded);
    return () => {
      videoTwo.removeEventListener("ended", handleEnded);
    };
  }, [isStoryPlaying, panelPlaying]);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
      timersRef.current.forEach(timer => window.clearTimeout(timer));
      timersRef.current = [];
      pauseAllVideos();
    };
  }, []);

  const buttonLabel = isStoryPlaying ? "PAUSE STORY" : storyStage === "finished" ? "PLAY AGAIN" : "PLAY FULL STORY";
  const buttonIcon = isStoryPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />;

  return (
    <div className="bg-white relative size-full" data-name="5">
      {/* Background - z-0 */}
      <div className="absolute h-[2480px] left-0 top-0 w-[1754px] z-0" data-name="image 21">
        <img alt="Background" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage21} />
      </div>

      {/* Content components */}
      <VideoPanel
        isVisible={visiblePanels >= 2}
        panelId={2}
        buttonGradient="from-purple-600 to-purple-800"
        onTogglePlayback={handlePanelToggle}
        isPanelPlaying={panelPlaying === 2}
        videoRef={videoFourRef}
        videoSrc={comicVideoFour}
        containerClass="absolute flex flex-col items-end left-[150px] top-[1156px] w-[1455px] z-10 gap-8"
        videoWrapperClass="h-[1110px]"
      />

      <VideoPanel
        isVisible={visiblePanels >= 1}
        panelId={1}
        buttonGradient="from-red-600 to-red-800"
        onTogglePlayback={handlePanelToggle}
        isPanelPlaying={panelPlaying === 1}
        videoRef={videoThreeRef}
        videoSrc={comicVideoThree}
        containerClass="absolute flex flex-col items-center left-[139px] top-[153px] w-[1455px] z-10 gap-8"
        videoWrapperClass="h-[858px]"
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
          onClick={handleStoryToggle}
          className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-white rounded-full px-10 py-5 shadow-2xl transition-all flex items-center gap-4 border-4 border-white"
          whileHover={{ scale: 1.08, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          animate={isStoryPlaying ? {
            boxShadow: [
              "0 10px 40px rgba(251, 146, 60, 0.5)",
              "0 10px 60px rgba(251, 146, 60, 0.8)",
              "0 10px 40px rgba(251, 146, 60, 0.5)",
            ],
          } : {}}
          transition={{
            boxShadow: {
              duration: 1.5,
              repeat: isStoryPlaying ? Infinity : 0,
              ease: "easeInOut"
            }
          }}
        >
          {buttonIcon}
          <span className="text-2xl font-black">{buttonLabel}</span>
        </motion.button>
      </motion.div>
    </div>
  );
}
