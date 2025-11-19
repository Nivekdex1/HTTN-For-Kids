import svgPaths from "./svg-kobx6qfc5s";
import imgAnimateThisCharacter2025110913331 from "figma:asset/0dd4a4f2ec08e117f6a4da722ba5a00fa48900c1.png";
import imgImage12 from "figma:asset/049a00b00444c80a7b0a6af12f5d99687b8f3a29.png";
import imgImage29 from "figma:asset/ac26a9e2c88e5d8066bb0142b09917147b99d160.png";
import imgImage11 from "figma:asset/b556745659e98264d6da7e13b006d3103255e2bc.png";
import imgImage10 from "figma:asset/2dc35538354a9a3bf8a52f1eedbcaf6eaaf6fcab.png";

function Top() {
  return (
    <div className="absolute left-0 size-[0.01px] top-0" data-name="Top">
      <div className="absolute left-[828px] size-[904px] top-[95px]" data-name="Animate_this_character_202511091333 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAnimateThisCharacter2025110913331} />
      </div>
      <div className="absolute h-[677.5px] left-[calc(50%+512.028px)] top-[149.63px] translate-x-[-50%] w-[695.5px]" data-name="image 12">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage12} />
      </div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="absolute h-[42px] left-[calc(50%-0.087px)] top-[2385px] translate-x-[-50%] w-[43.826px]" data-name="Pagination">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 42">
        <g id="Pagination">
          <rect fill="var(--fill-0, #FF0000)" height="42" rx="21" width="43.8261" />
          <g id="03">
            <path d={svgPaths.pc35e9f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p252ba900} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="3">
      <div className="absolute h-[2480px] left-0 top-0 w-[1754px]" data-name="image 29">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage29} />
      </div>
      <div className="absolute h-[984px] left-[143px] top-[1154px] w-[1483px]" data-name="image 11">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[217.28%] left-[-9.64%] max-w-none top-[-117.28%] w-[109.64%]" src={imgImage11} />
        </div>
      </div>
      <Top />
      <div className="absolute h-[296px] left-[143px] top-[858px] w-[1420px]" data-name="image 10">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage10} />
      </div>
      <Pagination />
    </div>
  );
}