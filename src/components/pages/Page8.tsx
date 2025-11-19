import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { useVoiceover } from '../../utils/useVoiceover';
import { Volume2, VolumeX } from 'lucide-react';
import imgImage3 from "figma:asset/077f50d75bad6d10f266c672135a632c51ba433f.png";
import imgImage4 from "figma:asset/8b853ca6144d42e89f7502c9af67ac8cc7d133e0.png";
import imgH3A2447 from "figma:asset/e462a4bd7f1fe793c3cff00be2a0f08462da2ae9.png";
import imgImage30 from "figma:asset/ef11cda987fe952c1b5fce6a7eaa1146aa496344.png";
import imgImage31 from "figma:asset/9d93c7fd45fea599067d38e66e52303c8853cce5.png";
import imgHeaderImage from "figma:asset/bb8ab411824655a368f3203481bd25edb6004013.png";
import imgBg from "figma:asset/4d7556aadc2e584b5e524ad9cf1aa11a4861756e.png";
import imgImage33 from "figma:asset/d2c122ae2c8f37d3b358b0a09f36af9108f84716.png";
import imgImage32 from "figma:asset/5516304de5b20874ac7ba540d29b648e510ef835.png";

function Frame1() {
  return (
    <motion.div 
      className="h-[445px] overflow-clip relative shrink-0 w-[1442px] rounded-3xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      <motion.div 
        className="absolute h-[826px] left-0 top-[-229px] w-[1647px]" 
        data-name="image 3"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <img alt="Children gathering for Healing Streams event" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
      </motion.div>
    </motion.div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[24px] h-[445px] items-center left-1/2 top-[1898px] translate-x-[-50%] w-[1442px]">
      <Frame1 />
    </div>
  );
}

function Frame5() {
  return (
    <motion.div 
      className="h-[445px] overflow-clip relative shrink-0 w-[742px] rounded-3xl"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <motion.div 
        className="absolute h-[755px] left-[-143px] top-[-68px] w-[1133px]" 
        data-name="image 4"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        <img alt="Healing Streams stage event" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
      </motion.div>
    </motion.div>
  );
}

function Frame2() {
  return (
    <motion.div 
      className="h-[445px] overflow-clip relative shrink-0 w-[663px] rounded-3xl"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
    >
      <motion.div 
        className="absolute h-[495px] left-[-80px] top-[-25px] w-[743px]" 
        data-name="_H3A2447"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      >
        <img alt="Pastor Chris Oyakhilome ministering" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgH3A2447} />
      </motion.div>
    </motion.div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[24px] h-[445px] items-center left-1/2 top-[886px] translate-x-[-50%] w-[1442px]">
      <Frame5 />
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <motion.div 
      className="content-stretch flex flex-col items-start relative shrink-0 w-[1010px]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="h-[234.5px] relative shrink-0 w-[995px]" data-name="image 30">
        <img alt="Healing, Hope & Smiles Everywhere header" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage30} />
      </div>
      <div className="h-[40.5px] relative shrink-0 w-[1009.5px]" data-name="image 31">
        <img alt="The Healing Streams Kids Movement Is Changing Lives!" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage31} />
      </div>
    </motion.div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex gap-[30px] items-center left-[146px] top-[175px]" data-name="Header">
      <motion.div 
        className="h-[296px] relative shrink-0 w-[422px]" 
        data-name="Header Image"
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img alt="Kidspiration logo" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgHeaderImage} />
      </motion.div>
      <Frame />
    </div>
  );
}

function Pagination() {
  return (
    <div className="absolute bg-[red] box-border content-stretch flex gap-[6.087px] h-[42px] items-center justify-center left-[calc(50%-0.087px)] p-[6.087px] rounded-[60.87px] top-[2385px] translate-x-[-50%] w-[43.826px]" data-name="Pagination">
      <p className="font-['Comic_Sans_MS:Bold',sans-serif] leading-[29.318px] not-italic relative shrink-0 text-[25.653px] text-center text-nowrap text-white whitespace-pre">08</p>
    </div>
  );
}

export default function Page8() {
  const [isPlaying, setIsPlaying] = useState(false);

  const voiceoverContent = `Healing, hope and smiles everywhere.
The Healing Streams Kids movement is changing lives.

Something amazing is happening, and kids are leading the way! The Healing Streams Live Healing Services has done incredible things since its inception. Healing sicknesses that seemed impossible, making hurt bodies strong again, and changing lives with the power of God's Word.

In this Year of Completeness, like never before, children have taken their place at the forefront of the unstoppable healing movement sweeping the nations through Kidspiration. 

Armed with their copies of the Healing to the Nations Magazine for Kids and the 4Ps list—Pray, Publicize, Penetrate places and languages, and Partner—these young heroes have been on an exciting adventure, sharing the full gospel of healing in Christ Jesus with children everywhere! Magazines in hand, they've taken God's healing power to schools, streets, villages, hospitals, orphanages, malls, and more!`;

  const { playVoiceover, stopVoiceover, pauseVoiceover, resumeVoiceover } = useVoiceover({
    content: voiceoverContent,
    voiceGender: 'female',
    autoplay: true,
    delay: 1500,
    onStart: () => setIsPlaying(true),
    onEnd: () => setIsPlaying(false),
  });
  const toggleAudio = () => {
    // Toggle to pause/resume rather than stop
    if (isPlaying) {
      pauseVoiceover();
      setIsPlaying(false);
    } else {
      // If paused, resume. Otherwise start fresh.
      if ((window.speechSynthesis && window.speechSynthesis.paused)) {
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
      <div className="relative size-full" data-name="8">
        <div className="absolute h-[2480px] left-0 top-0 w-[1754px]" data-name="BG">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[331.49%] left-[-67.38%] max-w-none top-[-43.47%] w-[334.77%]" src={imgBg} />
          </div>
        </div>
        
        <Frame4 />
        
        <motion.div 
          className="absolute h-[507px] left-[146px] top-[1357px] w-[1454px]" 
          data-name="image 33"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="Text about Kidspiration movement" className="absolute h-[368.15%] left-[-10.04%] max-w-none top-[-268.05%] w-[110.04%]" src={imgImage33} />
          </div>
        </motion.div>
        
        <Frame3 />
        
        <motion.div 
          className="absolute h-[323px] left-[146px] top-[519px] w-[1462px]" 
          data-name="image 32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="Opening paragraph text" className="absolute h-[271.43%] left-[-10.97%] max-w-none top-[-171.43%] w-[110.97%]" src={imgImage32} />
          </div>
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
