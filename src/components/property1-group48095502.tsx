import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";
import CustomTrueStatusIndicator1 from "./custom-true-status-indicator1";
import CustomTrueStatusIndicator from "./custom-true-status-indicator";

type Property1Group48095502Type = {
  dimensionLabel?: string;
  dimensionValue?: string;
  productDimensions?: string;
  dimensionValueList?: string;
  itemDimensions?: string;
  cryptoInfo?: string;
  dimensionValueListText?: string;
  priceLabel?: string;
  measurement?: string;
  cryptoInfoText?: string;
  numericValue?: string;
  currencyCode?: string;
  itemTotal?: string;
  valueLabel?: string;
  dimensionValueText?: string;
  availability?: string;
  carPriceCarBrandDimension?: string;
  cryptoImageUrl?: string;
  rectangleDiv?: boolean;
  showText?: boolean;
  selectorIcon?: boolean;
  textVisible?: boolean;
  selectorIcon1?: boolean;
  showRectangleDiv?: boolean;

  /** Style props */
  property1Group48095502Width?: Property.Width;
  property1Group48095502Height?: Property.Height;
  frameDivGap?: Property.Gap;
  frameDivWidth?: Property.Width;
  frameDivHeight?: Property.Height;
  button7Width?: Property.Width;
  button7Height?: Property.Height;
  button7Padding?: Property.Padding;
  button7Cursor?: Property.Cursor;
  button7Border?: Property.Border;
  frameDivGap1?: Property.Gap;
  vectorIconWidth?: Property.Width;
  vectorIconHeight?: Property.Height;
  bUYFontSize?: Property.FontSize;
  bUYDisplay?: Property.Display;
  button8Width?: Property.Width;
  button8Height?: Property.Height;
  button8Padding?: Property.Padding;
  button8Cursor?: Property.Cursor;
  button8BackgroundColor?: Property.BackgroundColor;
  frameDivGap2?: Property.Gap;
  vectorIconWidth1?: Property.Width;
  vectorIconHeight1?: Property.Height;
  sELLFontSize?: Property.FontSize;
  sELLDisplay?: Property.Display;
  frameDivWidth1?: Property.Width;
  frameDivGap3?: Property.Gap;
  frameDivWidth2?: Property.Width;
  frameDivPadding?: Property.Padding;
  frameDivGap4?: Property.Gap;
  frameDivHeight1?: Property.Height;
  tRADEFontSize?: Property.FontSize;
  rectangleDivHeight?: Property.Height;
  mARKETFontSize?: Property.FontSize;
  mARKETDisplay?: Property.Display;
  frameDivWidth3?: Property.Width;
  frameDivGap5?: Property.Gap;
  selectMenuTriggerWidth?: Property.Width;
  selectMenuTriggerHeight?: Property.Height;
  selectMenuTriggerPadding?: Property.Padding;
  selectMenuTriggerGap?: Property.Gap;
  selectMenuTriggerBorder?: Property.Border;
  selectMenuTriggerFontFamily?: Property.FontFamily;
  selectMenuTriggerFontSize?: Property.FontSize;
  textPosition?: Property.Position;
  textFontSize?: Property.FontSize;
  textLineHeight?: Property.LineHeight;
  textFontFamily?: Property.FontFamily;
  textColor?: Property.Color;
  textTextAlign?: Property.TextAlign;
  textDisplay?: Property.Display;
  textWidth?: Property.Width;
  textBorderRadius?: Property.BorderRadius;
  textBackgroundColor?: Property.BackgroundColor;
  textBoxShadow?: Property.BoxShadow;
  textHeight?: Property.Height;
  textOverflow?: Property.Overflow;
  textFlexDirection?: Property.FlexDirection;
  textPadding?: Property.Padding;
  textBoxSizing?: Property.BoxSizing;
  textAlignItems?: Property.AlignItems;
  textJustifyContent?: Property.JustifyContent;
  textGap?: Property.Gap;
  selectorIconPosition?: Property.Position;
  selectorIconWidth?: Property.Width;
  selectorIconHeight?: Property.Height;
  selectorIconOverflow?: Property.Overflow;
  selectorIconFlexShrink?: Property.FlexShrink;
  selectorIconFlex?: Property.Flex;
  selectorIconDisplay?: Property.Display;
  selectorIconFlexDirection?: Property.FlexDirection;
  selectorIconAlignItems?: Property.AlignItems;
  selectorIconJustifyContent?: Property.JustifyContent;
  selectMenuTriggerBorderRadius?: Property.BorderRadius;
  selectMenuTriggerBackgroundColor?: Property.BackgroundColor;
  selectMenuTriggerBoxShadow?: Property.BoxShadow;
  selectMenuTriggerWidth1?: Property.Width;
  selectMenuTriggerHeight1?: Property.Height;
  selectMenuTriggerOverflow?: Property.Overflow;
  selectMenuTriggerFlexShrink?: Property.FlexShrink;
  selectMenuTriggerDisplay?: Property.Display;
  selectMenuTriggerFlexDirection?: Property.FlexDirection;
  selectMenuTriggerPadding1?: Property.Padding;
  selectMenuTriggerBoxSizing?: Property.BoxSizing;
  selectMenuTriggerAlignItems?: Property.AlignItems;
  selectMenuTriggerJustifyContent?: Property.JustifyContent;
  selectMenuTriggerGap1?: Property.Gap;
  selectMenuTriggerPosition?: Property.Position;
  selectMenuTriggerFontSize1?: Property.FontSize;
  selectMenuTriggerLineHeight?: Property.LineHeight;
  selectMenuTriggerFontFamily1?: Property.FontFamily;
  selectMenuTriggerColor?: Property.Color;
  selectMenuTriggerTextAlign?: Property.TextAlign;
  leadingContentFlex?: Property.Flex;
  leadingContentDisplay?: Property.Display;
  leadingContentFlexDirection?: Property.FlexDirection;
  leadingContentAlignItems?: Property.AlignItems;
  leadingContentJustifyContent?: Property.JustifyContent;
  leadingContentPosition?: Property.Position;
  leadingContentFontSize?: Property.FontSize;
  leadingContentLineHeight?: Property.LineHeight;
  leadingContentFontFamily?: Property.FontFamily;
  leadingContentColor?: Property.Color;
  leadingContentTextAlign?: Property.TextAlign;
  textFontSize1?: Property.FontSize;
  textLineHeight1?: Property.LineHeight;
  textFontFamily1?: Property.FontFamily;
  textColor1?: Property.Color;
  textTextAlign1?: Property.TextAlign;
  textWidth1?: Property.Width;
  textHeight1?: Property.Height;
  textOverflow1?: Property.Overflow;
  textFlexShrink?: Property.FlexShrink;
  secondaryTextPosition?: Property.Position;
  secondaryTextFontSize?: Property.FontSize;
  secondaryTextLineHeight?: Property.LineHeight;
  secondaryTextFontFamily?: Property.FontFamily;
  secondaryTextColor?: Property.Color;
  secondaryTextTextAlign?: Property.TextAlign;
  secondaryTextDisplay?: Property.Display;
  secondaryTextWidth?: Property.Width;
  secondaryTextFlexDirection?: Property.FlexDirection;
  secondaryTextPadding?: Property.Padding;
  secondaryTextBoxSizing?: Property.BoxSizing;
  secondaryTextAlignItems?: Property.AlignItems;
  secondaryTextJustifyContent?: Property.JustifyContent;
  selectorIconPosition1?: Property.Position;
  selectorIconWidth1?: Property.Width;
  selectorIconHeight1?: Property.Height;
  selectorIconOverflow1?: Property.Overflow;
  selectorIconFlexShrink1?: Property.FlexShrink;
  selectorIconFlexDirection1?: Property.FlexDirection;
  selectorIconAlignItems1?: Property.AlignItems;
  selectorIconJustifyContent1?: Property.JustifyContent;
  selectorIconGap?: Property.Gap;
  frameDivWidth4?: Property.Width;
  frameDivDisplay?: Property.Display;
  frameDivFlexDirection?: Property.FlexDirection;
  frameDivPadding1?: Property.Padding;
  frameDivBoxSizing?: Property.BoxSizing;
  frameDivAlignItems?: Property.AlignItems;
  frameDivJustifyContent?: Property.JustifyContent;
  frameDivPosition?: Property.Position;
  frameDivFontSize?: Property.FontSize;
  frameDivLineHeight?: Property.LineHeight;
  frameDivFontFamily?: Property.FontFamily;
  frameDivColor?: Property.Color;
  frameDivTextAlign?: Property.TextAlign;
  frameDivWidth5?: Property.Width;
  frameDivDisplay1?: Property.Display;
  frameDivFlexDirection1?: Property.FlexDirection;
  frameDivAlignItems1?: Property.AlignItems;
  frameDivJustifyContent1?: Property.JustifyContent;
  frameDivGap6?: Property.Gap;
  frameDivPosition1?: Property.Position;
  frameDivFontSize1?: Property.FontSize;
  frameDivLineHeight1?: Property.LineHeight;
  frameDivFontWeight?: Property.FontWeight;
  frameDivFontFamily1?: Property.FontFamily;
  frameDivTextAlign1?: Property.TextAlign;
  pricePosition?: Property.Position;
  priceFontSize?: Property.FontSize;
  priceLineHeight?: Property.LineHeight;
  priceFontFamily?: Property.FontFamily;
  priceColor?: Property.Color;
  priceTextAlign?: Property.TextAlign;
  priceDisplay?: Property.Display;
  bTCPosition?: Property.Position;
  bTCFontSize?: Property.FontSize;
  bTCLineHeight?: Property.LineHeight;
  bTCFontWeight?: Property.FontWeight;
  bTCFontFamily?: Property.FontFamily;
  bTCTextAlign?: Property.TextAlign;
  bTCDisplay?: Property.Display;
  bTCColor?: Property.Color;
  spanColor?: Property.Color;
  spanWidth?: Property.Width;
  spanDisplay?: Property.Display;
  spanFlexDirection?: Property.FlexDirection;
  spanPadding?: Property.Padding;
  spanBoxSizing?: Property.BoxSizing;
  spanAlignItems?: Property.AlignItems;
  spanJustifyContent?: Property.JustifyContent;
  bTCColor1?: Property.Color;
  bTCPosition1?: Property.Position;
  bTCFontSize1?: Property.FontSize;
  bTCLineHeight1?: Property.LineHeight;
  bTCFontWeight1?: Property.FontWeight;
  bTCFontFamily1?: Property.FontFamily;
  bTCTextAlign1?: Property.TextAlign;
  frameDivWidth6?: Property.Width;
  frameDivDisplay2?: Property.Display;
  frameDivFlexDirection2?: Property.FlexDirection;
  frameDivPadding2?: Property.Padding;
  frameDivBoxSizing1?: Property.BoxSizing;
  frameDivAlignItems2?: Property.AlignItems;
  frameDivJustifyContent2?: Property.JustifyContent;
  frameDivColor1?: Property.Color;
  uSDPosition?: Property.Position;
  uSDFontSize?: Property.FontSize;
  uSDLineHeight?: Property.LineHeight;
  uSDFontWeight?: Property.FontWeight;
  uSDFontFamily?: Property.FontFamily;
  uSDTextAlign?: Property.TextAlign;
  uSDDisplay?: Property.Display;
  uSDColor?: Property.Color;
  spanColor1?: Property.Color;
  spanBorderRadius?: Property.BorderRadius;
  spanBackgroundColor?: Property.BackgroundColor;
  spanBoxShadow?: Property.BoxShadow;
  spanWidth1?: Property.Width;
  spanHeight?: Property.Height;
  spanOverflow?: Property.Overflow;
  spanFlexShrink?: Property.FlexShrink;
  spanDisplay1?: Property.Display;
  spanFlexDirection1?: Property.FlexDirection;
  spanPadding1?: Property.Padding;
  spanBoxSizing1?: Property.BoxSizing;
  spanAlignItems1?: Property.AlignItems;
  spanJustifyContent1?: Property.JustifyContent;
  spanGap?: Property.Gap;
  uSDColor1?: Property.Color;
  uSDFlex?: Property.Flex;
  uSDDisplay1?: Property.Display;
  uSDFlexDirection?: Property.FlexDirection;
  uSDAlignItems?: Property.AlignItems;
  uSDJustifyContent?: Property.JustifyContent;
  selectMenuTriggerBorderRadius1?: Property.BorderRadius;
  selectMenuTriggerBackgroundColor1?: Property.BackgroundColor;
  selectMenuTriggerBoxShadow1?: Property.BoxShadow;
  selectMenuTriggerWidth2?: Property.Width;
  selectMenuTriggerHeight2?: Property.Height;
  selectMenuTriggerOverflow1?: Property.Overflow;
  selectMenuTriggerFlexShrink1?: Property.FlexShrink;
  selectMenuTriggerDisplay1?: Property.Display;
  selectMenuTriggerFlexDirection1?: Property.FlexDirection;
  selectMenuTriggerPadding2?: Property.Padding;
  selectMenuTriggerBoxSizing1?: Property.BoxSizing;
  selectMenuTriggerAlignItems1?: Property.AlignItems;
  selectMenuTriggerJustifyContent1?: Property.JustifyContent;
  selectMenuTriggerGap2?: Property.Gap;
  selectMenuTriggerPosition1?: Property.Position;
  selectMenuTriggerFontSize2?: Property.FontSize;
  selectMenuTriggerLineHeight1?: Property.LineHeight;
  selectMenuTriggerFontFamily2?: Property.FontFamily;
  selectMenuTriggerColor1?: Property.Color;
  selectMenuTriggerTextAlign1?: Property.TextAlign;
  leadingContentFlex1?: Property.Flex;
  leadingContentDisplay1?: Property.Display;
  leadingContentFlexDirection1?: Property.FlexDirection;
  leadingContentAlignItems1?: Property.AlignItems;
  leadingContentJustifyContent1?: Property.JustifyContent;
  leadingContentPosition1?: Property.Position;
  leadingContentFontSize1?: Property.FontSize;
  leadingContentLineHeight1?: Property.LineHeight;
  leadingContentFontFamily1?: Property.FontFamily;
  leadingContentColor1?: Property.Color;
  leadingContentTextAlign1?: Property.TextAlign;
  textFontSize2?: Property.FontSize;
  textLineHeight2?: Property.LineHeight;
  textFontFamily2?: Property.FontFamily;
  textColor2?: Property.Color;
  textTextAlign2?: Property.TextAlign;
  textWidth2?: Property.Width;
  textHeight2?: Property.Height;
  textOverflow2?: Property.Overflow;
  textFlexShrink1?: Property.FlexShrink;
  secondaryTextPosition1?: Property.Position;
  secondaryTextFontSize1?: Property.FontSize;
  secondaryTextLineHeight1?: Property.LineHeight;
  secondaryTextFontFamily1?: Property.FontFamily;
  secondaryTextColor1?: Property.Color;
  secondaryTextTextAlign1?: Property.TextAlign;
  secondaryTextDisplay1?: Property.Display;
  secondaryTextWidth1?: Property.Width;
  secondaryTextFlexDirection1?: Property.FlexDirection;
  secondaryTextPadding1?: Property.Padding;
  secondaryTextBoxSizing1?: Property.BoxSizing;
  secondaryTextAlignItems1?: Property.AlignItems;
  secondaryTextJustifyContent1?: Property.JustifyContent;
  selectorIconPosition2?: Property.Position;
  selectorIconWidth2?: Property.Width;
  selectorIconHeight2?: Property.Height;
  selectorIconOverflow2?: Property.Overflow;
  selectorIconFlexShrink2?: Property.FlexShrink;
  selectorIconFlexDirection2?: Property.FlexDirection;
  selectorIconAlignItems2?: Property.AlignItems;
  selectorIconJustifyContent2?: Property.JustifyContent;
  frameDivWidth7?: Property.Width;
  frameDivDisplay3?: Property.Display;
  frameDivFlexDirection3?: Property.FlexDirection;
  frameDivPadding3?: Property.Padding;
  frameDivBoxSizing2?: Property.BoxSizing;
  frameDivAlignItems3?: Property.AlignItems;
  frameDivJustifyContent3?: Property.JustifyContent;
  frameDivPosition2?: Property.Position;
  frameDivFontSize2?: Property.FontSize;
  frameDivLineHeight2?: Property.LineHeight;
  frameDivFontFamily2?: Property.FontFamily;
  frameDivColor2?: Property.Color;
  frameDivTextAlign2?: Property.TextAlign;
  frameDivWidth8?: Property.Width;
  frameDivDisplay4?: Property.Display;
  frameDivFlexDirection4?: Property.FlexDirection;
  frameDivAlignItems4?: Property.AlignItems;
  frameDivJustifyContent4?: Property.JustifyContent;
  frameDivPosition3?: Property.Position;
  frameDivHeight2?: Property.Height;
  availablePosition?: Property.Position;
  availableFontSize?: Property.FontSize;
  availableLineHeight?: Property.LineHeight;
  availableColor?: Property.Color;
  availableTextAlign?: Property.TextAlign;
  availableDisplay?: Property.Display;
  availableTop?: Property.Top;
  availableLeft?: Property.Left;
  availableFontWeight?: Property.FontWeight;
  frameDivPosition4?: Property.Position;
  frameDivWidth9?: Property.Width;
  frameDivHeight3?: Property.Height;
  frameDivTop?: Property.Top;
  frameDivLeft?: Property.Left;
  frameDivFontSize3?: Property.FontSize;
  frameDivLineHeight3?: Property.LineHeight;
  frameDivFontWeight1?: Property.FontWeight;
  frameDivFontFamily3?: Property.FontFamily;
  frameDivColor3?: Property.Color;
  frameDivTextAlign3?: Property.TextAlign;
  divPosition?: Property.Position;
  divTop?: Property.Top;
  divLeft?: Property.Left;
  divFontSize?: Property.FontSize;
  divLineHeight?: Property.LineHeight;
  divFontWeight?: Property.FontWeight;
  divFontFamily?: Property.FontFamily;
  divColor?: Property.Color;
  divTextAlign?: Property.TextAlign;
  divDisplay?: Property.Display;
  divCursor?: Property.Cursor;
  divBorder?: Property.Border;
  divPadding?: Property.Padding;
  divBackgroundColor?: Property.BackgroundColor;
  divBorderRadius?: Property.BorderRadius;
  divWidth?: Property.Width;
  divHeight?: Property.Height;
  divFlexDirection?: Property.FlexDirection;
  divBoxSizing?: Property.BoxSizing;
  divAlignItems?: Property.AlignItems;
  divJustifyContent?: Property.JustifyContent;
  divOpacity?: Property.Opacity;
  uSDTPosition?: Property.Position;
  uSDTTop?: Property.Top;
  uSDTLeft?: Property.Left;
  uSDTFontSize?: Property.FontSize;
  uSDTLineHeight?: Property.LineHeight;
  uSDTFontWeight?: Property.FontWeight;
  uSDTFontFamily?: Property.FontFamily;
  uSDTColor?: Property.Color;
  uSDTTextAlign?: Property.TextAlign;
  uSDTDisplay?: Property.Display;
  uSDTTextTransform?: Property.TextTransform;
};

