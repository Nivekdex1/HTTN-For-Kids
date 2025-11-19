import svgPaths from "./svg-aol04ohal5";
import imgBg from "figma:asset/f17b8b6a8318edfa9a20b1f3f8c3db5361795650.png";
import imgSubject4 from "figma:asset/ed80141f180a42ce6de3e505a29f0a7ca3b00966.png";
import imgSubject2 from "figma:asset/375c3a2ed130abbdbba575cbbf7c314db8b76104.png";
import imgSubject1 from "figma:asset/b7e082b482f39ed57de306fa30175f5bebd44997.png";
import imgImage2 from "figma:asset/e0446c04202c325d9cfd93a338d7bccd88661e0b.png";
import imgImage1 from "figma:asset/ffc20cf79c9e911a9dfc91820f0d5076e089dd75.png";
import imgLogo from "figma:asset/2f881615ac1cd9aa71d59f5da7d7ee06972ab3f1.png";

function Bg() {
  return (
    <div className="absolute h-[2480px] left-0 top-0 w-[1754px] z-0" data-name="BG">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="Background" className="absolute h-[107.63%] left-[-74.6%] max-w-none top-[-3.24%] w-[254.69%]" src={imgBg} />
      </div>
    </div>
  );
}

function Subject2() {
  return (
    <div className="absolute h-[1438.92px] left-[1051.11px] top-[653.95px] w-[419.435px]" data-name="Subject 4">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSubject4} />
    </div>
  );
}

function Subject1() {
  return (
    <div className="absolute h-[1649.64px] left-[386.84px] top-[457.27px] w-[497.703px]" data-name="Subject 2">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSubject2} />
    </div>
  );
}

function Subject() {
  return (
    <div className="absolute h-[1495.11px] left-[3.53px] top-[599.76px] w-[487.668px]" data-name="Subject 1">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSubject1} />
    </div>
  );
}

