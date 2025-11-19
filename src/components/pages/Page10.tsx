import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { useVoiceover } from '../../utils/useVoiceover';
import { Volume2, VolumeX } from 'lucide-react';
import imgAirplane1 from "figma:asset/7375e7ac0dd3d5d23168c2a6f6532bfadd2451cd.png";
import imgImage37 from "figma:asset/7d6be43a2f463e145df47ccf6ebc3d72a1d4ef36.png";
import imgImage36 from "figma:asset/cd4e36c93c9641d970aa2d2a0ec7827ef7d493f9.png";
import imgBg from "figma:asset/f38a37dc9e5b322c2fcd7aa63b5238408097f202.png";
import imgImage40 from "figma:asset/94252fde1b6d33983325b1f7d1d9eb7ba9230e49.png";
import imgImage39 from "figma:asset/d62af26d6cbda743c9c66a2180a264d87a0b82a9.png";

function Header() {
  return (
    <div className="absolute h-[813px] left-[200px] top-[161px] w-[1302px] z-10" data-name="Header">
      {/* Airplane - flies in from right with rotation, then hovers */}
      <motion.div 
        className="absolute h-[264px] left-0 top-0 w-[625px] z-20" 
        data-name="Airplane 1"
        initial={{ x: 1200, opacity: 0, rotate: -5 }}
        animate={{ x: 0, opacity: 1, rotate: 0 }}
        transition={{ 
          duration: 2.5, 
          ease: [0.34, 1.56, 0.64, 1],
          delay: 0.3
        }}
      >
        {/* Hover animation after flying in */}
        <motion.div
          animate={{ 
            y: [-10, 10, -10]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.8
          }}
          className="relative w-full h-full"
        >
          <img alt="Boy flying airplane with Miracle Zone banner" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAirplane1} />
        </motion.div>
      </motion.div>
      
      {/* Miracle Zone banner */}
      <motion.div 
        className="absolute h-[386.5px] left-[152px] top-[470px] w-[1203px]" 
        data-name="image 37"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <img alt="Miracle Zone banner" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage37} />
      </motion.div>
      
      {/* Dennis' Miracle title */}
      <motion.div 
        className="absolute h-[311.5px] left-[237px] top-[224px] w-[1086.5px]" 
        data-name="image 36"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <img alt="Dennis' Miracle title" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage36} />
      </motion.div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="absolute bg-[red] box-border content-stretch flex gap-[6.087px] h-[42px] items-center justify-center left-[calc(50%-0.087px)] p-[6.087px] rounded-[60.87px] top-[2385px] translate-x-[-50%] w-[43.826px]" data-name="Pagination">
      <p className="font-['Comic_Sans_MS:Bold',sans-serif] leading-[29.318px] not-italic relative shrink-0 text-[25.653px] text-center text-nowrap text-white whitespace-pre">10</p>
    </div>
  );
}

export default function Page10() {
  const [isPlaying, setIsPlaying] = useState(false);
  

  const voiceoverContent = `Dennis' Miracle

In September 2024, Dennis from Russia had a very terrible accident. He was walking across a pedestrian crossing when a speeding car hit him! The crash was so strong that it threw him into the other lane, where another car hit him again. Dennis was severely injured and had to be rushed to the hospital.

Dennis had many broken bones, and he couldn't breathe on his own due to many internal injuries. He went into a deep sleep, called a coma, for 23 whole days! The doctors did all they could, but eventually told his parents to just pray.

But Dennis' family didn't give up! They had learned from Pastor Chris how to pray and believe in God's Word. They spoke life and healing over Dennis every single day. Finally, Dennis woke up from the coma, but he still had a serious brain injury called an intracranial hematoma, and the right side of his body was paralyzed.

Then came the Healing Streams Live Services. On Day 3, Pastor Chris specially prayed for people who had their bodies damaged through accidents, commanding healing to their bodies in the name of Jesus Christ. Dennis' family, who were participating, hoping for a miracle, just knew immediately that Dennis was healed.`;

  const { playVoiceover, stopVoiceover, pauseVoiceover, resumeVoiceover } = useVoiceover({
    content: voiceoverContent,
    voiceGender: 'male',
    autoplay: true,
    delay: 1500,
    onStart: () => setIsPlaying(true),
    onEnd: () => setIsPlaying(false),
  });

  const toggleAudio = () => {
    if (isPlaying) {
      pauseVoiceover();
      setIsPlaying(false);
    } else {
      if (window.speechSynthesis && window.speechSynthesis.paused) {
        resumeVoiceover();
        setIsPlaying(true);
      } else {
        playVoiceover();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      {/* Main Page Content */}
      <div className="bg-white relative size-full" data-name="10">
        <div className="absolute h-[2480px] left-0 top-0 w-[1754px]" data-name="BG">
          <img alt="Background" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBg} />
        </div>
        
        {/* Story text overlay */}
        <motion.div 
          className="absolute h-[935px] left-[229px] top-[1350px] w-[1369px]" 
          data-name="image 40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img alt="Story text about Dennis's accident and recovery" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage40} />
        </motion.div>
        
        {/* Introduction text */}
        <motion.div 
          className="absolute h-[282px] left-[168px] top-[1018px] w-[1423px]" 
          data-name="image 39"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <img alt="Introduction text about Dennis from Russia" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage39} />
        </motion.div>
        
        <Header />
        <Pagination />
      </div>

      {/* Voiceover Control Button - Outside Magazine Container */}
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
