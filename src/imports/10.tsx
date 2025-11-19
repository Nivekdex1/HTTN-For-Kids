import imgAirplane1 from "figma:asset/7375e7ac0dd3d5d23168c2a6f6532bfadd2451cd.png";
import imgImage37 from "figma:asset/7d6be43a2f463e145df47ccf6ebc3d72a1d4ef36.png";
import imgImage36 from "figma:asset/cd4e36c93c9641d970aa2d2a0ec7827ef7d493f9.png";
import imgBg from "figma:asset/f38a37dc9e5b322c2fcd7aa63b5238408097f202.png";
import imgImage40 from "figma:asset/94252fde1b6d33983325b1f7d1d9eb7ba9230e49.png";
import imgImage39 from "figma:asset/d62af26d6cbda743c9c66a2180a264d87a0b82a9.png";

function Text() {
  return (
    <div className="absolute h-[922px] left-[229px] top-[1350px] w-[1369px]" data-name="Text">
      <div className="absolute font-['Comic_Sans_MS:Regular',sans-serif] leading-[55.7px] left-0 not-italic text-[41px] text-black top-0 w-[1369px]">
        <p className="mb-0">{` Dennis had many broken bones, and he couldn’t breathe on his own due to many internal injuries. He went into a deep sleep, called a coma, for 23 whole days! The doctors did all they could, but eventually told his parents to just pray.`}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">But Dennis’ family didn’t give up! They had learned from Pastor Chris how to pray and believe in God’s Word. They spoke life and healing over Dennis every single day. Finally, Dennis woke up from the coma, but he still had a serious brain injury called an intracranial hematoma, and the right side of his body was paralyzed.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Then came the Healing Streams Live Services. On Day 3, Pastor Chris</p>
        <p className="mb-0">specially prayed for people who had their bodies damaged through</p>
        <p className="mb-0">accidents, commanding healing to their bodies in the name of Jesus Christ. Dennis’ family, who were participating, hoping for a miracle, just knew</p>
        <p>immediately that Dennis was healed.</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute h-[813px] left-[200px] top-[161px] w-[1302px]" data-name="Header">
      <div className="absolute h-[264px] left-0 top-0 w-[625px]" data-name="Airplane 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAirplane1} />
      </div>
      <div className="absolute h-[386.5px] left-[152px] top-[470px] w-[1203px]" data-name="image 37">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage37} />
      </div>
      <div className="absolute h-[311.5px] left-[237px] top-[224px] w-[1086.5px]" data-name="image 36">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage36} />
      </div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="absolute bg-[red] box-border content-stretch flex gap-[6.087px] h-[42px] items-center justify-center left-[calc(50%-0.087px)] p-[6.087px] rounded-[60.87px] top-[2385px] translate-x-[-50%] w-[43.826px]" data-name="Pagination">
      <p className="font-['Comic_Sans_MS:Bold',sans-serif] leading-[29.318px] not-italic relative shrink-0 text-[25.653px] text-center text-nowrap text-white whitespace-pre">10</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="10">
      <div className="absolute h-[2480px] left-0 top-0 w-[1754px]" data-name="BG">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBg} />
      </div>
      <Text />
      <div className="absolute h-[935px] left-[229px] top-[1350px] w-[1369px]" data-name="image 40">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage40} />
      </div>
      <div className="absolute h-[282px] left-[168px] top-[1018px] w-[1423px]" data-name="image 39">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage39} />
      </div>
      <Header />
      <Pagination />
    </div>
  );
}