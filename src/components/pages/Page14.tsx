import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';
import { useVoiceover } from '../../utils/useVoiceover';
import imgImage87 from "figma:asset/f4669213b1a03072a4222c1b49443d8823f4f685.png";
import imgConfessions1 from "figma:asset/0999da21d5b0674cf61c08029c8dde05f50b980f.png";
import imgImage86 from "figma:asset/b480c6921381f3d320a4b17465d4f04652e550d0.png";
import imgImage96 from "figma:asset/4dbc21cace6d371fa6f1ce11bee6b33a80345067.png";
import imgImage95 from "figma:asset/9215a5fff915e9210a71dd1b82cbaba6e7bc9316.png";
import imgImage94 from "figma:asset/769b658725629b6325f850dd837df8a920d53701.png";
import imgImage93 from "figma:asset/7098e9d42f9d8ca11d9a4ce6ba019fe15212623b.png";
import imgImage92 from "figma:asset/582cff1222963217d325b21cedb35b24f719c4ac.png";
import imgImage91 from "figma:asset/13cc90b6c7bda1e850d5c6a83de8bc767d0960a5.png";
import imgImage90 from "figma:asset/3200f217847e8060a4991016c3d67b00f1e10161.png";
import imgImage89 from "figma:asset/809115b27122cf147522da14f9f8a0b06f7c3fba.png";
import imgImage88 from "figma:asset/ff544e7e33b417e21f3ed0327413d1543fe9c691.png";

function HeaderText() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[1095px]" data-name="Header Text">
      <motion.div 
        className="h-[227px] relative shrink-0 w-[933px]" 
        data-name="image 87"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img alt="My Divine Health" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage87} />
      </motion.div>
      <motion.div 
        className="aspect-[1111/195] relative shrink-0 w-full" 
        data-name="Confessions 1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <img alt="Confessions" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgConfessions1} />
      </motion.div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex gap-[35px] items-center left-[calc(50%+0.5px)] top-[116px] translate-x-[-50%] z-10" data-name="Header">
      <motion.div 
        className="h-[483px] relative shrink-0 w-[303px]" 
        data-name="image 86"
        initial={{ opacity: 0, x: -50, rotate: -5 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          rotate: 0,
          y: [-8, 8, -8]
        }}
        transition={{ 
          opacity: { duration: 1, delay: 0.2 },
          x: { duration: 1, delay: 0.2 },
          rotate: { duration: 1, delay: 0.2 },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
        }}
      >
        <img alt="Happy child character" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage86} />
      </motion.div>
      <HeaderText />
    </div>
  );
}

function Pagination() {
  return (
    <div className="absolute bg-[red] box-border content-stretch flex gap-[6.087px] h-[42px] items-center justify-center left-[calc(50%-0.087px)] p-[6.087px] rounded-[60.87px] top-[2385px] translate-x-[-50%] w-[43.826px]" data-name="pagination">
      <p className="font-['Comic_Sans_MS:Bold',sans-serif] leading-[29.318px] not-italic relative shrink-0 text-[25.653px] text-center text-nowrap text-white whitespace-pre">14</p>
    </div>
  );
}

// TODO: Replace these with the EXACT text from Page 14 Divine Health Confessions as they appear on the page
// These are placeholders - you need to provide the exact textual content for each confession
const confessions = [
  { 
    img: imgImage95, 
    delay: 0.7,
    text: "I am constantly mindful of God's indwelling and abiding presence, which has made me a victor and a master over sickness and circumstances."
  },
  { 
    img: imgImage94, 
    delay: 0.8,
    text: "Fears, worries, darkness, confusion, and uncertainty have no place in me, for the true light shines in my heart."
  },
  { 
    img: imgImage93, 
    delay: 0.9,
    text: "I'm born of God; greater is He that is in me than he that is in the world! Divinity is at work in me; as Jesus is, so am I in this world."
  },
  { 
    img: imgImage92, 
    delay: 1.0,
    text: "I reign in every aspect of life. I disallow sickness, poverty, and defeat in my life and in the lives of my loved ones, and I unleash the forces of health, prosperity, and victory in my world."
  },
  { 
    img: imgImage91, 
    delay: 1.1,
    text: "I am divinely connected to the One who is the way, the truth, and the life. In my path is light that manifests supernatural strength and vitality."
  },
  { 
    img: imgImage90, 
    delay: 1.2,
    text: "I take advantage of God's presence and bask in the glory and transformation that it brings. I grow stronger by the day, like a cedar in Lebanon, and flourish like a palm tree!"
  },
  { 
    img: imgImage89, 
    delay: 1.3,
    text: "I am in control and in charge of what happens to my body; thus, I only give expression to the workings of the Holy Spirit in my life and in my body."
  },
  { 
    img: imgImage88, 
    delay: 1.4,
    text: "I live in the victories that the death, burial, and resurrection of Christ wrought for me; the glorious life of success, prosperity, divine health, and unending grace."
  },
];

