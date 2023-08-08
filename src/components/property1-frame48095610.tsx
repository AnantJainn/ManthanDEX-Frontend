import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type Property1Frame48095610Type = {
  /** Style props */
  property1Frame48095610Width?: Property.Width;
  property1Frame48095610AlignSelf?: Property.AlignSelf;
  property1Frame48095610FlexShrink?: Property.FlexShrink;
};

const Property1Frame48095610: FunctionComponent<Property1Frame48095610Type> =
  memo(
    ({
      property1Frame48095610Width,
      property1Frame48095610AlignSelf,
      property1Frame48095610FlexShrink,
    }) => {
      const property1Frame48095610Style: CSS.Properties = useMemo(() => {
        return {
          width: property1Frame48095610Width,
          alignSelf: property1Frame48095610AlignSelf,
          flexShrink: property1Frame48095610FlexShrink,
        };
      }, [
        property1Frame48095610Width,
        property1Frame48095610AlignSelf,
        property1Frame48095610FlexShrink,
      ]);

      return (
        <div
          className="relative w-[809px] h-[150px] overflow-hidden text-left text-49xl text-white font-bai-jamjuree"
          style={property1Frame48095610Style}
        >
          <div className="absolute top-[-15px] left-[9px] font-semibold">
            Manthan DEX
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="absolute top-[0px] left-[0px] w-[433px] h-12">
            <div className="absolute top-[0px] left-[-155px] bg-darkturquoise w-[159px] h-14" />
          </div>
        </div>
      );
    }
  );

export default Property1Frame48095610;
