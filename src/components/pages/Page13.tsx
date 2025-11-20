import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import imgImage79 from "figma:asset/45568fea0eb567ba1072b1d58968ed9786abf915.png";
import imgImage80 from "figma:asset/03f9254d9dcd811f1de3a9543d53094aa18fd418.png";
import imgImage77 from "figma:asset/a1683c550f5af9f734a5a5d39452309c74abbd72.png";
import imgImage78 from "figma:asset/0a83ca7396055bdfa36dd3701c57c8ad9c5c4485.png";
import imgImage75 from "figma:asset/e8599c812ca365e05093d0f2f1eeb059cb145349.png";
import imgImage76 from "figma:asset/5b958a442588d34663ffaa724916f53cc0bf0eb5.png";
import imgImage73 from "figma:asset/e730c0fc4bf10ad7aa93cae2fa217f876de7b275.png";
import imgImage74 from "figma:asset/08b172a668433dd3c398004e4a5320461680d84d.png";
import imgImage71 from "figma:asset/5e3e99cadbb446ef338bdce94d25bdbcf059f43a.png";
import imgImage72 from "figma:asset/14cbf3e20332123e0b481464c8e80c6744c9b0f1.png";
import imgImage69 from "figma:asset/75e7dc3b40f27ddf3946f87c774f3154efd236c1.png";
import imgImage70 from "figma:asset/c4047ee61a4e26ca5bb51149b1b1f9e8036f6e0e.png";
import imgImage81 from "figma:asset/38732b862fb50223567761ab8a7c79783b0c8518.png";
import imgImage68 from "figma:asset/1ebe7c8e2a00eecd9e542b7b12a4c592726a13d3.png";
import imgImage67 from "figma:asset/26b6466d9955a3b8931f1c7b267091e0578ad24a.png";
import wiggle1Video from "../../assets/wiggle 1.mp4";
import wiggle2Video from "../../assets/wiggle 2.mp4";
import wiggle3Video from "../../assets/wiggle 3.mp4";
import wiggle4Video from "../../assets/wiggle 4.mp4";
import wiggle5Video from "../../assets/wiggle 5.mp4";
import wiggle6Video from "../../assets/wiggle 6.mp4";
import wiggleEndingAudio from "../../assets/Wigend.mp3";

type WiggleEntry = {
  id: number;
  positionClass: string;
  containerDataName: string;
  titleImg: string;
  titleAlt: string;
  titleWrapperClass: string;
  titleDataName: string;
  rotateDelay: number;
  posterImg: string;
  posterAlt: string;
  mediaWrapperClass: string;
  mediaDataName: string;
  videoSrc: string;
  containerDelay: number;
};