function Subjects() {
  return (
    <div className="absolute h-[2204px] left-[151px] top-[207px] w-[1474px]" data-name="Subjects">
      <div className="absolute h-[177px] left-[-0.48px] top-[1978.48px] w-[1451px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <Subject2 />
      <Subject1 />
      <Subject />
      <div className="absolute h-[1610px] left-[728px] top-[485px] w-[469px]" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-47.28%] max-w-none top-[0.02%] w-[149.15%]" src={imgImage1} />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[72px] relative shrink-0 w-[380px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 380 72">
        <g filter="url(#filter0_i_1_61)" id="Frame 3">
          <rect fill="var(--fill-0, #DC342C)" height="72" rx="21" width="380" />
          <g id="ALSO INSIDE:">
            <path d={svgPaths.p36cefb00} fill="var(--fill-0, white)" />
            <path d={svgPaths.pa0cddf0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p18fd1180} fill="var(--fill-0, white)" />
            <path d={svgPaths.pe525900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p67a4c00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1482ed80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2ff04600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p26b54900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p138c4c80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p4ea7972} fill="var(--fill-0, white)" />
            <path d={svgPaths.p202c3ec0} fill="var(--fill-0, white)" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="80" id="filter0_i_1_61" width="380" x="0" y="-8">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="-13" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_61" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function HealingHopeSmilesEverywhere() {
  return (
    <div className="box-border content-stretch flex items-start px-0 py-px relative shrink-0 w-full" data-name="Healing, Hope & Smiles Everywhere">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "74", "--transform-inner-height": "74" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="relative size-[74px]">
            <div className="absolute inset-[-8.11%_-0.32%_20.95%_-0.32%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 65">
                <path d={svgPaths.p3c4c0340} fill="var(--fill-0, #DC342C)" id="Polygon 1" stroke="var(--stroke-0, white)" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[157.064px] relative shrink-0 w-[524.474px]" data-name="Healing, Hope & Smiles Everywhere">
        <div className="absolute inset-[-9.29%_-3.83%_-13.71%_-3.06%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 561 194">
            <g filter="url(#filter0_d_1_59)" id="Healing, Hope & Smiles Everywhere">
              <mask fill="black" height="163" id="path-1-outside-1_1_59" maskUnits="userSpaceOnUse" width="530" x="13.0549" y="11.5858">
                <rect fill="white" height="163" width="530" x="13.0549" y="11.5858" />
                <path d={svgPaths.p13218d80} />
                <path d={svgPaths.p1a74e00} />
                <path d={svgPaths.p3bf13800} />
                <path d={svgPaths.p25520b00} />
                <path d={svgPaths.p36f73200} />
                <path d={svgPaths.p16ebeb00} />
                <path d={svgPaths.p3cfd5a00} />
                <path d={svgPaths.p960f00} />
                <path d={svgPaths.pc585800} />
                <path d={svgPaths.p2fdd2b00} />
                <path d={svgPaths.pd830200} />
                <path d={svgPaths.p39477bc0} />
                <path d={svgPaths.p10a93220} />
                <path d={svgPaths.p1d5e7a80} />
                <path d={svgPaths.p19dff580} />
                <path d={svgPaths.p179d5d00} />
                <path d={svgPaths.p6a4bc00} />
                <path d={svgPaths.p2a773f00} />
                <path d={svgPaths.p3655cb00} />
                <path d={svgPaths.pa8a480} />
                <path d={svgPaths.p5578480} />
                <path d={svgPaths.p1b720a72} />
                <path d={svgPaths.p23e02300} />
                <path d={svgPaths.p2bb45a70} />
                <path d={svgPaths.p271f0e00} />
                <path d={svgPaths.p29c28000} />
                <path d={svgPaths.p2af5a480} />
                <path d={svgPaths.p51cde00} />
                <path d={svgPaths.p1255e2f1} />
              </mask>
              <path d={svgPaths.p13218d80} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1a74e00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3bf13800} fill="var(--fill-0, white)" />
              <path d={svgPaths.p25520b00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p36f73200} fill="var(--fill-0, white)" />
              <path d={svgPaths.p16ebeb00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3cfd5a00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p960f00} fill="var(--fill-0, white)" />
              <path d={svgPaths.pc585800} fill="var(--fill-0, white)" />
              <path d={svgPaths.p2fdd2b00} fill="var(--fill-0, white)" />
              <path d={svgPaths.pd830200} fill="var(--fill-0, white)" />
              <path d={svgPaths.p39477bc0} fill="var(--fill-0, white)" />
              <path d={svgPaths.p10a93220} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1d5e7a80} fill="var(--fill-0, white)" />
              <path d={svgPaths.p19dff580} fill="var(--fill-0, white)" />
              <path d={svgPaths.p179d5d00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p6a4bc00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p2a773f00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3655cb00} fill="var(--fill-0, white)" />
              <path d={svgPaths.pa8a480} fill="var(--fill-0, white)" />
              <path d={svgPaths.p5578480} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1b720a72} fill="var(--fill-0, white)" />
              <path d={svgPaths.p23e02300} fill="var(--fill-0, white)" />
              <path d={svgPaths.p2bb45a70} fill="var(--fill-0, white)" />
              <path d={svgPaths.p271f0e00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p29c28000} fill="var(--fill-0, white)" />
              <path d={svgPaths.p2af5a480} fill="var(--fill-0, white)" />
              <path d={svgPaths.p51cde00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1255e2f1} fill="var(--fill-0, white)" />
              <path d={svgPaths.p13218d80} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.p1a74e00} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.p3bf13800} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.p25520b00} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.p36f73200} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.p16ebeb00} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.p3cfd5a00} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.p960f00} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.pc585800} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.p2fdd2b00} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.pd830200} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.p39477bc0} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.p10a93220} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.p1d5e7a80} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.p19dff580} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.p179d5d00} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.p6a4bc00} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.p2a773f00} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.p3655cb00} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.pa8a480} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.p5578480} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.p1b720a72} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.p23e02300} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.p2bb45a70} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.p271f0e00} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.p29c28000} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.p2af5a480} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.p51cde00} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
              <path d={svgPaths.p1255e2f1} mask="url(#path-1-outside-1_1_59)" stroke="var(--stroke-0, black)" strokeWidth="4.01373" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="193.187" id="filter0_d_1_59" width="560.597" x="0" y="-4.76837e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="2.00687" dy="3.47599" />
                <feGaussianBlur stdDeviation="8.02746" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.31 0" />
                <feBlend in2="BackgroundImageFix" mode="multiply" result="effect1_dropShadow_1_59" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_59" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-end left-[999.42px] px-0 py-px top-[2129.28px] w-[602.06px]" data-name="Bottom">
      <Frame2 />
      <HealingHopeSmilesEverywhere />
    </div>
  );
}

