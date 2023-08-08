import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type Property1DEF6Type = {
  frame48095564?: string;

  /** Style props */
  property1DEFPosition?: Property.Position;
  property1DEFTop?: Property.Top;
  property1DEFLeft?: Property.Left;
};

const Property1DEF6: FunctionComponent<Property1DEF6Type> = memo(
  ({
    frame48095564,
    property1DEFPosition,
    property1DEFTop,
    property1DEFLeft,
  }) => {
    const property1DEFStyle: CSS.Properties = useMemo(() => {
      return {
        position: property1DEFPosition,
        top: property1DEFTop,
        left: property1DEFLeft,
      };
    }, [property1DEFPosition, property1DEFTop, property1DEFLeft]);

    return (
      <div
        className="relative w-[1320px] h-[800px] text-left text-41xl text-darkturquoise font-bai-jamjuree"
        style={property1DEFStyle}
      >
        <img
          className="absolute top-[726px] left-[0px] w-[569px] h-[135px] overflow-hidden object-cover opacity-[0]"
          alt=""
          src={frame48095564}
        />
        <div className="absolute top-[651px] left-[0px] opacity-[0]">
          <span className="text-21xl text-gainsboro-200">{`A `}</span>
          <span>
            <span>ORDER BOOK</span>
          </span>
          <span>
            <span>{` `}</span>
            <span className="text-gainsboro-200">BASED</span>
            <span className="text-darkturquoise"> COMPLETE</span>
          </span>
        </div>
      </div>
    );
  }
);

export default Property1DEF6;
