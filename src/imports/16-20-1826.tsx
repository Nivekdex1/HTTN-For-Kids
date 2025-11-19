import imgImage103 from "figma:asset/6670db219ffee6f74f8ecc372511467a6a333f29.png";
import imgImage102 from "figma:asset/0f200693634fbadbb798fb477f06973e82a0ad76.png";
import imgImage105 from "figma:asset/6290e0677e8664d9db2b7cf1efbd8343b6edd908.png";
import imgImage106 from "figma:asset/6a58021816f841c43cb3c21d7f8067e7de4a02f7.png";
import imgImage107 from "figma:asset/165fc4954253d052b59e4342a0d44381bd868973.png";
import imgImage108 from "figma:asset/3a05a12ed6b19e08436314a61ea62548d23d8197.png";
import imgImage109 from "figma:asset/bb5e2f4aeffb1e30421524d6f65ac367781ba2d8.png";
import imgBg from "figma:asset/f56f19080390f0aab5e19345c9ea5a24c1fce5eb.png";
import imgLogoFooter from "figma:asset/cb184ec3e97d080377f37050765471c175b4f0b3.png";
import imgCallLinks from "figma:asset/2af23d28e4a9c4c654bc9ba320f1eafd4a67ae7c.png";

function QrText() {
  return (
    <div className="absolute content-stretch flex gap-[40px] items-center left-[481px] top-[1304.46px]" data-name="QR & Text">
      <div className="h-[272px] relative shrink-0 w-[537.5px]" data-name="image 103">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage103} />
      </div>
      <div className="h-[315.5px] relative shrink-0 w-[333.5px]" data-name="image 102">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage102} />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[1147px] left-[126px] top-[73px] w-[1538px]">
      <div className="absolute h-[1076px] left-[443.95px] top-[15.3px] w-[1094px]" data-name="image 105">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage105} />
      </div>
      <div className="absolute h-[1104px] left-[487px] top-[43px] w-[962px]" data-name="image 106">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-37.02%] max-w-none top-[0.04%] w-[143.14%]" src={imgImage106} />
        </div>
      </div>
      <div className="absolute h-[1080px] left-0 top-[15px] w-[654px]" data-name="image 107">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[110.79%] left-[0.07%] max-w-none top-[-10.75%] w-[220.03%]" src={imgImage107} />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute h-[943.227px] left-[54.19px] top-[451.55px] w-[1599.47px]" data-name="Content">
      <div className="absolute h-[331.5px] left-[299.02px] top-[385.32px] w-[1032px]" data-name="image 108">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage108} />
      </div>
      <div className="absolute h-[184px] left-[-0.18px] top-[591.46px] w-[1600px]" data-name="image 109">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[512.77%] left-[0.01%] max-w-none top-[-321.44%] w-[99.97%]" src={imgImage109} />
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="16">
      <div className="absolute h-[2489px] left-[-2px] top-0 w-[1754px]" data-name="BG">
        <img alt="" className="block max-w-none size-full" height="2489" src={imgBg} width="1754" />
      </div>
      <div className="absolute h-[196px] left-[771px] top-[2186px] w-[210px]" data-name="Logo footer">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[260.2%] left-[-367.14%] max-w-none top-[-105.61%] w-[834.29%]" src={imgLogoFooter} />
        </div>
      </div>
      <div className="absolute h-[376.5px] left-[309px] top-[1689.78px] w-[1255px]" data-name="Call Links">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCallLinks} />
      </div>
      <QrText />
      <Frame />
      <Content />
    </div>
  );
}