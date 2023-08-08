import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type Property1Frame480955861Type = {
  iconGift?: string;

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

const Property1Frame480955861: FunctionComponent<Property1Frame480955861Type> =
  memo(
    ({
      iconGift,
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
      const property1Frame480955861Style: CSS.Properties = useMemo(() => {
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

      const frameDiv51Style: CSS.Properties = useMemo(() => {
        return {
          alignSelf: frameDivAlignSelf,
        };
      }, [frameDivAlignSelf]);

      const frameDiv52Style: CSS.Properties = useMemo(() => {
        return {
          width: frameDivWidth,
          alignSelf: frameDivAlignSelf1,
        };
      }, [frameDivWidth, frameDivAlignSelf1]);

      const frameDiv53Style: CSS.Properties = useMemo(() => {
        return {
          alignSelf: frameDivAlignSelf2,
        };
      }, [frameDivAlignSelf2]);

      const euTellusQuam1Style: CSS.Properties = useMemo(() => {
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
          style={property1Frame480955861Style}
        >
          <div
            className="flex flex-col items-start justify-start gap-[24px]"
            style={frameDiv51Style}
          >
            <div
              className="w-[260px] h-[50px] flex flex-row items-center justify-start gap-[16px]"
              style={frameDiv52Style}
            >
              <img className="relative w-[36.6px] h-10" alt="" src={iconGift} />
              <div className="relative font-medium inline-block w-[218px] h-[50px] shrink-0">
                <p className="m-0">Rewards</p>
              </div>
            </div>
            <div
              className="flex flex-row items-start justify-start text-sm text-gainsboro-100 font-rubik"
              style={frameDiv53Style}
            >
              <div
                className="relative flex items-center w-[260px] shrink-0 opacity-[0.6]"
                style={euTellusQuam1Style}
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

export default Property1Frame480955861;
