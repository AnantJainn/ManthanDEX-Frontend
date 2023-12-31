import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type Property1Frame48095616Type = {
  image11?: string;
  vector583?: string;

  /** Style props */
  property1Frame48095616Position?: Property.Position;
  property1Frame48095616Top?: Property.Top;
  property1Frame48095616Left?: Property.Left;
  property1Frame48095616Width?: Property.Width;
  frameDivAlignSelf?: Property.AlignSelf;
};

const Property1Frame48095616: FunctionComponent<Property1Frame48095616Type> =
  memo(
    ({
      image11,
      vector583,
      property1Frame48095616Position,
      property1Frame48095616Top,
      property1Frame48095616Left,
      property1Frame48095616Width,
      frameDivAlignSelf,
    }) => {
      const property1Frame48095616Style: CSS.Properties = useMemo(() => {
        return {
          position: property1Frame48095616Position,
          top: property1Frame48095616Top,
          left: property1Frame48095616Left,
          width: property1Frame48095616Width,
        };
      }, [
        property1Frame48095616Position,
        property1Frame48095616Top,
        property1Frame48095616Left,
        property1Frame48095616Width,
      ]);

      const frameDiv66Style: CSS.Properties = useMemo(() => {
        return {
          alignSelf: frameDivAlignSelf,
        };
      }, [frameDivAlignSelf]);

      return (
        <div
          className="relative rounded-6xs bg-gray-700 flex flex-col p-4 items-start justify-start text-left text-sm text-white font-bai-jamjuree border-[0.3px] border-solid border-white"
          style={property1Frame48095616Style}
        >
          <div
            className="h-[106px] flex flex-col items-start justify-between"
            style={frameDiv66Style}
          >
            <div className="w-[209px] h-7 flex flex-row items-center justify-start">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <img
                  className="relative w-6 h-6 object-cover"
                  alt=""
                  src={image11}
                />
                <div className="relative leading-[18px] font-semibold inline-block w-[106px] shrink-0">
                  Binance Coin
                </div>
              </div>
              <div className="relative text-3xs font-medium font-work-sans text-gray-800 text-right inline-block w-[76px] shrink-0">
                BTC/USD
              </div>
            </div>
            <div className="w-[210px] flex flex-row items-start justify-start gap-[40px] text-base">
              <div className="w-[110px] flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-medium inline-block w-[95.58px] h-[22px] shrink-0">
                  $40,322.50
                </div>
                <div className="rounded-37xl-7 bg-indianred-200 w-[53px] h-4 flex flex-row py-[6.299999713897705px] px-[10.5px] box-border items-center justify-center text-center text-xs text-gray-100 font-dm-sans">
                  <b className="relative">-0.28%</b>
                </div>
              </div>
              {/* <img
                className="relative w-[59.96px] h-[39.58px]"
                alt=""
                src={vector583}
              /> */}
            </div>
          </div>
        </div>
      );
    }
  );

export default Property1Frame48095616;
