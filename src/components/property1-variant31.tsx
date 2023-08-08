import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type Property1Variant31Type = {
  showRectangleDiv?: boolean;
  showRectangleDiv?: boolean;

  /** Style props */
  property1Variant3Position?: Property.Position;
  property1Variant3BorderRadius?: Property.BorderRadius;
  property1Variant3Height?: Property.Height;
  property1Variant3Padding?: Property.Padding;
  property1Variant3Cursor?: Property.Cursor;
  property1Variant3Border?: Property.Border;
  frameDivHeight?: Property.Height;
  tRADEFontSize?: Property.FontSize;
  tRADEFontWeight?: Property.FontWeight;
  rectangleDivHeight?: Property.Height;
};

const Property1Variant31: FunctionComponent<Property1Variant31Type> = memo(
  ({
    showRectangleDiv,
    property1Variant3Position,
    property1Variant3BorderRadius,
    property1Variant3Height,
    property1Variant3Padding,
    property1Variant3Cursor,
    property1Variant3Border,
    frameDivHeight,
    tRADEFontSize,
    tRADEFontWeight,
    rectangleDivHeight,
    showRectangleDiv,
  }) => {
    const property1Variant31Style: CSS.Properties = useMemo(() => {
      return {
        position: property1Variant3Position,
        borderRadius: property1Variant3BorderRadius,
        height: property1Variant3Height,
        padding: property1Variant3Padding,
        cursor: property1Variant3Cursor,
        border: property1Variant3Border,
      };
    }, [
      property1Variant3Position,
      property1Variant3BorderRadius,
      property1Variant3Height,
      property1Variant3Padding,
      property1Variant3Cursor,
      property1Variant3Border,
    ]);

    const frameDivStyle: CSS.Properties = useMemo(() => {
      return {
        height: frameDivHeight,
      };
    }, [frameDivHeight]);

    const tRADE1Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: tRADEFontSize,
        fontWeight: tRADEFontWeight,
      };
    }, [tRADEFontSize, tRADEFontWeight]);

    const rectangleDiv1Style: CSS.Properties = useMemo(() => {
      return {
        height: rectangleDivHeight,
      };
    }, [rectangleDivHeight]);

    return (
      <div
        className="relative rounded-tl-smi rounded-tr-none rounded-b-none bg-midnightblue-100 h-8 flex flex-row py-2 px-6 box-border items-center justify-center text-left text-xs text-white font-bai-jamjuree"
        style={property1Variant31Style}
      >
        <div
          className="h-5 flex flex-col items-center justify-start"
          style={frameDivStyle}
        >
          <div className="relative uppercase font-medium" style={tRADE1Style}>
            POSITION
          </div>
          {showRectangleDiv && (
            <div
              className="self-stretch relative rounded-10xs bg-lightskyblue h-0.5"
              style={rectangleDiv1Style}
            />
          )}
        </div>
      </div>
    );
  }
);

export default Property1Variant31;
