import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type Property1DEFType = {
  /** Style props */
  property1DEFPosition?: Property.Position;
  property1DEFTop?: Property.Top;
  property1DEFLeft?: Property.Left;
};

const Property1DEF: FunctionComponent<Property1DEFType> = memo(
  ({ property1DEFPosition, property1DEFTop, property1DEFLeft }) => {
    const property1DEF1Style: CSS.Properties = useMemo(() => {
      return {
        position: property1DEFPosition,
        top: property1DEFTop,
        left: property1DEFLeft,
      };
    }, [property1DEFPosition, property1DEFTop, property1DEFLeft]);

    return (
      <div className="relative w-24 h-[27.95px]" style={property1DEF1Style}>
        <div className="absolute top-[0px] left-[0px] w-24 h-[27.95px]">
          <div className="absolute top-[0px] left-[0px] rounded-tl-6xs rounded-tr-none rounded-b-none bg-paleturquoise-100 [filter:blur(10px)] w-24 h-[27.95px] opacity-[0.2]" />
          <img
            className="absolute top-[0px] left-[0px] w-24 h-[27.95px] object-cover"
            alt=""
            src="/positions@2x.png"
          />
        </div>
      </div>
    );
  }
);

export default Property1DEF;
