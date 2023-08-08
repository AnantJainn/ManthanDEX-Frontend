import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type Property1DEF3Type = {
  /** Style props */
  property1DEFPosition?: Property.Position;
  property1DEFTop?: Property.Top;
  property1DEFLeft?: Property.Left;
};

const Property1DEF3: FunctionComponent<Property1DEF3Type> = memo(
  ({ property1DEFPosition, property1DEFTop, property1DEFLeft }) => {
    const property1DEF4Style: CSS.Properties = useMemo(() => {
      return {
        position: property1DEFPosition,
        top: property1DEFTop,
        left: property1DEFLeft,
      };
    }, [property1DEFPosition, property1DEFTop, property1DEFLeft]);

    return (
      <div
        className="relative w-[292px] h-[480px] overflow-hidden"
        style={property1DEF4Style}
      >
        <div className="absolute top-[15px] left-[25px] w-[187px] h-[356px]">
          <div className="absolute top-[0px] left-[0px] bg-darkturquoise [filter:blur(15px)] w-[187px] h-[356px] opacity-[0.3]" />
          <img
            className="absolute top-[0px] left-[0px] rounded-6xs w-[187px] h-[356px] object-cover"
            alt=""
            src="/buy-sell@2x.png"
          />
        </div>
      </div>
    );
  }
);

export default Property1DEF3;
