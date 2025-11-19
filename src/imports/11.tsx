import imgImage48 from "figma:asset/ef207e248b9df10b4617704e657ebb01660268c5.png";
import imgImage47 from "figma:asset/14e8b4bcf41b23ffaf589301cfedf891aceb877b.png";
import imgImage46 from "figma:asset/08db0cd7141c535478108920fc4540253445422b.png";
import imgImage45 from "figma:asset/fcb452c03486dc38a1925dc075dcf9c8588565dc.png";
import imgImage49 from "figma:asset/5bfde3b75b02cca83bc21d1d75bc716b7dc5021d.png";
import imgImage41 from "figma:asset/47c75d898293064e22e44c1af1108471ea8021ed.png";
import imgImage42 from "figma:asset/046fb4de35ebb1439e31844d62ca75da526cd75f.png";
import imgImage44 from "figma:asset/89c055e7973811c8c4928bd973ceb4a15a44cff6.png";
import imgImage43 from "figma:asset/a8c7d68ec00cf7a306a8db0e2c26f696bb8e4fc5.png";

function Item() {
  return (
    <div className="absolute h-[1157px] left-[127px] top-[522px] w-[895px]" data-name="Item">
      <div className="absolute h-[1157px] left-0 top-0 w-[898.5px]" data-name="image 48">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage48} />
      </div>
      <div className="absolute h-[107px] left-[205px] top-[1025px] w-[379px]" data-name="image 47">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage47} />
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="absolute h-[1058px] left-[735px] top-[883px] w-[897px]" data-name="Item">
      <div className="absolute h-[1077px] left-0 top-[-19px] w-[897px]" data-name="image 46">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[150.05%] left-[-5.02%] max-w-none top-0 w-[118.62%]" src={imgImage46} />
        </div>
      </div>
      <div className="absolute h-[133px] left-[398px] top-[885px] w-[417px]" data-name="image 45">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage45} />
      </div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="absolute bg-[red] box-border content-stretch flex gap-[6.087px] h-[42px] items-center justify-center left-[calc(50%-0.087px)] p-[6.087px] rounded-[60.87px] top-[2385px] translate-x-[-50%] w-[43.826px]" data-name="Pagination">
      <p className="font-['Comic_Sans_MS:Bold',sans-serif] leading-[29.318px] not-italic relative shrink-0 text-[25.653px] text-center text-nowrap text-white whitespace-pre">11</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="11">
      <div className="absolute h-[2480px] left-0 top-0 w-[1754px]" data-name="image 49">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage49} />
      </div>
      <Item />
      <Item1 />
      <div className="absolute h-[161px] left-[1077.74px] top-[677.33px] w-[158.5px]" data-name="image 41">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage41} />
      </div>
      <div className="absolute h-[93px] left-[1265.35px] top-[789.59px] w-[99.5px]" data-name="image 42">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage42} />
      </div>
      <div className="absolute h-[287px] left-[211px] top-[1980px] w-[1256.5px]" data-name="image 44">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage44} />
      </div>
      <div className="absolute h-[392px] left-[151px] top-[154px] w-[1349px]" data-name="image 43">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage43} />
      </div>
      <Pagination />
    </div>
  );
}