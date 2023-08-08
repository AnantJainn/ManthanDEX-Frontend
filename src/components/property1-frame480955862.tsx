import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type Property1Frame480955862Type = {
  iconCardCoin?: string;

  /** Style props */
  property1Frame48095586Position?: Property.Position;
  property1Frame48095586Width?: Property.Width;
  property1Frame48095586FlexShrink?: Property.FlexShrink;
  frameDivAlignSelf?: Property.AlignSelf;
  frameDivWidth?: Property.Width;
  frameDivAlignSelf1?: Property.AlignSelf;
  frameDivAlignSelf2?: Property.AlignSelf;
  euTellusQuamDisplay?: Property.Display;
  euTellusQuamAlignItems?: Property.AlignItems;
  euTellusQuamWidth?: Property.Width;
  euTellusQuamFlexShrink?: Property.FlexShrink;
  euTellusQuamFlex?: Property.Flex;
};

const Property1Frame480955862: FunctionComponent<Property1Frame480955862Type> =
  memo(
    ({
      iconCardCoin,
      property1Frame48095586Position,
      property1Frame48095586Width,
      property1Frame48095586FlexShrink,
      frameDivAlignSelf,
      frameDivWidth,
      frameDivAlignSelf1,
      frameDivAlignSelf2,
      euTellusQuamDisplay,
      euTellusQuamAlignItems,
      euTellusQuamWidth,
      euTellusQuamFlexShrink,
      euTellusQuamFlex,
    }) => {
      const property1Frame480955862Style: CSS.Properties = useMemo(() => {
        return {
          position: property1Frame48095586Position,
          width: property1Frame48095586Width,
          flexShrink: property1Frame48095586FlexShrink,
        };
      }, [
        property1Frame48095586Position,
        property1Frame48095586Width,
        property1Frame48095586FlexShrink,
      ]);

      const frameDiv54Style: CSS.Properties = useMemo(() => {
        return {
          alignSelf: frameDivAlignSelf,
        };
      }, [frameDivAlignSelf]);

      const frameDiv55Style: CSS.Properties = useMemo(() => {
        return {
          width: frameDivWidth,
          alignSelf: frameDivAlignSelf1,
        };
      }, [frameDivWidth, frameDivAlignSelf1]);

      const frameDiv56Style: CSS.Properties = useMemo(() => {
        return {
          alignSelf: frameDivAlignSelf2,
        };
      }, [frameDivAlignSelf2]);

      const euTellusQuam2Style: CSS.Properties = useMemo(() => {
        return {
          display: euTellusQuamDisplay,
          alignItems: euTellusQuamAlignItems,
          width: euTellusQuamWidth,
          flexShrink: euTellusQuamFlexShrink,
          flex: euTellusQuamFlex,
        };
      }, [
        euTellusQuamDisplay,
        euTellusQuamAlignItems,
        euTellusQuamWidth,
        euTellusQuamFlexShrink,
        euTellusQuamFlex,
      ]);

      return (
        <div
          className="relative rounded-6xs bg-midnightblue-300 overflow-hidden flex flex-col p-4 items-start justify-start text-left text-xl text-darkturquoise font-bai-jamjuree border-[0.2px] border-solid border-gainsboro-200"
          style={property1Frame480955862Style}
        >
          <div
            className="flex flex-col items-start justify-start gap-[24px]"
            style={frameDiv54Style}
          >
            <div
              className="w-[260px] flex flex-row items-center justify-start gap-[16px]"
              style={frameDiv55Style}
            >
              <img
                className="relative w-[40.47px] h-10"
                alt=""
                src={iconCardCoin}
              />
              <div className="relative font-medium inline-block w-[218px] shrink-0">
                <p className="m-0">No Minimum</p>
                <p className="m-0 text-white">Trade Size</p>
              </div>
            </div>
            <div
              className="flex flex-row items-start justify-start text-sm text-gainsboro-100 font-rubik"
              style={frameDiv56Style}
            >
              <div
                className="relative flex items-center w-[260px] shrink-0 opacity-[0.6]"
                style={euTellusQuam2Style}
              >
                Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat
                et ornare risus.
              </div>
            </div>
          </div>
        </div>
      );
    }
  );

export default Property1Frame480955862;
