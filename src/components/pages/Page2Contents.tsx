import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import svgPaths from "../../imports/svg-7crlwa66fg";
import imgPencil from "figma:asset/1e280d8d854e2d1490624002e1277c3f3918ed9c.png";
import imgImage7 from "figma:asset/00b002ca79e2e9b72fa6ff9e35774f394e929da2.png";
import imgCardBgGreen from "figma:asset/157448fe642396e3e7af610341c2be3870975f70.png";
import img8 from "figma:asset/fdbc8009a92d2674aaa81a7f243b31c14012bf67.png";
import imgText from "figma:asset/bc7f24318bfa98f016788cb96d4b5c1b180f882d.png";
import imgCardRed from "figma:asset/90740d74569af9b37632815558087a29b18b2997.png";
import img4 from "figma:asset/77af8024155c457c34bf99ef2bb3a6f76c397b57.png";
import imgText1 from "figma:asset/9891474749c702225e838a3268ebf02085f3c734.png";
import imgImage6 from "figma:asset/857739d9713c1cfe194f9fd538109381ac57ffb9.png";
import imgIllustrationHappyChildhoodTwoChildrenOpenAreaFestiveAtmosphereBalloonsVector from "figma:asset/03d77846f66844db6a5ed8f2b6328d36c3a6aac1.png";
import imgImage9 from "figma:asset/d0152471966cda109c4ea3d18b74033ef7d665c3.png";
import imgImage8 from "figma:asset/c6dd8f4317d2caad35998a263d6d1285aeb183b7.png";

interface Page2ContentsProps {
  userName?: string;
  userAge?: string;
}

function Age() {
  return (
    <div className="absolute h-[59.345px] left-[171.75px] top-[1303.94px] w-[1465.79px]" data-name="Age">
      <div className="absolute bottom-[-3.37%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1466 62">
          <g id="Age">
            <g id="Age:">
              <path d={svgPaths.p2c4d5380} fill="var(--fill-0, black)" />
              <path d={svgPaths.p386af100} fill="var(--fill-0, black)" />
              <path d={svgPaths.p2be65200} fill="var(--fill-0, black)" />
              <path d={svgPaths.p396b3780} fill="var(--fill-0, black)" />
            </g>
            <path d={svgPaths.p2e99ad00} id="Vector 2" stroke="var(--stroke-0, black)" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="absolute h-[47.564px] left-[168.23px] top-[1156.72px] w-[1466.56px]" data-name="Name">
      <div className="absolute bottom-[-4.2%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1467 50">
          <g id="Name">
            <g id="Name:">
              <path d={svgPaths.p2e872b00} fill="var(--fill-0, black)" />
              <path d={svgPaths.p2bc1c780} fill="var(--fill-0, black)" />
              <path d={svgPaths.pb59e00} fill="var(--fill-0, black)" />
              <path d={svgPaths.p28700800} fill="var(--fill-0, black)" />
              <path d={svgPaths.p1b47de00} fill="var(--fill-0, black)" />
            </g>
            <path d="M199.563 47.5636H1466.56" id="Vector 1" stroke="var(--stroke-0, black)" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function DataCard() {
  return (
    <div className="absolute left-0 size-[0.01px] top-0" data-name="Data card">
      <div className="absolute h-[383.937px] left-[124.53px] top-[1054.41px] w-[1513.12px]">
        <div className="absolute inset-[-11.72%_-2.97%_-13.28%_-3.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1610 480">
            <g filter="url(#filter0_d_1_125)" id="Rectangle 16">
              <path clipRule="evenodd" d={svgPaths.pa395100} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="479.937" id="filter0_d_1_125" width="1609.12" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="-3" dy="3" />
                <feGaussianBlur stdDeviation="24" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.56 0" />
                <feBlend in2="BackgroundImageFix" mode="multiply" result="effect1_dropShadow_1_125" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_125" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <motion.div
        className="absolute h-[291px] left-[1404px] top-[872px] w-[185px]"
        data-name="pencil"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ 
          opacity: 1, 
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          opacity: { duration: 1, delay: 0.8 },
          rotate: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.8 }
        }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgPencil} />
      </motion.div>
      <Age />
      <Name />
      <motion.div
        className="absolute left-[791px] size-[138px] top-[985px]"
        data-name="image 7"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: 1, 
          scale: 1
        }}
        transition={{
          duration: 1,
          delay: 0.5
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[813.77%] left-[-573.19%] max-w-none top-[-713.77%] w-[673.19%]" src={imgImage7} />
        </div>
      </motion.div>
    </div>
  );
}

