import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type Property1DEF2Type = {
  /** Style props */
  property1DEFPosition?: Property.Position;
  property1DEFTop?: Property.Top;
  property1DEFLeft?: Property.Left;
};

const Property1DEF2: FunctionComponent<Property1DEF2Type> = memo(
  ({ property1DEFPosition, property1DEFTop, property1DEFLeft }) => {
    const property1DEF3Style: CSS.Properties = useMemo(() => {
      return {
        position: property1DEFPosition,
        top: property1DEFTop,
        left: property1DEFLeft,
      };
    }, [property1DEFPosition, property1DEFTop, property1DEFLeft]);

    return (
      <div
        className="relative w-[316px] h-[622px] overflow-hidden"
        style={property1DEF3Style}
      >
        <div className="absolute top-[64px] left-[65px] bg-darkturquoise [filter:blur(15px)] w-[186px] h-[536px] opacity-[0.2]" />
        <img
          className="absolute top-[64px] left-[65px] rounded-6xs w-[186.3px] h-[535.52px] object-cover"
          alt=""
          src="/order@2x.png"
        />
      </div>
    );
  }
);

export default Property1DEF2;
