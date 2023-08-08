import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type Property1Frame11949Type = {
  /** Style props */
  property1Frame11949Position?: Property.Position;
  property1Frame11949Cursor?: Property.Cursor;
  button5Cursor?: Property.Cursor;

  /** Action props */
  onComponent103ContainerClick?: () => void;
  onButton5Container1Click?: () => void;
};

const Property1Frame11949: FunctionComponent<Property1Frame11949Type> = memo(
  ({
    property1Frame11949Position,
    property1Frame11949Cursor,
    button5Cursor,
    onComponent103ContainerClick,
    onButton5Container1Click,
  }) => {
    const property1Frame11949Style: CSS.Properties = useMemo(() => {
      return {
        position: property1Frame11949Position,
        cursor: property1Frame11949Cursor,
      };
    }, [property1Frame11949Position, property1Frame11949Cursor]);

    const button5Style: CSS.Properties = useMemo(() => {
      return {
        cursor: button5Cursor,
      };
    }, [button5Cursor]);

    return (
      <div
        className="relative flex flex-row items-start justify-start text-left text-base text-white font-bai-jamjuree"
        style={property1Frame11949Style}
        onClick={onComponent103ContainerClick}
      >
        <div
          className="rounded-6xs bg-gray-700 box-border h-[30px] flex flex-col py-[18px] px-6 items-center justify-center border-[0.5px] border-solid border-white"
          style={button5Style}
          onClick={onButton5Container1Click}
        >
          <div className="relative capitalize font-light">Sign In</div>
        </div>
      </div>
    );
  }
);

export default Property1Frame11949;
