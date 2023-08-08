import { FunctionComponent, memo } from "react";
import Property1DEF4 from "./property1-d-e-f4";
import Property1DEF3 from "./property1-d-e-f3";
import Property1DEF2 from "./property1-d-e-f2";
import Property1DEF1 from "./property1-d-e-f1";
import Property1DEF from "./property1-d-e-f";

const HeroRight: FunctionComponent = memo(() => {
  return (
    <section className="absolute top-[6.31rem] left-[45.94rem] w-[49.88rem] h-[44.56rem]">
      <Property1DEF4
        property1DEFPosition="absolute"
        property1DEFTop="18.94rem"
        property1DEFLeft="-1.19rem"
      />
      <div className="absolute top-[-0.44rem] left-[3.83rem] w-[46.04rem] h-[35.8rem]">
        <img
          className="absolute top-[3.51rem] left-[0rem] rounded-6xs w-[46.04rem] h-[32.29rem] object-cover"
          alt=""
          src="/main-blank-1@2x.png"
        />
        <Property1DEF3
          property1DEFPosition="absolute"
          property1DEFTop="0rem"
          property1DEFLeft="27.79rem"
        />
      </div>
      <div className="absolute top-[30.31rem] left-[40.88rem] rounded-[50%] bg-darkturquoise box-border w-[7.94rem] h-[7.94rem] border-[1px] border-solid border-darkturquoise" />
      <div className="absolute top-[11.06rem] left-[0.31rem] rounded-[50%] bg-darkturquoise box-border w-[2.31rem] h-[2.31rem] border-[1px] border-solid border-darkturquoise" />
      <Property1DEF2
        property1DEFPosition="absolute"
        property1DEFTop="6.5rem"
        property1DEFLeft="-2.56rem"
      />
      <Property1DEF1
        property1DEFPosition="absolute"
        property1DEFTop="3.38rem"
        property1DEFLeft="-3.06rem"
      />
      <Property1DEF
        property1DEFPosition="absolute"
        property1DEFTop="25.25rem"
        property1DEFLeft="11.63rem"
      />
    </section>
  );
});

export default HeroRight;
