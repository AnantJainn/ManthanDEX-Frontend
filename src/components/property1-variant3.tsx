import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type Property1Variant3Type = {
  tradeType?: string;
  showRectangleDiv?: boolean;

  /** Style props */
  property1Variant3Position?: Property.Position;
  property1Variant3Height?: Property.Height;
  tRADEFontSize?: Property.FontSize;
  tRADEFontWeight?: Property.FontWeight;
  tRADEColor?: Property.Color;
  tRADEDisplay?: Property.Display;
  rectangleDivBackground?: Property.Background;
  rectangleDivHeight?: Property.Height;
  rectangleDivBackgroundColor?: Property.BackgroundColor;
};

const Property1Variant3: FunctionComponent<Property1Variant3Type> = memo(
  ({
    tradeType,
    showRectangleDiv,
    property1Variant3Position,
    property1Variant3Height,
    tRADEFontSize,
    tRADEFontWeight,
    tRADEColor,
    tRADEDisplay,
    rectangleDivBackground,
    rectangleDivHeight,
    rectangleDivBackgroundColor,
  }) => {
    const property1Variant3Style: CSS.Properties = useMemo(() => {
      return {
        position: property1Variant3Position,
        height: property1Variant3Height,
      };
    }, [property1Variant3Position, property1Variant3Height]);

    const tRADEStyle: CSS.Properties = useMemo(() => {
      return {
        fontSize: tRADEFontSize,
        fontWeight: tRADEFontWeight,
        color: tRADEColor,
        display: tRADEDisplay,
      };
    }, [tRADEFontSize, tRADEFontWeight, tRADEColor, tRADEDisplay]);

    const rectangleDivStyle: CSS.Properties = useMemo(() => {
      return {
        background: rectangleDivBackground,
        height: rectangleDivHeight,
        backgroundColor: rectangleDivBackgroundColor,
      };
    }, [
      rectangleDivBackground,
      rectangleDivHeight,
      rectangleDivBackgroundColor,
    ]);

    return (
      <div
        className="relative h-5 flex flex-col items-center justify-start text-left text-sm text-midnightblue-200 font-bai-jamjuree"
        style={property1Variant3Style}
      >
        <div className="relative uppercase font-medium" style={tRADEStyle}>
          {tradeType}
        </div>
        {showRectangleDiv && (
          <div
            className="self-stretch relative rounded-10xs [background:linear-gradient(90.07deg,_#543a84,_#9c76eb_51.56%,_#8ab7fd)] h-0.5"
            style={rectangleDivStyle}
          />
        )}
      </div>
    );
  }
);

export default Property1Variant3;
