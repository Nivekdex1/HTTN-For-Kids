import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { useVoiceover } from '../../utils/useVoiceover';
import { Volume2, VolumeX } from 'lucide-react';
import imgImage60 from "figma:asset/cce620129696b4e7a10551c700fd539282d4e6a2.png";
import imgImage61 from "figma:asset/4c23e7b30869ae3eba2a034e3450df93a0e36081.png";
import imgImage62 from "figma:asset/1eb297dc53f44ba08ef2cb347d524f65e0bb79ef.png";
import imgImage63 from "figma:asset/93bef73e1decab82ea4b3fe96649d2df7111e7fb.png";
import imgImage64 from "figma:asset/091f1637a14c7a8265ed201b5ed421981c04d98d.png";
import imgImage65 from "figma:asset/db615da53b268039ff0e1894e0a172e97b185176.png";
import imgImage66 from "figma:asset/e01d7463d7cc296a1f7d9f537d9dc4e2586bb646.png";
import imgImage56 from "figma:asset/71ad825249c4ddbbaccfc7918fb9c6940bdf4d2a.png";
import imgImage57 from "figma:asset/78cd16ce7e49c203fc1c1449a1361535141b09e7.png";
import imgImage58 from "figma:asset/7a531625b2f0904b6a880230815dc3645f2bfa4a.png";
import imgImage59 from "figma:asset/37c4076411ceae063b42f81f1d711b12dc4ee482.png";
import imgImage53 from "figma:asset/a3179007ae3fab90a98e21687fa94bfa646e1d8e.png";
import imgImage52 from "figma:asset/f6f57f3127fa2f001e0231c5e91cf708dc424d49.png";
import imgImage54 from "figma:asset/17b257e4e42194839fef4b3093ac4562a6a9bcf3.png";
import imgImage51 from "figma:asset/acff0ca1afee7f962034040c0e8189707a6a368f.png";
import imgImage50 from "figma:asset/301ee4711c8359e7b1525cf98eca25e32145d656.png";
import imgImage55 from "figma:asset/4e848b9624772139c5fa31bc4fec4491e44e5b9b.png";

function Frame4() {
  return (
    <motion.div 
      className="content-stretch flex flex-col gap-[44px] items-center relative shrink-0 w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
    >
      <motion.div 
        className="h-[119px] relative shrink-0 w-[1112.5px]" 
        data-name="image 60"
        initial={{ x: -30 }}
        animate={{ 
          x: 0,
          scale: [1, 1.1, 1, 1, 1, 1, 1, 1]
        }}
        transition={{ 
          x: { duration: 0.6, delay: 1.2 },
          scale: {
            duration: 8,
            repeat: Infinity,
            times: [0, 0.0625, 0.125, 0.25, 0.375, 0.5, 0.625, 1],
            ease: "easeInOut",
            delay: 2
          }
        }}
      >
        <img alt="Stay Focused" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage60} />
      </motion.div>
      <motion.div 
        className="h-[89px] relative shrink-0 w-[884.5px]" 
        data-name="image 61"
        initial={{ x: 30 }}
        animate={{ 
          x: 0,
          scale: [1, 1, 1.1, 1, 1, 1, 1, 1]
        }}
        transition={{ 
          x: { duration: 0.6, delay: 1.3 },
          scale: {
            duration: 8,
            repeat: Infinity,
            times: [0, 0.125, 0.1875, 0.25, 0.375, 0.5, 0.625, 1],
            ease: "easeInOut",
            delay: 2
          }
        }}
      >
        <img alt="Feel Energized" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage61} />
      </motion.div>
    </motion.div>
  );
}

function Frame3() {
  return (
    <motion.div 
      className="content-stretch flex flex-col gap-[22px] items-center relative shrink-0 w-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1.4 }}
    >
      <motion.div 
        className="h-[75px] relative shrink-0 w-[1093px]" 
        data-name="image 62"
        animate={{ 
          scale: [1, 1, 1, 1.08, 1, 1, 1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          times: [0, 0.25, 0.3, 0.3625, 0.425, 0.5, 0.625, 1],
          ease: "easeInOut",
          delay: 2
        }}
        whileHover={{ scale: 1.02 }}
      >
        <img alt="Boosts blood flow and keeps your heart strong" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage62} />
      </motion.div>
      <motion.div 
        className="h-[71px] relative shrink-0 w-[1093px]" 
        data-name="image 63"
        animate={{ 
          scale: [1, 1, 1, 1, 1.08, 1, 1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          times: [0, 0.375, 0.425, 0.45, 0.5125, 0.575, 0.625, 1],
          ease: "easeInOut",
          delay: 2
        }}
        whileHover={{ scale: 1.02 }}
      >
        <img alt="Helps you focus, remember, and learn faster" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage63} />
      </motion.div>
      <motion.div 
        className="h-[67px] relative shrink-0 w-[1091px]" 
        data-name="image 64"
        animate={{ 
          scale: [1, 1, 1, 1, 1, 1.08, 1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          times: [0, 0.5, 0.55, 0.575, 0.6375, 0.7, 0.75, 1],
          ease: "easeInOut",
          delay: 2
        }}
        whileHover={{ scale: 1.02 }}
      >
        <img alt="Releases feel-good chemicals that fight stress" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage64} />
      </motion.div>
      <motion.div 
        className="h-[73px] relative shrink-0 w-[1105px]" 
        data-name="image 65"
        animate={{ 
          scale: [1, 1, 1, 1, 1, 1, 1.08, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          times: [0, 0.625, 0.675, 0.7, 0.7625, 0.825, 0.875, 1],
          ease: "easeInOut",
          delay: 2
        }}
        whileHover={{ scale: 1.02 }}
      >
        <img alt="Builds strength with every move" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage65} />
      </motion.div>
      <motion.div 
        className="h-[73px] relative shrink-0 w-[1205px]" 
        data-name="image 66"
        animate={{ 
          scale: [1, 1, 1, 1, 1, 1, 1, 1.08, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          times: [0, 0.75, 0.8, 0.825, 0.8875, 0.95, 0.975, 1, 1],
          ease: "easeInOut",
          delay: 2
        }}
        whileHover={{ scale: 1.02 }}
      >
        <img alt="Moving during the day helps you rest better at night" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage66} />
      </motion.div>
    </motion.div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-1/2 top-[404px] translate-x-[-50%] w-[1205px]">
      <Frame4 />
      <Frame3 />
    </div>
  );
}

