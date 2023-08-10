import { FunctionComponent, memo } from "react";
import Property1def8 from "./property1def8";

const TestimonialContainer: FunctionComponent = memo(() => {
  return (
    <section className="absolute top-[218.5rem] left-[calc(50%_-_720px)] bg-gray-700 w-[90rem] overflow-hidden flex flex-col py-[3.75rem] px-[0rem] box-border items-start justify-start text-center text-[2.5rem] text-darkturquoise font-bai-jamjuree">
      <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem]">
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-col items-center justify-start">
            <b className="self-stretch relative">Testimonials</b>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between lg:flex-row lg:gap-[3rem] lg:items-center lg:justify-between md:flex-row md:gap-[3rem] md:items-start md:justify-start sm:flex-col sm:gap-[3rem] sm:items-start sm:justify-start">
          <img
            className="relative w-[4.5rem] h-[10.81rem] overflow-hidden shrink-0"
            alt=""
            src="/left-arrow.svg"
          />
          <Property1def8
            iconQuoteDown="/-icon-quote-down1.svg"
            frameDivAlignSelf="unset"
            frameDivWidth="20rem"
            frameDivJustifyContent="center"
            frameDivAlignSelf1="stretch"
            mrSougfvkcAlignSelf="stretch"
          />
          <Property1def8
            iconQuoteDown="/-icon-quote-down1.svg"
            frameDivAlignSelf="stretch"
            frameDivWidth="unset"
            frameDivJustifyContent="space-between"
            frameDivAlignSelf1="stretch"
            mrSougfvkcAlignSelf="unset"
          />
          <Property1def8
            iconQuoteDown="/-icon-quote-down1.svg"
            frameDivAlignSelf="stretch"
            frameDivWidth="unset"
            frameDivJustifyContent="space-between"
            frameDivAlignSelf1="stretch"
            mrSougfvkcAlignSelf="unset"
          />
          <img
            className="relative w-[4.5rem] h-[10.81rem] overflow-hidden shrink-0"
            alt=""
            src="/right-arrow.svg"
          />
        </div>
      </div>
    </section>
  );
});

export default TestimonialContainer;
