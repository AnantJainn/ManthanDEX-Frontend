import { FunctionComponent, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Frame48095610 from "./property1-frame48095610";
import Property1Button6 from "./property1-button6";
import Property1Frame11949 from "./property1-frame11949";

const ContainerHeroLeft: FunctionComponent = memo(() => {
  const navigate = useNavigate();

  const onComponent102ContainerClick = useCallback(() => {
    navigate("/trade-86");
  }, [navigate]);

  const onTradeCryptoTextClick = useCallback(() => {
    navigate("/trade-86");
  }, [navigate]);

  const onComponent103ContainerClick = useCallback(() => {
    // Please sync "Home Page" to the project
  }, []);

  const onButton5ContainerClick = useCallback(() => {
    // Please sync "Home Page" to the project
  }, []);

  return (
    <section className="absolute top-[15rem] left-[7.5rem] w-[31.81rem] flex flex-col items-start justify-start gap-[3rem] text-left text-[0.88rem] text-gainsboro-400 font-work-sans">
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
          <Property1Frame48095610
            property1Frame48095610Width="unset"
            property1Frame48095610AlignSelf="stretch"
            property1Frame48095610FlexShrink="0"
          />
          <div className="self-stretch relative tracking-[0.01em] leading-[108%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  `}</div>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-between text-center text-[0.75rem] text-white font-bai-jamjuree lg:flex-row lg:gap-[0.75rem] lg:items-start lg:justify-start md:flex-row md:gap-[0.75rem] md:items-start md:justify-start sm:flex-col sm:gap-[0.75rem] sm:items-start sm:justify-start">
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
            src="/imageremovebgpreview-12@2x.png"
          />
          <div className="relative">BSV</div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[0.5rem]">
          <img
            className="relative w-[1.25rem] h-[1.25rem] object-cover"
            alt=""
            src="/image-132@2x.png"
          />
          <div className="relative">Bitcoin Cash</div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[0.5rem]">
          <img
            className="relative w-[1.25rem] h-[1.25rem] object-cover"
            alt=""
            src="/image-102@2x.png"
          />
          <div className="relative">Ethereum</div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[0.5rem]">
          <img
            className="relative w-[1.25rem] h-[1.25rem] object-cover"
            alt=""
            src="/image-122@2x.png"
          />
          <div className="relative">Cardano</div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[2rem]">
        <Property1Button6
          property1Button6Position="unset"
          property1Button6Cursor="pointer"
          tradeCryptoCursor="pointer"
          onComponent102ContainerClick={onComponent102ContainerClick}
          onTradeCryptoTextClick={onTradeCryptoTextClick}
        />
        <Property1Frame11949
          property1Frame11949Position="unset"
          property1Frame11949Cursor="pointer"
          button5Cursor="pointer"
          onComponent103ContainerClick={onComponent103ContainerClick}
          onButton5Container1Click={onButton5ContainerClick}
        />
      </div>
    </section>
  );
});

export default ContainerHeroLeft;
