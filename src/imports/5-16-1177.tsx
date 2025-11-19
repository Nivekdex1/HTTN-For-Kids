import svgPaths from "./svg-0eozkmxqgd";
import imgImage20 from "figma:asset/bdc078fa503ed889195975b7e40e324b0b4796ac.png";
import imgImage19 from "figma:asset/a07b66fd1223858ce903554807a8af1c01ba5ec0.png";
import imgImage18 from "figma:asset/97d75d1021e2fb5834f224335a336fbc5096c281.png";
import imgImage16 from "figma:asset/20c1d0b0b227feb93dd5b967772d7ccdffbea91f.png";
import imgImage17 from "figma:asset/e9fd8e6dcdd8572c25c668faa031e65cf5492777.png";
import imgImage21 from "figma:asset/625faa7bdb865743835f93d71f6553bdec3184d0.png";

function Frame() {
  return (
    <div className="h-[1110px] relative shrink-0 w-full">
      <div className="absolute h-[1110px] left-0 top-0 w-[1455px]" data-name="image 20">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage20} />
      </div>
      <div className="absolute h-[163px] left-[503px] top-[29px] w-[824px]" data-name="image 19">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage19} />
      </div>
    </div>
  );
}

function Comic1() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[150px] top-[1156px] w-[1455px]" data-name="Comic 6">
      <div className="h-[113px] relative shrink-0 w-[1455px]" data-name="image 18">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage18} />
      </div>
      <Frame />
    </div>
  );
}

function Comic() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[139px] top-[153px] w-[1455px]" data-name="Comic 5">
      <div className="h-[72px] relative shrink-0 w-[1455px]" data-name="image 16">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage16} />
      </div>
      <div className="h-[858px] relative shrink-0 w-[1455px]" data-name="image 17">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
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
          <g id="05">
            <path d={svgPaths.pb828000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p16fe9e70} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="5">
      <div className="absolute h-[2480px] left-0 top-0 w-[1754px]" data-name="image 21">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage21} />
      </div>
      <Comic1 />
      <Comic />
      <Pagination />
    </div>
  );
}