import { useEffect, useRef, useState, type RefObject } from "react";
import { motion } from "motion/react";
import { Play, Pause } from "lucide-react";
import svgPaths from "../../imports/svg-r37e3lqi43";
import imgBg from "figma:asset/2b413809168f2a8f44334a5f662eff90d7c97ee4.png";
import imgTitle1 from "figma:asset/aa97184b78cc19a8201b076de18714abb5e92a4a.png";
import imgJesusHealsTheCrippledWoman1 from "figma:asset/58fd468a5dcfe4e0a04933d719da8770b8f5fa9f.png";
import comicVideoOne from "../../assets/comic 1.mp4";
import comicVideoTwo from "../../assets/comic 2.mp4";

function TitleHeader() {
  return (
    <div className="absolute content-stretch flex gap-[132px] items-center left-[146px] top-[150.48px] z-10">
      <div className="h-[340px] relative shrink-0 w-[649px]" data-name="Title 1">
        <img alt="Title" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTitle1} />
      </div>
      <div className="h-[372px] relative shrink-0 w-[675px]" data-name="Subtitle">
        <img alt="Jesus Heals" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgJesusHealsTheCrippledWoman1} />
      </div>
    </div>
  );
}

const PANEL_BUTTON_BASE = "rounded-2xl px-8 py-4 shadow-2xl transition-all flex items-center gap-3 text-white font-bold";

type VideoPanelProps = {
  videoRef: RefObject<HTMLVideoElement | null>;
  videoSrc: string;
  panelId: number;
  onTogglePlayback: (panelId: number) => void;
  isPanelPlaying: boolean;
  buttonGradient: string;
};

function VideoPanel({ videoRef, videoSrc, panelId, onTogglePlayback, isPanelPlaying, buttonGradient }: VideoPanelProps) {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex justify-end">
        <motion.button
          onClick={() => onTogglePlayback(panelId)}
          className={`${PANEL_BUTTON_BASE} bg-gradient-to-br ${buttonGradient}`}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-pressed={isPanelPlaying}
        >
          {isPanelPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7" />}
          <span>{isPanelPlaying ? "Pause Panel" : "Play"}</span>
        </motion.button>
      </div>

      <div className="relative w-full border-[12px] border-white rounded-[48px] overflow-hidden shadow-[0_40px_120px_rgba(38,16,74,0.35)] bg-black/70">
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

type StoryStage = "idle" | "video1" | "video2" | "finished";

export default function Page4() {
  const videoOneRef = useRef<HTMLVideoElement | null>(null);
  const videoTwoRef = useRef<HTMLVideoElement | null>(null);
  const [isStoryPlaying, setIsStoryPlaying] = useState(false);
  const [stage, setStage] = useState<StoryStage>("idle");
  const [panelPlaying, setPanelPlaying] = useState<number | null>(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const pauseAllVideos = () => {
    videoOneRef.current?.pause();
    videoTwoRef.current?.pause();
  };

  const playVideo = async (video: HTMLVideoElement | null, panelId: number) => {
    if (!video) return;
    try {
      await video.play();
      setIsStoryPlaying(true);
      setPanelPlaying(panelId);
    } catch (error) {
      console.error("Unable to play video", error);
      setIsStoryPlaying(false);
      setPanelPlaying(null);
    }
  };

  const handlePanelToggle = async (panelId: number) => {
    setIsStoryPlaying(false);
    setStage("idle");

    if (panelPlaying === panelId) {
      pauseAllVideos();
      setPanelPlaying(null);
      return;
    }

    pauseAllVideos();
    const targetRef = panelId === 1 ? videoOneRef : videoTwoRef;
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

  const resetVideos = () => {
    if (videoOneRef.current) {
      videoOneRef.current.currentTime = 0;
    }
    if (videoTwoRef.current) {
      videoTwoRef.current.currentTime = 0;
    }
  };

  const handleTogglePlayback = async () => {
    if (isStoryPlaying) {
      pauseAllVideos();
      setIsStoryPlaying(false);
      setPanelPlaying(null);
      return;
    }

    resetVideos();

    switch (stage) {
      case "idle":
        setStage("video1");
        await playVideo(videoOneRef.current, 1);
        break;
      case "video1":
        await playVideo(videoOneRef.current, 1);
        break;
      case "video2":
        await playVideo(videoTwoRef.current, 2);
        break;
      case "finished":
        setStage("video1");
        await playVideo(videoOneRef.current, 1);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const videoOne = videoOneRef.current;
    if (!videoOne) return;

    const handleEnded = async () => {
      if (!isMountedRef.current) return;

      if (panelPlaying === 1) {
        setPanelPlaying(null);
      }

      if (isStoryPlaying) {
        setStage("video2");
        if (videoTwoRef.current) {
          videoTwoRef.current.currentTime = 0;
          try {
            await videoTwoRef.current.play();
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
    const videoTwo = videoTwoRef.current;
    if (!videoTwo) return;

    const handleEnded = () => {
      if (!isMountedRef.current) return;

      if (panelPlaying === 2) {
        setPanelPlaying(null);
      }

      if (isStoryPlaying) {
        setIsStoryPlaying(false);
        setStage("finished");
      }
    };

    videoTwo.addEventListener("ended", handleEnded);
    return () => {
      videoTwo.removeEventListener("ended", handleEnded);
    };
  }, [isStoryPlaying, panelPlaying]);

  const buttonLabel = isStoryPlaying ? "PAUSE STORY" : stage === "finished" ? "PLAY AGAIN" : "PLAY FULL STORY";
  const buttonIcon = isStoryPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />;

  return (
    <div className="bg-white relative size-full" data-name="4">
      {/* Background - must be first with z-0 */}
      <div className="absolute h-[2480px] left-0 top-0 w-[1754px] z-0" data-name="BG">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Background" className="absolute h-[128.91%] left-[-36.66%] max-w-none top-[-16.21%] w-[273.37%]" src={imgBg} />
        </div>
      </div>
      
      <TitleHeader />

      {/* Comic videos stack */}
      <div className="absolute left-1/2 top-[588px] translate-x-[-50%] w-[1455px] z-10 flex flex-col items-center gap-[3rem]">
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            onClick={handleTogglePlayback}
            className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-white rounded-full px-12 py-5 shadow-[0_25px_60px_rgba(251,146,60,0.55)] border-4 border-white flex items-center gap-4 text-2xl font-black tracking-wide"
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            aria-pressed={isStoryPlaying}
          >
            {buttonIcon}
            <span>{buttonLabel}</span>
          </motion.button>
        </motion.div>

        <VideoPanel
          videoRef={videoOneRef}
          videoSrc={comicVideoOne}
          panelId={1}
          onTogglePlayback={handlePanelToggle}
          isPanelPlaying={panelPlaying === 1}
          buttonGradient="from-rose-500 to-pink-600"
        />
        <VideoPanel
          videoRef={videoTwoRef}
          videoSrc={comicVideoTwo}
          panelId={2}
          onTogglePlayback={handlePanelToggle}
          isPanelPlaying={panelPlaying === 2}
          buttonGradient="from-indigo-500 to-blue-600"
        />
      </div>

      <Frame1 />
    </div>
  );
}