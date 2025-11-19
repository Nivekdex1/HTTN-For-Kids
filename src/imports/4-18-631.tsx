import svgPaths from "./svg-i9gjt43o33";
import img02FbGnpi066StoopedWoman1024 from "figma:asset/60a9c0ec34016d13e438ca12b4c8a36a2d92180d.png";
import img03FbGnpi066StoopedWoman1024 from "figma:asset/adc61751f806491e661e892eac79b11fe4f2a099.png";
import imgImage13 from "figma:asset/7c01307c644fba449530eab7d90806e89368a125.png";
import imgImage14 from "figma:asset/61e652971a2679a186f91a3e32517fdc478b7692.png";
import imgImage15 from "figma:asset/dc0bd57d3e3d1749801cdac44c8791d02b65570d.png";
import imgVector from "figma:asset/244250185b300d385d24270ac94c491cf578e241.png";
import imgTitle1 from "figma:asset/aa97184b78cc19a8201b076de18714abb5e92a4a.png";
import imgJesusHealsTheCrippledWoman1 from "figma:asset/58fd468a5dcfe4e0a04933d719da8770b8f5fa9f.png";
import imgBg from "figma:asset/2b413809168f2a8f44334a5f662eff90d7c97ee4.png";

function Frame2() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-start left-[153px] top-[1682px] w-[1452px]">
      <div className="basis-0 grow h-[568px] min-h-px min-w-px relative shrink-0" data-name="02_FB_GNPI_066_Stooped_Woman_1024">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-8.44%] max-w-none top-0 w-[108.44%]" src={img02FbGnpi066StoopedWoman1024} />
        </div>
      </div>
      <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="03_FB_GNPI_066_Stooped_Woman_1024">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.84%] left-0 max-w-none top-[-0.88%] w-full" src={img03FbGnpi066StoopedWoman1024} />
        </div>
      </div>
    </div>
  );
}

function Comic1() {
  return (
    <div className="absolute left-0 size-[0.01px] top-0" data-name="Comic 4">
      <Frame2 />
      <div className="absolute h-[299px] left-[722px] top-[1982px] w-[391px]" data-name="image 13">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage13} />
      </div>
      <div className="absolute h-[64px] left-[153px] top-[1617px] w-[1452px]" data-name="image 14">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage14} />
      </div>
    </div>
  );
}

function Comic() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[calc(50%-0.5px)] top-[588px] translate-x-[-50%]" data-name="Comic 3">
      <div className="h-[155px] relative shrink-0 w-[1452px]" data-name="image 15">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage15} />
      </div>
      <div className="h-[790px] relative shrink-0 w-[1455px]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" height="790" src={imgVector} width="1455" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[132px] items-center left-[146px] top-[150.48px]">
      <div className="h-[340px] relative shrink-0 w-[649px]" data-name="Title 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTitle1} />
      </div>
      <div className="h-[372px] relative shrink-0 w-[675px]" data-name="Jesus Heals the Crippled Woman 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgJesusHealsTheCrippledWoman1} />
      </div>
    </div>
  );
}

function Theme() {
  return (
    <div className="absolute left-0 size-[0.01px] top-0" data-name="Theme">
      <Frame />
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

export default function Component() {
  return (
    <div className="relative size-full" data-name="4">
      <div className="absolute h-[2480px] left-0 top-0 w-[1754px]" data-name="BG">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[128.91%] left-[-36.66%] max-w-none top-[-16.21%] w-[273.37%]" src={imgBg} />
        </div>
      </div>
      <Comic1 />
      <Comic />
      <Theme />
      <Frame1 />
    </div>
  );
}