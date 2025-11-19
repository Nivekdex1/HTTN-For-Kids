import svgPaths from "./svg-5ermehcl92";
import imgVector from "figma:asset/b518399ed47884f4b4f9254a9986eb2916ba73fa.png";
import imgHeaderColorMe1 from "figma:asset/12250fa234e313ca6b0482e9ff0cbea361eda008.png";
import imgImage27 from "figma:asset/fea052f26c11aeec3b284255c89c87d1ec54a8ed.png";

function Art() {
  return (
    <div className="absolute h-[2067px] left-[-139px] top-[265px] w-[1676px]" data-name="Art">
      <div className="absolute bottom-0 left-[2.15%] right-[-2.15%] top-0" data-name="Vector">
        <img alt="" className="block max-w-none size-full" height="2067" src={imgVector} width="1676" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[10px] items-start left-[13px] p-[20px] top-[18px] w-[1416px]">
      <div className="aspect-[1396/295] relative shrink-0 w-full" data-name="Header Color Me 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHeaderColorMe1} />
      </div>
    </div>
  );
}

function ColorMe() {
  return (
    <div className="absolute h-[2177px] left-[150px] top-[148px] w-[1419px]" data-name="Color Me">
      <Art />
      <Frame />
    </div>
  );
}

function Pagination() {
  return (
    <div className="absolute h-[42px] left-[calc(50%-0.087px)] top-[2385px] translate-x-[-50%] w-[43.826px]" data-name="Pagination">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 42">
        <g id="Pagination">
          <rect fill="var(--fill-0, #FF0000)" height="42" rx="21" width="43.8261" />
          <g id="07">
            <path d={svgPaths.p11048300} fill="var(--fill-0, white)" />
            <path d={svgPaths.pe676d00} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="7">
      <div className="absolute h-[2480px] left-0 top-0 w-[1754px]" data-name="image 27">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage27} />
      </div>
      <ColorMe />
      <Pagination />
    </div>
  );
}