const Property1Group48095502: FunctionComponent<Property1Group48095502Type> =
  memo(
    ({
      dimensionLabel,
      dimensionValue,
      productDimensions,
      dimensionValueList,
      itemDimensions,
      cryptoInfo,
      dimensionValueListText,
      priceLabel,
      measurement,
      cryptoInfoText,
      numericValue,
      currencyCode,
      itemTotal,
      valueLabel,
      dimensionValueText,
      availability,
      carPriceCarBrandDimension,
      cryptoImageUrl,
      rectangleDiv,
      showText,
      selectorIcon,
      textVisible,
      selectorIcon1,
      property1Group48095502Width,
      property1Group48095502Height,
      frameDivGap,
      frameDivWidth,
      frameDivHeight,
      button7Width,
      button7Height,
      button7Padding,
      button7Cursor,
      button7Border,
      frameDivGap1,
      vectorIconWidth,
      vectorIconHeight,
      bUYFontSize,
      bUYDisplay,
      button8Width,
      button8Height,
      button8Padding,
      button8Cursor,
      button8BackgroundColor,
      frameDivGap2,
      vectorIconWidth1,
      vectorIconHeight1,
      sELLFontSize,
      sELLDisplay,
      frameDivWidth1,
      frameDivGap3,
      frameDivWidth2,
      frameDivPadding,
      frameDivGap4,
      frameDivHeight1,
      tRADEFontSize,
      rectangleDivHeight,
      mARKETFontSize,
      mARKETDisplay,
      frameDivWidth3,
      frameDivGap5,
      selectMenuTriggerWidth,
      selectMenuTriggerHeight,
      selectMenuTriggerPadding,
      selectMenuTriggerGap,
      selectMenuTriggerBorder,
      selectMenuTriggerFontFamily,
      selectMenuTriggerFontSize,
      textPosition,
      textFontSize,
      textLineHeight,
      textFontFamily,
      textColor,
      textTextAlign,
      textDisplay,
      textWidth,
      textBorderRadius,
      textBackgroundColor,
      textBoxShadow,
      textHeight,
      textOverflow,
      textFlexDirection,
      textPadding,
      textBoxSizing,
      textAlignItems,
      textJustifyContent,
      textGap,
      selectorIconPosition,
      selectorIconWidth,
      selectorIconHeight,
      selectorIconOverflow,
      selectorIconFlexShrink,
      selectorIconFlex,
      selectorIconDisplay,
      selectorIconFlexDirection,
      selectorIconAlignItems,
      selectorIconJustifyContent,
      selectMenuTriggerBorderRadius,
      selectMenuTriggerBackgroundColor,
      selectMenuTriggerBoxShadow,
      selectMenuTriggerWidth1,
      selectMenuTriggerHeight1,
      selectMenuTriggerOverflow,
      selectMenuTriggerFlexShrink,
      selectMenuTriggerDisplay,
      selectMenuTriggerFlexDirection,
      selectMenuTriggerPadding1,
      selectMenuTriggerBoxSizing,
      selectMenuTriggerAlignItems,
      selectMenuTriggerJustifyContent,
      selectMenuTriggerGap1,
      selectMenuTriggerPosition,
      selectMenuTriggerFontSize1,
      selectMenuTriggerLineHeight,
      selectMenuTriggerFontFamily1,
      selectMenuTriggerColor,
      selectMenuTriggerTextAlign,
      leadingContentFlex,
      leadingContentDisplay,
      leadingContentFlexDirection,
      leadingContentAlignItems,
      leadingContentJustifyContent,
      leadingContentPosition,
      leadingContentFontSize,
      leadingContentLineHeight,
      leadingContentFontFamily,
      leadingContentColor,
      leadingContentTextAlign,
      textFontSize1,
      textLineHeight1,
      textFontFamily1,
      textColor1,
      textTextAlign1,
      textWidth1,
      textHeight1,
      textOverflow1,
      textFlexShrink,
      secondaryTextPosition,
      secondaryTextFontSize,
      secondaryTextLineHeight,
      secondaryTextFontFamily,
      secondaryTextColor,
      secondaryTextTextAlign,
      secondaryTextDisplay,
      secondaryTextWidth,
      secondaryTextFlexDirection,
      secondaryTextPadding,
      secondaryTextBoxSizing,
      secondaryTextAlignItems,
      secondaryTextJustifyContent,
      selectorIconPosition1,
      selectorIconWidth1,
      selectorIconHeight1,
      selectorIconOverflow1,
      selectorIconFlexShrink1,
      selectorIconFlexDirection1,
      selectorIconAlignItems1,
      selectorIconJustifyContent1,
      selectorIconGap,
      frameDivWidth4,
      frameDivDisplay,
      frameDivFlexDirection,
      frameDivPadding1,
      frameDivBoxSizing,
      frameDivAlignItems,
      frameDivJustifyContent,
      frameDivPosition,
      frameDivFontSize,
      frameDivLineHeight,
      frameDivFontFamily,
      frameDivColor,
      frameDivTextAlign,
      frameDivWidth5,
      frameDivDisplay1,
      frameDivFlexDirection1,
      frameDivAlignItems1,
      frameDivJustifyContent1,
      frameDivGap6,
      frameDivPosition1,
      frameDivFontSize1,
      frameDivLineHeight1,
      frameDivFontWeight,
      frameDivFontFamily1,
      frameDivTextAlign1,
      pricePosition,
      priceFontSize,
      priceLineHeight,
      priceFontFamily,
      priceColor,
      priceTextAlign,
      priceDisplay,
      bTCPosition,
      bTCFontSize,
      bTCLineHeight,
      bTCFontWeight,
      bTCFontFamily,
      bTCTextAlign,
      bTCDisplay,
      bTCColor,
      spanColor,
      spanWidth,
      spanDisplay,
      spanFlexDirection,
      spanPadding,
      spanBoxSizing,
      spanAlignItems,
      spanJustifyContent,
      bTCColor1,
      bTCPosition1,
      bTCFontSize1,
      bTCLineHeight1,
      bTCFontWeight1,
      bTCFontFamily1,
      bTCTextAlign1,
      frameDivWidth6,
      frameDivDisplay2,
      frameDivFlexDirection2,
      frameDivPadding2,
      frameDivBoxSizing1,
      frameDivAlignItems2,
      frameDivJustifyContent2,
      frameDivColor1,
      uSDPosition,
      uSDFontSize,
      uSDLineHeight,
      uSDFontWeight,
      uSDFontFamily,
      uSDTextAlign,
      uSDDisplay,
      uSDColor,
      spanColor1,
      spanBorderRadius,
      spanBackgroundColor,
      spanBoxShadow,
      spanWidth1,
      spanHeight,
      spanOverflow,
      spanFlexShrink,
      spanDisplay1,
      spanFlexDirection1,
      spanPadding1,
      spanBoxSizing1,
      spanAlignItems1,
      spanJustifyContent1,
      spanGap,
      uSDColor1,
      uSDFlex,
      uSDDisplay1,
      uSDFlexDirection,
      uSDAlignItems,
      uSDJustifyContent,
      selectMenuTriggerBorderRadius1,
      selectMenuTriggerBackgroundColor1,
      selectMenuTriggerBoxShadow1,
      selectMenuTriggerWidth2,
      selectMenuTriggerHeight2,
      selectMenuTriggerOverflow1,
      selectMenuTriggerFlexShrink1,
      selectMenuTriggerDisplay1,
      selectMenuTriggerFlexDirection1,
      selectMenuTriggerPadding2,
      selectMenuTriggerBoxSizing1,
      selectMenuTriggerAlignItems1,
      selectMenuTriggerJustifyContent1,
      selectMenuTriggerGap2,
      selectMenuTriggerPosition1,
      selectMenuTriggerFontSize2,
      selectMenuTriggerLineHeight1,
      selectMenuTriggerFontFamily2,
      selectMenuTriggerColor1,
      selectMenuTriggerTextAlign1,
      leadingContentFlex1,
      leadingContentDisplay1,
      leadingContentFlexDirection1,
      leadingContentAlignItems1,
      leadingContentJustifyContent1,
      leadingContentPosition1,
      leadingContentFontSize1,
      leadingContentLineHeight1,
      leadingContentFontFamily1,
      leadingContentColor1,
      leadingContentTextAlign1,
      textFontSize2,
      textLineHeight2,
      textFontFamily2,
      textColor2,
      textTextAlign2,
      textWidth2,
      textHeight2,
      textOverflow2,
      textFlexShrink1,
      secondaryTextPosition1,
      secondaryTextFontSize1,
      secondaryTextLineHeight1,
      secondaryTextFontFamily1,
      secondaryTextColor1,
      secondaryTextTextAlign1,
      secondaryTextDisplay1,
      secondaryTextWidth1,
      secondaryTextFlexDirection1,
      secondaryTextPadding1,
      secondaryTextBoxSizing1,
      secondaryTextAlignItems1,
      secondaryTextJustifyContent1,
      selectorIconPosition2,
      selectorIconWidth2,
      selectorIconHeight2,
      selectorIconOverflow2,
      selectorIconFlexShrink2,
      selectorIconFlexDirection2,
      selectorIconAlignItems2,
      selectorIconJustifyContent2,
      frameDivWidth7,
      frameDivDisplay3,
      frameDivFlexDirection3,
      frameDivPadding3,
      frameDivBoxSizing2,
      frameDivAlignItems3,
      frameDivJustifyContent3,
      frameDivPosition2,
      frameDivFontSize2,
      frameDivLineHeight2,
      frameDivFontFamily2,
      frameDivColor2,
      frameDivTextAlign2,
      frameDivWidth8,
      frameDivDisplay4,
      frameDivFlexDirection4,
      frameDivAlignItems4,
      frameDivJustifyContent4,
      frameDivPosition3,
      frameDivHeight2,
      availablePosition,
      availableFontSize,
      availableLineHeight,
      availableColor,
      availableTextAlign,
      availableDisplay,
      availableTop,
      availableLeft,
      availableFontWeight,
      frameDivPosition4,
      frameDivWidth9,
      frameDivHeight3,
      frameDivTop,
      frameDivLeft,
      frameDivFontSize3,
      frameDivLineHeight3,
      frameDivFontWeight1,
      frameDivFontFamily3,
      frameDivColor3,
      frameDivTextAlign3,
      divPosition,
      divTop,
      divLeft,
      divFontSize,
      divLineHeight,
      divFontWeight,
      divFontFamily,
      divColor,
      divTextAlign,
      divDisplay,
      divCursor,
      divBorder,
      divPadding,
      divBackgroundColor,
      divBorderRadius,
      divWidth,
      divHeight,
      divFlexDirection,
      divBoxSizing,
      divAlignItems,
      divJustifyContent,
      divOpacity,
      uSDTPosition,
      uSDTTop,
      uSDTLeft,
      uSDTFontSize,
      uSDTLineHeight,
      uSDTFontWeight,
      uSDTFontFamily,
      uSDTColor,
      uSDTTextAlign,
      uSDTDisplay,
      uSDTTextTransform,
      showRectangleDiv,
    }) => {
      const property1Group48095502Style: CSS.Properties = useMemo(() => {
        return {
          width: property1Group48095502Width,
          height: property1Group48095502Height,
        };
      }, [property1Group48095502Width, property1Group48095502Height]);

      const frameDiv34Style: CSS.Properties = useMemo(() => {
        return {
          gap: frameDivGap,
        };
      }, [frameDivGap]);

      const frameDiv35Style: CSS.Properties = useMemo(() => {
        return {
          width: frameDivWidth,
          height: frameDivHeight,
        };
      }, [frameDivWidth, frameDivHeight]);

      const button7Style: CSS.Properties = useMemo(() => {
        return {
          width: button7Width,
          height: button7Height,
          padding: button7Padding,
          cursor: button7Cursor,
          border: button7Border,
        };
      }, [
        button7Width,
        button7Height,
        button7Padding,
        button7Cursor,
        button7Border,
      ]);

      const frameDiv36Style: CSS.Properties = useMemo(() => {
        return {
          gap: frameDivGap1,
        };
      }, [frameDivGap1]);

      const vectorIconStyle: CSS.Properties = useMemo(() => {
        return {
          width: vectorIconWidth,
          height: vectorIconHeight,
        };
      }, [vectorIconWidth, vectorIconHeight]);

      const bUYStyle: CSS.Properties = useMemo(() => {
        return {
          fontSize: bUYFontSize,
          display: bUYDisplay,
        };
      }, [bUYFontSize, bUYDisplay]);

      const button81Style: CSS.Properties = useMemo(() => {
        return {
          width: button8Width,
          height: button8Height,
          padding: button8Padding,
          cursor: button8Cursor,
          backgroundColor: button8BackgroundColor,
        };
      }, [
        button8Width,
        button8Height,
        button8Padding,
        button8Cursor,
        button8BackgroundColor,
      ]);

      const frameDiv37Style: CSS.Properties = useMemo(() => {
        return {
          gap: frameDivGap2,
        };
      }, [frameDivGap2]);

      const vectorIcon1Style: CSS.Properties = useMemo(() => {
        return {
          width: vectorIconWidth1,
          height: vectorIconHeight1,
        };
      }, [vectorIconWidth1, vectorIconHeight1]);

      const sELLStyle: CSS.Properties = useMemo(() => {
        return {
          fontSize: sELLFontSize,
          display: sELLDisplay,
        };
      }, [sELLFontSize, sELLDisplay]);

      const frameDiv38Style: CSS.Properties = useMemo(() => {
        return {
          width: frameDivWidth1,
          gap: frameDivGap3,
        };
      }, [frameDivWidth1, frameDivGap3]);

      const frameDiv39Style: CSS.Properties = useMemo(() => {
        return {
          width: frameDivWidth2,
          padding: frameDivPadding,
          gap: frameDivGap4,
        };
      }, [frameDivWidth2, frameDivPadding, frameDivGap4]);

      const frameDiv40Style: CSS.Properties = useMemo(() => {
        return {
          height: frameDivHeight1,
        };
      }, [frameDivHeight1]);

      const tRADE4Style: CSS.Properties = useMemo(() => {
        return {
          fontSize: tRADEFontSize,
        };
      }, [tRADEFontSize]);

      const rectangleDiv4Style: CSS.Properties = useMemo(() => {
        return {
          height: rectangleDivHeight,
        };
      }, [rectangleDivHeight]);

      const mARKETStyle: CSS.Properties = useMemo(() => {
        return {
          fontSize: mARKETFontSize,
          display: mARKETDisplay,
        };
      }, [mARKETFontSize, mARKETDisplay]);

      const frameDiv41Style: CSS.Properties = useMemo(() => {
        return {
          width: frameDivWidth3,
          gap: frameDivGap5,
        };
      }, [frameDivWidth3, frameDivGap5]);

      const customTrueStatusIndicator1Style: CSS.Properties = useMemo(() => {
        return {
          width: selectMenuTriggerWidth,
          height: selectMenuTriggerHeight,
          padding: selectMenuTriggerPadding,
          gap: selectMenuTriggerGap,
          border: selectMenuTriggerBorder,
          fontFamily: selectMenuTriggerFontFamily,
          fontSize: selectMenuTriggerFontSize,
        };
      }, [
        selectMenuTriggerWidth,
        selectMenuTriggerHeight,
        selectMenuTriggerPadding,
        selectMenuTriggerGap,
        selectMenuTriggerBorder,
        selectMenuTriggerFontFamily,
        selectMenuTriggerFontSize,
      ]);

      const text3Style: CSS.Properties = useMemo(() => {
        return {
          position: textPosition,
          fontSize: textFontSize,
          lineHeight: textLineHeight,
          fontFamily: textFontFamily,
          color: textColor,
          textAlign: textTextAlign,
          display: textDisplay,
          width: textWidth,
          borderRadius: textBorderRadius,
          backgroundColor: textBackgroundColor,
          boxShadow: textBoxShadow,
          height: textHeight,
          overflow: textOverflow,
          flexDirection: textFlexDirection,
          padding: textPadding,
          boxSizing: textBoxSizing,
          alignItems: textAlignItems,
          justifyContent: textJustifyContent,
          gap: textGap,
        };
      }, [
        textPosition,
        textFontSize,
        textLineHeight,
        textFontFamily,
        textColor,
        textTextAlign,
        textDisplay,
        textWidth,
        textBorderRadius,
        textBackgroundColor,
        textBoxShadow,
        textHeight,
        textOverflow,
        textFlexDirection,
        textPadding,
        textBoxSizing,
        textAlignItems,
        textJustifyContent,
        textGap,
      ]);

      const selectorIcon1Style: CSS.Properties = useMemo(() => {
        return {
          position: selectorIconPosition,
          width: selectorIconWidth,
          height: selectorIconHeight,
          overflow: selectorIconOverflow,
          flexShrink: selectorIconFlexShrink,
          flex: selectorIconFlex,
          display: selectorIconDisplay,
          flexDirection: selectorIconFlexDirection,
          alignItems: selectorIconAlignItems,
          justifyContent: selectorIconJustifyContent,
        };
      }, [
        selectorIconPosition,
        selectorIconWidth,
        selectorIconHeight,
        selectorIconOverflow,
        selectorIconFlexShrink,
        selectorIconFlex,
        selectorIconDisplay,
        selectorIconFlexDirection,
        selectorIconAlignItems,
        selectorIconJustifyContent,
      ]);

      const customTrueStatusIndicatorStyle: CSS.Properties = useMemo(() => {
        return {
          borderRadius: selectMenuTriggerBorderRadius,
          backgroundColor: selectMenuTriggerBackgroundColor,
          boxShadow: selectMenuTriggerBoxShadow,
          width: selectMenuTriggerWidth1,
          height: selectMenuTriggerHeight1,
          overflow: selectMenuTriggerOverflow,
          flexShrink: selectMenuTriggerFlexShrink,
          display: selectMenuTriggerDisplay,
          flexDirection: selectMenuTriggerFlexDirection,
          padding: selectMenuTriggerPadding1,
          boxSizing: selectMenuTriggerBoxSizing,
          alignItems: selectMenuTriggerAlignItems,
          justifyContent: selectMenuTriggerJustifyContent,
          gap: selectMenuTriggerGap1,
          position: selectMenuTriggerPosition,
          fontSize: selectMenuTriggerFontSize1,
          lineHeight: selectMenuTriggerLineHeight,
          fontFamily: selectMenuTriggerFontFamily1,
          color: selectMenuTriggerColor,
          textAlign: selectMenuTriggerTextAlign,
        };
      }, [
        selectMenuTriggerBorderRadius,
        selectMenuTriggerBackgroundColor,
        selectMenuTriggerBoxShadow,
        selectMenuTriggerWidth1,
        selectMenuTriggerHeight1,
        selectMenuTriggerOverflow,
        selectMenuTriggerFlexShrink,
        selectMenuTriggerDisplay,
        selectMenuTriggerFlexDirection,
        selectMenuTriggerPadding1,
        selectMenuTriggerBoxSizing,
        selectMenuTriggerAlignItems,
        selectMenuTriggerJustifyContent,
        selectMenuTriggerGap1,
        selectMenuTriggerPosition,
        selectMenuTriggerFontSize1,
        selectMenuTriggerLineHeight,
        selectMenuTriggerFontFamily1,
        selectMenuTriggerColor,
        selectMenuTriggerTextAlign,
      ]);

      const leadingContent1Style: CSS.Properties = useMemo(() => {
        return {
          flex: leadingContentFlex,
          display: leadingContentDisplay,
          flexDirection: leadingContentFlexDirection,
          alignItems: leadingContentAlignItems,
          justifyContent: leadingContentJustifyContent,
          position: leadingContentPosition,
          fontSize: leadingContentFontSize,
          lineHeight: leadingContentLineHeight,
          fontFamily: leadingContentFontFamily,
          color: leadingContentColor,
          textAlign: leadingContentTextAlign,
        };
      }, [
        leadingContentFlex,
        leadingContentDisplay,
        leadingContentFlexDirection,
        leadingContentAlignItems,
        leadingContentJustifyContent,
        leadingContentPosition,
        leadingContentFontSize,
        leadingContentLineHeight,
        leadingContentFontFamily,
        leadingContentColor,
        leadingContentTextAlign,
      ]);

      const text2Style: CSS.Properties = useMemo(() => {
        return {
          fontSize: textFontSize1,
          lineHeight: textLineHeight1,
          fontFamily: textFontFamily1,
          color: textColor1,
          textAlign: textTextAlign1,
          width: textWidth1,
          height: textHeight1,
          overflow: textOverflow1,
          flexShrink: textFlexShrink,
        };
      }, [
        textFontSize1,
        textLineHeight1,
        textFontFamily1,
        textColor1,
        textTextAlign1,
        textWidth1,
        textHeight1,
        textOverflow1,
        textFlexShrink,
      ]);

      const secondaryText1Style: CSS.Properties = useMemo(() => {
        return {
          position: secondaryTextPosition,
          fontSize: secondaryTextFontSize,
          lineHeight: secondaryTextLineHeight,
          fontFamily: secondaryTextFontFamily,
          color: secondaryTextColor,
          textAlign: secondaryTextTextAlign,
          display: secondaryTextDisplay,
          width: secondaryTextWidth,
          flexDirection: secondaryTextFlexDirection,
          padding: secondaryTextPadding,
          boxSizing: secondaryTextBoxSizing,
          alignItems: secondaryTextAlignItems,
          justifyContent: secondaryTextJustifyContent,
        };
      }, [
        secondaryTextPosition,
        secondaryTextFontSize,
        secondaryTextLineHeight,
        secondaryTextFontFamily,
        secondaryTextColor,
        secondaryTextTextAlign,
        secondaryTextDisplay,
        secondaryTextWidth,
        secondaryTextFlexDirection,
        secondaryTextPadding,
        secondaryTextBoxSizing,
        secondaryTextAlignItems,
        secondaryTextJustifyContent,
      ]);

      const selectorIconStyle: CSS.Properties = useMemo(() => {
        return {
          position: selectorIconPosition1,
          width: selectorIconWidth1,
          height: selectorIconHeight1,
          overflow: selectorIconOverflow1,
          flexShrink: selectorIconFlexShrink1,
          flexDirection: selectorIconFlexDirection1,
          alignItems: selectorIconAlignItems1,
          justifyContent: selectorIconJustifyContent1,
          gap: selectorIconGap,
        };
      }, [
        selectorIconPosition1,
        selectorIconWidth1,
        selectorIconHeight1,
        selectorIconOverflow1,
        selectorIconFlexShrink1,
        selectorIconFlexDirection1,
        selectorIconAlignItems1,
        selectorIconJustifyContent1,
        selectorIconGap,
      ]);

      const frameDiv42Style: CSS.Properties = useMemo(() => {
        return {
          width: frameDivWidth4,
          display: frameDivDisplay,
          flexDirection: frameDivFlexDirection,
          padding: frameDivPadding1,
          boxSizing: frameDivBoxSizing,
          alignItems: frameDivAlignItems,
          justifyContent: frameDivJustifyContent,
          position: frameDivPosition,
          fontSize: frameDivFontSize,
          lineHeight: frameDivLineHeight,
          fontFamily: frameDivFontFamily,
          color: frameDivColor,
          textAlign: frameDivTextAlign,
        };
      }, [
        frameDivWidth4,
        frameDivDisplay,
        frameDivFlexDirection,
        frameDivPadding1,
        frameDivBoxSizing,
        frameDivAlignItems,
        frameDivJustifyContent,
        frameDivPosition,
        frameDivFontSize,
        frameDivLineHeight,
        frameDivFontFamily,
        frameDivColor,
        frameDivTextAlign,
      ]);

      const frameDiv43Style: CSS.Properties = useMemo(() => {
        return {
          width: frameDivWidth5,
          display: frameDivDisplay1,
          flexDirection: frameDivFlexDirection1,
          alignItems: frameDivAlignItems1,
          justifyContent: frameDivJustifyContent1,
          gap: frameDivGap6,
          position: frameDivPosition1,
          fontSize: frameDivFontSize1,
          lineHeight: frameDivLineHeight1,
          fontWeight: frameDivFontWeight,
          fontFamily: frameDivFontFamily1,
          textAlign: frameDivTextAlign1,
        };
      }, [
        frameDivWidth5,
        frameDivDisplay1,
        frameDivFlexDirection1,
        frameDivAlignItems1,
        frameDivJustifyContent1,
        frameDivGap6,
        frameDivPosition1,
        frameDivFontSize1,
        frameDivLineHeight1,
        frameDivFontWeight,
        frameDivFontFamily1,
        frameDivTextAlign1,
      ]);

      const priceStyle: CSS.Properties = useMemo(() => {
        return {
          position: pricePosition,
          fontSize: priceFontSize,
          lineHeight: priceLineHeight,
          fontFamily: priceFontFamily,
          color: priceColor,
          textAlign: priceTextAlign,
          display: priceDisplay,
        };
      }, [
        pricePosition,
        priceFontSize,
        priceLineHeight,
        priceFontFamily,
        priceColor,
        priceTextAlign,
        priceDisplay,
      ]);

      const bTC10Style: CSS.Properties = useMemo(() => {
        return {
          position: bTCPosition,
          fontSize: bTCFontSize,
          lineHeight: bTCLineHeight,
          fontWeight: bTCFontWeight,
          fontFamily: bTCFontFamily,
          textAlign: bTCTextAlign,
          display: bTCDisplay,
          color: bTCColor,
        };
      }, [
        bTCPosition,
        bTCFontSize,
        bTCLineHeight,
        bTCFontWeight,
        bTCFontFamily,
        bTCTextAlign,
        bTCDisplay,
        bTCColor,
      ]);

      const spanStyle: CSS.Properties = useMemo(() => {
        return {
          color: spanColor,
          width: spanWidth,
          display: spanDisplay,
          flexDirection: spanFlexDirection,
          padding: spanPadding,
          boxSizing: spanBoxSizing,
          alignItems: spanAlignItems,
          justifyContent: spanJustifyContent,
        };
      }, [
        spanColor,
        spanWidth,
        spanDisplay,
        spanFlexDirection,
        spanPadding,
        spanBoxSizing,
        spanAlignItems,
        spanJustifyContent,
      ]);

      const bTC11Style: CSS.Properties = useMemo(() => {
        return {
          color: bTCColor1,
          position: bTCPosition1,
          fontSize: bTCFontSize1,
          lineHeight: bTCLineHeight1,
          fontWeight: bTCFontWeight1,
          fontFamily: bTCFontFamily1,
          textAlign: bTCTextAlign1,
        };
      }, [
        bTCColor1,
        bTCPosition1,
        bTCFontSize1,
        bTCLineHeight1,
        bTCFontWeight1,
        bTCFontFamily1,
        bTCTextAlign1,
      ]);

      const frameDiv44Style: CSS.Properties = useMemo(() => {
        return {
          width: frameDivWidth6,
          display: frameDivDisplay2,
          flexDirection: frameDivFlexDirection2,
          padding: frameDivPadding2,
          boxSizing: frameDivBoxSizing1,
          alignItems: frameDivAlignItems2,
          justifyContent: frameDivJustifyContent2,
          color: frameDivColor1,
        };
      }, [
        frameDivWidth6,
        frameDivDisplay2,
        frameDivFlexDirection2,
        frameDivPadding2,
        frameDivBoxSizing1,
        frameDivAlignItems2,
        frameDivJustifyContent2,
        frameDivColor1,
      ]);

      const uSD5Style: CSS.Properties = useMemo(() => {
        return {
          position: uSDPosition,
          fontSize: uSDFontSize,
          lineHeight: uSDLineHeight,
          fontWeight: uSDFontWeight,
          fontFamily: uSDFontFamily,
          textAlign: uSDTextAlign,
          display: uSDDisplay,
          color: uSDColor,
        };
      }, [
        uSDPosition,
        uSDFontSize,
        uSDLineHeight,
        uSDFontWeight,
        uSDFontFamily,
        uSDTextAlign,
        uSDDisplay,
        uSDColor,
      ]);

      const span1Style: CSS.Properties = useMemo(() => {
        return {
          color: spanColor1,
          borderRadius: spanBorderRadius,
          backgroundColor: spanBackgroundColor,
          boxShadow: spanBoxShadow,
          width: spanWidth1,
          height: spanHeight,
          overflow: spanOverflow,
          flexShrink: spanFlexShrink,
          display: spanDisplay1,
          flexDirection: spanFlexDirection1,
          padding: spanPadding1,
          boxSizing: spanBoxSizing1,
          alignItems: spanAlignItems1,
          justifyContent: spanJustifyContent1,
          gap: spanGap,
        };
      }, [
        spanColor1,
        spanBorderRadius,
        spanBackgroundColor,
        spanBoxShadow,
        spanWidth1,
        spanHeight,
        spanOverflow,
        spanFlexShrink,
        spanDisplay1,
        spanFlexDirection1,
        spanPadding1,
        spanBoxSizing1,
        spanAlignItems1,
        spanJustifyContent1,
        spanGap,
      ]);

      const uSD6Style: CSS.Properties = useMemo(() => {
        return {
          color: uSDColor1,
          flex: uSDFlex,
          display: uSDDisplay1,
          flexDirection: uSDFlexDirection,
          alignItems: uSDAlignItems,
          justifyContent: uSDJustifyContent,
        };
      }, [
        uSDColor1,
        uSDFlex,
        uSDDisplay1,
        uSDFlexDirection,
        uSDAlignItems,
        uSDJustifyContent,
      ]);

      const customTrueStatusIndicatorStyle1: CSS.Properties = useMemo(() => {
        return {
          borderRadius: selectMenuTriggerBorderRadius1,
          backgroundColor: selectMenuTriggerBackgroundColor1,
          boxShadow: selectMenuTriggerBoxShadow1,
          width: selectMenuTriggerWidth2,
          height: selectMenuTriggerHeight2,
          overflow: selectMenuTriggerOverflow1,
          flexShrink: selectMenuTriggerFlexShrink1,
          display: selectMenuTriggerDisplay1,
          flexDirection: selectMenuTriggerFlexDirection1,
          padding: selectMenuTriggerPadding2,
          boxSizing: selectMenuTriggerBoxSizing1,
          alignItems: selectMenuTriggerAlignItems1,
          justifyContent: selectMenuTriggerJustifyContent1,
          gap: selectMenuTriggerGap2,
          position: selectMenuTriggerPosition1,
          fontSize: selectMenuTriggerFontSize2,
          lineHeight: selectMenuTriggerLineHeight1,
          fontFamily: selectMenuTriggerFontFamily2,
          color: selectMenuTriggerColor1,
          textAlign: selectMenuTriggerTextAlign1,
        };
      }, [
        selectMenuTriggerBorderRadius1,
        selectMenuTriggerBackgroundColor1,
        selectMenuTriggerBoxShadow1,
        selectMenuTriggerWidth2,
        selectMenuTriggerHeight2,
        selectMenuTriggerOverflow1,
        selectMenuTriggerFlexShrink1,
        selectMenuTriggerDisplay1,
        selectMenuTriggerFlexDirection1,
        selectMenuTriggerPadding2,
        selectMenuTriggerBoxSizing1,
        selectMenuTriggerAlignItems1,
        selectMenuTriggerJustifyContent1,
        selectMenuTriggerGap2,
        selectMenuTriggerPosition1,
        selectMenuTriggerFontSize2,
        selectMenuTriggerLineHeight1,
        selectMenuTriggerFontFamily2,
        selectMenuTriggerColor1,
        selectMenuTriggerTextAlign1,
      ]);

      const leadingContent1Style1: CSS.Properties = useMemo(() => {
        return {
          flex: leadingContentFlex1,
          display: leadingContentDisplay1,
          flexDirection: leadingContentFlexDirection1,
          alignItems: leadingContentAlignItems1,
          justifyContent: leadingContentJustifyContent1,
          position: leadingContentPosition1,
          fontSize: leadingContentFontSize1,
          lineHeight: leadingContentLineHeight1,
          fontFamily: leadingContentFontFamily1,
          color: leadingContentColor1,
          textAlign: leadingContentTextAlign1,
        };
      }, [
        leadingContentFlex1,
        leadingContentDisplay1,
        leadingContentFlexDirection1,
        leadingContentAlignItems1,
        leadingContentJustifyContent1,
        leadingContentPosition1,
        leadingContentFontSize1,
        leadingContentLineHeight1,
        leadingContentFontFamily1,
        leadingContentColor1,
        leadingContentTextAlign1,
      ]);

      const text2Style1: CSS.Properties = useMemo(() => {
        return {
          fontSize: textFontSize2,
          lineHeight: textLineHeight2,
          fontFamily: textFontFamily2,
          color: textColor2,
          textAlign: textTextAlign2,
          width: textWidth2,
          height: textHeight2,
          overflow: textOverflow2,
          flexShrink: textFlexShrink1,
        };
      }, [
        textFontSize2,
        textLineHeight2,
        textFontFamily2,
        textColor2,
        textTextAlign2,
        textWidth2,
        textHeight2,
        textOverflow2,
        textFlexShrink1,
      ]);

      const secondaryText1Style1: CSS.Properties = useMemo(() => {
        return {
          position: secondaryTextPosition1,
          fontSize: secondaryTextFontSize1,
          lineHeight: secondaryTextLineHeight1,
          fontFamily: secondaryTextFontFamily1,
          color: secondaryTextColor1,
          textAlign: secondaryTextTextAlign1,
          display: secondaryTextDisplay1,
          width: secondaryTextWidth1,
          flexDirection: secondaryTextFlexDirection1,
          padding: secondaryTextPadding1,
          boxSizing: secondaryTextBoxSizing1,
          alignItems: secondaryTextAlignItems1,
          justifyContent: secondaryTextJustifyContent1,
        };
      }, [
        secondaryTextPosition1,
        secondaryTextFontSize1,
        secondaryTextLineHeight1,
        secondaryTextFontFamily1,
        secondaryTextColor1,
        secondaryTextTextAlign1,
        secondaryTextDisplay1,
        secondaryTextWidth1,
        secondaryTextFlexDirection1,
        secondaryTextPadding1,
        secondaryTextBoxSizing1,
        secondaryTextAlignItems1,
        secondaryTextJustifyContent1,
      ]);

      const selectorIconStyle1: CSS.Properties = useMemo(() => {
        return {
          position: selectorIconPosition2,
          width: selectorIconWidth2,
          height: selectorIconHeight2,
          overflow: selectorIconOverflow2,
          flexShrink: selectorIconFlexShrink2,
          flexDirection: selectorIconFlexDirection2,
          alignItems: selectorIconAlignItems2,
          justifyContent: selectorIconJustifyContent2,
        };
      }, [
        selectorIconPosition2,
        selectorIconWidth2,
        selectorIconHeight2,
        selectorIconOverflow2,
        selectorIconFlexShrink2,
        selectorIconFlexDirection2,
        selectorIconAlignItems2,
        selectorIconJustifyContent2,
      ]);

      const frameDiv45Style: CSS.Properties = useMemo(() => {
        return {
          width: frameDivWidth7,
          display: frameDivDisplay3,
          flexDirection: frameDivFlexDirection3,
          padding: frameDivPadding3,
          boxSizing: frameDivBoxSizing2,
          alignItems: frameDivAlignItems3,
          justifyContent: frameDivJustifyContent3,
          position: frameDivPosition2,
          fontSize: frameDivFontSize2,
          lineHeight: frameDivLineHeight2,
          fontFamily: frameDivFontFamily2,
          color: frameDivColor2,
          textAlign: frameDivTextAlign2,
        };
      }, [
        frameDivWidth7,
        frameDivDisplay3,
        frameDivFlexDirection3,
        frameDivPadding3,
        frameDivBoxSizing2,
        frameDivAlignItems3,
        frameDivJustifyContent3,
        frameDivPosition2,
        frameDivFontSize2,
        frameDivLineHeight2,
        frameDivFontFamily2,
        frameDivColor2,
        frameDivTextAlign2,
      ]);

      const frameDiv46Style: CSS.Properties = useMemo(() => {
        return {
          width: frameDivWidth8,
          display: frameDivDisplay4,
          flexDirection: frameDivFlexDirection4,
          alignItems: frameDivAlignItems4,
          justifyContent: frameDivJustifyContent4,
          position: frameDivPosition3,
          height: frameDivHeight2,
        };
      }, [
        frameDivWidth8,
        frameDivDisplay4,
        frameDivFlexDirection4,
        frameDivAlignItems4,
        frameDivJustifyContent4,
        frameDivPosition3,
        frameDivHeight2,
      ]);

      const availableStyle: CSS.Properties = useMemo(() => {
        return {
          position: availablePosition,
          fontSize: availableFontSize,
          lineHeight: availableLineHeight,
          color: availableColor,
          textAlign: availableTextAlign,
          display: availableDisplay,
          top: availableTop,
          left: availableLeft,
          fontWeight: availableFontWeight,
        };
      }, [
        availablePosition,
        availableFontSize,
        availableLineHeight,
        availableColor,
        availableTextAlign,
        availableDisplay,
        availableTop,
        availableLeft,
        availableFontWeight,
      ]);

      const frameDiv47Style: CSS.Properties = useMemo(() => {
        return {
          position: frameDivPosition4,
          width: frameDivWidth9,
          height: frameDivHeight3,
          top: frameDivTop,
          left: frameDivLeft,
          fontSize: frameDivFontSize3,
          lineHeight: frameDivLineHeight3,
          fontWeight: frameDivFontWeight1,
          fontFamily: frameDivFontFamily3,
          color: frameDivColor3,
          textAlign: frameDivTextAlign3,
        };
      }, [
        frameDivPosition4,
        frameDivWidth9,
        frameDivHeight3,
        frameDivTop,
        frameDivLeft,
        frameDivFontSize3,
        frameDivLineHeight3,
        frameDivFontWeight1,
        frameDivFontFamily3,
        frameDivColor3,
        frameDivTextAlign3,
      ]);

      const div30Style: CSS.Properties = useMemo(() => {
        return {
          position: divPosition,
          top: divTop,
          left: divLeft,
          fontSize: divFontSize,
          lineHeight: divLineHeight,
          fontWeight: divFontWeight,
          fontFamily: divFontFamily,
          color: divColor,
          textAlign: divTextAlign,
          display: divDisplay,
          cursor: divCursor,
          border: divBorder,
          padding: divPadding,
          backgroundColor: divBackgroundColor,
          borderRadius: divBorderRadius,
          width: divWidth,
          height: divHeight,
          flexDirection: divFlexDirection,
          boxSizing: divBoxSizing,
          alignItems: divAlignItems,
          justifyContent: divJustifyContent,
          opacity: divOpacity,
        };
      }, [
        divPosition,
        divTop,
        divLeft,
        divFontSize,
        divLineHeight,
        divFontWeight,
        divFontFamily,
        divColor,
        divTextAlign,
        divDisplay,
        divCursor,
        divBorder,
        divPadding,
        divBackgroundColor,
        divBorderRadius,
        divWidth,
        divHeight,
        divFlexDirection,
        divBoxSizing,
        divAlignItems,
        divJustifyContent,
        divOpacity,
      ]);

      const uSDTStyle: CSS.Properties = useMemo(() => {
        return {
          position: uSDTPosition,
          top: uSDTTop,
          left: uSDTLeft,
          fontSize: uSDTFontSize,
          lineHeight: uSDTLineHeight,
          fontWeight: uSDTFontWeight,
          fontFamily: uSDTFontFamily,
          color: uSDTColor,
          textAlign: uSDTTextAlign,
          display: uSDTDisplay,
          textTransform: uSDTTextTransform,
        };
      }, [
        uSDTPosition,
        uSDTTop,
        uSDTLeft,
        uSDTFontSize,
        uSDTLineHeight,
        uSDTFontWeight,
        uSDTFontFamily,
        uSDTColor,
        uSDTTextAlign,
        uSDTDisplay,
        uSDTTextTransform,
      ]);

      return (
        <div
          className="relative w-80 h-[266px] text-left text-base text-white font-bai-jamjuree"
          style={property1Group48095502Style}
        >
          <div
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-smi rounded-b-none bg-gray-700 flex flex-col items-center justify-center gap-[8px]"
            style={frameDiv34Style}
          >
            <div
              className="rounded-t-smi rounded-b-none shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] w-80 h-[30px] flex flex-row items-start justify-between"
              style={frameDiv35Style}
            >
              <div
                className="rounded-tl-4xs rounded-tr-none rounded-b-none bg-midnightblue-100 w-40 h-[30px] flex flex-row py-2 px-1 box-border items-center justify-center"
                style={button7Style}
              >
                <div
                  className="flex flex-row items-center justify-center gap-[16px]"
                  style={frameDiv36Style}
                >
                  <img
                    className="relative w-[10.62px] h-[13.14px]"
                    alt=""
                    src={dimensionLabel}
                    style={vectorIconStyle}
                  />
                  <div
                    className="relative capitalize font-semibold"
                    style={bUYStyle}
                  >
                    bUY
                  </div>
                </div>
              </div>
              <div
                className="rounded-tl-none rounded-tr-4xs rounded-b-none box-border w-40 h-[30px] flex flex-row py-[18px] pr-1 pl-0 items-center justify-center border-[0.3px] border-solid border-white"
                style={button81Style}
              >
                <div
                  className="flex flex-row items-center justify-center gap-[10px]"
                  style={frameDiv37Style}
                >
                  <img
                    className="relative w-[10.62px] h-[13.14px]"
                    alt=""
                    src={dimensionValue}
                    style={vectorIcon1Style}
                  />
                  <div
                    className="relative capitalize font-semibold"
                    style={sELLStyle}
                  >
                    SELL
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-80 flex flex-col items-center justify-start gap-[9px] text-xs text-royalblue"
              style={frameDiv38Style}
            >
              <div
                className="w-80 flex flex-row py-0 px-2 box-border items-start justify-start gap-[20px]"
                style={frameDiv39Style}
              >
                <div
                  className="h-5 flex flex-col items-center justify-start"
                  style={frameDiv40Style}
                >
                  <div
                    className="relative uppercase font-semibold"
                    style={tRADE4Style}
                  >
                    limit
                  </div>
                  {!rectangleDiv && (
                    <div
                      className="self-stretch relative rounded-10xs bg-lightskyblue h-0.5 hidden"
                      style={rectangleDiv4Style}
                    />
                  )}
                </div>
                <div
                  className="relative font-light text-white"
                  style={mARKETStyle}
                >
                  MARKET
                </div>
              </div>
              <div
                className="w-[308px] flex flex-col items-start justify-start gap-[8px] text-right text-white font-text-base-leading-6-font-normal"
                style={frameDiv41Style}
              >
                <CustomTrueStatusIndicator1
                  text="Limit Price"
                  selector="/selector3.svg"
                  customTrueStatusIndicatorPosition="unset"
                  customTrueStatusIndicatorBackgroundColor="rgba(0, 15, 55, 0.4)"
                  customTrueStatusIndicatorBorder="unset"
                  customTrueStatusIndicatorWidth="308px"
                  customTrueStatusIndicatorPadding="9px 13px"
                  customTrueStatusIndicatorGap="4px"
                  customTrueStatusIndicatorFontFamily="unset"
                  customTrueStatusIndicatorFontSize="unset"
                  customTrueStatusIndicatorHeight="32px"
                  customTrueStatusIndicatorFlexShrink="0"
                  textFlex="unset"
                  textFontSize="12px"
                  textFontFamily="'Work Sans'"
                  textColor="#767e9c"
                  textWidth="262px"
                  textFlexShrink="0"
                />
                <CustomTrueStatusIndicator
                  username="Amount"
                  userDisplayName="BTC"
                  itemCode="/selector1.svg"
                  showSelectorIcon={false}
                  customTrueStatusIndicatorPosition="unset"
                  customTrueStatusIndicatorBackgroundColor="rgba(0, 15, 55, 0.4)"
                  customTrueStatusIndicatorBorder="unset"
                  customTrueStatusIndicatorWidth="308px"
                  customTrueStatusIndicatorPadding="9px 13px"
                  customTrueStatusIndicatorGap="4px"
                  customTrueStatusIndicatorHeight="32px"
                  customTrueStatusIndicatorFlexShrink="0"
                  leadingContentJustifyContent="space-between"
                  leadingContentGap="unset"
                  textFontSize="12px"
                  textLineHeight="24px"
                  textFontFamily="'Work Sans'"
                  textColor="#767e9c"
                  textDisplay="inline-block"
                  secondaryTextFontSize="12px"
                  secondaryTextLineHeight="24px"
                  secondaryTextFontFamily="'Work Sans'"
                  secondaryTextColor="#76809d"
                  secondaryTextDisplay="inline-block"
                  selectorIconWidth="20px"
                  selectorIconHeight="20px"
                />
                <div
                  className="w-[308px] flex flex-row py-0 pr-0 pl-8 box-border items-start justify-end"
                  style={frameDiv42Style}
                >
                  <div
                    className="w-[168px] flex flex-row items-start justify-end gap-[8px]"
                    style={frameDiv43Style}
                  >
                    <div
                      className="relative leading-[16px] text-slategray text-left"
                      style={priceStyle}
                    >
                      {priceLabel}
                    </div>
                    <div
                      className="relative leading-[16px] font-medium"
                      style={bTC10Style}
                    >
                      <span style={spanStyle}>{measurement}</span>
                      <span className="text-slategray" style={bTC11Style}>
                        {cryptoInfoText}
                      </span>
                    </div>
                    <div
                      className="w-[75px] flex flex-row py-0 px-0.5 box-border items-start justify-between"
                      style={frameDiv44Style}
                    >
                      <div
                        className="relative leading-[16px] font-medium"
                        style={uSD5Style}
                      >
                        <span style={span1Style}>{numericValue}</span>
                        <span className="text-slategray" style={uSD6Style}>
                          {currencyCode}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <CustomTrueStatusIndicator
                  username="Total"
                  userDisplayName="USD"
                  itemCode="/selector1.svg"
                  showSelectorIcon={false}
                  customTrueStatusIndicatorPosition="unset"
                  customTrueStatusIndicatorBackgroundColor="rgba(0, 15, 55, 0.4)"
                  customTrueStatusIndicatorBorder="unset"
                  customTrueStatusIndicatorWidth="308px"
                  customTrueStatusIndicatorPadding="9px 13px"
                  customTrueStatusIndicatorGap="4px"
                  customTrueStatusIndicatorHeight="32px"
                  customTrueStatusIndicatorFlexShrink="0"
                  leadingContentJustifyContent="space-between"
                  leadingContentGap="unset"
                  textFontSize="12px"
                  textLineHeight="24px"
                  textFontFamily="'Work Sans'"
                  textColor="#767e9c"
                  textDisplay="inline-block"
                  secondaryTextFontSize="12px"
                  secondaryTextLineHeight="24px"
                  secondaryTextFontFamily="'Work Sans'"
                  secondaryTextColor="#76809d"
                  secondaryTextDisplay="inline-block"
                  selectorIconWidth="20px"
                  selectorIconHeight="20px"
                />
                <div
                  className="w-[308px] flex flex-col py-0 pr-0 pl-8 box-border items-end justify-start text-left text-slategray"
                  style={frameDiv45Style}
                >
                  <div
                    className="w-[147px] flex flex-row items-start justify-between"
                    style={frameDiv46Style}
                  >
                    <div
                      className="relative leading-[16px]"
                      style={availableStyle}
                    >
                      {availability}
                    </div>
                    <div
                      className="relative w-[75px] h-[15px] text-right text-white"
                      style={frameDiv47Style}
                    >
                      <div
                        className="absolute top-[0px] left-[2px] leading-[16px] font-medium"
                        style={div30Style}
                      >
                        {carPriceCarBrandDimension}
                      </div>
                      <div
                        className="absolute top-[0px] left-[42px] leading-[16px] font-medium text-slategray"
                        style={uSDTStyle}
                      >
                        {cryptoImageUrl}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-4xs bg-darkturquoise w-[200px] h-[30px] flex flex-col py-[18px] px-4 box-border items-center justify-center text-base text-gray-400">
                <b className="relative capitalize">Buy 0.45 BTC</b>
              </div>
            </div>
          </div>
        </div>
      );
    }
  );

export default Property1Group48095502;
