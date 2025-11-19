import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { useVoiceover } from '../../utils/useVoiceover';
import { Volume2, VolumeX } from 'lucide-react';
import imgImage48 from "figma:asset/ef207e248b9df10b4617704e657ebb01660268c5.png";
import imgImage47 from "figma:asset/14e8b4bcf41b23ffaf589301cfedf891aceb877b.png";
import imgImage46 from "figma:asset/08db0cd7141c535478108920fc4540253445422b.png";
import imgImage45 from "figma:asset/fcb452c03486dc38a1925dc075dcf9c8588565dc.png";
import imgImage49 from "figma:asset/5bfde3b75b02cca83bc21d1d75bc716b7dc5021d.png";
import imgImage41 from "figma:asset/47c75d898293064e22e44c1af1108471ea8021ed.png";
import imgImage42 from "figma:asset/046fb4de35ebb1439e31844d62ca75da526cd75f.png";
import imgImage44 from "figma:asset/89c055e7973811c8c4928bd973ceb4a15a44cff6.png";
import imgImage43 from "figma:asset/a8c7d68ec00cf7a306a8db0e2c26f696bb8e4fc5.png";

function Item() {
  return (
    <motion.div 
      className="absolute h-[1157px] left-[127px] top-[522px] w-[895px]" 
      data-name="Item"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <div className="absolute h-[1157px] left-0 top-0 w-[898.5px]" data-name="image 48">
        <motion.img 
          alt="Before - Dennis in hospital bed" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
          src={imgImage48}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
      </div>
      <motion.div 
        className="absolute h-[107px] left-[205px] top-[1025px] w-[379px]" 
        data-name="image 47"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <img alt="Before label" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage47} />
      </motion.div>
    </motion.div>
  );
}

function Item1() {
  return (
    <motion.div 
      className="absolute h-[1058px] left-[735px] top-[883px] w-[897px]" 
      data-name="Item"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <div className="absolute h-[1077px] left-0 top-[-19px] w-[897px]" data-name="image 46">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.img 
            alt="Now - Dennis healed and healthy" 
            className="absolute h-[150.05%] left-[-5.02%] max-w-none top-0 w-[118.62%]" 
            src={imgImage46}
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </div>
      </div>
      <motion.div 
        className="absolute h-[133px] left-[398px] top-[885px] w-[417px]" 
        data-name="image 45"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <img alt="Now label" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage45} />
      </motion.div>
    </motion.div>
  );
}

function Pagination() {
  return (
    <div className="absolute bg-[red] box-border content-stretch flex gap-[6.087px] h-[42px] items-center justify-center left-[calc(50%-0.087px)] p-[6.087px] rounded-[60.87px] top-[2385px] translate-x-[-50%] w-[43.826px]" data-name="Pagination">
      <p className="font-['Comic_Sans_MS:Bold',sans-serif] leading-[29.318px] not-italic relative shrink-0 text-[25.653px] text-center text-nowrap text-white whitespace-pre">11</p>
    </div>
  );
}

export default function Page11() {
  const [isPlaying, setIsPlaying] = useState(false);
  

  const voiceoverContent = `Guess what! The very next day, while undergoing tests in the new hospital he had been flown into that morning, Dennis suddenly began to speak and moved his right arm and leg, something doctors said was impossible! Everyone was stunned. It was a miracle!

Today, Dennis is back in school, running, playing, smiling, and talking just like before!

Lesson: Dennis's story reminds us that with God, nothing is impossible. When we believe and pray, miracles happen!`;

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
      <div className="bg-white relative size-full" data-name="11">
        <div className="absolute h-[2480px] left-0 top-0 w-[1754px]" data-name="image 49">
          <img alt="Background" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage49} />
        </div>
        <Item />
        <Item1 />
        
        {/* Decorative triangles */}
        <motion.div 
          className="absolute h-[161px] left-[1077.74px] top-[677.33px] w-[158.5px]" 
          data-name="image 41"
          initial={{ opacity: 0, rotate: -180, scale: 0 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.0, type: "spring", bounce: 0.5 }}
        >
          <motion.img 
            alt="Yellow triangle decoration" 
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
            src={imgImage41}
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        
        <motion.div 
          className="absolute h-[93px] left-[1265.35px] top-[789.59px] w-[99.5px]" 
          data-name="image 42"
          initial={{ opacity: 0, rotate: 180, scale: 0 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2, type: "spring", bounce: 0.5 }}
        >
          <motion.img 
            alt="Pink triangle decoration" 
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
            src={imgImage42}
            animate={{ rotate: [0, -15, 15, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </motion.div>
        
        {/* Lesson text */}
        <motion.div 
          className="absolute h-[287px] left-[211px] top-[1980px] w-[1256.5px]" 
          data-name="image 44"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <img alt="Lesson: Dennis's story reminds us that with God, nothing is impossible" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage44} />
        </motion.div>
        
        {/* Top narrative text */}
        <motion.div 
          className="absolute h-[392px] left-[151px] top-[154px] w-[1349px]" 
          data-name="image 43"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img alt="Story text about Dennis's miraculous recovery" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage43} />
        </motion.div>
        
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
