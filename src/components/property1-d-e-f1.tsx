import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type Property1DEF1Type = {
  /** Style props */
  property1DEFPosition?: Property.Position;
  property1DEFTop?: Property.Top;
  property1DEFLeft?: Property.Left;
};

const Property1DEF1: FunctionComponent<Property1DEF1Type> = memo(
  ({ property1DEFPosition, property1DEFTop, property1DEFLeft }) => {
    const property1DEF2Style: CSS.Properties = useMemo(() => {
      return {
        position: property1DEFPosition,
        top: property1DEFTop,
        left: property1DEFLeft,
      };
    }, [property1DEFPosition, property1DEFTop, property1DEFLeft]);

    return (
      <div
        className="relative w-[709px] h-[154px] overflow-hidden"
        style={property1DEF2Style}
      >
        <img
          className="absolute top-[41px] left-[106px] w-[509px] h-10 object-cover"
          alt=""
          src="/market@2x.png"
        />
      </div>
    );
  }
);

export default Property1DEF1;
