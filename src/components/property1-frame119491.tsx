import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type Property1Frame119491Type = {
  vector10?: string;

  /** Style props */
  property1Frame11949Position?: Property.Position;
  property1Frame11949Width?: Property.Width;
  property1Frame11949AlignSelf?: Property.AlignSelf;
};

const Property1Frame119491: FunctionComponent<Property1Frame119491Type> = memo(
  ({
    vector10,
    property1Frame11949Position,
    property1Frame11949Width,
    property1Frame11949AlignSelf,
  }) => {
    const property1Frame119491Style: CSS.Properties = useMemo(() => {
      return {
        position: property1Frame11949Position,
        width: property1Frame11949Width,
        alignSelf: property1Frame11949AlignSelf,
      };
    }, [
      property1Frame11949Position,
      property1Frame11949Width,
      property1Frame11949AlignSelf,
    ]);

    return (
      <div
        className="relative w-[156px] flex flex-row items-center justify-center text-left text-base text-white font-bai-jamjuree"
        style={property1Frame119491Style}
      >
        <div className="rounded-6xs bg-gray-700 box-border h-[30px] flex flex-col py-[18px] px-6 items-center justify-center border-[0.5px] border-solid border-white">
          <div className="flex flex-row items-center justify-center gap-[10px]">
            <div className="relative capitalize font-light">Explore More</div>
            <img
              className="relative w-[7.06px] h-[12.71px]"
              alt=""
              // src={vector10}
              src="../../public/vector-10.svg"
            />
          </div>
        </div>
      </div>
    );
  }
);

export default Property1Frame119491;
