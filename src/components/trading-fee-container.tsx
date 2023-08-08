import { FunctionComponent, memo } from "react";

const TradingFeeContainer: FunctionComponent = memo(() => {
  return (
    <section className="absolute top-[144.19rem] left-[calc(50%_-_720px)] overflow-hidden flex flex-col py-[3.75rem] px-[7.5rem] items-start justify-start gap-[0.63rem] text-center text-[2.5rem] text-darkturquoise font-bai-jamjuree">
      <div className="relative rounded-11xl box-border w-[75rem] h-[27.94rem] z-[0] border-[0.3px] border-solid border-gainsboro-200" />
      <div className="my-0 mx-[!important] absolute top-[7.5rem] left-[7.5rem] w-[75rem] flex flex-col items-center justify-start gap-[4.25rem] z-[1]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[1rem]">
          <b className="self-stretch relative">Very Less TRADING FEE</b>
          <div className="self-stretch relative text-[1rem] tracking-[0.1em] font-light text-gainsboro-300">
            Achieved very low trading fee for the Orderbook
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-end gap-[0.25rem] text-[0.88rem] text-white font-work-sans">
          <div className="self-stretch relative h-[6.25rem] overflow-hidden shrink-0">
            <div className="absolute top-[0rem] left-[0rem] bg-midnightblue-300 box-border w-[74.98rem] h-[6.25rem] border-[0.3px] border-solid border-gainsboro-200" />
            <div className="absolute top-[1.31rem] left-[29.99rem] flex flex-row items-center justify-between lg:flex-row lg:gap-[0rem] lg:items-center lg:justify-between md:flex-row md:gap-[0rem] md:items-start md:justify-start sm:flex-row sm:gap-[0rem] sm:items-start sm:justify-start">
              <div className="relative font-semibold flex items-center justify-center w-[15rem] shrink-0">
                SWAP in Grid
              </div>
              <div className="relative font-semibold flex items-center justify-center w-[15rem] shrink-0">
                PLACEMAKER Order
              </div>
              <div className="relative font-semibold flex items-center justify-center w-[15rem] shrink-0">
                COLLECT MAKER Order
              </div>
            </div>
            <div className="absolute top-[4.5rem] left-[29.99rem] flex flex-row items-center justify-between">
              <div className="relative flex items-center justify-center w-[15rem] shrink-0">
                000000
              </div>
              <div className="relative flex items-center justify-center w-[15rem] shrink-0">
                000000
              </div>
              <div className="relative flex items-center justify-center w-[15rem] shrink-0">
                000000
              </div>
            </div>
            <img
              className="absolute top-[0rem] left-[29.99rem] w-[44.99rem] h-[6.25rem]"
              alt=""
              src="/group-48095531.svg"
            />
            <div className="absolute top-[2.13rem] left-[7.73rem] flex flex-row items-center justify-start gap-[0.56rem] text-left text-[1.25rem] font-bai-jamjuree">
              <img
                className="relative w-[3.01rem] h-[2rem]"
                alt=""
                src="/group-13.svg"
              />
              <b className="relative uppercase">MANTHAN DEX</b>
            </div>
          </div>
          <div className="self-stretch relative h-[6.25rem] overflow-hidden shrink-0">
            <div className="absolute top-[1.25rem] left-[29.99rem] flex flex-row items-center justify-between">
              <div className="relative font-semibold flex items-center justify-center w-[15rem] shrink-0">
                SWAP in Pool
              </div>
              <div className="relative font-semibold flex items-center justify-center w-[15rem] shrink-0">
                Add Liquidity
              </div>
              <div className="relative font-semibold flex items-center justify-center w-[15rem] shrink-0">
                Remove Liquidity
              </div>
            </div>
            <div className="absolute top-[4.44rem] left-[29.99rem] flex flex-row items-center justify-between">
              <div className="relative flex items-center justify-center w-[15rem] shrink-0">
                000000
              </div>
              <div className="relative flex items-center justify-center w-[15rem] shrink-0">
                000000
              </div>
              <div className="relative flex items-center justify-center w-[15rem] shrink-0">
                000000
              </div>
            </div>
            <div className="absolute top-[0rem] left-[0rem] box-border w-[74.98rem] h-[6.25rem] border-[0.3px] border-solid border-gainsboro-200" />
            <img
              className="absolute top-[0rem] left-[29.99rem] w-[44.99rem] h-[6.25rem]"
              alt=""
              src="/group-48095531.svg"
            />
            <img
              className="absolute top-[2.19rem] left-[9.68rem] w-[8.69rem] h-[2.25rem] object-cover"
              alt=""
              src="/image-7@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default TradingFeeContainer;
