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
    <div className="content-stretch flex flex-col gap-[44px] items-center relative shrink-0 w-full">
      <div className="h-[119px] relative shrink-0 w-[1112.5px]" data-name="image 60">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage60} />
      </div>
      <div className="h-[89px] relative shrink-0 w-[884.5px]" data-name="image 61">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage61} />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-center relative shrink-0 w-full">
      <div className="h-[75px] relative shrink-0 w-[1093px]" data-name="image 62">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage62} />
      </div>
      <div className="h-[71px] relative shrink-0 w-[1093px]" data-name="image 63">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage63} />
      </div>
      <div className="h-[67px] relative shrink-0 w-[1091px]" data-name="image 64">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage64} />
      </div>
      <div className="h-[73px] relative shrink-0 w-[1105px]" data-name="image 65">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage65} />
      </div>
      <div className="h-[73px] relative shrink-0 w-[1205px]" data-name="image 66">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage66} />
      </div>
    </div>
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
    <div className="content-stretch flex gap-[206px] items-start relative shrink-0 w-full">
      <div className="h-[104px] relative shrink-0 w-[486px]" data-name="image 56">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage56} />
      </div>
      <div className="h-[102px] relative shrink-0 w-[502px]" data-name="image 57">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage57} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23px] items-center left-[calc(50%+0.5px)] top-0 translate-x-[-50%] w-[1194px]">
      <Frame />
      <div className="h-[104px] relative shrink-0 w-[748px]" data-name="image 58">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage58} />
      </div>
      <div className="h-[100px] relative shrink-0 w-[1130px]" data-name="image 59">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage59} />
      </div>
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
      <div className="absolute h-[57.5px] left-[21.15px] top-[564.5px] w-[974.5px]" data-name="image 53">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage53} />
      </div>
      <div className="absolute h-[658px] left-0 top-0 w-[1045px]" data-name="image 52">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage52} />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute h-[831px] left-0 top-0 w-[1496px]" data-name="Header">
      <Title />
      <div className="absolute h-[810px] left-[1052px] top-0 w-[444px]" data-name="image 54">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage54} />
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="absolute h-[831px] left-[145px] top-[90px] w-[1496px]" data-name="Top">
      <Header />
      <div className="absolute h-[55.5px] left-[5px] top-[60px] w-[658px]" data-name="image 51">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage51} />
      </div>
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

export default function Component() {
  return (
    <div className="relative size-full" data-name="12">
      <div className="absolute h-[2480px] left-0 top-0 w-[1754px]" data-name="image 50">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage50} />
      </div>
      <Content />
      <div className="absolute h-[228px] left-[156px] top-[934px] w-[1450px]" data-name="image 55">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage55} />
      </div>
      <Top />
      <Pagination />
    </div>
  );
}