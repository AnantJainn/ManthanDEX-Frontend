import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type CustomTrueStatusIndicatorType = {
  username?: string;
  userDisplayName?: string;
  itemCode?: string;
  showSelectorIcon?: boolean;

  /** Style props */
  customTrueStatusIndicatorPosition?: Property.Position;
  customTrueStatusIndicatorBackgroundColor?: Property.BackgroundColor;
  customTrueStatusIndicatorBorder?: Property.Border;
  customTrueStatusIndicatorWidth?: Property.Width;
  customTrueStatusIndicatorPadding?: Property.Padding;
  customTrueStatusIndicatorGap?: Property.Gap;
  customTrueStatusIndicatorHeight?: Property.Height;
  customTrueStatusIndicatorFlexShrink?: Property.FlexShrink;
  leadingContentJustifyContent?: Property.JustifyContent;
  leadingContentGap?: Property.Gap;
  textFontSize?: Property.FontSize;
  textLineHeight?: Property.LineHeight;
  textFontFamily?: Property.FontFamily;
  textColor?: Property.Color;
  textDisplay?: Property.Display;
  secondaryTextFontSize?: Property.FontSize;
  secondaryTextLineHeight?: Property.LineHeight;
  secondaryTextFontFamily?: Property.FontFamily;
  secondaryTextColor?: Property.Color;
  secondaryTextDisplay?: Property.Display;
  selectorIconWidth?: Property.Width;
  selectorIconHeight?: Property.Height;
};

const CustomTrueStatusIndicator: FunctionComponent<CustomTrueStatusIndicatorType> =
  memo(
    ({
      username,
      userDisplayName,
      itemCode,
      showSelectorIcon,
      customTrueStatusIndicatorPosition,
      customTrueStatusIndicatorBackgroundColor,
      customTrueStatusIndicatorBorder,
      customTrueStatusIndicatorWidth,
      customTrueStatusIndicatorPadding,
      customTrueStatusIndicatorGap,
      customTrueStatusIndicatorHeight,
      customTrueStatusIndicatorFlexShrink,
      leadingContentJustifyContent,
      leadingContentGap,
      textFontSize,
      textLineHeight,
      textFontFamily,
      textColor,
      textDisplay,
      secondaryTextFontSize,
      secondaryTextLineHeight,
      secondaryTextFontFamily,
      secondaryTextColor,
      secondaryTextDisplay,
      selectorIconWidth,
      selectorIconHeight,
    }) => {
      const customTrueStatusIndicatorStyle: CSS.Properties = useMemo(() => {
        return {
          position: customTrueStatusIndicatorPosition,
          backgroundColor: customTrueStatusIndicatorBackgroundColor,
          border: customTrueStatusIndicatorBorder,
          width: customTrueStatusIndicatorWidth,
          padding: customTrueStatusIndicatorPadding,
          gap: customTrueStatusIndicatorGap,
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
        customTrueStatusIndicatorHeight,
        customTrueStatusIndicatorFlexShrink,
      ]);

      const leadingContent1Style: CSS.Properties = useMemo(() => {
        return {
          justifyContent: leadingContentJustifyContent,
          gap: leadingContentGap,
        };
      }, [leadingContentJustifyContent, leadingContentGap]);

      const text2Style: CSS.Properties = useMemo(() => {
        return {
          fontSize: textFontSize,
          lineHeight: textLineHeight,
          fontFamily: textFontFamily,
          color: textColor,
          display: textDisplay,
        };
      }, [
        textFontSize,
        textLineHeight,
        textFontFamily,
        textColor,
        textDisplay,
      ]);

      const secondaryText1Style: CSS.Properties = useMemo(() => {
        return {
          fontSize: secondaryTextFontSize,
          lineHeight: secondaryTextLineHeight,
          fontFamily: secondaryTextFontFamily,
          color: secondaryTextColor,
          display: secondaryTextDisplay,
        };
      }, [
        secondaryTextFontSize,
        secondaryTextLineHeight,
        secondaryTextFontFamily,
        secondaryTextColor,
        secondaryTextDisplay,
      ]);

      const selectorIconStyle: CSS.Properties = useMemo(() => {
        return {
          width: selectorIconWidth,
          height: selectorIconHeight,
        };
      }, [selectorIconWidth, selectorIconHeight]);

      return (
        <div
          className="relative rounded-md bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] box-border w-[312px] overflow-hidden flex flex-row py-[9px] px-[13px] items-center justify-start gap-[4px] text-left text-base text-gray-900 font-text-base-leading-6-font-normal border-[1px] border-solid border-gray-300"
          style={customTrueStatusIndicatorStyle}
        >
          <div
            className="flex-1 flex flex-row items-center justify-start gap-[8px]"
            style={leadingContent1Style}
          >
            <div className="relative leading-[24px]" style={text2Style}>
              {username}
            </div>
            <div
              className="relative leading-[24px] text-gray-500"
              style={secondaryText1Style}
            >
              {userDisplayName}
            </div>
          </div>
          {showSelectorIcon && (
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src={itemCode}
              style={selectorIconStyle}
            />
          )}
        </div>
      );
    }
  );

export default CustomTrueStatusIndicator;
