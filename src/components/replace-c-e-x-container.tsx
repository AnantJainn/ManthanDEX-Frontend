import { FunctionComponent, memo } from "react";

const ReplaceCEXContainer: FunctionComponent = memo(() => {
  return (
    <section className="absolute top-[183.38rem] left-[calc(50%_-_720px)] w-[90rem] overflow-hidden flex flex-col py-[3.75rem] px-[7.5rem] box-border items-start justify-start gap-[0.63rem] text-center text-[2.5rem] text-darkturquoise font-bai-jamjuree">
      <div className="self-stretch relative rounded-11xl bg-gray-700 box-border h-[17.44rem] z-[0] border-[0.3px] border-solid border-gainsboro-200" />
      <div className="self-stretch my-0 mx-[!important] absolute top-[8.5rem] left-[7.5rem] flex flex-col py-[0rem] px-[18.38rem] items-center justify-start gap-[4.25rem] z-[1]">
        <div className="w-[37.06rem] flex flex-col items-center justify-start gap-[2rem]">
          <div className="self-stretch flex flex-col items-center justify-start">
            <b className="self-stretch relative">Towards replacing CEXs</b>
          </div>
          <div className="self-stretch relative text-[1rem] text-white">
            Built on BSV Blockchain and supports all mainstream blockchain
            interoperability
          </div>
        </div>
        <div className="w-[33.38rem] flex flex-row flex-wrap items-start justify-between text-[0.75rem] text-white lg:flex-row lg:gap-[0.75rem] lg:items-start lg:justify-between md:flex-row md:gap-[0.75rem] md:items-start md:justify-between sm:flex-col sm:gap-[0.75rem] sm:items-start sm:justify-start">
          <div className="flex flex-row items-center justify-center gap-[0.5rem]">
            <img
              className="relative w-[1.25rem] h-[1.25rem] object-cover"
              alt=""
              src="/image-83@2x.png"
            />
            <div className="relative">Bitcoin</div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[0.5rem]">
            <img
              className="relative w-[1.25rem] h-[1.25rem] object-cover"
              alt=""
              src="/imageremovebgpreview-11@2x.png"
            />
            <div className="relative">BSV</div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[0.5rem]">
            <img
              className="relative w-[1.25rem] h-[1.25rem] object-cover"
              alt=""
              src="/image-131@2x.png"
            />
            <div className="relative">Bitcoin Cash</div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[0.5rem]">
            <img
              className="relative w-[1.25rem] h-[1.25rem] object-cover"
              alt=""
              src="/image-101@2x.png"
            />
            <div className="relative">Ethereum</div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[0.5rem]">
            <img
              className="relative w-[1.25rem] h-[1.25rem] object-cover"
              alt=""
              src="/image-121@2x.png"
            />
            <div className="relative">Cardano</div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[0.5rem]">
            <img
              className="relative w-[1.25rem] h-[1.25rem] object-cover"
              alt=""
              src="/image-111@2x.png"
            />
            <div className="relative">Binance Coin</div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ReplaceCEXContainer;
