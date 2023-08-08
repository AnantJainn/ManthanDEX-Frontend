import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type DeviderIconType = {
  deviderIconDevider?: string;

  /** Style props */
  deviderIconPosition?: Property.Position;
  deviderIconMaxHeight?: Property.MaxHeight;
  deviderIconWidth?: Property.Width;
  deviderIconTop?: Property.Top;
  deviderIconRight?: Property.Right;
  deviderIconLeft?: Property.Left;
  deviderIconMaxWidth?: Property.MaxWidth;
  deviderIconOverflow?: Property.Overflow;
  deviderIconHeight?: Property.Height;
};

const DeviderIcon: FunctionComponent<DeviderIconType> = memo(
  ({
    deviderIconDevider,
    deviderIconPosition,
    deviderIconMaxHeight,
    deviderIconWidth,
    deviderIconTop,
    deviderIconRight,
    deviderIconLeft,
    deviderIconMaxWidth,
    deviderIconOverflow,
    deviderIconHeight,
  }) => {
    const deviderIconStyle: CSS.Properties = useMemo(() => {
      return {
        position: deviderIconPosition,
        maxHeight: deviderIconMaxHeight,
        width: deviderIconWidth,
        top: deviderIconTop,
        right: deviderIconRight,
        left: deviderIconLeft,
        maxWidth: deviderIconMaxWidth,
        overflow: deviderIconOverflow,
        height: deviderIconHeight,
      };
    }, [
      deviderIconPosition,
      deviderIconMaxHeight,
      deviderIconWidth,
      deviderIconTop,
      deviderIconRight,
      deviderIconLeft,
      deviderIconMaxWidth,
      deviderIconOverflow,
      deviderIconHeight,
    ]);

    return (
      <img
        className="relative max-h-full w-[940px]"
        alt=""
        src={deviderIconDevider}
        style={deviderIconStyle}
      />
    );
  }
);

export default DeviderIcon;
