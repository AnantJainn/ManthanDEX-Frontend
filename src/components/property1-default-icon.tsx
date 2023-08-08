import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type Property1DefaultIconType = {
  /** Style props */
  property1DefaultIconPosition?: Property.Position;
  property1DefaultIconWidth?: Property.Width;
  property1DefaultIconTop?: Property.Top;
  property1DefaultIconLeft?: Property.Left;
};

const Property1DefaultIcon: FunctionComponent<Property1DefaultIconType> = memo(
  ({
    property1DefaultIconPosition,
    property1DefaultIconWidth,
    property1DefaultIconTop,
    property1DefaultIconLeft,
  }) => {
    const property1DefaultIconStyle: CSS.Properties = useMemo(() => {
      return {
        position: property1DefaultIconPosition,
        width: property1DefaultIconWidth,
        top: property1DefaultIconTop,
        left: property1DefaultIconLeft,
      };
    }, [
      property1DefaultIconPosition,
      property1DefaultIconWidth,
      property1DefaultIconTop,
      property1DefaultIconLeft,
    ]);

    return (
      <img
        className="relative w-[1770px] h-[564px] overflow-hidden"
        alt=""
        src="/property-1default.svg"
        style={property1DefaultIconStyle}
      />
    );
  }
);

export default Property1DefaultIcon;