const WIGGLE_ITEMS: WiggleEntry[] = [
  {
    id: 0,
    positionClass: "left-[7px] top-[152px] w-[629px]",
    containerDataName: "Item 1",
    titleImg: imgImage69,
    titleAlt: "Pray in the Holy Ghost",
    titleWrapperClass: "h-[161px] relative shrink-0 w-[609.5px]",
    titleDataName: "image 69",
    rotateDelay: 0.5,
    posterImg: imgImage70,
    posterAlt: "Pray in the Holy Ghost illustration",
    mediaWrapperClass: "h-[343px] relative shrink-0 w-[629px]",
    mediaDataName: "image 70",
    videoSrc: wiggle1Video,
    containerDelay: 0.2,
  },
  {
    id: 1,
    positionClass: "left-[773px] top-[191px] w-[637px]",
    containerDataName: "Item 2",
    titleImg: imgImage71,
    titleAlt: "Brain Boost",
    titleWrapperClass: "h-[157px] relative shrink-0 w-[544px]",
    titleDataName: "image 71",
    rotateDelay: 0.7,
    posterImg: imgImage72,
    posterAlt: "Brain Boost illustration",
    mediaWrapperClass: "h-[333px] relative shrink-0 w-[637px]",
    mediaDataName: "image 72",
    videoSrc: wiggle2Video,
    containerDelay: 0.4,
  },
  {
    id: 2,
    positionClass: "left-[12px] top-[772px] w-[624px]",
    containerDataName: "Item 3",
    titleImg: imgImage73,
    titleAlt: "Shake It Out",
    titleWrapperClass: "h-[161px] relative shrink-0 w-[596px]",
    titleDataName: "image 73",
    rotateDelay: 0.9,
    posterImg: imgImage74,
    posterAlt: "Shake It Out illustration",
    mediaWrapperClass: "h-[340px] relative shrink-0 w-[624px]",
    mediaDataName: "image 74",
    videoSrc: wiggle3Video,
    containerDelay: 0.6,
  },
  {
    id: 3,
    positionClass: "left-[766px] top-[797px] w-[649px]",
    containerDataName: "Item 4",
    titleImg: imgImage75,
    titleAlt: "Stretch & Reach Combo",
    titleWrapperClass: "h-[161px] relative shrink-0 w-[670px]",
    titleDataName: "image 75",
    rotateDelay: 1.1,
    posterImg: imgImage76,
    posterAlt: "Stretch & Reach Combo illustration",
    mediaWrapperClass: "aspect-[1238/676] relative shrink-0 w-full",
    mediaDataName: "image 76",
    videoSrc: wiggle4Video,
    containerDelay: 0.8,
  },
  {
    id: 4,
    positionClass: "left-0 top-[1389px] w-[646px]",
    containerDataName: "Item 5",
    titleImg: imgImage77,
    titleAlt: "Silent Dance Challenge",
    titleWrapperClass: "h-[161px] relative shrink-0 w-[679px]",
    titleDataName: "image 77",
    rotateDelay: 1.3,
    posterImg: imgImage78,
    posterAlt: "Silent Dance Challenge illustration",
    mediaWrapperClass: "aspect-[1244/680] relative shrink-0 w-full",
    mediaDataName: "image 78",
    videoSrc: wiggle5Video,
    containerDelay: 1.0,
  },
  {
    id: 5,
    positionClass: "left-[781px] top-[1412px] w-[618px]",
    containerDataName: "Item 6",
    titleImg: imgImage79,
    titleAlt: "Mirror Moves",
    titleWrapperClass: "h-[161px] relative shrink-0 w-[596px]",
    titleDataName: "image 79",
    rotateDelay: 1.5,
    posterImg: imgImage80,
    posterAlt: "Mirror Moves illustration",
    mediaWrapperClass: "h-[337px] relative shrink-0 w-[618px]",
    mediaDataName: "image 80",
    videoSrc: wiggle6Video,
    containerDelay: 1.2,
  },
];

type WiggleItemProps = WiggleEntry & {
  activeIndex: number | null;
  registerVideoRef: (index: number, element: HTMLVideoElement | null) => void;
  handleVideoPlay: (index: number) => void;
  handleVideoEnded: (index: number) => void;
};

function WiggleItem({
  id,
  positionClass,
  containerDataName,
  titleImg,
  titleAlt,
  titleWrapperClass,
  titleDataName,
  rotateDelay,
  posterImg,
  posterAlt,
  mediaWrapperClass,
  mediaDataName,
  videoSrc,
  containerDelay,
  activeIndex,
  registerVideoRef,
  handleVideoPlay,
  handleVideoEnded,
}: WiggleItemProps) {
  return (
    <motion.div
      className={`absolute content-stretch flex flex-col gap-[16px] items-center ${positionClass}`}
      data-name={containerDataName}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: activeIndex === id ? 1.05 : 1, y: 0 }}
      transition={{ duration: 0.6, delay: containerDelay }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className={titleWrapperClass}
        data-name={titleDataName}
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: rotateDelay }}
      >
        <img
          alt={titleAlt}
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={titleImg}
        />
      </motion.div>
      <div className={`${mediaWrapperClass}`} data-name={mediaDataName}>
        <video
          ref={(node) => registerVideoRef(id, node)}
          className="absolute inset-0 size-full object-cover"
          playsInline
          preload="metadata"
          poster={posterImg}
          controls={false}
          onPlay={() => handleVideoPlay(id)}
          onEnded={() => handleVideoEnded(id)}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support inline video playback.
        </video>
      </div>
    </motion.div>
  );
}

type ContentProps = {
  activeIndex: number | null;
  registerVideoRef: (index: number, element: HTMLVideoElement | null) => void;
  handleVideoPlay: (index: number) => void;
  handleVideoEnded: (index: number) => void;
};

