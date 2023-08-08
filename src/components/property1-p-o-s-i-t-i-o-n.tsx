import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type Property1POSITIONType = {
  iconsCryptoBitcoin?: string;
  iconsCryptoBitcoin1?: string;
  iconsCryptoBitcoin2?: string;
  iconsCryptoBitcoin3?: string;
  iconsCryptoBitcoin4?: string;
  rectangleDiv?: boolean;
  showRectangleDiv?: boolean;
  showRectangleDiv1?: boolean;

  /** Style props */
  property1POSITIONWidth?: Property.Width;
  property1POSITIONHeight?: Property.Height;
  button15Height?: Property.Height;
  button15Padding?: Property.Padding;
  button15Cursor?: Property.Cursor;
  button15Border?: Property.Border;
  tRADEFontSize?: Property.FontSize;
  tRADEDisplay?: Property.Display;
  rectangleDivHeight?: Property.Height;
  button15Width?: Property.Width;
  button15Height1?: Property.Height;
  button15Padding1?: Property.Padding;
  button15Cursor1?: Property.Cursor;
  button15BackgroundColor?: Property.BackgroundColor;
  oRDERSFontSize?: Property.FontSize;
  oRDERSDisplay?: Property.Display;
  button16Width?: Property.Width;
  button16Height?: Property.Height;
  button16Padding?: Property.Padding;
  button16Cursor?: Property.Cursor;
  button16BackgroundColor?: Property.BackgroundColor;
  hISTORYFontSize?: Property.FontSize;
  hISTORYDisplay?: Property.Display;
  frameDivGap?: Property.Gap;
  frameDivWidth?: Property.Width;
  frameDivHeight?: Property.Height;
  marketFontSize?: Property.FontSize;
  marketWidth?: Property.Width;
  qtyFontSize?: Property.FontSize;
  qtyWidth?: Property.Width;
  valueFontSize?: Property.FontSize;
  valueWidth?: Property.Width;
  sideFontSize?: Property.FontSize;
  sideWidth?: Property.Width;
  unrealisedPLFontSize?: Property.FontSize;
  unrealisedPLWidth?: Property.Width;
  realisedPLFontSize?: Property.FontSize;
  realisedPLWidth?: Property.Width;
  closeOrderFontSize?: Property.FontSize;
  closeOrderWidth?: Property.Width;
  frameDivWidth1?: Property.Width;
  frameDivGap1?: Property.Gap;
  frameDivWidth2?: Property.Width;
  frameDivPadding?: Property.Padding;
  frameDivWidth3?: Property.Width;
  frameDivGap2?: Property.Gap;
  iconsCryptoBitcoinWidth?: Property.Width;
  iconsCryptoBitcoinHeight?: Property.Height;
  bTCFontSize?: Property.FontSize;
  bTCFontSize1?: Property.FontSize;
  bTCLineHeight?: Property.LineHeight;
  bTCWidth?: Property.Width;
  bTCHeight?: Property.Height;
  uSDFontSize?: Property.FontSize;
  uSDLineHeight?: Property.LineHeight;
  uSDWidth?: Property.Width;
  uSDHeight?: Property.Height;
  longFontSize?: Property.FontSize;
  longLineHeight?: Property.LineHeight;
  longWidth?: Property.Width;
  longHeight?: Property.Height;
  xyzFontSize?: Property.FontSize;
  xyzWidth?: Property.Width;
  xyzFontSize1?: Property.FontSize;
  xyzWidth1?: Property.Width;
  frameDivWidth4?: Property.Width;
  frameDivHeight1?: Property.Height;
  button9Top?: Property.Top;
  button9Height?: Property.Height;
  button9Padding?: Property.Padding;
  button9Cursor?: Property.Cursor;
  button9BackgroundColor?: Property.BackgroundColor;
  closeFontSize?: Property.FontSize;
  closeDisplay?: Property.Display;
  frameDivWidth5?: Property.Width;
  frameDivPadding1?: Property.Padding;
  frameDivWidth6?: Property.Width;
  frameDivGap3?: Property.Gap;
  iconsCryptoBitcoinWidth1?: Property.Width;
  iconsCryptoBitcoinHeight1?: Property.Height;
  bTCFontSize2?: Property.FontSize;
  bTCFontSize3?: Property.FontSize;
  bTCLineHeight1?: Property.LineHeight;
  bTCWidth1?: Property.Width;
  bTCHeight1?: Property.Height;
  uSDFontSize1?: Property.FontSize;
  uSDLineHeight1?: Property.LineHeight;
  uSDWidth1?: Property.Width;
  uSDHeight1?: Property.Height;
  longFontSize1?: Property.FontSize;
  longLineHeight1?: Property.LineHeight;
  longWidth1?: Property.Width;
  longHeight1?: Property.Height;
  xyzFontSize2?: Property.FontSize;
  xyzWidth2?: Property.Width;
  xyzFontSize3?: Property.FontSize;
  xyzWidth3?: Property.Width;
  frameDivWidth7?: Property.Width;
  frameDivHeight2?: Property.Height;
  button9Top1?: Property.Top;
  button9Height1?: Property.Height;
  button9Padding1?: Property.Padding;
  button9Cursor1?: Property.Cursor;
  button9BackgroundColor1?: Property.BackgroundColor;
  closeFontSize1?: Property.FontSize;
  closeDisplay1?: Property.Display;
  frameDivWidth8?: Property.Width;
  frameDivPadding2?: Property.Padding;
  frameDivWidth9?: Property.Width;
  frameDivGap4?: Property.Gap;
  iconsCryptoBitcoinWidth2?: Property.Width;
  iconsCryptoBitcoinHeight2?: Property.Height;
  bTCFontSize4?: Property.FontSize;
  bTCFontSize5?: Property.FontSize;
  bTCLineHeight2?: Property.LineHeight;
  bTCWidth2?: Property.Width;
  bTCHeight2?: Property.Height;
  uSDFontSize2?: Property.FontSize;
  uSDLineHeight2?: Property.LineHeight;
  uSDWidth2?: Property.Width;
  uSDHeight2?: Property.Height;
  shortFontSize?: Property.FontSize;
  shortLineHeight?: Property.LineHeight;
  shortWidth?: Property.Width;
  shortHeight?: Property.Height;
  xyzFontSize4?: Property.FontSize;
  xyzWidth4?: Property.Width;
  xyzFontSize5?: Property.FontSize;
  xyzWidth5?: Property.Width;
  frameDivWidth10?: Property.Width;
  frameDivHeight3?: Property.Height;
  button9Top2?: Property.Top;
  button9Height2?: Property.Height;
  button9Padding2?: Property.Padding;
  button9Cursor2?: Property.Cursor;
  button9BackgroundColor2?: Property.BackgroundColor;
  closeFontSize2?: Property.FontSize;
  closeDisplay2?: Property.Display;
  frameDivWidth11?: Property.Width;
  frameDivPadding3?: Property.Padding;
  frameDivWidth12?: Property.Width;
  frameDivGap5?: Property.Gap;
  iconsCryptoBitcoinWidth3?: Property.Width;
  iconsCryptoBitcoinHeight3?: Property.Height;
  bTCFontSize6?: Property.FontSize;
  bTCFontSize7?: Property.FontSize;
  bTCLineHeight3?: Property.LineHeight;
  bTCWidth3?: Property.Width;
  bTCHeight3?: Property.Height;
  uSDFontSize3?: Property.FontSize;
  uSDLineHeight3?: Property.LineHeight;
  uSDWidth3?: Property.Width;
  uSDHeight3?: Property.Height;
  longFontSize2?: Property.FontSize;
  longLineHeight2?: Property.LineHeight;
  longWidth2?: Property.Width;
  longHeight2?: Property.Height;
  xyzFontSize6?: Property.FontSize;
  xyzWidth6?: Property.Width;
  xyzFontSize7?: Property.FontSize;
  xyzWidth7?: Property.Width;
  frameDivWidth13?: Property.Width;
  frameDivHeight4?: Property.Height;
  button9Top3?: Property.Top;
  button9Height3?: Property.Height;
  button9Padding3?: Property.Padding;
  button9Cursor3?: Property.Cursor;
  button9BackgroundColor3?: Property.BackgroundColor;
  closeFontSize3?: Property.FontSize;
  closeDisplay3?: Property.Display;
  frameDivWidth14?: Property.Width;
  frameDivPadding4?: Property.Padding;
  frameDivWidth15?: Property.Width;
  frameDivGap6?: Property.Gap;
  iconsCryptoBitcoinWidth4?: Property.Width;
  iconsCryptoBitcoinHeight4?: Property.Height;
  bTCFontSize8?: Property.FontSize;
  bTCFontSize9?: Property.FontSize;
  bTCLineHeight4?: Property.LineHeight;
  bTCWidth4?: Property.Width;
  bTCHeight4?: Property.Height;
  uSDFontSize4?: Property.FontSize;
  uSDLineHeight4?: Property.LineHeight;
  uSDWidth4?: Property.Width;
  uSDHeight4?: Property.Height;
  longFontSize3?: Property.FontSize;
  longLineHeight3?: Property.LineHeight;
  longWidth3?: Property.Width;
  longHeight3?: Property.Height;
  xyzFontSize8?: Property.FontSize;
  xyzWidth8?: Property.Width;
  xyzFontSize9?: Property.FontSize;
  xyzWidth9?: Property.Width;
  frameDivWidth16?: Property.Width;
  frameDivHeight5?: Property.Height;
  button9Top4?: Property.Top;
  button9Height4?: Property.Height;
  button9Padding4?: Property.Padding;
  button9Cursor4?: Property.Cursor;
  button9BackgroundColor4?: Property.BackgroundColor;
  closeFontSize4?: Property.FontSize;
  closeDisplay4?: Property.Display;
};