function Component1() {
  return (
    <motion.div
      className="absolute left-0 size-[0.01px] top-0"
      data-name="2"
      initial={{ opacity: 0, x: 100 }}
      animate={{ 
        opacity: 1, 
        x: 0
      }}
      transition={{
        duration: 1,
        delay: 0.4
      }}
    >
      <div className="absolute h-[294px] left-[356px] top-[628px] w-[1058px]" data-name="Card BG Green">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgCardBgGreen} />
      </div>
      <div className="absolute h-[187.5px] left-[441.67px] top-[685.55px] w-[100.5px]" data-name="8">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img8} />
      </div>
      <div className="absolute h-[188px] left-[658.57px] top-[654.22px] w-[705.5px]" data-name="Text">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgText} />
      </div>
    </motion.div>
  );
}

function Component() {
  return (
    <motion.div
      className="absolute left-0 size-[0.01px] top-0"
      data-name="1"
      initial={{ opacity: 0, x: -100 }}
      animate={{ 
        opacity: 1, 
        x: 0
      }}
      transition={{
        duration: 1,
        delay: 0.2
      }}
    >
      <div className="absolute h-[294px] left-[356px] top-[312px] w-[1058px]" data-name="Card Red">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgCardRed} />
      </div>
      <div className="absolute h-[183px] left-[1215.91px] top-[372.85px] w-[105.5px]" data-name="4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img4} />
      </div>
      <div className="absolute h-[188.5px] left-[392.06px] top-[337.08px] w-[628.5px]" data-name="Text">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgText1} />
      </div>
    </motion.div>
  );
}

function Header() {
  return (
    <div className="absolute left-0 size-[0.01px] top-0" data-name="Header">
      <Component1 />
      <Component />
      <motion.div
        className="absolute h-[151.5px] left-[449px] top-[131.99px] w-[872px]"
        data-name="image 6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ 
          opacity: 1, 
          y: 0
        }}
        transition={{
          duration: 1,
          delay: 0
        }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage6} />
      </motion.div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="absolute h-[42px] left-[calc(50%-0.087px)] top-[2385px] translate-x-[-50%] w-[43.826px]" data-name="Pagination">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 42">
        <g id="Pagination">
          <rect fill="var(--fill-0, #FF0000)" height="42" rx="21" width="43.8261" />
          <g id="02">
            <path d={svgPaths.p24797f70} fill="var(--fill-0, white)" />
            <path d={svgPaths.p13c50370} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Page2Contents({ userName, userAge }: Page2ContentsProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    // Resolve the bundled MP3 from src/assets
    const audioSrc = new URL('../../assets/P2.mp3', import.meta.url).href;
    audioElement.src = audioSrc;
    audioElement.volume = 1;
    audioElement.playbackRate = 0.9;

    // Auto-play with a slight delay
    const playTimer = setTimeout(async () => {
      try {
        await audioElement.play();
      } catch (err) {
        console.log('Auto-play blocked, user interaction required:', err);
      }
    }, 1500);

    return () => {
      clearTimeout(playTimer);
      if (audioElement) {
        audioElement.pause();
      }
    };
  }, []);

  return (
    <div className="bg-white relative size-full" data-name="2">
      {/* Audio element for P2.mp3 */}
      <audio ref={audioRef} />
      
      <div className="absolute h-[2480px] left-0 top-0 w-[1754px]" data-name="illustration-happy-childhood-two-children-open-area-festive-atmosphere-balloons-vector">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[286.09%] left-[-41.51%] max-w-none top-[-59.23%] w-[269.67%]" src={imgIllustrationHappyChildhoodTwoChildrenOpenAreaFestiveAtmosphereBalloonsVector} />
        </div>
      </div>
      <motion.div
        className="absolute h-[137px] left-[177px] top-[2196px] w-[1415px]"
        data-name="image 9"
        initial={{ opacity: 0, y: 30 }}
        animate={{ 
          opacity: 1, 
          y: 0
        }}
        transition={{
          duration: 1,
          delay: 1
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1706.67%] left-[-10.75%] max-w-none top-[-1605.17%] w-[110.75%]" src={imgImage9} />
        </div>
      </motion.div>
      <motion.div
        className="absolute h-[725px] left-[115px] top-[1453px] w-[1539px]"
        data-name="image 8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ 
          opacity: 1, 
          scale: 1
        }}
        transition={{
          duration: 1,
          delay: 0.6
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[294.46%] left-[-6.71%] max-w-none top-[-196.74%] w-[105.86%]" src={imgImage8} />
        </div>
      </motion.div>
      <DataCard />
      <Header />
      <Pagination />
      <motion.div
        className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[74px] justify-end leading-[0] left-[422px] not-italic text-[60px] text-black top-[1204px] translate-y-[-100%] w-[1128px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p className="leading-[normal]">{userName || 'John Doe'}</p>
      </motion.div>
      <motion.div
        className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[74px] justify-end leading-[0] left-[422px] not-italic text-[60px] text-black top-[1364px] translate-y-[-100%] w-[1128px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <p className="leading-[normal]">{userAge || '8-10 years'}</p>
      </motion.div>
    </div>
  );
}