function Content({ activeIndex, registerVideoRef, handleVideoPlay, handleVideoEnded }: ContentProps) {
  return (
    <div className="absolute h-[2138px] left-[196px] top-[141px] w-[1415px]" data-name="Content">
      <motion.div
        className="absolute h-[160.5px] left-[16px] top-[1988px] w-[1382px]"
        data-name="image 81"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <img alt="Call to action text" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage81} />
      </motion.div>
      {WIGGLE_ITEMS.map((entry) => (
        <WiggleItem
          key={entry.id}
          {...entry}
          activeIndex={activeIndex}
          registerVideoRef={registerVideoRef}
          handleVideoPlay={handleVideoPlay}
          handleVideoEnded={handleVideoEnded}
        />
      ))}
      <motion.div
        className="absolute h-[100.5px] left-[145px] top-[9.5px] w-[1107.5px]"
        data-name="image 68"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <img alt="Wiggle Break Ideas header" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage68} />
      </motion.div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="absolute bg-[red] box-border content-stretch flex gap-[6.087px] h-[42px] items-center justify-center left-[calc(50%-0.087px)] p-[6.087px] rounded-[60.87px] top-[2385px] translate-x-[-50%] w-[43.826px]" data-name="Pagination">
      <p className="font-['Comic_Sans_MS:Bold',sans-serif] leading-[29.318px] not-italic relative shrink-0 text-[25.653px] text-center text-nowrap text-white whitespace-pre">13</p>
    </div>
  );
}

export default function Page13() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const endingAudioRef = useRef<HTMLAudioElement | null>(null);

  const registerVideoRef = useCallback((index: number, element: HTMLVideoElement | null) => {
    videoRefs.current[index] = element;
  }, []);

  const stopOtherVideos = useCallback((currentIndex: number) => {
    videoRefs.current.forEach((video, idx) => {
      if (idx !== currentIndex && video) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, []);

  const resetEndingAudio = useCallback(() => {
    if (!endingAudioRef.current) return;
    endingAudioRef.current.pause();
    endingAudioRef.current.currentTime = 0;
  }, []);

  const playEndingAudio = useCallback(() => {
    resetEndingAudio();
    if (!endingAudioRef.current) return;
    endingAudioRef.current.play().catch((err) => {
      console.warn("Unable to play wiggle ending audio", err);
    });
  }, [resetEndingAudio]);

  const playVideoAtIndex = useCallback(
    async (index: number) => {
      const video = videoRefs.current[index];
      if (!video) return;

      stopOtherVideos(index);
      resetEndingAudio();

      try {
        video.currentTime = 0;
        await video.play();
        setActiveIndex(index);
      } catch (err) {
        console.warn(`Auto-play blocked for Wiggle video ${index + 1}`, err);
      }
    },
    [resetEndingAudio, stopOtherVideos]
  );

  const handleVideoPlay = useCallback(
    (index: number) => {
      stopOtherVideos(index);
      resetEndingAudio();
      setActiveIndex(index);
    },
    [resetEndingAudio, stopOtherVideos]
  );

  const handleVideoEnded = useCallback(
    (index: number) => {
      const nextIndex = index + 1;
      if (nextIndex < WIGGLE_ITEMS.length) {
        playVideoAtIndex(nextIndex);
      } else {
        setActiveIndex(null);
        playEndingAudio();
      }
    },
    [playEndingAudio, playVideoAtIndex]
  );

  useEffect(() => {
    endingAudioRef.current = new Audio(wiggleEndingAudio);
    return () => {
      if (endingAudioRef.current) {
        endingAudioRef.current.pause();
        endingAudioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      playVideoAtIndex(0);
    }, 600);

    return () => clearTimeout(timer);
  }, [playVideoAtIndex]);

  useEffect(() => {
    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.pause();
        }
      });
      resetEndingAudio();
    };
  }, [resetEndingAudio]);

  return (
    <div className="bg-white relative size-full" data-name="13">
      <div className="absolute h-[2480px] left-0 top-0 w-[1754px]" data-name="image 67">
        <img alt="Background" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage67} />
      </div>
      <Content
        activeIndex={activeIndex}
        registerVideoRef={registerVideoRef}
        handleVideoPlay={handleVideoPlay}
        handleVideoEnded={handleVideoEnded}
      />
      <Pagination />
    </div>
  );
}
