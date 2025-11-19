import svgPaths from "./svg-o8msnsnofx";
import imgImage24 from "figma:asset/343d41e8521997919dafeaea602342eeb1afd520.png";
import imgImage23 from "figma:asset/2f7fd107b4364e766dd950bbb92624b7fc92bdc5.png";
import imgImage22 from "figma:asset/f14a4bf4900d665fa98c33b77b12088e3965fc9c.png";
import imgTitle1 from "figma:asset/aa97184b78cc19a8201b076de18714abb5e92a4a.png";
import imgJesusHealsTheCrippledWoman1 from "figma:asset/58fd468a5dcfe4e0a04933d719da8770b8f5fa9f.png";
import imgImage26 from "figma:asset/fea052f26c11aeec3b284255c89c87d1ec54a8ed.png";
import imgImage25 from "figma:asset/57a728b73006b2bec9bc05441c69d4807301de4b.png";

function Comic() {
  return (
    <div className="absolute h-[1295px] left-[106px] top-[579px] w-[1502px]" data-name="Comic 6">
      <div className="absolute h-[1033px] left-[43px] top-[201px] w-[1459px]" data-name="image 24">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage24} />
      </div>
      <div className="absolute h-[454px] left-[45px] top-0 w-[1455px]" data-name="image 23">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage23} />
      </div>
      <div className="absolute h-[110px] left-[154px] top-[1144px] w-[1234px]" data-name="image 22">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage22} />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[132px] items-center left-[144px] top-[158px]">
      <div className="h-[340px] relative shrink-0 w-[649px]" data-name="Title 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTitle1} />
      </div>
      <div className="h-[372px] relative shrink-0 w-[675px]" data-name="Jesus Heals the Crippled Woman 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgJesusHealsTheCrippledWoman1} />
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
          <g id="06">
            <path d={svgPaths.pd5f9400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p29ad4f00} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="6">
      <div className="absolute h-[2480px] left-0 top-0 w-[1754px]" data-name="image 26">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage26} />
      </div>
      <div className="absolute h-[316.5px] left-[354.85px] top-[1886.57px] w-[992.5px]" data-name="image 25">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage25} />
      </div>
      <Comic />
      <Frame />
      <Pagination />
    </div>
  );
}