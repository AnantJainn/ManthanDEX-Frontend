import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type CustomTrueStatusIndicator1Type = {
  text?: string;
  selector?: string;

  /** Style props */
  customTrueStatusIndicatorPosition?: Property.Position;
  customTrueStatusIndicatorBackgroundColor?: Property.BackgroundColor;
  customTrueStatusIndicatorBorder?: Property.Border;
  customTrueStatusIndicatorWidth?: Property.Width;
  customTrueStatusIndicatorPadding?: Property.Padding;
  customTrueStatusIndicatorGap?: Property.Gap;
  customTrueStatusIndicatorFontFamily?: Property.FontFamily;
  customTrueStatusIndicatorFontSize?: Property.FontSize;
  customTrueStatusIndicatorHeight?: Property.Height;
  customTrueStatusIndicatorFlexShrink?: Property.FlexShrink;
  textFlex?: Property.Flex;
  textFontSize?: Property.FontSize;
  textFontFamily?: Property.FontFamily;
  textColor?: Property.Color;
  textWidth?: Property.Width;
  textFlexShrink?: Property.FlexShrink;
};

const CustomTrueStatusIndicator1: FunctionComponent<CustomTrueStatusIndicator1Type> =
  memo(
    ({
      text,
      selector,
      customTrueStatusIndicatorPosition,
      customTrueStatusIndicatorBackgroundColor,
      customTrueStatusIndicatorBorder,
      customTrueStatusIndicatorWidth,
      customTrueStatusIndicatorPadding,
      customTrueStatusIndicatorGap,
      customTrueStatusIndicatorFontFamily,
      customTrueStatusIndicatorFontSize,
      customTrueStatusIndicatorHeight,
      customTrueStatusIndicatorFlexShrink,
      textFlex,
      textFontSize,
      textFontFamily,
      textColor,
      textWidth,
      textFlexShrink,
    }) => {
      const customTrueStatusIndicator1Style: CSS.Properties = useMemo(() => {
        return {
          position: customTrueStatusIndicatorPosition,
          backgroundColor: customTrueStatusIndicatorBackgroundColor,
          border: customTrueStatusIndicatorBorder,
          width: customTrueStatusIndicatorWidth,
          padding: customTrueStatusIndicatorPadding,
          gap: customTrueStatusIndicatorGap,
          fontFamily: customTrueStatusIndicatorFontFamily,
          fontSize: customTrueStatusIndicatorFontSize,
          height: customTrueStatusIndicatorHeight,
          flexShrink: customTrueStatusIndicatorFlexShrink,
        };
      }, [
        customTrueStatusIndicatorPosition,
        customTrueStatusIndicatorBackgroundColor,
        customTrueStatusIndicatorBorder,
        customTrueStatusIndicatorWidth,
        customTrueStatusIndicatorPadding,
        customTrueStatusIndicatorGap,
        customTrueStatusIndicatorFontFamily,
        customTrueStatusIndicatorFontSize,
        customTrueStatusIndicatorHeight,
        customTrueStatusIndicatorFlexShrink,
      ]);

      const text3Style: CSS.Properties = useMemo(() => {
        return {
          flex: textFlex,
          fontSize: textFontSize,
          fontFamily: textFontFamily,
          color: textColor,
          width: textWidth,
          flexShrink: textFlexShrink,
        };
      }, [
        textFlex,
        textFontSize,
        textFontFamily,
        textColor,
        textWidth,
        textFlexShrink,
      ]);

      return (
        <div
          className="relative rounded-md bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] box-border w-[312px] overflow-hidden flex flex-row py-[9px] px-[13px] items-center justify-start gap-[4px] text-left text-base text-gray-900 font-text-base-leading-6-font-normal border-[1px] border-solid border-gray-300"
          style={customTrueStatusIndicator1Style}
        >
          <div className="flex-1 relative leading-[24px]" style={text3Style}>
            {text}
          </div>
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0"
            alt=""
            src={selector}
          />
        </div>
      );
    }
  );

export default CustomTrueStatusIndicator1;
