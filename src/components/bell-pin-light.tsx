import { FunctionComponent, memo } from "react";

const BellPinLight: FunctionComponent = memo(() => {
  return (
    <button
      className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[1.5rem] h-[1.5rem]"
      autoFocus
    >
      <img
        className="relative w-[1.09rem] h-[0.94rem]"
        alt=""
        src="/subtract.svg"
      />
      <div className="absolute h-[33.33%] w-[29.17%] top-[85.42%] right-[10.42%] bottom-[-18.75%] left-[60.42%] rounded-[50%] box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-gainsboro-200" />
      <div className="absolute h-[16.67%] w-[16.67%] top-[20.83%] right-[20.83%] bottom-[62.5%] left-[62.5%] rounded-[50%] bg-indianred-100" />
    </button>
  );
});

export default BellPinLight;
