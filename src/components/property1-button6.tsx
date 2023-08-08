import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type Property1Button6Type = {
  /** Style props */
  property1Button6Position?: Property.Position;
  property1Button6Cursor?: Property.Cursor;
  tradeCryptoCursor?: Property.Cursor;

  /** Action props */
  onComponent102ContainerClick?: () => void;
  onTradeCryptoTextClick?: () => void;
};

const Property1Button6: FunctionComponent<Property1Button6Type> = memo(
  ({
    property1Button6Position,
    property1Button6Cursor,
    tradeCryptoCursor,
    onComponent102ContainerClick,
    onTradeCryptoTextClick,
  }) => {
    const property1Button6Style: CSS.Properties = useMemo(() => {
      return {
        position: property1Button6Position,
        cursor: property1Button6Cursor,
      };
    }, [property1Button6Position, property1Button6Cursor]);

    const tradeCryptoStyle: CSS.Properties = useMemo(() => {
      return {
        cursor: tradeCryptoCursor,
      };
    }, [tradeCryptoCursor]);

    return (
      <div
        className="relative rounded-6xs bg-darkturquoise box-border h-[30px] flex flex-col py-[18px] px-6 items-center justify-center text-left text-base text-gray-200 font-bai-jamjuree border-[0.5px] border-solid border-gray-100"
        style={property1Button6Style}
        onClick={onComponent102ContainerClick}
      >
        <div
          className="relative capitalize font-medium"
          style={tradeCryptoStyle}
          onClick={onTradeCryptoTextClick}
        >{`Trade Crypto `}</div>
      </div>
    );
  }
);

export default Property1Button6;
