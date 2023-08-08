import { FunctionComponent, memo } from "react";

const ContainerCard: FunctionComponent = memo(() => {
  return (
    <section className="flex flex-col items-start justify-start gap-[1rem] text-center text-[0.75rem] text-lightslategray font-bai-jamjuree">
      <div className="w-[18.75rem] flex flex-row items-start justify-between relative">
        <div className="flex flex-row py-[0rem] pr-[0.25rem] pl-[0rem] items-start justify-start gap-[0.25rem] z-[0]">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-sm w-[2.25rem] h-[1.5rem] overflow-hidden shrink-0"
            autoFocus
          >
            <img
              className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] w-[1.5rem] h-[1.5rem] overflow-hidden"
              alt=""
              src="/svg.svg"
            />
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-sm w-[2.25rem] h-[1.5rem] overflow-hidden shrink-0">
            <img
              className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] w-[1.5rem] h-[1.5rem] overflow-hidden"
              alt=""
              src="/svg1.svg"
            />
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-sm w-[2.25rem] h-[1.5rem] overflow-hidden shrink-0">
            <img
              className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] w-[1.5rem] h-[1.5rem] overflow-hidden"
              alt=""
              src="/svg2.svg"
            />
          </button>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] my-0 mx-[!important] absolute h-full top-[0rem] bottom-[0rem] left-[calc(50%_+_99px)] flex flex-row items-center justify-start z-[1]"
          autoFocus
        >
          <div className="rounded-sm w-[3.21rem] h-[1.5rem] flex flex-row py-[0rem] pr-[0rem] pl-[0.5rem] box-border items-center justify-start gap-[0.31rem]">
            <div className="relative text-[0.69rem] font-arial text-whitesmoke text-left">
              0.01
            </div>
            <img
              className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
              alt=""
              src="/svg3.svg"
            />
          </div>
        </button>
      </div>
      <div className="w-[18.75rem] flex flex-row py-[0rem] px-[0.56rem] box-border items-center justify-between">
        <div className="relative">Price(USDT)</div>
        <div className="w-[12rem] flex flex-row items-start justify-between text-left">
          <div className="relative">Amount(BTC)</div>
          <div className="relative text-right">Total</div>
        </div>
      </div>
      <div className="w-[18.75rem] flex flex-col items-start justify-start gap-[0.5rem] text-right text-silver font-work-sans">
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-indianred-200 text-center">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-indianred-200 text-center">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-indianred-200 text-center">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-indianred-200 text-center">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-indianred-200 text-center">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-indianred-200 text-center">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-indianred-200 text-center">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-indianred-200 text-center">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-indianred-200 text-center">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-indianred-200 text-center">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-indianred-200 text-center">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-indianred-200 text-center">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-indianred-200 text-center">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-indianred-200 text-center">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-indianred-200 text-center">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-indianred-200 text-center">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-indianred-200 text-center">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-indianred-200 text-center">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch hidden flex-row items-start justify-between relative">
            <div className="absolute my-0 mx-[!important] w-[calc(100%_-_207px)] right-[-1.12rem] bottom-[0rem] left-[14.06rem] bg-crimson-200 h-[1.25rem] z-[0]" />
            <div className="w-[17.5rem] flex flex-row items-start justify-between z-[1]">
              <div className="relative leading-[1.25rem] text-indianred-200 text-left">
                19967.98
              </div>
              <div className="relative leading-[1.25rem]">0.10016</div>
              <div className="relative leading-[1.25rem]">1,999.99288</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-left text-[1.19rem] text-white">
          <div className="flex flex-row items-center justify-start gap-[0.38rem]">
            <div className="flex flex-row py-[0.13rem] px-[0rem] items-center justify-start">
              <div className="relative">19,965.74</div>
            </div>
            <div className="relative text-[0.69rem] font-arial text-lightslategray">
              ₦9,236,949.95
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-mediumaquamarine text-left">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-mediumaquamarine text-left">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-mediumaquamarine text-left">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-mediumaquamarine text-left">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-mediumaquamarine text-left">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-mediumaquamarine text-left">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-mediumaquamarine text-left">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-mediumaquamarine text-left">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-mediumaquamarine text-left">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-mediumaquamarine text-left">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-mediumaquamarine text-left">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-mediumaquamarine text-left">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-mediumaquamarine text-left">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-mediumaquamarine text-left">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-mediumaquamarine text-left">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-mediumaquamarine text-left">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-mediumaquamarine text-left">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-mediumaquamarine text-left">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[0.25rem] items-start justify-between">
            <div className="relative leading-[1.25rem] text-mediumaquamarine text-left">
              19967.98
            </div>
            <div className="relative leading-[1.25rem]">0.10016</div>
            <div className="relative leading-[1.25rem]">1,999.99288</div>
          </div>
          <div className="self-stretch hidden flex-row items-start justify-between relative">
            <div className="absolute my-0 mx-[!important] w-[calc(100%_-_207px)] right-[-1.12rem] bottom-[0rem] left-[14.06rem] bg-crimson-200 h-[1.25rem] z-[0]" />
            <div className="w-[17.5rem] flex flex-row items-start justify-between z-[1]">
              <div className="relative leading-[1.25rem] text-indianred-200 text-left">
                19967.98
              </div>
              <div className="relative leading-[1.25rem]">0.10016</div>
              <div className="relative leading-[1.25rem]">1,999.99288</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContainerCard;