function Side() {
  return (
    <div className="absolute h-[471px] left-0 top-[1682px] w-[879px]" data-name="Side">
      <div className="absolute bottom-0 left-0 right-0 top-[-2.52%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 879 483">
          <g id="Side">
            <path d={svgPaths.p1173af80} fill="var(--fill-0, #0A537E)" fillOpacity="0.7" />
            <g filter="url(#filter0_d_1_53)" id="function">
              <path d={svgPaths.p21853300} fill="var(--fill-0, #F6FF00)" />
              <path d={svgPaths.p2bfde380} fill="var(--fill-0, #F6FF00)" />
              <path d={svgPaths.p3b2f5e00} fill="var(--fill-0, #F6FF00)" />
              <path d={svgPaths.p3459ac00} fill="var(--fill-0, #F6FF00)" />
              <path d={svgPaths.pa03ef00} fill="var(--fill-0, #F6FF00)" />
              <path d={svgPaths.p11e99100} fill="var(--fill-0, #F6FF00)" />
              <path d={svgPaths.p140d80} fill="var(--fill-0, #F6FF00)" />
              <path d={svgPaths.p2086cd60} fill="var(--fill-0, #F6FF00)" />
            </g>
            <g filter="url(#filter1_d_1_53)" id="GODâS REALM">
              <path d={svgPaths.p1f92da00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p349ef00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3f887500} fill="var(--fill-0, white)" />
              <path d={svgPaths.paeea300} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1374200} fill="var(--fill-0, white)" />
              <path d={svgPaths.p36d7ab70} fill="var(--fill-0, white)" />
              <path d={svgPaths.p2cfa35e0} fill="var(--fill-0, white)" />
              <path d={svgPaths.p202ed200} fill="var(--fill-0, white)" />
              <path d={svgPaths.p136b6c80} fill="var(--fill-0, white)" />
              <path d={svgPaths.pe1e0500} fill="var(--fill-0, white)" />
            </g>
            <g id="Frame">
              <g id="Vector">
                <path d={svgPaths.pe575600} fill="#00A5B9" />
                <path d={svgPaths.p8b780} fill="var(--fill-0, #F5FF00)" />
                <path d={svgPaths.p1f3d0780} stroke="var(--stroke-0, white)" strokeWidth="4" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="143.581" id="filter0_d_1_53" width="623.337" x="209.115" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="16.0549" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0" />
              <feBlend in2="BackgroundImageFix" mode="multiply" result="effect1_dropShadow_1_53" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_53" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="349.055" id="filter1_d_1_53" width="483.055" x="276.973" y="105.846">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="4.01373" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.53 0" />
              <feBlend in2="BackgroundImageFix" mode="multiply" result="effect1_dropShadow_1_53" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_53" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[95.259px] relative shrink-0 w-[264.097px]">
      <div className="absolute inset-[-5.25%_-1.89%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 275 106">
          <g id="Frame 1">
            <rect fill="var(--fill-0, #9F1527)" height="100.259" width="269.097" x="2.5" y="2.5" />
            <rect height="100.259" stroke="var(--stroke-0, white)" strokeWidth="5" width="269.097" x="2.5" y="2.5" />
            <g id="NOVEMBER 2025">
              <path d={svgPaths.p6c2700} fill="var(--fill-0, white)" />
              <path d={svgPaths.p800bc80} fill="var(--fill-0, white)" />
              <path d={svgPaths.p16c5bec0} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1d614300} fill="var(--fill-0, white)" />
              <path d={svgPaths.p15170a00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p20513b00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p31480800} fill="var(--fill-0, white)" />
              <path d={svgPaths.p28e7e000} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3064700} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3a5d8e00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p7cf5300} fill="var(--fill-0, white)" />
              <path d={svgPaths.p35f34700} fill="var(--fill-0, white)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[29px] items-center relative shrink-0 w-full">
      <div className="h-[91.433px] relative shrink-0 w-[532.039px]" data-name="FOR KIDS">
        <div className="absolute inset-[-41.7%_-7.54%_-46.09%_-7.54%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 613 172">
            <g filter="url(#filter0_d_1_64)" id="FOR KIDS">
              <mask fill="black" height="101" id="path-1-outside-1_1_64" maskUnits="userSpaceOnUse" width="542" x="35.1373" y="33.1304">
                <rect fill="white" height="101" width="542" x="35.1373" y="33.1304" />
                <path d={svgPaths.p174fb580} />
                <path d={svgPaths.pf5ccd00} />
                <path d={svgPaths.p1ac59700} />
                <path d={svgPaths.p304ca900} />
                <path d={svgPaths.p39243e00} />
                <path d={svgPaths.p1619da00} />
                <path d={svgPaths.p1852ce80} />
              </mask>
              <path d={svgPaths.p174fb580} fill="var(--fill-0, #FFFB00)" />
              <path d={svgPaths.pf5ccd00} fill="var(--fill-0, #FFFB00)" />
              <path d={svgPaths.p1ac59700} fill="var(--fill-0, #FFFB00)" />
              <path d={svgPaths.p304ca900} fill="var(--fill-0, #FFFB00)" />
              <path d={svgPaths.p39243e00} fill="var(--fill-0, #FFFB00)" />
              <path d={svgPaths.p1619da00} fill="var(--fill-0, #FFFB00)" />
              <path d={svgPaths.p1852ce80} fill="var(--fill-0, #FFFB00)" />
              <path d={svgPaths.p174fb580} mask="url(#path-1-outside-1_1_64)" stroke="var(--stroke-0, #E83C3D)" strokeWidth="8.02746" />
              <path d={svgPaths.pf5ccd00} mask="url(#path-1-outside-1_1_64)" stroke="var(--stroke-0, #E83C3D)" strokeWidth="8.02746" />
              <path d={svgPaths.p1ac59700} mask="url(#path-1-outside-1_1_64)" stroke="var(--stroke-0, #E83C3D)" strokeWidth="8.02746" />
              <path d={svgPaths.p304ca900} mask="url(#path-1-outside-1_1_64)" stroke="var(--stroke-0, #E83C3D)" strokeWidth="8.02746" />
              <path d={svgPaths.p39243e00} mask="url(#path-1-outside-1_1_64)" stroke="var(--stroke-0, #E83C3D)" strokeWidth="8.02746" />
              <path d={svgPaths.p1619da00} mask="url(#path-1-outside-1_1_64)" stroke="var(--stroke-0, #E83C3D)" strokeWidth="8.02746" />
              <path d={svgPaths.p1852ce80} mask="url(#path-1-outside-1_1_64)" stroke="var(--stroke-0, #E83C3D)" strokeWidth="8.02746" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="171.707" id="filter0_d_1_64" width="612.314" x="-9.53674e-07" y="-2.38419e-06">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2.00687" />
                <feGaussianBlur stdDeviation="18.0618" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.00012677 0 0 0 0 0.000600247 0 0 0 0 0.000394628 0 0 0 0.44 0" />
                <feBlend in2="BackgroundImageFix" mode="multiply" result="effect1_dropShadow_1_64" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_64" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame />
    </div>
  );
}