const confessionPositions = [
  { left: 171, top: 674, width: 1373, height: 96 },
  { left: 171, top: 840, width: 1398, height: 106 },
  { left: 171, top: 1006, width: 1391, height: 106 },
  { left: 171, top: 1172, width: 1404, height: 165 },
  { left: 171, top: 1397, width: 1433, height: 106 },
  { left: 171, top: 1565, width: 1422, height: 165 },
  { left: 171, top: 1785, width: 1436, height: 106 },
  { left: 171, top: 1953, width: 1431, height: 165 },
];

export default function Page14() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentConfessionIndex, setCurrentConfessionIndex] = useState(-1);

  // Speak each confession individually so we can sync animations
  const currentContent = currentConfessionIndex >= 0 ? confessions[currentConfessionIndex].text : '';
  const { playVoiceover, stopVoiceover, pauseVoiceover, resumeVoiceover } = useVoiceover({
    content: currentContent,
    voiceGender: 'male',
    autoplay: false,
    delay: 0,
    onStart: () => setIsPlaying(true),
    onEnd: () => {
      // move to next confession or stop
      setCurrentConfessionIndex((prev) => {
        const next = prev + 1;
        if (next < confessions.length) {
          return next;
        }
        // finished
        setIsPlaying(false);
        return -1;
      });
    }
  });

  // When the currentConfessionIndex changes, if we're in playing mode, trigger playback
  useEffect(() => {
    if (currentConfessionIndex >= 0 && isPlaying) {
      // Slight delay to allow animation to settle
      const t = setTimeout(() => {
        playVoiceover();
      }, 250);
      return () => clearTimeout(t);
    }
    return;
  }, [currentConfessionIndex, isPlaying, playVoiceover]);

  const toggleAudio = () => {
    if (isPlaying) {
      // pause the current utterance instead of stopping so it's a mute-like action
      if (window.speechSynthesis && window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        pauseVoiceover();
        setIsPlaying(false);
      } else {
        // fallback to stop
        stopVoiceover();
        setIsPlaying(false);
        setCurrentConfessionIndex(-1);
      }
    } else {
      // If paused, resume; otherwise start from first confession
      if (window.speechSynthesis && window.speechSynthesis.paused) {
        resumeVoiceover();
        setIsPlaying(true);
      } else {
        setCurrentConfessionIndex(0);
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <div className="bg-white relative size-full" data-name="14">
        <div className="absolute h-[2480px] left-0 top-0 w-[1754px]" data-name="image 96">
          <img alt="Background" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage96} />
        </div>
        
        {/* Confession statements with staggered animations */}
        {confessions.map((confession, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              height: `${confessionPositions[index].height}px`,
              left: `${confessionPositions[index].left}px`,
              top: `${confessionPositions[index].top}px`,
              width: `${confessionPositions[index].width}px`,
            }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ 
              opacity: currentConfessionIndex === -1 ? 1 : (currentConfessionIndex === index ? 1 : 0.45),
              x: 0,
              scale: currentConfessionIndex === index ? 1.08 : 1,
            }}
            transition={{ 
              opacity: { duration: 0.6, delay: confession.delay },
              x: { duration: 0.6, delay: confession.delay },
              scale: { duration: 0.3 }
            }}
            whileHover={{ scale: 1.02, x: 5 }}
          >
            <img alt={confession.text} className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={confession.img} />
          </motion.div>
        ))}
        
        <Header />
        <Pagination />
      </div>

      {/* Voiceover Control Button */}
      <motion.button
        onClick={toggleAudio}
        className="fixed bottom-32 right-8 z-50 pointer-events-auto bg-gradient-to-br from-purple-600 to-pink-600 text-white p-6 rounded-full shadow-2xl hover:scale-110 transition-transform border-4 border-white"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        title={isPlaying ? "Stop voiceover" : "Play voiceover"}
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