function Frame() {
  return (
    <motion.div 
      className="content-stretch flex gap-[206px] items-start relative shrink-0 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <div className="h-[104px] relative shrink-0 w-[486px]" data-name="image 56">
        <img alt="Stay Focused" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage56} />
      </div>
      <div className="h-[102px] relative shrink-0 w-[502px]" data-name="image 57">
        <img alt="Feel Energized" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage57} />
      </div>
    </motion.div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23px] items-center left-[calc(50%+0.5px)] top-0 translate-x-[-50%] w-[1194px]">
      <Frame />
      <motion.div 
        className="h-[104px] relative shrink-0 w-[748px]" 
        data-name="image 58"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <img alt="Keep your body strong" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage58} />
      </motion.div>
      <motion.div 
        className="h-[100px] relative shrink-0 w-[1130px]" 
        data-name="image 59"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <img alt="And have a little fun while learning" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage59} />
      </motion.div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute h-[1142px] left-[243px] top-[1213px] w-[1267px]" data-name="Content">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function Title() {
  return (
    <div className="absolute h-[658px] left-0 top-[173px] w-[1045px]" data-name="Title">
      <motion.div 
        className="absolute h-[57.5px] left-[21.15px] top-[564.5px] w-[974.5px]" 
        data-name="image 53"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <img alt="Stay Focused and Energized" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage53} />
      </motion.div>
      <motion.div 
        className="absolute h-[658px] left-0 top-0 w-[1045px]" 
        data-name="image 52"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          rotate: [0, -3, 3, -3, 3, -2, 2, 0]
        }}
        transition={{ 
          opacity: { duration: 0.8, delay: 0.2 },
          scale: { duration: 0.8, delay: 0.2 },
          rotate: { 
            duration: 1.2, 
            repeat: Infinity, 
            repeatDelay: 2,
            ease: "easeInOut",
            delay: 1.5
          }
        }}
      >
        <img alt="Wiggle Breaks" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage52} />
      </motion.div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute h-[831px] left-0 top-0 w-[1496px]" data-name="Header">
      <Title />
      {/* Animated girl character */}
      <motion.div 
        className="absolute h-[810px] left-[1052px] top-0 w-[444px]" 
        data-name="image 54"
        initial={{ opacity: 0, x: 100, y: 0 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          y: [0, -15, 0]
        }}
        transition={{
          opacity: { duration: 1, delay: 0.3 },
          x: { duration: 1, delay: 0.3 },
          y: { 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut", 
            delay: 1.3
          }
        }}
      >
        <img alt="Happy energetic girl" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage54} />
      </motion.div>
    </div>
  );
}

function Top() {
  return (
    <div className="absolute h-[831px] left-[145px] top-[90px] w-[1496px]" data-name="Top">
      <Header />
      <motion.div 
        className="absolute h-[55.5px] left-[5px] top-[60px] w-[658px]" 
        data-name="image 51"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <img alt="Healthy Living for Winners" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage51} />
      </motion.div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="absolute bg-[red] box-border content-stretch flex gap-[6.087px] h-[42px] items-center justify-center left-[calc(50%-0.087px)] p-[6.087px] rounded-[60.87px] top-[2385px] translate-x-[-50%] w-[43.826px]" data-name="Pagination">
      <p className="font-['Comic_Sans_MS:Bold',sans-serif] leading-[29.318px] not-italic relative shrink-0 text-[25.653px] text-center text-nowrap text-white whitespace-pre">12</p>
    </div>
  );
}

export default function Page12() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const voiceoverContent = `Healthy living for winners:

Hey there Champs, Did you know that your body and spirit love to move, even when you're learning, meditating, or indoors all day? When you sit too long, your brain gets sleepy, and the wiggles build up like popcorn ready to pop! That's why wiggle breaks are important. They help you:

Stay focused, feel energized, keep your body strong and have a little fun learning. Wiggle breaks aren't just fun, they are great for your body and brain. They boost blood flow and keep your heart strong, they help you focus, remember and learn faster, they release feel-good chemicals that fight stress. Also, moving through the day helps you rest better at night.`;

  const { playVoiceover, stopVoiceover, pauseVoiceover, resumeVoiceover } = useVoiceover({
    content: voiceoverContent,
    voiceGender: 'female',
    autoplay: true,
    delay: 1500,
    onStart: () => setIsPlaying(true),
    onEnd: () => setIsPlaying(false),
  });

  useEffect(() => {
    // Keep audioRef for future pre-recorded audio support; not used for TTS toggling
    audioRef.current = new Audio();
    audioRef.current.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('ended', () => setIsPlaying(false));
      }
    };
  }, []);

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
      <div className="bg-white relative size-full" data-name="12">
        <div className="absolute h-[2480px] left-0 top-0 w-[1754px]" data-name="image 50">
          <img alt="Background" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage50} />
        </div>
        <Content />
        <motion.div 
          className="absolute h-[228px] left-[156px] top-[934px] w-[1450px]" 
          data-name="image 55"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img alt="Introduction text about wiggle breaks" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage55} />
        </motion.div>
        <Top />
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
