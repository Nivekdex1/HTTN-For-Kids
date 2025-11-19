import { motion } from 'motion/react';
import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useVoiceover } from '../../utils/useVoiceover';
import imgImage103 from "figma:asset/6670db219ffee6f74f8ecc372511467a6a333f29.png";
import imgImage102 from "figma:asset/0f200693634fbadbb798fb477f06973e82a0ad76.png";
import imgImage105 from "figma:asset/6290e0677e8664d9db2b7cf1efbd8343b6edd908.png";
import imgImage106 from "figma:asset/6a58021816f841c43cb3c21d7f8067e7de4a02f7.png";
import imgImage107 from "figma:asset/165fc4954253d052b59e4342a0d44381bd868973.png";
import imgImage108 from "figma:asset/3a05a12ed6b19e08436314a61ea62548d23d8197.png";
import imgImage109 from "figma:asset/bb5e2f4aeffb1e30421524d6f65ac367781ba2d8.png";
import imgBg from "figma:asset/f56f19080390f0aab5e19345c9ea5a24c1fce5eb.png";
import imgLogoFooter from "figma:asset/cb184ec3e97d080377f37050765471c175b4f0b3.png";
import imgCallLinks from "figma:asset/2af23d28e4a9c4c654bc9ba320f1eafd4a67ae7c.png";

function QrText() {
  return (
    <div className="absolute content-stretch flex gap-[40px] items-center left-[481px] top-[1304.46px]" data-name="QR & Text">
      <motion.div 
        className="h-[272px] relative shrink-0 w-[537.5px]" 
        data-name="image 103"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <img alt="Healing streams text" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage103} />
      </motion.div>
      <motion.div 
        className="h-[315.5px] relative shrink-0 w-[333.5px]" 
        data-name="image 102"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        whileHover={{ scale: 1.05 }}
      >
        <img alt="QR Code" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage102} />
      </motion.div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[1147px] left-[126px] top-[73px] w-[1538px]">
      {/* Background gradient */}
      <motion.div 
        className="absolute h-[1076px] left-[443.95px] top-[15.3px] w-[1094px]" 
        data-name="image 105"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <img alt="Kids Inspiring Kids background" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage105} />
      </motion.div>
      
      {/* Tablet mockup */}
      <motion.div 
        className="absolute h-[1104px] left-[487px] top-[43px] w-[962px]" 
        data-name="image 106"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Tablet mockup" className="absolute h-full left-[-37.02%] max-w-none top-[0.04%] w-[143.14%]" src={imgImage106} />
        </div>
      </motion.div>
      
      {/* Character - Happy child - Behind the banner (lower z-index) */}
      <motion.div 
        className="absolute h-[1080px] left-0 top-[15px] w-[654px] z-[1]" 
        data-name="image 107"
        initial={{ opacity: 0, x: -80, rotate: -5 }}
        animate={{ 
          opacity: 1, 
          x: 0, 
          rotate: 0 
        }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
          className="relative w-full h-full"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="Happy child character" className="absolute h-[110.79%] left-[0.07%] max-w-none top-[-10.75%] w-[220.03%]" src={imgImage107} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute h-[943.227px] left-[54.19px] top-[451.55px] w-[1599.47px] z-20" data-name="Content">
      <motion.div 
        className="absolute h-[331.5px] left-[299.02px] top-[385.32px] w-[1032px]" 
        data-name="image 108"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <img alt="Join Kidspiration text" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage108} />
      </motion.div>
      <motion.div 
        className="absolute h-[184px] left-[-0.18px] top-[591.46px] w-[1600px] z-30" 
        data-name="image 109"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Website URL banner" className="absolute h-[512.77%] left-[0.01%] max-w-none top-[-321.44%] w-[99.97%]" src={imgImage109} />
        </div>
      </motion.div>
    </div>
  );
}

export default function Page16() {
  const [isPlaying, setIsPlaying] = useState(false);

  const { playVoiceover, stopVoiceover, pauseVoiceover, resumeVoiceover } = useVoiceover({
    content: "Join Kidspiration today. Visit www dot kidspiration dot world. You can scan the QR code below to watch faith-inspiring and exciting Healing Streams testimonies and Videos.",
    voiceGender: 'male',
    autoplay: true,
    delay: 2000, // Wait for animations
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
    <div className="bg-white relative size-full overflow-hidden" data-name="16">
      {/* Background */}
      <div className="absolute h-[2489px] left-[-2px] top-0 w-[1754px]" data-name="BG">
        <img alt="Background" className="block max-w-none size-full" height="2489" src={imgBg} width="1754" />
      </div>
      
      {/* Logo footer */}
      <motion.div 
        className="absolute h-[196px] left-[771px] top-[2186px] w-[210px]" 
        data-name="Logo footer"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          rotate: 0 
        }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="relative w-full h-full"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="Logo badge" className="absolute h-[260.2%] left-[-367.14%] max-w-none top-[-105.61%] w-[834.29%]" src={imgLogoFooter} />
          </div>
        </motion.div>
      </motion.div>
      
      {/* Call Links (Contact Information) */}
      <motion.div 
        className="absolute h-[376.5px] left-[309px] top-[1689.78px] w-[1255px]" 
        data-name="Call Links"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        <img alt="Contact information" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCallLinks} />
      </motion.div>
      
      <QrText />
      <Frame />
      <Content />

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
    </div>
  );
}
