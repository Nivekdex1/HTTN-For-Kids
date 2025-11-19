import imgImage87 from "figma:asset/f4669213b1a03072a4222c1b49443d8823f4f685.png";
import imgConfessions1 from "figma:asset/0999da21d5b0674cf61c08029c8dde05f50b980f.png";
import imgImage86 from "figma:asset/b480c6921381f3d320a4b17465d4f04652e550d0.png";
import imgImage96 from "figma:asset/4dbc21cace6d371fa6f1ce11bee6b33a80345067.png";
import imgImage95 from "figma:asset/9215a5fff915e9210a71dd1b82cbaba6e7bc9316.png";
import imgImage94 from "figma:asset/769b658725629b6325f850dd837df8a920d53701.png";
import imgImage93 from "figma:asset/7098e9d42f9d8ca11d9a4ce6ba019fe15212623b.png";
import imgImage92 from "figma:asset/582cff1222963217d325b21cedb35b24f719c4ac.png";
import imgImage91 from "figma:asset/13cc90b6c7bda1e850d5c6a83de8bc767d0960a5.png";
import imgImage90 from "figma:asset/3200f217847e8060a4991016c3d67b00f1e10161.png";
import imgImage89 from "figma:asset/809115b27122cf147522da14f9f8a0b06f7c3fba.png";
import imgImage88 from "figma:asset/ff544e7e33b417e21f3ed0327413d1543fe9c691.png";

function HeaderText() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[1095px]" data-name="Header Text">
      <div className="h-[227px] relative shrink-0 w-[933px]" data-name="image 87">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage87} />
      </div>
      <div className="aspect-[1111/195] relative shrink-0 w-full" data-name="Confessions 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgConfessions1} />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex gap-[35px] items-center left-[calc(50%+0.5px)] top-[116px] translate-x-[-50%]" data-name="Header">
      <div className="h-[483px] relative shrink-0 w-[303px]" data-name="image 86">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage86} />
      </div>
      <HeaderText />
    </div>
  );
}

function Pagination() {
  return (
    <div className="absolute bg-[red] box-border content-stretch flex gap-[6.087px] h-[42px] items-center justify-center left-[calc(50%-0.087px)] p-[6.087px] rounded-[60.87px] top-[2385px] translate-x-[-50%] w-[43.826px]" data-name="pagination">
      <p className="font-['Comic_Sans_MS:Bold',sans-serif] leading-[29.318px] not-italic relative shrink-0 text-[25.653px] text-center text-nowrap text-white whitespace-pre">14</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="14">
      <div className="absolute h-[2480px] left-0 top-0 w-[1754px]" data-name="image 96">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage96} />
      </div>
      <div className="absolute h-[96px] left-[171px] top-[674px] w-[1373px]" data-name="image 95">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage95} />
      </div>
      <div className="absolute h-[106px] left-[171px] top-[840px] w-[1398px]" data-name="image 94">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage94} />
      </div>
      <div className="absolute h-[106px] left-[171px] top-[1006px] w-[1391px]" data-name="image 93">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage93} />
      </div>
      <div className="absolute h-[165px] left-[171px] top-[1172px] w-[1404px]" data-name="image 92">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage92} />
      </div>
      <div className="absolute h-[106px] left-[171px] top-[1397px] w-[1433px]" data-name="image 91">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage91} />
      </div>
      <div className="absolute h-[165px] left-[171px] top-[1565px] w-[1422px]" data-name="image 90">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage90} />
      </div>
      <div className="absolute h-[106px] left-[171px] top-[1785px] w-[1436px]" data-name="image 89">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage89} />
      </div>
      <div className="absolute h-[165px] left-[171px] top-[1953px] w-[1431px]" data-name="image 88">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage88} />
      </div>
      <Header />
      <Pagination />
    </div>
  );
}