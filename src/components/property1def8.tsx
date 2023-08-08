import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type Property1def8Type = {
  iconQuoteDown?: string;

  /** Style props */
  frameDivAlignSelf?: Property.AlignSelf;
  frameDivWidth?: Property.Width;
  frameDivJustifyContent?: Property.JustifyContent;
  frameDivAlignSelf1?: Property.AlignSelf;
  mrSougfvkcAlignSelf?: Property.AlignSelf;
};

const Property1def8: FunctionComponent<Property1def8Type> = memo(
  ({
    iconQuoteDown,
    frameDivAlignSelf,
    frameDivWidth,
    frameDivJustifyContent,
    frameDivAlignSelf1,
    mrSougfvkcAlignSelf,
  }) => {
    const frameDiv80Style: CSS.Properties = useMemo(() => {
      return {
        alignSelf: frameDivAlignSelf,
        width: frameDivWidth,
      };
    }, [frameDivAlignSelf, frameDivWidth]);

    const frameDiv81Style: CSS.Properties = useMemo(() => {
      return {
        justifyContent: frameDivJustifyContent,
        alignSelf: frameDivAlignSelf1,
      };
    }, [frameDivJustifyContent, frameDivAlignSelf1]);

    const mrSougfvkcStyle: CSS.Properties = useMemo(() => {
      return {
        alignSelf: mrSougfvkcAlignSelf,
      };
    }, [mrSougfvkcAlignSelf]);

    return (
      <div className="relative w-[368px] h-[333px] text-center text-base text-gainsboro-100 font-rubik">
        <div className="absolute top-[80px] left-[0px] rounded-6xs bg-gray-700 box-border w-[368px] overflow-hidden flex flex-col p-6 items-center justify-center border-[0.3px] border-solid border-darkturquoise">
          <div
            className="flex flex-col items-center justify-start gap-[20px]"
            style={frameDiv80Style}
          >
            <div
              className="flex flex-row items-start justify-start"
              style={frameDiv81Style}
            >
              <div className="w-4 h-[76px] flex flex-col items-start justify-start">
                <img
                  className="relative w-4 h-[14.1px]"
                  alt=""
                  src="/-icon-quote-up.svg"
                />
              </div>
              <div className="relative leading-[22px] flex items-center w-72 shrink-0">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">
                    Eu tellus quam id sed ultrices. Integer nunc lectus nisi,
                    erat et ornare risus.
                  </p>
                  <p className="m-0">
                    Eu tellus quam id sed ultrices. Integer nunc lectus nisi,
                    erat et ornare risus.
                  </p>
                </span>
              </div>
              <div className="w-4 h-[76px] flex flex-col items-start justify-end">
                <img
                  className="relative w-4 h-[14.09px]"
                  alt=""
                  src={iconQuoteDown}
                />
              </div>
            </div>
            <div
              className="relative text-sm font-light text-gainsboro-200"
              style={mrSougfvkcStyle}
            >
              Mr. sougfvkc
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Property1def8;
