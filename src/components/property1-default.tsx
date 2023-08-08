import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type Property1DefaultType = {
  /** Style props */
  property1DefaultPosition?: Property.Position;
  property1DefaultHeight?: Property.Height;
  property1DefaultPadding?: Property.Padding;
  property1DefaultCursor?: Property.Cursor;
  property1DefaultBackgroundColor?: Property.BackgroundColor;
  property1DefaultWidth?: Property.Width;
  hISTORYFontSize?: Property.FontSize;
};

const Property1Default: FunctionComponent<Property1DefaultType> = memo(
  ({
    property1DefaultPosition,
    property1DefaultHeight,
    property1DefaultPadding,
    property1DefaultCursor,
    property1DefaultBackgroundColor,
    property1DefaultWidth,
    hISTORYFontSize,
  }) => {
    const property1DefaultStyle: CSS.Properties = useMemo(() => {
      return {
        position: property1DefaultPosition,
        height: property1DefaultHeight,
        padding: property1DefaultPadding,
        cursor: property1DefaultCursor,
        backgroundColor: property1DefaultBackgroundColor,
        width: property1DefaultWidth,
      };
    }, [
      property1DefaultPosition,
      property1DefaultHeight,
      property1DefaultPadding,
      property1DefaultCursor,
      property1DefaultBackgroundColor,
      property1DefaultWidth,
    ]);

    const hISTORYStyle: CSS.Properties = useMemo(() => {
      return {
        fontSize: hISTORYFontSize,
      };
    }, [hISTORYFontSize]);

    return (
      <div
        className="relative rounded-tl-none rounded-tr-smi rounded-b-none box-border h-8 flex flex-row py-2 px-6 items-center justify-center text-left text-xs text-white font-bai-jamjuree border-[0.3px] border-solid border-white"
        style={property1DefaultStyle}
      >
        <div className="relative" style={hISTORYStyle}>
          HISTORY
        </div>
      </div>
    );
  }
);

export default Property1Default;