const Property1POSITION: FunctionComponent<Property1POSITIONType> = memo(
  ({
    iconsCryptoBitcoin,
    iconsCryptoBitcoin1,
    iconsCryptoBitcoin2,
    iconsCryptoBitcoin3,
    iconsCryptoBitcoin4,
    rectangleDiv,
    property1POSITIONWidth,
    property1POSITIONHeight,
    button15Height,
    button15Padding,
    button15Cursor,
    button15Border,
    tRADEFontSize,
    tRADEDisplay,
    rectangleDivHeight,
    button15Width,
    button15Height1,
    button15Padding1,
    button15Cursor1,
    button15BackgroundColor,
    oRDERSFontSize,
    oRDERSDisplay,
    button16Width,
    button16Height,
    button16Padding,
    button16Cursor,
    button16BackgroundColor,
    hISTORYFontSize,
    hISTORYDisplay,
    frameDivGap,
    frameDivWidth,
    frameDivHeight,
    marketFontSize,
    marketWidth,
    qtyFontSize,
    qtyWidth,
    valueFontSize,
    valueWidth,
    sideFontSize,
    sideWidth,
    unrealisedPLFontSize,
    unrealisedPLWidth,
    realisedPLFontSize,
    realisedPLWidth,
    closeOrderFontSize,
    closeOrderWidth,
    frameDivWidth1,
    frameDivGap1,
    frameDivWidth2,
    frameDivPadding,
    frameDivWidth3,
    frameDivGap2,
    iconsCryptoBitcoinWidth,
    iconsCryptoBitcoinHeight,
    bTCFontSize,
    bTCFontSize1,
    bTCLineHeight,
    bTCWidth,
    bTCHeight,
    uSDFontSize,
    uSDLineHeight,
    uSDWidth,
    uSDHeight,
    longFontSize,
    longLineHeight,
    longWidth,
    longHeight,
    xyzFontSize,
    xyzWidth,
    xyzFontSize1,
    xyzWidth1,
    frameDivWidth4,
    frameDivHeight1,
    button9Top,
    button9Height,
    button9Padding,
    button9Cursor,
    button9BackgroundColor,
    closeFontSize,
    closeDisplay,
    frameDivWidth5,
    frameDivPadding1,
    frameDivWidth6,
    frameDivGap3,
    iconsCryptoBitcoinWidth1,
    iconsCryptoBitcoinHeight1,
    bTCFontSize2,
    bTCFontSize3,
    bTCLineHeight1,
    bTCWidth1,
    bTCHeight1,
    uSDFontSize1,
    uSDLineHeight1,
    uSDWidth1,
    uSDHeight1,
    longFontSize1,
    longLineHeight1,
    longWidth1,
    longHeight1,
    xyzFontSize2,
    xyzWidth2,
    xyzFontSize3,
    xyzWidth3,
    frameDivWidth7,
    frameDivHeight2,
    button9Top1,
    button9Height1,
    button9Padding1,
    button9Cursor1,
    button9BackgroundColor1,
    closeFontSize1,
    closeDisplay1,
    frameDivWidth8,
    frameDivPadding2,
    frameDivWidth9,
    frameDivGap4,
    iconsCryptoBitcoinWidth2,
    iconsCryptoBitcoinHeight2,
    bTCFontSize4,
    bTCFontSize5,
    bTCLineHeight2,
    bTCWidth2,
    bTCHeight2,
    uSDFontSize2,
    uSDLineHeight2,
    uSDWidth2,
    uSDHeight2,
    shortFontSize,
    shortLineHeight,
    shortWidth,
    shortHeight,
    xyzFontSize4,
    xyzWidth4,
    xyzFontSize5,
    xyzWidth5,
    frameDivWidth10,
    frameDivHeight3,
    button9Top2,
    button9Height2,
    button9Padding2,
    button9Cursor2,
    button9BackgroundColor2,
    closeFontSize2,
    closeDisplay2,
    frameDivWidth11,
    frameDivPadding3,
    frameDivWidth12,
    frameDivGap5,
    iconsCryptoBitcoinWidth3,
    iconsCryptoBitcoinHeight3,
    bTCFontSize6,
    bTCFontSize7,
    bTCLineHeight3,
    bTCWidth3,
    bTCHeight3,
    uSDFontSize3,
    uSDLineHeight3,
    uSDWidth3,
    uSDHeight3,
    longFontSize2,
    longLineHeight2,
    longWidth2,
    longHeight2,
    xyzFontSize6,
    xyzWidth6,
    xyzFontSize7,
    xyzWidth7,
    frameDivWidth13,
    frameDivHeight4,
    button9Top3,
    button9Height3,
    button9Padding3,
    button9Cursor3,
    button9BackgroundColor3,
    closeFontSize3,
    closeDisplay3,
    frameDivWidth14,
    frameDivPadding4,
    frameDivWidth15,
    frameDivGap6,
    iconsCryptoBitcoinWidth4,
    iconsCryptoBitcoinHeight4,
    bTCFontSize8,
    bTCFontSize9,
    bTCLineHeight4,
    bTCWidth4,
    bTCHeight4,
    uSDFontSize4,
    uSDLineHeight4,
    uSDWidth4,
    uSDHeight4,
    longFontSize3,
    longLineHeight3,
    longWidth3,
    longHeight3,
    xyzFontSize8,
    xyzWidth8,
    xyzFontSize9,
    xyzWidth9,
    frameDivWidth16,
    frameDivHeight5,
    button9Top4,
    button9Height4,
    button9Padding4,
    button9Cursor4,
    button9BackgroundColor4,
    closeFontSize4,
    closeDisplay4,
    showRectangleDiv,
    showRectangleDiv1,
  }) => {
    const property1POSITIONStyle: CSS.Properties = useMemo(() => {
      return {
        width: property1POSITIONWidth,
        height: property1POSITIONHeight,
      };
    }, [property1POSITIONWidth, property1POSITIONHeight]);

    const button15Style: CSS.Properties = useMemo(() => {
      return {
        height: button15Height,
        padding: button15Padding,
        cursor: button15Cursor,
        border: button15Border,
      };
    }, [button15Height, button15Padding, button15Cursor, button15Border]);

    const tRADE2Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: tRADEFontSize,
        display: tRADEDisplay,
      };
    }, [tRADEFontSize, tRADEDisplay]);

    const rectangleDiv2Style: CSS.Properties = useMemo(() => {
      return {
        height: rectangleDivHeight,
      };
    }, [rectangleDivHeight]);

    const button151Style: CSS.Properties = useMemo(() => {
      return {
        width: button15Width,
        height: button15Height1,
        padding: button15Padding1,
        cursor: button15Cursor1,
        backgroundColor: button15BackgroundColor,
      };
    }, [
      button15Width,
      button15Height1,
      button15Padding1,
      button15Cursor1,
      button15BackgroundColor,
    ]);

    const oRDERS1Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: oRDERSFontSize,
        display: oRDERSDisplay,
      };
    }, [oRDERSFontSize, oRDERSDisplay]);

    const button16Style: CSS.Properties = useMemo(() => {
      return {
        width: button16Width,
        height: button16Height,
        padding: button16Padding,
        cursor: button16Cursor,
        backgroundColor: button16BackgroundColor,
      };
    }, [
      button16Width,
      button16Height,
      button16Padding,
      button16Cursor,
      button16BackgroundColor,
    ]);

    const hISTORY1Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: hISTORYFontSize,
        display: hISTORYDisplay,
      };
    }, [hISTORYFontSize, hISTORYDisplay]);

    const frameDiv1Style: CSS.Properties = useMemo(() => {
      return {
        gap: frameDivGap,
      };
    }, [frameDivGap]);

    const frameDiv2Style: CSS.Properties = useMemo(() => {
      return {
        width: frameDivWidth,
        height: frameDivHeight,
      };
    }, [frameDivWidth, frameDivHeight]);

    const marketStyle: CSS.Properties = useMemo(() => {
      return {
        fontSize: marketFontSize,
        width: marketWidth,
      };
    }, [marketFontSize, marketWidth]);

    const qtyStyle: CSS.Properties = useMemo(() => {
      return {
        fontSize: qtyFontSize,
        width: qtyWidth,
      };
    }, [qtyFontSize, qtyWidth]);

    const valueStyle: CSS.Properties = useMemo(() => {
      return {
        fontSize: valueFontSize,
        width: valueWidth,
      };
    }, [valueFontSize, valueWidth]);

    const sideStyle: CSS.Properties = useMemo(() => {
      return {
        fontSize: sideFontSize,
        width: sideWidth,
      };
    }, [sideFontSize, sideWidth]);

    const unrealisedPLStyle: CSS.Properties = useMemo(() => {
      return {
        fontSize: unrealisedPLFontSize,
        width: unrealisedPLWidth,
      };
    }, [unrealisedPLFontSize, unrealisedPLWidth]);

    const realisedPLStyle: CSS.Properties = useMemo(() => {
      return {
        fontSize: realisedPLFontSize,
        width: realisedPLWidth,
      };
    }, [realisedPLFontSize, realisedPLWidth]);

    const closeOrderStyle: CSS.Properties = useMemo(() => {
      return {
        fontSize: closeOrderFontSize,
        width: closeOrderWidth,
      };
    }, [closeOrderFontSize, closeOrderWidth]);

    const frameDiv3Style: CSS.Properties = useMemo(() => {
      return {
        width: frameDivWidth1,
        gap: frameDivGap1,
      };
    }, [frameDivWidth1, frameDivGap1]);

    const frameDiv4Style: CSS.Properties = useMemo(() => {
      return {
        width: frameDivWidth2,
        padding: frameDivPadding,
      };
    }, [frameDivWidth2, frameDivPadding]);

    const frameDiv5Style: CSS.Properties = useMemo(() => {
      return {
        width: frameDivWidth3,
        gap: frameDivGap2,
      };
    }, [frameDivWidth3, frameDivGap2]);

    const iconsCryptoBitcoinStyle: CSS.Properties = useMemo(() => {
      return {
        width: iconsCryptoBitcoinWidth,
        height: iconsCryptoBitcoinHeight,
      };
    }, [iconsCryptoBitcoinWidth, iconsCryptoBitcoinHeight]);

    const bTCStyle: CSS.Properties = useMemo(() => {
      return {
        fontSize: bTCFontSize,
      };
    }, [bTCFontSize]);

    const bTC1Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: bTCFontSize1,
        lineHeight: bTCLineHeight,
        width: bTCWidth,
        height: bTCHeight,
      };
    }, [bTCFontSize1, bTCLineHeight, bTCWidth, bTCHeight]);

    const uSDStyle: CSS.Properties = useMemo(() => {
      return {
        fontSize: uSDFontSize,
        lineHeight: uSDLineHeight,
        width: uSDWidth,
        height: uSDHeight,
      };
    }, [uSDFontSize, uSDLineHeight, uSDWidth, uSDHeight]);

    const longStyle: CSS.Properties = useMemo(() => {
      return {
        fontSize: longFontSize,
        lineHeight: longLineHeight,
        width: longWidth,
        height: longHeight,
      };
    }, [longFontSize, longLineHeight, longWidth, longHeight]);

    const xyzStyle: CSS.Properties = useMemo(() => {
      return {
        fontSize: xyzFontSize,
        width: xyzWidth,
      };
    }, [xyzFontSize, xyzWidth]);

    const xyz1Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: xyzFontSize1,
        width: xyzWidth1,
      };
    }, [xyzFontSize1, xyzWidth1]);

    const frameDiv6Style: CSS.Properties = useMemo(() => {
      return {
        width: frameDivWidth4,
        height: frameDivHeight1,
      };
    }, [frameDivWidth4, frameDivHeight1]);

    const button9Style: CSS.Properties = useMemo(() => {
      return {
        top: button9Top,
        height: button9Height,
        padding: button9Padding,
        cursor: button9Cursor,
        backgroundColor: button9BackgroundColor,
      };
    }, [
      button9Top,
      button9Height,
      button9Padding,
      button9Cursor,
      button9BackgroundColor,
    ]);

    const closeStyle: CSS.Properties = useMemo(() => {
      return {
        fontSize: closeFontSize,
        display: closeDisplay,
      };
    }, [closeFontSize, closeDisplay]);

    const frameDiv7Style: CSS.Properties = useMemo(() => {
      return {
        width: frameDivWidth5,
        padding: frameDivPadding1,
      };
    }, [frameDivWidth5, frameDivPadding1]);

    const frameDiv8Style: CSS.Properties = useMemo(() => {
      return {
        width: frameDivWidth6,
        gap: frameDivGap3,
      };
    }, [frameDivWidth6, frameDivGap3]);

    const iconsCryptoBitcoin1Style: CSS.Properties = useMemo(() => {
      return {
        width: iconsCryptoBitcoinWidth1,
        height: iconsCryptoBitcoinHeight1,
      };
    }, [iconsCryptoBitcoinWidth1, iconsCryptoBitcoinHeight1]);

    const bTC2Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: bTCFontSize2,
      };
    }, [bTCFontSize2]);

    const bTC3Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: bTCFontSize3,
        lineHeight: bTCLineHeight1,
        width: bTCWidth1,
        height: bTCHeight1,
      };
    }, [bTCFontSize3, bTCLineHeight1, bTCWidth1, bTCHeight1]);

    const uSD1Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: uSDFontSize1,
        lineHeight: uSDLineHeight1,
        width: uSDWidth1,
        height: uSDHeight1,
      };
    }, [uSDFontSize1, uSDLineHeight1, uSDWidth1, uSDHeight1]);

    const long1Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: longFontSize1,
        lineHeight: longLineHeight1,
        width: longWidth1,
        height: longHeight1,
      };
    }, [longFontSize1, longLineHeight1, longWidth1, longHeight1]);

    const xyz2Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: xyzFontSize2,
        width: xyzWidth2,
      };
    }, [xyzFontSize2, xyzWidth2]);

    const xyz3Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: xyzFontSize3,
        width: xyzWidth3,
      };
    }, [xyzFontSize3, xyzWidth3]);

    const frameDiv9Style: CSS.Properties = useMemo(() => {
      return {
        width: frameDivWidth7,
        height: frameDivHeight2,
      };
    }, [frameDivWidth7, frameDivHeight2]);

    const button91Style: CSS.Properties = useMemo(() => {
      return {
        top: button9Top1,
        height: button9Height1,
        padding: button9Padding1,
        cursor: button9Cursor1,
        backgroundColor: button9BackgroundColor1,
      };
    }, [
      button9Top1,
      button9Height1,
      button9Padding1,
      button9Cursor1,
      button9BackgroundColor1,
    ]);

    const close1Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: closeFontSize1,
        display: closeDisplay1,
      };
    }, [closeFontSize1, closeDisplay1]);

    const frameDiv10Style: CSS.Properties = useMemo(() => {
      return {
        width: frameDivWidth8,
        padding: frameDivPadding2,
      };
    }, [frameDivWidth8, frameDivPadding2]);

    const frameDiv11Style: CSS.Properties = useMemo(() => {
      return {
        width: frameDivWidth9,
        gap: frameDivGap4,
      };
    }, [frameDivWidth9, frameDivGap4]);

    const iconsCryptoBitcoin2Style: CSS.Properties = useMemo(() => {
      return {
        width: iconsCryptoBitcoinWidth2,
        height: iconsCryptoBitcoinHeight2,
      };
    }, [iconsCryptoBitcoinWidth2, iconsCryptoBitcoinHeight2]);

    const bTC4Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: bTCFontSize4,
      };
    }, [bTCFontSize4]);

    const bTC5Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: bTCFontSize5,
        lineHeight: bTCLineHeight2,
        width: bTCWidth2,
        height: bTCHeight2,
      };
    }, [bTCFontSize5, bTCLineHeight2, bTCWidth2, bTCHeight2]);

    const uSD2Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: uSDFontSize2,
        lineHeight: uSDLineHeight2,
        width: uSDWidth2,
        height: uSDHeight2,
      };
    }, [uSDFontSize2, uSDLineHeight2, uSDWidth2, uSDHeight2]);

    const shortStyle: CSS.Properties = useMemo(() => {
      return {
        fontSize: shortFontSize,
        lineHeight: shortLineHeight,
        width: shortWidth,
        height: shortHeight,
      };
    }, [shortFontSize, shortLineHeight, shortWidth, shortHeight]);

    const xyz4Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: xyzFontSize4,
        width: xyzWidth4,
      };
    }, [xyzFontSize4, xyzWidth4]);

    const xyz5Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: xyzFontSize5,
        width: xyzWidth5,
      };
    }, [xyzFontSize5, xyzWidth5]);

    const frameDiv12Style: CSS.Properties = useMemo(() => {
      return {
        width: frameDivWidth10,
        height: frameDivHeight3,
      };
    }, [frameDivWidth10, frameDivHeight3]);

    const button92Style: CSS.Properties = useMemo(() => {
      return {
        top: button9Top2,
        height: button9Height2,
        padding: button9Padding2,
        cursor: button9Cursor2,
        backgroundColor: button9BackgroundColor2,
      };
    }, [
      button9Top2,
      button9Height2,
      button9Padding2,
      button9Cursor2,
      button9BackgroundColor2,
    ]);

    const close2Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: closeFontSize2,
        display: closeDisplay2,
      };
    }, [closeFontSize2, closeDisplay2]);

    const frameDiv13Style: CSS.Properties = useMemo(() => {
      return {
        width: frameDivWidth11,
        padding: frameDivPadding3,
      };
    }, [frameDivWidth11, frameDivPadding3]);

    const frameDiv14Style: CSS.Properties = useMemo(() => {
      return {
        width: frameDivWidth12,
        gap: frameDivGap5,
      };
    }, [frameDivWidth12, frameDivGap5]);

    const iconsCryptoBitcoin3Style: CSS.Properties = useMemo(() => {
      return {
        width: iconsCryptoBitcoinWidth3,
        height: iconsCryptoBitcoinHeight3,
      };
    }, [iconsCryptoBitcoinWidth3, iconsCryptoBitcoinHeight3]);

    const bTC6Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: bTCFontSize6,
      };
    }, [bTCFontSize6]);

    const bTC7Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: bTCFontSize7,
        lineHeight: bTCLineHeight3,
        width: bTCWidth3,
        height: bTCHeight3,
      };
    }, [bTCFontSize7, bTCLineHeight3, bTCWidth3, bTCHeight3]);

    const uSD3Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: uSDFontSize3,
        lineHeight: uSDLineHeight3,
        width: uSDWidth3,
        height: uSDHeight3,
      };
    }, [uSDFontSize3, uSDLineHeight3, uSDWidth3, uSDHeight3]);

    const long2Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: longFontSize2,
        lineHeight: longLineHeight2,
        width: longWidth2,
        height: longHeight2,
      };
    }, [longFontSize2, longLineHeight2, longWidth2, longHeight2]);

    const xyz6Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: xyzFontSize6,
        width: xyzWidth6,
      };
    }, [xyzFontSize6, xyzWidth6]);

    const xyz7Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: xyzFontSize7,
        width: xyzWidth7,
      };
    }, [xyzFontSize7, xyzWidth7]);

    const frameDiv15Style: CSS.Properties = useMemo(() => {
      return {
        width: frameDivWidth13,
        height: frameDivHeight4,
      };
    }, [frameDivWidth13, frameDivHeight4]);

    const button93Style: CSS.Properties = useMemo(() => {
      return {
        top: button9Top3,
        height: button9Height3,
        padding: button9Padding3,
        cursor: button9Cursor3,
        backgroundColor: button9BackgroundColor3,
      };
    }, [
      button9Top3,
      button9Height3,
      button9Padding3,
      button9Cursor3,
      button9BackgroundColor3,
    ]);

    const close3Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: closeFontSize3,
        display: closeDisplay3,
      };
    }, [closeFontSize3, closeDisplay3]);

    const frameDiv16Style: CSS.Properties = useMemo(() => {
      return {
        width: frameDivWidth14,
        padding: frameDivPadding4,
      };
    }, [frameDivWidth14, frameDivPadding4]);

    const frameDiv17Style: CSS.Properties = useMemo(() => {
      return {
        width: frameDivWidth15,
        gap: frameDivGap6,
      };
    }, [frameDivWidth15, frameDivGap6]);

    const iconsCryptoBitcoin4Style: CSS.Properties = useMemo(() => {
      return {
        width: iconsCryptoBitcoinWidth4,
        height: iconsCryptoBitcoinHeight4,
      };
    }, [iconsCryptoBitcoinWidth4, iconsCryptoBitcoinHeight4]);

    const bTC8Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: bTCFontSize8,
      };
    }, [bTCFontSize8]);

    const bTC9Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: bTCFontSize9,
        lineHeight: bTCLineHeight4,
        width: bTCWidth4,
        height: bTCHeight4,
      };
    }, [bTCFontSize9, bTCLineHeight4, bTCWidth4, bTCHeight4]);

    const uSD4Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: uSDFontSize4,
        lineHeight: uSDLineHeight4,
        width: uSDWidth4,
        height: uSDHeight4,
      };
    }, [uSDFontSize4, uSDLineHeight4, uSDWidth4, uSDHeight4]);

    const long3Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: longFontSize3,
        lineHeight: longLineHeight3,
        width: longWidth3,
        height: longHeight3,
      };
    }, [longFontSize3, longLineHeight3, longWidth3, longHeight3]);

    const xyz8Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: xyzFontSize8,
        width: xyzWidth8,
      };
    }, [xyzFontSize8, xyzWidth8]);

    const xyz9Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: xyzFontSize9,
        width: xyzWidth9,
      };
    }, [xyzFontSize9, xyzWidth9]);

    const frameDiv18Style: CSS.Properties = useMemo(() => {
      return {
        width: frameDivWidth16,
        height: frameDivHeight5,
      };
    }, [frameDivWidth16, frameDivHeight5]);

    const button94Style: CSS.Properties = useMemo(() => {
      return {
        top: button9Top4,
        height: button9Height4,
        padding: button9Padding4,
        cursor: button9Cursor4,
        backgroundColor: button9BackgroundColor4,
      };
    }, [
      button9Top4,
      button9Height4,
      button9Padding4,
      button9Cursor4,
      button9BackgroundColor4,
    ]);

    const close4Style: CSS.Properties = useMemo(() => {
      return {
        fontSize: closeFontSize4,
        display: closeDisplay4,
      };
    }, [closeFontSize4, closeDisplay4]);

    return (
      <div
        className="relative w-[1100px] h-[236px] text-left text-xs text-white font-bai-jamjuree"
        style={property1POSITIONStyle}
      >
        <div className="absolute h-[12.71%] w-[34%] top-[0%] right-[66%] bottom-[87.29%] left-[0%] rounded-t-smi rounded-b-none shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start">
          <div
            className="rounded-tl-4xs rounded-tr-none rounded-b-none bg-midnightblue-100 h-[30px] flex flex-row py-2 px-6 box-border items-center justify-center"
            style={button15Style}
          >
            <div className="flex flex-col items-center justify-start">
              <div
                className="relative uppercase font-semibold"
                style={tRADE2Style}
              >
                POSITION
              </div>
              {!rectangleDiv && (
                <div
                  className="self-stretch relative rounded-10xs bg-lightskyblue h-0.5 hidden"
                  style={rectangleDiv2Style}
                />
              )}
            </div>
          </div>
          <div
            className="box-border w-[95px] h-[30px] flex flex-row py-2 px-6 items-center justify-center border-[0.3px] border-solid border-white"
            style={button151Style}
          >
            <div className="relative" style={oRDERS1Style}>
              ORDERS
            </div>
          </div>
          <div
            className="rounded-tl-none rounded-tr-4xs rounded-b-none box-border w-[97px] h-[30px] flex flex-row py-2 px-6 items-center justify-center border-[0.3px] border-solid border-white"
            style={button16Style}
          >
            <div className="relative" style={hISTORY1Style}>
              HISTORY
            </div>
          </div>
        </div>
        <div className="absolute h-[87.29%] w-full top-[12.71%] right-[0%] bottom-[0%] left-[0%] text-center">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-tl-none rounded-tr-4xs rounded-b-4xs bg-gray-600 [backdrop-filter:blur(50px)]" />
          <div
            className="absolute w-full top-[calc(50%_-_95px)] right-[0%] left-[0%] flex flex-col items-start justify-start gap-[16px]"
            style={frameDiv1Style}
          >
            <div
              className="w-[999px] h-5 flex flex-row items-center justify-between"
              style={frameDiv2Style}
            >
              <div
                className="relative tracking-[0.5px] inline-block w-[120px] shrink-0"
                style={marketStyle}
              >
                Market
              </div>
              <div
                className="relative tracking-[0.5px] inline-block w-20 shrink-0"
                style={qtyStyle}
              >
                Qty.
              </div>
              <div
                className="relative tracking-[0.5px] inline-block w-20 shrink-0"
                style={valueStyle}
              >
                Value
              </div>
              <div
                className="relative tracking-[0.5px] inline-block w-20 shrink-0"
                style={sideStyle}
              >
                Side
              </div>
              <div
                className="relative tracking-[0.5px] inline-block w-20 shrink-0"
                style={unrealisedPLStyle}
              >{`Unrealised P&L`}</div>
              <div
                className="relative tracking-[0.5px] inline-block w-20 shrink-0"
                style={realisedPLStyle}
              >{`Realised P&L`}</div>
              <div
                className="relative tracking-[0.5px] inline-block w-20 shrink-0"
                style={closeOrderStyle}
              >
                Close Order
              </div>
            </div>
            <div
              className="w-[999px] flex flex-col items-start justify-start gap-[12px] font-work-sans"
              style={frameDiv3Style}
            >
              <div
                className="w-[999px] flex flex-row py-0 px-2 box-border items-start justify-between"
                style={frameDiv4Style}
              >
                <div
                  className="w-[120px] flex flex-row items-center justify-center gap-[7px] text-left font-bai-jamjuree"
                  style={frameDiv5Style}
                >
                  <img
                    className="relative w-4 h-4"
                    alt=""
                    src={iconsCryptoBitcoin}
                    style={iconsCryptoBitcoinStyle}
                  />
                  <div className="relative" style={bTCStyle}>
                    BTC / USD
                  </div>
                </div>
                <div
                  className="relative leading-[24px] text-mediumaquamarine flex items-center w-20 h-4 shrink-0"
                  style={bTC1Style}
                >
                  <span className="[line-break:anywhere] w-full">
                    <span className="font-medium">0.12</span>
                    <span className="font-semibold">{` `}</span>
                    <span className="font-light">BTC</span>
                    <span className="font-semibold">{` `}</span>
                  </span>
                </div>
                <div
                  className="relative leading-[16px] flex items-center w-20 h-4 shrink-0 mix-blend-normal"
                  style={uSDStyle}
                >
                  <span className="[line-break:anywhere] w-full">
                    <span className="font-medium">350</span>
                    <span className="font-light"> USD</span>
                  </span>
                </div>
                <div
                  className="relative leading-[16px] font-medium flex items-center justify-center w-20 h-4 shrink-0 mix-blend-normal"
                  style={longStyle}
                >
                  Long
                </div>
                <div
                  className="relative tracking-[0.5px] text-gainsboro-200 inline-block w-20 shrink-0"
                  style={xyzStyle}
                >
                  xyz
                </div>
                <div
                  className="relative tracking-[0.5px] text-gainsboro-200 inline-block w-20 shrink-0"
                  style={xyz1Style}
                >
                  xyz
                </div>
                <div
                  className="relative w-20 h-4 text-left font-bai-jamjuree"
                  style={frameDiv6Style}
                >
                  <div
                    className="absolute top-[-1px] left-[calc(50%_-_24px)] rounded-11xl box-border h-4 flex flex-col py-[18px] px-2 items-center justify-center border-[0.3px] border-solid border-white"
                    style={button9Style}
                  >
                    <div
                      className="relative capitalize font-medium"
                      style={closeStyle}
                    >
                      Close
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-[999px] flex flex-row py-0 px-2 box-border items-start justify-between"
                style={frameDiv7Style}
              >
                <div
                  className="w-[120px] flex flex-row items-center justify-center gap-[7px] text-left font-bai-jamjuree"
                  style={frameDiv8Style}
                >
                  <img
                    className="relative w-4 h-4"
                    alt=""
                    src={iconsCryptoBitcoin1}
                    style={iconsCryptoBitcoin1Style}
                  />
                  <div className="relative" style={bTC2Style}>
                    BTC / USD
                  </div>
                </div>
                <div
                  className="relative leading-[24px] text-mediumaquamarine flex items-center w-20 h-4 shrink-0"
                  style={bTC3Style}
                >
                  <span className="[line-break:anywhere] w-full">
                    <span className="font-medium">0.12</span>
                    <span className="font-semibold">{` `}</span>
                    <span className="font-light">BTC</span>
                    <span className="font-semibold">{` `}</span>
                  </span>
                </div>
                <div
                  className="relative leading-[16px] flex items-center w-20 h-4 shrink-0 mix-blend-normal"
                  style={uSD1Style}
                >
                  <span className="[line-break:anywhere] w-full">
                    <span className="font-medium">350</span>
                    <span className="font-light"> USD</span>
                  </span>
                </div>
                <div
                  className="relative leading-[16px] font-medium flex items-center justify-center w-20 h-4 shrink-0 mix-blend-normal"
                  style={long1Style}
                >
                  Long
                </div>
                <div
                  className="relative tracking-[0.5px] text-gainsboro-200 inline-block w-20 shrink-0"
                  style={xyz2Style}
                >
                  xyz
                </div>
                <div
                  className="relative tracking-[0.5px] text-gainsboro-200 inline-block w-20 shrink-0"
                  style={xyz3Style}
                >
                  xyz
                </div>
                <div
                  className="relative w-20 h-4 text-left font-bai-jamjuree"
                  style={frameDiv9Style}
                >
                  <div
                    className="absolute top-[-1px] left-[calc(50%_-_24px)] rounded-11xl box-border h-4 flex flex-col py-[18px] px-2 items-center justify-center border-[0.3px] border-solid border-white"
                    style={button91Style}
                  >
                    <div
                      className="relative capitalize font-medium"
                      style={close1Style}
                    >
                      Close
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-[999px] flex flex-row py-0 px-2 box-border items-start justify-between"
                style={frameDiv10Style}
              >
                <div
                  className="w-[120px] flex flex-row items-center justify-center gap-[7px] text-left font-bai-jamjuree"
                  style={frameDiv11Style}
                >
                  <img
                    className="relative w-4 h-4"
                    alt=""
                    src={iconsCryptoBitcoin2}
                    style={iconsCryptoBitcoin2Style}
                  />
                  <div className="relative" style={bTC4Style}>
                    BTC / USD
                  </div>
                </div>
                <div
                  className="relative leading-[24px] text-mediumaquamarine flex items-center w-20 h-4 shrink-0"
                  style={bTC5Style}
                >
                  <span className="[line-break:anywhere] w-full">
                    <span className="font-medium">0.12</span>
                    <span className="font-semibold">{` `}</span>
                    <span className="font-light">BTC</span>
                    <span className="font-semibold">{` `}</span>
                  </span>
                </div>
                <div
                  className="relative leading-[16px] flex items-center w-20 h-4 shrink-0 mix-blend-normal"
                  style={uSD2Style}
                >
                  <span className="[line-break:anywhere] w-full">
                    <span className="font-medium">350</span>
                    <span className="font-light"> USD</span>
                  </span>
                </div>
                <div
                  className="relative leading-[16px] font-medium flex items-center justify-center w-20 h-4 shrink-0 mix-blend-normal"
                  style={shortStyle}
                >
                  Short
                </div>
                <div
                  className="relative tracking-[0.5px] text-gainsboro-200 inline-block w-20 shrink-0"
                  style={xyz4Style}
                >
                  xyz
                </div>
                <div
                  className="relative tracking-[0.5px] text-gainsboro-200 inline-block w-20 shrink-0"
                  style={xyz5Style}
                >
                  xyz
                </div>
                <div
                  className="relative w-20 h-4 text-left font-bai-jamjuree"
                  style={frameDiv12Style}
                >
                  <div
                    className="absolute top-[-1px] left-[calc(50%_-_24px)] rounded-11xl box-border h-4 flex flex-col py-[18px] px-2 items-center justify-center border-[0.3px] border-solid border-white"
                    style={button92Style}
                  >
                    <div
                      className="relative capitalize font-medium"
                      style={close2Style}
                    >
                      Close
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-[999px] flex flex-row py-0 px-2 box-border items-start justify-between"
                style={frameDiv13Style}
              >
                <div
                  className="w-[120px] flex flex-row items-center justify-center gap-[7px] text-left font-bai-jamjuree"
                  style={frameDiv14Style}
                >
                  <img
                    className="relative w-4 h-4"
                    alt=""
                    src={iconsCryptoBitcoin3}
                    style={iconsCryptoBitcoin3Style}
                  />
                  <div className="relative" style={bTC6Style}>
                    BTC / USD
                  </div>
                </div>
                <div
                  className="relative leading-[24px] text-mediumaquamarine flex items-center w-20 h-4 shrink-0"
                  style={bTC7Style}
                >
                  <span className="[line-break:anywhere] w-full">
                    <span className="font-medium">0.12</span>
                    <span className="font-semibold">{` `}</span>
                    <span className="font-light">BTC</span>
                    <span className="font-semibold">{` `}</span>
                  </span>
                </div>
                <div
                  className="relative leading-[16px] flex items-center w-20 h-4 shrink-0 mix-blend-normal"
                  style={uSD3Style}
                >
                  <span className="[line-break:anywhere] w-full">
                    <span className="font-medium">350</span>
                    <span className="font-light"> USD</span>
                  </span>
                </div>
                <div
                  className="relative leading-[16px] font-medium flex items-center justify-center w-20 h-4 shrink-0 mix-blend-normal"
                  style={long2Style}
                >
                  Long
                </div>
                <div
                  className="relative tracking-[0.5px] text-gainsboro-200 inline-block w-20 shrink-0"
                  style={xyz6Style}
                >
                  xyz
                </div>
                <div
                  className="relative tracking-[0.5px] text-gainsboro-200 inline-block w-20 shrink-0"
                  style={xyz7Style}
                >
                  xyz
                </div>
                <div
                  className="relative w-20 h-4 text-left font-bai-jamjuree"
                  style={frameDiv15Style}
                >
                  <div
                    className="absolute top-[-1px] left-[calc(50%_-_24px)] rounded-11xl box-border h-4 flex flex-col py-[18px] px-2 items-center justify-center border-[0.3px] border-solid border-white"
                    style={button93Style}
                  >
                    <div
                      className="relative capitalize font-medium"
                      style={close3Style}
                    >
                      Close
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-[999px] flex flex-row py-0 px-2 box-border items-start justify-between"
                style={frameDiv16Style}
              >
                <div
                  className="w-[120px] flex flex-row items-center justify-center gap-[7px] text-left font-bai-jamjuree"
                  style={frameDiv17Style}
                >
                  <img
                    className="relative w-4 h-4"
                    alt=""
                    src={iconsCryptoBitcoin4}
                    style={iconsCryptoBitcoin4Style}
                  />
                  <div className="relative" style={bTC8Style}>
                    BTC / USD
                  </div>
                </div>
                <div
                  className="relative leading-[24px] text-mediumaquamarine flex items-center w-20 h-4 shrink-0"
                  style={bTC9Style}
                >
                  <span className="[line-break:anywhere] w-full">
                    <span className="font-medium">0.12</span>
                    <span className="font-semibold">{` `}</span>
                    <span className="font-light">BTC</span>
                    <span className="font-semibold">{` `}</span>
                  </span>
                </div>
                <div
                  className="relative leading-[16px] flex items-center w-20 h-4 shrink-0 mix-blend-normal"
                  style={uSD4Style}
                >
                  <span className="[line-break:anywhere] w-full">
                    <span className="font-medium">350</span>
                    <span className="font-light"> USD</span>
                  </span>
                </div>
                <div
                  className="relative leading-[16px] font-medium flex items-center justify-center w-20 h-4 shrink-0 mix-blend-normal"
                  style={long3Style}
                >
                  Long
                </div>
                <div
                  className="relative tracking-[0.5px] text-gainsboro-200 inline-block w-20 shrink-0"
                  style={xyz8Style}
                >
                  xyz
                </div>
                <div
                  className="relative tracking-[0.5px] text-gainsboro-200 inline-block w-20 shrink-0"
                  style={xyz9Style}
                >
                  xyz
                </div>
                <div
                  className="relative w-20 h-4 text-left font-bai-jamjuree"
                  style={frameDiv18Style}
                >
                  <div
                    className="absolute top-[-1px] left-[calc(50%_-_24px)] rounded-11xl box-border h-4 flex flex-col py-[18px] px-2 items-center justify-center border-[0.3px] border-solid border-white"
                    style={button94Style}
                  >
                    <div
                      className="relative capitalize font-medium"
                      style={close4Style}
                    >
                      Close
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Property1POSITION;