function Lower() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[0.15px] top-[419.33px] w-[862.327px]" data-name="Lower">
      <Frame1 />
    </div>
  );
}

function HealingToTheNations() {
  return (
    <div className="absolute h-[366px] left-[0.15px] top-[39.49px] w-[885px]" data-name="Healing to the Nations">
      <div className="absolute inset-[-10.55%_-4.61%_-11.73%_-4.58%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 967 448">
          <g id="Healing to the Nations">
            <g filter="url(#filter0_d_1_45)" id="HEÂ ALING">
              <path d={svgPaths.pc435ef0} fill="var(--fill-0, white)" />
              <path d={svgPaths.p99b4180} fill="var(--fill-0, white)" />
              <path d={svgPaths.p956e900} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1d75900} fill="var(--fill-0, white)" />
              <path d={svgPaths.p7553600} fill="var(--fill-0, white)" />
              <path d={svgPaths.p8534100} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3534ac00} fill="var(--fill-0, white)" />
            </g>
            <g filter="url(#filter1_d_1_45)" id="NATIONS">
              <path d={svgPaths.p213d3e00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p4abb780} fill="var(--fill-0, white)" />
              <path d={svgPaths.p18b83180} fill="var(--fill-0, white)" />
              <path d={svgPaths.p37e7f800} fill="var(--fill-0, white)" />
              <path d={svgPaths.p20e74700} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3bce2f70} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3147a400} fill="var(--fill-0, white)" />
            </g>
            <g filter="url(#filter2_d_1_45)" id="to the">
              <path d={svgPaths.p22568350} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1705d900} fill="var(--fill-0, white)" />
              <path d={svgPaths.p7d5a480} fill="var(--fill-0, white)" />
              <path d={svgPaths.p2148cf00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p2fdc6c00} fill="var(--fill-0, white)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="265.924" id="filter0_d_1_45" width="805.158" x="0" y="-1.19209e-06">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2.27825" />
              <feGaussianBlur stdDeviation="20.5043" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.00012677 0 0 0 0 0.000600247 0 0 0 0 0.000394628 0 0 0 0.44 0" />
              <feBlend in2="BackgroundImageFix" mode="multiply" result="effect1_dropShadow_1_45" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_45" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="255.707" id="filter1_d_1_45" width="966.36" x="0" y="191.854">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2.27825" />
              <feGaussianBlur stdDeviation="20.5043" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.00012677 0 0 0 0 0.000600247 0 0 0 0 0.000394628 0 0 0 0.44 0" />
              <feBlend in2="BackgroundImageFix" mode="multiply" result="effect1_dropShadow_1_45" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_45" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="220.359" id="filter2_d_1_45" width="174.95" x="766.358" y="22.7825">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2.27825" />
              <feGaussianBlur stdDeviation="9.113" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.00012677 0 0 0 0 0.000600247 0 0 0 0 0.000394628 0 0 0 0.29 0" />
              <feBlend in2="BackgroundImageFix" mode="multiply" result="effect1_dropShadow_1_45" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_45" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Theme() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-start left-[244.84px] p-[10px] top-[-45.99px]" data-name="Theme">
      <Lower />
      <HealingToTheNations />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute h-[228.783px] left-0 top-0 w-[232.796px]" data-name="Logo">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo} />
    </div>
  );
}

function Top() {
  return (
    <div className="absolute h-[495.696px] left-[295.01px] top-[144.49px] w-[1165.99px]" data-name="Top">
      <Theme />
      <Logo />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="1">
      <Bg />
      <Subjects />
      <Bottom />
      <Side />
      <Top />
    </div>
  );
}