import { FunctionComponent, memo } from "react";

const Header: FunctionComponent = memo(() => {
  return (
    <header className="absolute top-[0rem] left-[0rem] w-[100%] flex flex-col items-center justify-center">
      <div className="self-stretch overflow-hidden flex flex-col py-[1rem] px-[5.5rem] items-center justify-center z-[0]">
        <div className="self-stretch flex flex-row items-center justify-between lg:flex-row lg:gap-[33.13rem] lg:items-start lg:justify-start md:flex-row md:gap-[33.13rem] md:items-start md:justify-start sm:flex-row sm:gap-[33.13rem] sm:items-start sm:justify-start">
          <img
            className="relative w-[3.01rem] h-[2rem]"
            alt=""
            src="/left-header.svg"
          />
          <div className="flex flex-row items-center justify-between">
            <nav className="m-0 w-[37.31rem] flex flex-row py-[0rem] px-[1.13rem] box-border items-center justify-center gap-[1.5rem] text-center text-[0.88rem] text-lightgray font-bai-jamjuree">
              <a className="[text-decoration:none] flex-1 relative uppercase text-[inherit]">
                know more
              </a>
              <a className="[text-decoration:none] flex-1 relative uppercase text-[inherit]">
                governance
              </a>
              <a className="[text-decoration:none] flex-1 relative uppercase text-[inherit]">
                community
              </a>
              <a className="[text-decoration:none] flex-1 relative uppercase text-[inherit]">
                developers
              </a>
              <a className="[text-decoration:none] flex-1 relative uppercase text-[inherit]">
                neucron
              </a>
            </nav>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[0.75rem]"
              autoFocus
            >
              <img
                className="relative w-[1.5rem] h-[1.5rem]"
                alt=""
                src="/bell-pin-light2.svg"
              />
              <button
                className="cursor-pointer py-[0.5rem] px-[0.75rem] bg-[transparent] rounded-21xl box-border w-[3.25rem] h-[1.5rem] flex flex-row items-center justify-center border-[0.5px] border-solid border-gainsboro-100"
                autoFocus
              >
                <div className="w-[3rem] flex flex-row py-[0rem] px-[0.25rem] box-border items-start justify-between">
                  <img
                    className="relative w-[1rem] h-[1rem]"
                    alt=""
                    src="/vuesaxlinearsun2.svg"
                  />
                  <img
                    className="relative w-[1rem] h-[1rem]"
                    alt=""
                    src="/expand-down-light2.svg"
                  />
                </div>
              </button>
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch absolute my-0 mx-[!important] top-[3.94rem] left-[0rem] rounded-10xs bg-midnightblue-100 h-[0.06rem] z-[1]" />
    </header>
  );
});

export default Header;
