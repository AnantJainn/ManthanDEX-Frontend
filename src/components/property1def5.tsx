import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type Property1def5Type = {
  group1?: string;

  /** Style props */
  property1defPosition?: Property.Position;
  property1defTop?: Property.Top;
  property1defLeft?: Property.Left;
};

const Property1def5: FunctionComponent<Property1def5Type> = memo(
  ({ group1, property1defPosition, property1defTop, property1defLeft }) => {
    const property1defStyle: CSS.Properties = useMemo(() => {
      return {
        position: property1defPosition,
        top: property1defTop,
        left: property1defLeft,
      };
    }, [property1defPosition, property1defTop, property1defLeft]);

    return (
      <div
        className="relative w-[255px] h-[255px] text-left text-3xl text-white font-bai-jamjuree"
        style={property1defStyle}
      >
        <div className="absolute top-[calc(50%_-_104.5px)] left-[calc(50%_-_104.5px)] rounded-[50%] bg-midnightblue-300 w-[209px] h-[209px] opacity-[0.8]" />
        <img
          className="absolute h-[16.43%] w-[24.75%] top-[41.61%] right-[37.65%] bottom-[41.96%] left-[37.61%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={group1}
        />
        <div className="absolute top-[0px] left-[0px] w-[255px] h-[254.97px]">
          <div className="absolute top-[254.82px] left-[132.8px] font-medium inline-block w-[5.35px] h-[24.95px] [transform:_rotate(178.82deg)] [transform-origin:0_0]">
             
          </div>
          <div className="absolute top-[254.97px] left-[120.57px] font-medium inline-block w-[16.04px] h-[24.95px] [transform:_rotate(-173.28deg)] [transform-origin:0_0]">
            M
          </div>
          <div className="absolute top-[251.44px] left-[97.44px] font-medium inline-block w-[11.59px] h-[24.95px] [transform:_rotate(-163.76deg)] [transform-origin:0_0]">
            a
          </div>
          <div className="absolute top-[245.75px] left-[79.74px] font-medium inline-block w-[11.59px] h-[24.95px] [transform:_rotate(-155.4deg)] [transform-origin:0_0]">
            n
          </div>
          <div className="absolute top-[237.63px] left-[63.33px] font-medium inline-block w-[8.02px] h-[24.95px] [transform:_rotate(-147.96deg)] [transform-origin:0_0]">
            t
          </div>
          <div className="absolute top-[229.54px] left-[51px] font-medium inline-block w-[11.59px] h-[24.95px] [transform:_rotate(-140.53deg)] [transform-origin:0_0]">
            h
          </div>
          <div className="absolute top-[217.33px] left-[36.98px] font-medium inline-block w-[11.59px] h-[24.95px] [transform:_rotate(-132.17deg)] [transform-origin:0_0]">
            a
          </div>
          <div className="absolute top-[203.21px] left-[24.88px] font-medium inline-block w-[11.59px] h-[24.95px] [transform:_rotate(-123.81deg)] [transform-origin:0_0]">
            n
          </div>
          <div className="absolute top-[187.87px] left-[15.29px] font-medium inline-block w-[5.35px] h-[24.95px] [transform:_rotate(-117.07deg)] [transform-origin:0_0]">
             
          </div>
          <div className="absolute top-[177.04px] left-[9.92px] font-medium inline-block w-[14.26px] h-[24.95px] [transform:_rotate(-109.64deg)] [transform-origin:0_0]">
            D
          </div>
          <div className="absolute top-[156.53px] left-[3.31px] font-medium inline-block w-[12.48px] h-[24.95px] [transform:_rotate(-100.35deg)] [transform-origin:0_0]">
            E
          </div>
          <div className="absolute top-[137.13px] left-[0.33px] font-medium inline-block w-[12.48px] h-[24.95px] [transform:_rotate(-91.52deg)] [transform-origin:0_0]">
            X
          </div>
          <div className="absolute top-[118.08px] left-[0.44px] font-medium inline-block w-[5.35px] h-[24.95px] [transform:_rotate(-84.55deg)] [transform-origin:0_0]">
             
          </div>
          <div className="absolute top-[106.8px] left-[1.79px] font-medium inline-block w-[5.35px] h-[24.95px] [transform:_rotate(-79.44deg)] [transform-origin:0_0]">
             
          </div>
          <div className="absolute top-[95.1px] left-[4.16px] font-medium text-darkturquoise inline-block w-[12.48px] h-[24.95px] [transform:_rotate(-72.47deg)] [transform-origin:0_0]">
            ~
          </div>
          <div className="absolute top-[77.13px] left-[10.48px] font-medium inline-block w-[5.35px] h-[24.95px] [transform:_rotate(-65.5deg)] [transform-origin:0_0]">
             
          </div>
          <div className="absolute top-[66.91px] left-[15.43px] font-medium inline-block w-[5.35px] h-[24.95px] [transform:_rotate(-60.39deg)] [transform-origin:0_0]">
             
          </div>
          <div className="absolute top-[56.32px] left-[21.57px] font-medium inline-block w-[16.04px] h-[24.95px] [transform:_rotate(-52.5deg)] [transform-origin:0_0]">
            M
          </div>
          <div className="absolute top-[38.26px] left-[36.44px] font-medium inline-block w-[11.59px] h-[24.95px] [transform:_rotate(-42.97deg)] [transform-origin:0_0]">
            a
          </div>
          <div className="absolute top-[25.96px] left-[50.39px] font-medium inline-block w-[11.59px] h-[24.95px] [transform:_rotate(-34.61deg)] [transform-origin:0_0]">
            n
          </div>
          <div className="absolute top-[16.02px] left-[65.76px] font-medium inline-block w-[8.02px] h-[24.95px] [transform:_rotate(-27.18deg)] [transform-origin:0_0]">
            t
          </div>
          <div className="absolute top-[9.57px] left-[79.02px] font-medium inline-block w-[11.59px] h-[24.95px] [transform:_rotate(-19.74deg)] [transform-origin:0_0]">
            h
          </div>
          <div className="absolute top-[3.78px] left-[96.69px] font-medium inline-block w-[11.59px] h-[24.95px] [transform:_rotate(-11.38deg)] [transform-origin:0_0]">
            a
          </div>
          <div className="absolute top-[0.61px] left-[115.01px] font-medium inline-block w-[11.59px] h-[24.95px] [transform:_rotate(-3.02deg)] [transform-origin:0_0]">
            n
          </div>
          <div className="absolute top-[0.22px] left-[133.1px] font-medium inline-block w-[5.35px] h-[24.95px] [transform:_rotate(3.72deg)] [transform-origin:0_0]">
             
          </div>
          <div className="absolute top-[1.15px] left-[145.15px] font-medium inline-block w-[14.26px] h-[24.95px] [transform:_rotate(11.15deg)] [transform-origin:0_0]">
            D
          </div>
          <div className="absolute top-[5.97px] left-[166.15px] font-medium inline-block w-[12.48px] h-[24.95px] [transform:_rotate(20.44deg)] [transform-origin:0_0]">
            E
          </div>
          <div className="absolute top-[13.34px] left-[184.34px] font-medium inline-block w-[12.48px] h-[24.95px] [transform:_rotate(29.27deg)] [transform-origin:0_0]">
            X
          </div>
          <div className="absolute top-[23.19px] left-[200.65px] font-medium inline-block w-[5.35px] h-[24.95px] [transform:_rotate(36.24deg)] [transform-origin:0_0]">
             
          </div>
          <div className="absolute top-[30.12px] left-[209.65px] font-medium inline-block w-[5.35px] h-[24.95px] [transform:_rotate(41.35deg)] [transform-origin:0_0]">
             
          </div>
          <div className="absolute top-[38.14px] left-[218.49px] font-medium text-darkturquoise inline-block w-[12.48px] h-[24.95px] [transform:_rotate(48.31deg)] [transform-origin:0_0]">
            ~
          </div>
          <div className="absolute top-[52.77px] left-[230.7px] font-medium inline-block w-[5.35px] h-[24.95px] [transform:_rotate(55.28deg)] [transform-origin:0_0]">
             
          </div>
          <div className="absolute top-[62.26px] left-[236.94px] font-medium inline-block w-[5.35px] h-[24.95px] [transform:_rotate(60.39deg)] [transform-origin:0_0]">
             
          </div>
          <div className="absolute top-[72.94px] left-[242.89px] font-medium inline-block w-[16.04px] h-[24.95px] [transform:_rotate(68.29deg)] [transform-origin:0_0]">
            M
          </div>
          <div className="absolute top-[94.96px] left-[250.8px] font-medium inline-block w-[11.59px] h-[24.95px] [transform:_rotate(77.81deg)] [transform-origin:0_0]">
            a
          </div>
          <div className="absolute top-[113.24px] left-[254.23px] font-medium inline-block w-[11.59px] h-[24.95px] [transform:_rotate(86.18deg)] [transform-origin:0_0]">
            n
          </div>
          <div className="absolute top-[131.53px] left-[254.9px] font-medium inline-block w-[8.02px] h-[24.95px] [transform:_rotate(93.61deg)] [transform-origin:0_0]">
            t
          </div>
          <div className="absolute top-[146.23px] left-[253.65px] font-medium inline-block w-[11.59px] h-[24.95px] [transform:_rotate(101.04deg)] [transform-origin:0_0]">
            h
          </div>
          <div className="absolute top-[164.37px] left-[249.59px] font-medium inline-block w-[11.59px] h-[24.95px] [transform:_rotate(109.4deg)] [transform-origin:0_0]">
            a
          </div>
          <div className="absolute top-[181.74px] left-[242.93px] font-medium inline-block w-[11.59px] h-[24.95px] [transform:_rotate(117.77deg)] [transform-origin:0_0]">
            n
          </div>
          <div className="absolute top-[197.47px] left-[234px] font-medium inline-block w-[5.35px] h-[24.95px] [transform:_rotate(124.5deg)] [transform-origin:0_0]">
             
          </div>
          <div className="absolute top-[207.34px] left-[227.04px] font-medium inline-block w-[14.26px] h-[24.95px] [transform:_rotate(131.94deg)] [transform-origin:0_0]">
            D
          </div>
          <div className="absolute top-[222.92px] left-[212.15px] font-medium inline-block w-[12.48px] h-[24.95px] [transform:_rotate(141.23deg)] [transform-origin:0_0]">
            E
          </div>
          <div className="absolute top-[234.78px] left-[196.51px] font-medium inline-block w-[12.48px] h-[24.95px] [transform:_rotate(150.05deg)] [transform-origin:0_0]">
            X
          </div>
          <div className="absolute top-[243.75px] left-[179.7px] font-medium inline-block w-[5.35px] h-[24.95px] [transform:_rotate(157.02deg)] [transform-origin:0_0]">
             
          </div>
          <div className="absolute top-[247.94px] left-[169.14px] font-medium inline-block w-[5.35px] h-[24.95px] [transform:_rotate(162.13deg)] [transform-origin:0_0]">
             
          </div>
          <div className="absolute top-[251.43px] left-[157.72px] font-medium text-darkturquoise inline-block w-[12.48px] h-[24.95px] [transform:_rotate(169.1deg)] [transform-origin:0_0]">
            ~
          </div>
          <div className="absolute top-[254.42px] left-[138.91px] font-medium inline-block w-[5.35px] h-[24.95px] [transform:_rotate(176.07deg)] [transform-origin:0_0]">
             
          </div>
          <div className="absolute top-[254.93px] left-[127.56px] font-medium inline-block w-[5.35px] h-[24.95px] [transform:_rotate(-178.82deg)] [transform-origin:0_0]">
             
          </div>
        </div>
      </div>
    );
  }
);

export default Property1def5;
