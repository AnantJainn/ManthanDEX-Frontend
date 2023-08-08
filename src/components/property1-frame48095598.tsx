import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";
import Property1def5 from "./property1def5";

type Property1Frame48095598Type = {
  group1?: string;

  /** Style props */
  property1Frame48095598Position?: Property.Position;
  property1Frame48095598Top?: Property.Top;
  property1Frame48095598Left?: Property.Left;
};

const Property1Frame48095598: FunctionComponent<Property1Frame48095598Type> =
  memo(
    ({
      group1,
      property1Frame48095598Position,
      property1Frame48095598Top,
      property1Frame48095598Left,
    }) => {
      const property1Frame48095598Style: CSS.Properties = useMemo(() => {
        return {
          position: property1Frame48095598Position,
          top: property1Frame48095598Top,
          left: property1Frame48095598Left,
        };
      }, [
        property1Frame48095598Position,
        property1Frame48095598Top,
        property1Frame48095598Left,
      ]);

      return (
        <div
          className="relative w-[1320px] h-[800px] overflow-hidden"
          style={property1Frame48095598Style}
        >
          <Property1def5
            group1="/group-12.svg"
            property1defPosition="absolute"
            property1defTop="calc(50% - 150px)"
            property1defLeft="1320px"
          />
        </div>
      );
    }
  );

export default Property1Frame48095598;
