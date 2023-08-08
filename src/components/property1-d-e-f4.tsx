import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type Property1DEF4Type = {
  /** Style props */
  property1DEFPosition?: Property.Position;
  property1DEFTop?: Property.Top;
  property1DEFLeft?: Property.Left;
};

const Property1DEF4: FunctionComponent<Property1DEF4Type> = memo(
  ({ property1DEFPosition, property1DEFTop, property1DEFLeft }) => {
    const property1DEF5Style: CSS.Properties = useMemo(() => {
      return {
        position: property1DEFPosition,
        top: property1DEFTop,
        left: property1DEFLeft,
      };
    }, [property1DEFPosition, property1DEFTop, property1DEFLeft]);

    return (
      <div className="relative w-[162px] h-[257px]" style={property1DEF5Style}>
        <div className="absolute top-[43px] left-[0px] w-[162px] h-[86.35px]">
          <div className="absolute top-[0px] left-[0px] rounded-41xl bg-paleturquoise-200 [filter:blur(30px)] w-[162px] h-[86.35px] opacity-[0.2]" />
          <div className="absolute top-[0px] left-[0px] rounded-41xl bg-midnightblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[162px] h-[86.35px]" />
        </div>
      </div>
    );
  }
);

export default Property1DEF4;
