import { FunctionComponent, useCallback } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Property1Variant3 from "../components/property1-variant3";
import BellPinLight from "../components/bell-pin-light";
import ContainerCard from "../components/container-card";
import DeviderIcon from "../components/devider-icon";
import Property1Group48095502 from "../components/property1-group48095502";
import Property1Frame48095537 from "../components/property1-frame48095537";
import Property1POSITION from "../components/property1-p-o-s-i-t-i-o-n";

const Trade86: FunctionComponent = () => {
  const onFrameLink1Click = useCallback(() => {
    // Please sync "Trade 67" to the project
  }, []);

  const onPROFILETextClick = useCallback(() => {
    // Please sync "Trade 67" to the project
  }, []);

  const onButton9Click = useCallback(() => {
    // Please sync "Trade 92" to the project
  }, []);

  const onPairContainerClick = useCallback(() => {
    // Please sync "Trade 85" to the project
  }, []);

  return (
    <div className="overflow-hidden bg-[#0c1326] flex flex-col" id="TradeRoot">
      <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.1)] bg-[#000921] flex flex-col justify-end mb-4 h-10 shrink-0 px-10 py-1">
        <div className="bg-[#000921] flex flex-row justify-between mr-1 items-center">
          <div className="flex flex-row gap-10 items-start">
            <img
              src="https://file.rendit.io/n/bjc0w05cmyb1VYrgjce3.svg"
              className="w-10 shrink-0"
            />
            <div className="text-sm font-['Bai_Jamjuree'] font-semibold uppercase text-[#5181ff] mt-1 mr-5">
              TRADE
            </div>
            <div
              className="text-sm font-['Bai_Jamjuree'] font-light uppercase text-[#e5e7eb] mt-1"
              id="PROFILE"
            >
              PORTFOLIO
            </div>
          </div>
          <div className="self-start flex flex-row justify-between gap-3 items-center">
            {/* <button
              className="border-solid border-[#191235] bg-[#06e7ed] self-start flex flex-col w-32 shrink-0 h-8 items-center py-2 border-0 rounded-lg"
              id="Button1"
            >
              <div className="text-sm font-['Bai_Jamjuree'] font-medium capitalize text-[#191235]">
                Connect Wallet
              </div>
            </button> */}
            <ConnectButton />
            <img
              src="https://file.rendit.io/n/fYJujTHtYaG9lWFAbGqI.svg"
              className="w-6 shrink-0"
              id="Bellpinlight"
            />
            <button
              className="border-solid border-[#f41212] flex flex-row gap-2 w-12 shrink-0 h-6 items-center px-1 border-0 rounded-lg bg-black"
              id="SignUpButton"
            >
              <img
                src="https://file.rendit.io/n/aroaK5gokMJVnPDuYySx.svg"
                className="w-4 shrink-0"
                id="Vuesaxlinearsun"
              />
              <img
                src="https://file.rendit.io/n/mbv6F39q43j61XhfqFnk.svg"
                className="w-4 shrink-0"
                id="Expanddownlight"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-8 items-start mx-3 justify-center">
        {" "}
        {/* Added justify-end to shift the content to the right */}
        <div className="flex flex-col items-start">
          <div className="flex flex-row justify-between mb-4 w-[116px] items-start">
            <button
              className="overflow-hidden flex flex-col w-8 shrink-0 items-center px-1 rounded-sm"
              id="Button2"
            >
              <img
                src="https://file.rendit.io/n/147qmv36bNi70JGjoisH.svg"
                className="w-6"
              />
            </button>
            <button
              className="overflow-hidden flex flex-col w-8 shrink-0 items-center px-1 rounded-sm"
              id="Button3"
            >
              <img
                src="https://file.rendit.io/n/XXTFYCH1vUMNJQutWY6i.svg"
                className="w-6"
              />
            </button>
            <button
              className="overflow-hidden flex flex-col w-8 shrink-0 items-center px-1 rounded-sm"
              id="Button4"
            >
              <img
                src="https://file.rendit.io/n/SsX5mdyqFQIfXSx0fuBx.svg"
                className="w-6"
              />
            </button>
          </div>
          <div className="flex flex-row mb-4 gap-12 w-48 items-start">
            <div className="text-xs font-['Bai_Jamjuree'] text-[#848e9c]">
              Price(USDT)
            </div>
            <div className="text-xs font-['Bai_Jamjuree'] text-[#848e9c]">
              Amount(BTC)
            </div>
          </div>
          <div className="flex flex-row ml-1 gap-16 w-40 items-start">
            <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#be3c5b]">
              19967.98
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              0.10016
            </div>
          </div>
          <div className="flex flex-row ml-1 gap-16 w-40 items-start">
            <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#be3c5b]">
              19967.98
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              0.10016
            </div>
          </div>
          <div className="flex flex-row ml-1 gap-16 w-40 items-start">
            <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#be3c5b]">
              19967.98
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              0.10016
            </div>
          </div>
          <div className="flex flex-row ml-1 gap-16 w-40 items-start">
            <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#be3c5b]">
              19967.98
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              0.10016
            </div>
          </div>
          <div className="flex flex-row ml-1 gap-16 w-40 items-start">
            <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#be3c5b]">
              19967.98
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              0.10016
            </div>
          </div>
          <div className="flex flex-row ml-1 gap-16 w-40 items-start">
            <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#be3c5b]">
              19967.98
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              0.10016
            </div>
          </div>
          <div className="flex flex-row ml-1 gap-16 w-40 items-start">
            <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#be3c5b]">
              19967.98
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              0.10016
            </div>
          </div>
          <div className="flex flex-row ml-1 gap-16 w-40 items-start">
            <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#be3c5b]">
              19967.98
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              0.10016
            </div>
          </div>
          <div className="flex flex-row ml-1 gap-16 w-40 items-start">
            <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#be3c5b]">
              19967.98
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              0.10016
            </div>
          </div>
          <div className="flex flex-row ml-1 gap-16 w-40 items-start">
            <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#be3c5b]">
              19967.98
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              0.10016
            </div>
          </div>
          <div className="flex flex-row ml-1 gap-16 w-40 items-start">
            <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#be3c5b]">
              19967.98
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              0.10016
            </div>
          </div>
          <div className="flex flex-row ml-1 gap-16 w-40 items-start">
            <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#be3c5b]">
              19967.98
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              0.10016
            </div>
          </div>
          <div className="flex flex-row ml-1 gap-16 w-40 items-start">
            <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#be3c5b]">
              19967.98
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              0.10016
            </div>
          </div>
          <div className="flex flex-row ml-1 gap-16 w-40 items-start">
            <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#be3c5b]">
              19967.98
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              0.10016
            </div>
          </div>
          <div className="flex flex-row ml-1 gap-16 w-40 items-start">
            <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#be3c5b]">
              19967.98
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              0.10016
            </div>
          </div>
          <div className="flex flex-row ml-1 gap-16 w-40 items-start">
            <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#be3c5b]">
              19967.98
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              0.10016
            </div>
          </div>
          <div className="flex flex-row ml-1 gap-16 w-40 items-start">
            <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#be3c5b]">
              19967.98
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              0.10016
            </div>
          </div>
          <div className="flex flex-row gap-16 w-40 items-start mb-5 ml-1">
            <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#be3c5b]">
              19967.98
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              0.10016
            </div>
          </div>
          <div className="flex flex-row mb-2 gap-1 w-40 items-center">
            <div className="text-lg font-['Work_Sans'] text-white self-start">
              19,965.74
            </div>
            <div className="text-xs font-sans text-[#848e9c]">
              ₦9,236,949.95
            </div>
          </div>
          <div className="flex flex-row ml-1 gap-16 w-40 items-start">
            <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#28c59f]">
              19967.98
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              0.10016
            </div>
          </div>
          <div className="flex flex-row ml-1 gap-16 w-40 items-start">
            <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#28c59f]">
              19967.98
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              0.10016
            </div>
          </div>
          <div className="flex flex-row ml-1 gap-16 w-40 items-start">
            <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#28c59f]">
              19967.98
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              0.10016
            </div>
          </div>
          <div className="flex flex-row ml-1 gap-16 w-40 items-start">
            <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#28c59f]">
              19967.98
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              0.10016
            </div>
          </div>
          <div className="flex flex-row ml-1 gap-16 w-40 items-start">
            <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#28c59f]">
              19967.98
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              0.10016
            </div>
          </div>
          <div className="flex flex-row ml-1 gap-16 w-40 items-start">
            <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#28c59f]">
              19967.98
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              0.10016
            </div>
          </div>
          <div className="flex flex-row ml-1 gap-16 w-40 items-start">
            <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#28c59f]">
              19967.98
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              0.10016
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 w-[1190px] items-start">
          <div className="flex flex-col mt-1 gap-12 w-20 shrink-0 items-start">
            <div className="flex flex-col w-20 items-start">
              <div className="self-end flex flex-row mb-5 gap-1 w-10 items-start">
                <div className="text-xs font-sans text-[#eaecef] mt-px">
                  0.01
                </div>
                <img
                  src="https://file.rendit.io/n/A8RoI4WIEK8GpxFfD2hS.svg"
                  className="w-4 shrink-0"
                />
              </div>
              <div className="text-right text-xs font-['Bai_Jamjuree'] text-[#848e9c] self-end mb-4 mr-10">
                Total
              </div>
              <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
                1,999.99288
              </div>
              <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
                1,999.99288
              </div>
              <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
                1,999.99288
              </div>
              <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
                1,999.99288
              </div>
              <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
                1,999.99288
              </div>
              <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
                1,999.99288
              </div>
              <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
                1,999.99288
              </div>
              <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
                1,999.99288
              </div>
              <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
                1,999.99288
              </div>
              <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
                1,999.99288
              </div>
              <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
                1,999.99288
              </div>
              <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
                1,999.99288
              </div>
              <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
                1,999.99288
              </div>
              <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
                1,999.99288
              </div>
              <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
                1,999.99288
              </div>
              <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
                1,999.99288
              </div>
              <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
                1,999.99288
              </div>
              <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
                1,999.99288
              </div>
            </div>
            <div className="flex flex-col w-16 items-start">
              <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
                1,999.99288
              </div>
              <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
                1,999.99288
              </div>
              <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
                1,999.99288
              </div>
              <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
                1,999.99288
              </div>
              <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
                1,999.99288
              </div>
              <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
                1,999.99288
              </div>
              <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
                1,999.99288
              </div>
            </div>
          </div>
          <div className="flex flex-col mr-0 gap-4 w-2/3">
            <div className="flex flex-row mr-20 gap-5 items-center">
              <div className="bg-[#092879] self-start flex flex-row justify-end mr-3 gap-6 h-10 items-center pl-4 pr-2 py-3 rounded-tl-lg rounded-bl-lg">
                <img
                  src="https://file.rendit.io/n/sMf1sTOFanuIGYJDnuiO.svg"
                  className="mr-[-10] w-8 shrink-0"
                  id="BTC"
                />
                <div className="flex flex-col gap-0 w-12 shrink-0 items-start">
                  <div
                    className="text-l font-['Bai_Jamjuree'] font-semibold text-white"
                    id="BTC1"
                  >
                    BTC/USD
                  </div>
                  <div className="text-sm font-['Work_Sans'] font-light text-white">
                    Bitcoin
                  </div>
                </div>
                <img
                  src="https://file.rendit.io/n/USSH3rfWYFKWcZBBPFfD.svg"
                  className="w-5 shrink-0"
                  id="Expanddownlight1"
                />
              </div>
              <div className="flex flex-col mr-5 gap-2 w-24 shrink-0 items-start">
                <div className="font-['Work_Sans'] font-semibold leading-[24px] text-[#28c59f]">
                  62,238.00
                </div>
                <div className="text-xs font-['Work_Sans'] font-light leading-[16px] text-white">
                  Last market price
                </div>
              </div>
              <div className="flex flex-col gap-1 w-16 shrink-0 items-start">
                <div className="text-xs font-['Inter'] font-medium leading-[16px] text-[#28c59f]">
                  +1.75%
                </div>
                <div className="text-xs font-['Work_Sans'] font-light leading-[16px] text-white">
                  24h Change
                </div>
              </div>
              <div className="flex flex-col gap-1 w-16 shrink-0 items-start">
                <div className="text-xs font-['Inter'] font-semibold leading-[16px] text-white">
                  63,597.80
                </div>
                <div className="text-xs font-['Work_Sans'] font-light leading-[16px] text-white">
                  24h High
                </div>
              </div>
              <div className="flex flex-col gap-1 w-12 shrink-0 items-start">
                <div className="text-xs font-['Inter'] font-semibold leading-[16px] text-white">
                  60,322.6
                </div>
                <div className="text-xs font-['Work_Sans'] font-light leading-[16px] text-white">
                  24h Low
                </div>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <div className="text-xs font-['Inter'] font-semibold leading-[16px] text-white">
                  2,548,722,097.16
                </div>
                <div className="text-xs font-['Work_Sans'] font-light leading-[16px] text-white">
                  Market Volume
                </div>
              </div>
            </div>
            <div className="flex flex-col" id="Chart">
              <div
                className="border-solid border-[#0c1326] flex flex-col border-0"
                id="Cardtypes"
              >
                <div className="bg-[#000a25] flex flex-col gap-px items-end mx-0 pt-3 pb-2 px-px rounded-lg">
                  <div className="self-stretch flex flex-row justify-between items-start mb-1 ml-4 mr-5">
                    <div className="flex flex-row w-1/2 items-start">
                      <div className="overflow-hidden bg-[#010c29] flex flex-col w-12 shrink-0 h-6 items-center py-1 rounded-tl rounded-bl">
                        <div
                          className="text-center text-xs font-['Bai_Jamjuree'] font-medium leading-[16px] text-white"
                          id="Roboto"
                        >
                          30 m
                        </div>
                      </div>
                      <div className="bg-[#443b78] w-px shrink-0 h-6" />
                      <div className="overflow-hidden bg-[#010c29] flex flex-col w-8 shrink-0 items-center px-2 py-px">
                        <img
                          src="https://file.rendit.io/n/NStHsb9vd0DN0fctsGMT.svg"
                          className="w-5"
                          id="Filter"
                        />
                      </div>
                      <div className="bg-[#443b78] w-px shrink-0 h-6" />
                      <div className="overflow-hidden bg-[#010c29] flex flex-col w-20 shrink-0 h-6 items-center py-1">
                        <div
                          className="text-center text-xs font-['Bai_Jamjuree'] font-medium leading-[16px] text-white/40"
                          id="Roboto1"
                        >
                          fx Indicators
                        </div>
                      </div>
                      <div className="bg-[#443b78] w-px shrink-0 h-6" />
                      <div className="relative flex flex-col w-16 shrink-0 items-end">
                        <div className="w-16 h-6 overflow-hidden bg-[#010c29] absolute top-0 left-0 flex flex-row gap-4 items-center px-2">
                          <img
                            src="https://file.rendit.io/n/vpDgCQHGHCRZRwnjUx7x.svg"
                            className="w-4 shrink-0"
                          />
                          <img
                            src="https://file.rendit.io/n/t6nbT1wm7VvhLiQKQXVI.svg"
                            className="w-4 shrink-0"
                          />
                        </div>
                        <div className="bg-[#443b78] relative w-px h-6 shrink-0" />
                      </div>
                      <div className="overflow-hidden bg-[#010c29] flex flex-col w-8 shrink-0 h-6 items-center py-1">
                        <div
                          className="text-center text-xs font-['Bai_Jamjuree'] font-medium leading-[16px] text-white/40"
                          id="Roboto2"
                        >
                          BID
                        </div>
                      </div>
                      <div className="bg-[#443b78] w-px shrink-0 h-6" />
                      <div className="overflow-hidden bg-[#010c29] flex flex-col w-10 shrink-0 h-6 items-center py-1">
                        <div
                          className="text-center text-xs font-['Bai_Jamjuree'] font-medium leading-[16px] text-white/40"
                          id="Roboto3"
                        >
                          MID
                        </div>
                      </div>
                      <div className="bg-[#443b78] w-px shrink-0 h-6" />
                      <div className="overflow-hidden bg-[#010c29] flex flex-col w-10 shrink-0 h-6 items-center py-1 rounded-tr rounded-br">
                        <div
                          className="text-center text-xs font-['Bai_Jamjuree'] font-medium leading-[16px] text-white/40"
                          id="Roboto4"
                        >
                          ASK
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://file.rendit.io/n/nyRnRGQbTabYhIn8poWz.svg"
                      className="mt-1 w-4 shrink-0"
                      id="Fullscreen"
                    />
                  </div>
                  <div className="self-start flex flex-row gap-2 items-start mb-6 ml-4">
                    <img
                      src="https://file.rendit.io/n/F3A5bqExmBOMYLhBROSD.svg"
                      className="w-6 shrink-0"
                      id="Tradingview"
                    />
                    <div className="flex flex-row mr-2 gap-1 w-12 shrink-0 items-start">
                      <div className="text-xs font-['Work_Sans'] tracking-[0.1] leading-[22px] text-[#76809d] w-1/6">
                        O
                      </div>
                      <div className="text-xs font-['Work_Sans'] leading-[16px] text-[#28c59f] mt-px">
                        4011.90
                      </div>
                    </div>
                    <div className="flex flex-row mr-2 gap-1 w-12 shrink-0 items-start">
                      <div className="text-xs font-['Work_Sans'] tracking-[0.1] leading-[22px] text-[#76809d] w-1/6">
                        H
                      </div>
                      <div className="text-xs font-['Work_Sans'] leading-[16px] text-[#28c59f] mt-px">
                        4011.90
                      </div>
                    </div>
                    <div className="flex flex-row mr-2 gap-1 w-12 shrink-0 items-start">
                      <div className="text-xs font-['Work_Sans'] tracking-[0.1] leading-[22px] text-[#76809d] w-1/6">
                        L
                      </div>
                      <div className="text-xs font-['Work_Sans'] leading-[16px] text-[#28c59f] mt-px">
                        4011.90
                      </div>
                    </div>
                    <div className="flex flex-row gap-1 w-12 shrink-0 items-start">
                      <div className="text-xs font-['Work_Sans'] tracking-[0.1] leading-[22px] text-[#76809d] w-1/6">
                        C
                      </div>
                      <div className="text-xs font-['Work_Sans'] leading-[16px] text-[#28c59f] mt-px">
                        4011.90
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-['Work_Sans'] leading-[16px] text-[#454e68] mb-3 mr-5">
                    4150.0
                  </div>
                  <div className="text-xs font-['Work_Sans'] leading-[16px] text-[#454e68] mb-2 mr-5">
                    4125.0
                  </div>
                  <div className="self-stretch flex flex-row mr-4 gap-4 items-start">
                    <div className="relative flex flex-col w-[690px] pt-24 pb-56">
                      <img
                        src="https://file.rendit.io/n/9CcMkERmN5JDne3Mf3cX.svg"
                        className="w-[592px] h-[324px] absolute top-px left-4"
                      />
                      <img
                        src="https://file.rendit.io/n/0938srI0yCajz01B5tlj.svg"
                        className="w-[587px] h-[298px] absolute top-0 left-4"
                      />
                      <div
                        className="border-solid border-[rgba(225,_227,_231,_0.6)] relative h-0 shrink-0 border-0"
                        id="Devider"
                      />
                    </div>
                    <div className="flex flex-col justify-between mt-2 w-10 shrink-0 h-[304px] items-start">
                      <div className="text-xs font-['Work_Sans'] leading-[16px] text-[#454e68]">
                        4100.0
                      </div>
                      <div className="text-xs font-['Work_Sans'] leading-[16px] text-[#454e68]">
                        4075.0
                      </div>
                      <div className="text-xs font-['Work_Sans'] leading-[16px] text-[#454e68]">
                        4050.0
                      </div>
                      <div className="text-xs font-['Work_Sans'] leading-[16px] text-[#454e68]">
                        4025.0
                      </div>
                      <div className="text-xs font-['Work_Sans'] leading-[16px] text-[#454e68]">
                        4000.0
                      </div>
                      <div className="text-xs font-['Work_Sans'] leading-[16px] text-[#454e68]">
                        3975.0
                      </div>
                      <div className="text-xs font-['Work_Sans'] leading-[16px] text-[#454e68]">
                        3950.0
                      </div>
                      <div className="text-xs font-['Work_Sans'] leading-[16px] text-[#454e68]">
                        3925.0
                      </div>
                      <div className="text-xs font-['Work_Sans'] leading-[16px] text-[#454e68]">
                        3900.0
                      </div>
                      <div className="text-xs font-['Work_Sans'] leading-[16px] text-[#454e68]">
                        3875.0
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-['Work_Sans'] leading-[16px] text-[#454e68] mb-4 mr-4">
                    3850.0
                  </div>
                  <div className="self-stretch flex flex-row gap-16 items-start ml-4 mr-12">
                    <div className="text-xs font-['Work_Sans'] leading-[16px] text-white mr-px">
                      13
                    </div>
                    <div className="text-xs font-['Work_Sans'] leading-[16px] text-white mr-px">
                      14
                    </div>
                    <div className="text-xs font-['Work_Sans'] leading-[16px] text-white mr-1">
                      15
                    </div>
                    <div className="text-xs font-['Work_Sans'] leading-[16px] text-white mr-px">
                      16
                    </div>
                    <div className="text-xs font-['Work_Sans'] leading-[16px] text-white mr-px">
                      17
                    </div>
                    <div className="text-xs font-['Work_Sans'] leading-[16px] text-white">
                      18
                    </div>
                    <div className="text-xs font-['Work_Sans'] leading-[16px] text-white mr-1">
                      19
                    </div>
                    <div className="text-xs font-['Work_Sans'] leading-[16px] text-white mr-px">
                      20
                    </div>
                    <div className="text-xs font-['Work_Sans'] leading-[16px] text-white">
                      21
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.05)] left-[2rem] flex flex-col mt-px items-start">
            <div className="bg-[#000921] flex flex-col pb-10 gap-2  w-[320px] rounded-lg">
              <div className="bg-[#000921] flex flex-col gap-2 rounded-tl-lg rounded-tr-lg">
                <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.1)] flex flex-row items-start rounded-tl-lg rounded-tr-lg">
                  <button
                    className="rounded-tl-lg bg-[#092879] flex flex-row justify-center gap-4 w-1/2 h-8 items-center"
                    id="Button13"
                  >
                    <img
                      src="https://file.rendit.io/n/CMYnEegLwRunkp3fw7so.svg"
                      className="w-3 shrink-0"
                    />
                    <div className="font-['Bai_Jamjuree'] font-semibold capitalize text-white">
                      bUY
                    </div>
                  </button>
                  <button
                    className="border-solid border-white rounded-tr-lg flex flex-row justify-center gap-2 w-1/2 h-8 items-center border-0 bg-black"
                    id="Button14"
                  >
                    <img
                      src="https://file.rendit.io/n/axXOU8RJcwI6g87qQDAY.svg"
                      className="w-3 shrink-0"
                    />
                    <div className="font-['Bai_Jamjuree'] font-semibold capitalize text-white">
                      SELL
                    </div>
                  </button>
                </div>
                <div className="self-start flex flex-row gap-5 w-24 items-start mb-1 ml-2">
                  <div
                    className="text-xs font-['Bai_Jamjuree'] font-semibold uppercase text-[#5181ff]"
                    id="TRADE2"
                  >
                    limit
                  </div>
                  <div className="text-xs font-['Bai_Jamjuree'] font-light text-white">
                    MARKET
                  </div>
                </div>
                <div
                  className="shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] overflow-hidden bg-[rgba(0,_15,_55,_0.4)] flex flex-row justify-center gap-1 items-center mx-1 rounded"
                  id="SelectMenuTrigger"
                >
                  <div
                    className="text-xs font-['Work_Sans'] leading-[24px] text-[#767e9c] w-5/6 my-1"
                    id="Text2"
                  >
                    Limit Price
                  </div>
                  <img
                    src="https://file.rendit.io/n/k6mYD8gZLn4rqz8D9K1S.svg"
                    className="w-5 shrink-0"
                    id="Selector"
                  />
                </div>
                <div
                  className="shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] overflow-hidden bg-[rgba(0,_15,_55,_0.4)] flex flex-row justify-between items-center mx-1 px-3 rounded"
                  id="SelectMenuTrigger1"
                >
                  <div
                    className="text-xs font-['Work_Sans'] leading-[24px] text-[#767e9c] my-1"
                    id="Text3"
                  >
                    Amount
                  </div>
                  <div
                    className="text-xs font-['Work_Sans'] leading-[24px] text-[#76809d]"
                    id="SecondaryText"
                  >
                    BTC
                  </div>
                </div>
                <div className="self-end flex flex-row mr-4 gap-2 w-1/2 items-start whitespace-nowrap">
                  <div className="text-xs font-['Inter'] leading-[16px] text-[#767e9c]">
                    Price:
                  </div>
                  <div
                    className="text-right text-xs font-['Inter'] font-medium leading-[16px] text-white mr-1"
                    id="BTC33"
                  >
                    1{" "}
                    <div className="text-[#767e9c] contents" id="BTC32">
                      BTC=
                    </div>
                  </div>
                  <div
                    className="text-right text-xs font-['Inter'] font-medium leading-[16px] text-white"
                    id="USD11"
                  >
                    30,536{" "}
                    <div className="text-[#767e9c] contents" id="USD10">
                      USD
                    </div>
                  </div>
                </div>

                <div
                  className="shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] overflow-hidden bg-[rgba(0,_15,_55,_0.4)] flex flex-row justify-between items-center mx-1 px-3 rounded"
                  id="SelectMenuTrigger2"
                >
                  <div
                    className="text-xs font-['Work_Sans'] leading-[24px] text-[#767e9c] my-1"
                    id="Text4"
                  >
                    Total
                  </div>
                  <div
                    className="text-xs font-['Work_Sans'] leading-[24px] text-[#76809d]"
                    id="SecondaryText1"
                  >
                    USD
                  </div>
                </div>
                <div className="self-end flex flex-row gap-6 w-1/2 items-start mb-px mr-1">
                  <div className="text-xs font-['Inter'] leading-[16px] text-[#767e9c]">
                    Available
                  </div>
                  <div className="flex flex-row gap-px w-20 shrink-0 items-start">
                    <div className="text-right text-xs font-['Inter'] font-medium leading-[16px] text-white">
                      1.5031
                    </div>
                    <div className="text-right text-xs font-['Inter'] font-medium leading-[16px] text-[#767e9c]">
                      USDT
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[#06e7ed] self-center flex flex-col w-3/5 h-6 shrink-0 items-center py-2 rounded-lg"
                  id="Hovered"
                >
                  <div className="font-['Bai_Jamjuree'] font-bold capitalize text-[#0e062c]">
                    Buy 0.45 BTC
                  </div>
                </div>
              </div>
              <div
                className="bg-[#000921] flex flex-col gap-2 h-[292px] shrink-0 rounded-br-lg rounded-bl-lg"
                id="Component2"
              >
                <button
                  className="bg-[#000f37] flex flex-row mb-0 gap-5 h-8 shrink-0 items-start pt-1 px-2"
                  id="Button15"
                >
                  <div
                    className="text-sm font-['Bai_Jamjuree'] font-semibold uppercase text-[#5181ff]"
                    id="TRADE3"
                  >
                    MARKET TRADES
                  </div>
                  <div className="text-sm font-['Bai_Jamjuree'] font-light text-white">
                    MARKET INFO
                  </div>
                </button>
                <div className="flex flex-row justify-between items-start mb-2 ml-2 mr-20">
                  <div
                    className="text-xs font-['Work_Sans'] leading-[24px] text-[#cbcbcb] w-2/5"
                    id="Text5"
                  >
                    Price (USDT)
                  </div>
                  <div
                    className="text-right text-xs font-['Work_Sans'] leading-[24px] text-[#cbcbcb] w-2/5"
                    id="Text6"
                  >
                    Amount (BTC)
                  </div>
                  <div
                    className="text-right text-xs font-['Poppins'] font-light leading-[24px] text-[#cbcbcb]"
                    id="SecondaryText2"
                  >
                    Time
                  </div>
                </div>
                <div className="flex flex-row gap-12 items-start ml-2 mr-16">
                  <div className="text-xs font-sans text-[#f6465d]">
                    19,965.74
                  </div>
                  <div className="text-right text-xs font-sans text-[#b7bdc6] mr-2">
                    0.13624
                  </div>
                  <div className="text-right text-xs font-sans text-[#b7bdc6]">
                    18:43:07
                  </div>
                </div>
                <div className="flex flex-row gap-12 items-start ml-2 mr-16">
                  <div className="text-xs font-sans text-[#f6465d]">
                    19,965.74
                  </div>
                  <div className="text-right text-xs font-sans text-[#b7bdc6] mr-2">
                    0.13624
                  </div>
                  <div className="text-right text-xs font-sans text-[#b7bdc6]">
                    18:43:07
                  </div>
                </div>
                <div className="flex flex-row gap-12 items-start ml-2 mr-16">
                  <div className="text-xs font-sans text-[#f6465d]">
                    19,965.74
                  </div>
                  <div className="text-right text-xs font-sans text-[#b7bdc6] mr-2">
                    0.13624
                  </div>
                  <div className="text-right text-xs font-sans text-[#b7bdc6]">
                    18:43:07
                  </div>
                </div>
                <div className="flex flex-row gap-12 items-start ml-2 mr-16">
                  <div className="text-xs font-sans text-[#f6465d]">
                    19,965.74
                  </div>
                  <div className="text-right text-xs font-sans text-[#b7bdc6] mr-2">
                    0.13624
                  </div>
                  <div className="text-right text-xs font-sans text-[#b7bdc6]">
                    18:43:07
                  </div>
                </div>
                <div className="flex flex-row gap-12 items-start ml-2 mr-16">
                  <div className="text-xs font-sans text-[#f6465d]">
                    19,965.74
                  </div>
                  <div className="text-right text-xs font-sans text-[#b7bdc6] mr-2">
                    0.13624
                  </div>
                  <div className="text-right text-xs font-sans text-[#b7bdc6]">
                    18:43:07
                  </div>
                </div>
                <div className="flex flex-row gap-12 items-start ml-2 mr-16">
                  <div className="text-xs font-sans text-[#f6465d]">
                    19,965.74
                  </div>
                  <div className="text-right text-xs font-sans text-[#b7bdc6] mr-2">
                    0.13624
                  </div>
                  <div className="text-right text-xs font-sans text-[#b7bdc6]">
                    18:43:07
                  </div>
                </div>
                <div className="flex flex-row gap-12 items-start ml-2 mr-16">
                  <div className="text-xs font-sans text-[#f6465d]">
                    19,965.74
                  </div>
                  <div className="text-right text-xs font-sans text-[#b7bdc6] mr-2">
                    0.13624
                  </div>
                  <div className="text-right text-xs font-sans text-[#b7bdc6]">
                    18:43:07
                  </div>
                </div>
                <div className="flex flex-row gap-12 items-start ml-2 mr-16">
                  <div className="text-xs font-sans text-[#f6465d]">
                    19,965.74
                  </div>
                  <div className="text-right text-xs font-sans text-[#b7bdc6] mr-2">
                    0.13624
                  </div>
                  <div className="text-right text-xs font-sans text-[#b7bdc6]">
                    18:43:07
                  </div>
                </div>
                <div className="flex flex-row gap-12 items-start ml-2 mr-16">
                  <div className="text-xs font-sans text-[#f6465d]">
                    19,965.74
                  </div>
                  <div className="text-right text-xs font-sans text-[#b7bdc6] mr-2">
                    0.13624
                  </div>
                  <div className="text-right text-xs font-sans text-[#b7bdc6]">
                    18:43:07
                  </div>
                </div>
                <div className="flex flex-row gap-12 items-start ml-2 mr-16">
                  <div className="text-xs font-sans text-[#f6465d]">
                    19,965.74
                  </div>
                  <div className="text-right text-xs font-sans text-[#b7bdc6] mr-2">
                    0.13624
                  </div>
                  <div className="text-right text-xs font-sans text-[#b7bdc6]">
                    18:43:07
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-16 items-start mb-4 ml-4 mr-3 justify-center">
        <div className="flex flex-col w-12 shrink-0 items-start">
          <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#28c59f]">
            19967.98
          </div>
          <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#28c59f]">
            19967.98
          </div>
          <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#28c59f]">
            19967.98
          </div>
          <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#28c59f]">
            19967.98
          </div>
          <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#28c59f]">
            19967.98
          </div>
          <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#28c59f]">
            19967.98
          </div>
          <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#28c59f]">
            19967.98
          </div>
          <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#28c59f]">
            19967.98
          </div>
          <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#28c59f]">
            19967.98
          </div>
          <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#28c59f]">
            19967.98
          </div>
          <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#28c59f]">
            19967.98
          </div>
          <div className="text-xs font-['Work_Sans'] leading-[20px] text-[#28c59f]">
            19967.98
          </div>
        </div>
        <div className="flex flex-col w-10 shrink-0 items-start">
          <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
            0.10016
          </div>
          <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
            0.10016
          </div>
          <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
            0.10016
          </div>
          <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
            0.10016
          </div>
          <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
            0.10016
          </div>
          <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
            0.10016
          </div>
          <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
            0.10016
          </div>
          <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
            0.10016
          </div>
          <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
            0.10016
          </div>
          <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
            0.10016
          </div>
          <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
            0.10016
          </div>
          <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
            0.10016
          </div>
        </div>
        <div className="flex flex-row gap-5 w-[1190px] items-start">
          <div className="flex flex-col mb-px w-16 shrink-0 items-start">
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              1,999.99288
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              1,999.99288
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              1,999.99288
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              1,999.99288
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              1,999.99288
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              1,999.99288
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              1,999.99288
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              1,999.99288
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              1,999.99288
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              1,999.99288
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              1,999.99288
            </div>
            <div className="text-right text-xs font-['Work_Sans'] leading-[20px] text-[#b7bdc6]">
              1,999.99288
            </div>
          </div>
          <div className="flex flex-col mt-1 w-[1100px] items-start">
            <div className="border-solid border-[#878889] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.1)] flex flex-row pr-20 items-start border-0 rounded-tl-lg rounded-tr-lg">
              <button
                className="rounded-tl-lg bg-[#092879] flex flex-col h-8 items-center my-0 py-2"
                id="Button5"
              >
                <div
                  className="text-xs font-['Bai_Jamjuree'] font-semibold uppercase text-white mx-6"
                  id="TRADE1"
                >
                  POSITION
                </div>
              </button>
              <button
                className="border-solid bg-black border-white flex flex-col mt-0 w-24 shrink-0 h-8 items-center py-2 border-0"
                id="Button6"
              >
                <div className="text-xs font-['Bai_Jamjuree'] text-white">
                  ORDERS
                </div>
              </button>
              <button
                className="border-solid bg-black border-white rounded-tr-lg flex flex-col mt-0 w-24 shrink-0 h-8 items-center py-2 border-0"
                id="Button7"
              >
                <div className="text-xs font-['Bai_Jamjuree'] text-white">
                  HISTORY
                </div>
              </button>
            </div>
            <div className="bg-[#000a25] self-stretch flex flex-col gap-2 pt-1 pb-6 rounded-tr-lg rounded-br-lg rounded-bl-lg">
              <div className="flex flex-row mr-24 gap-16 items-center">
                <div className="text-center text-xs font-['Bai_Jamjuree'] tracking-[0.5] text-white mr-10 ml-10">
                  {" "}
                  {/* Added ml-auto to shift "Market" to the right */}
                  Market
                </div>
                <div className="text-center text-xs font-['Bai_Jamjuree'] tracking-[0.5] text-white mr-12">
                  Qty.
                </div>
                <div className="text-center text-xs font-['Bai_Jamjuree'] tracking-[0.5] text-white mr-11">
                  Value
                </div>
                <div className="text-center text-xs font-['Bai_Jamjuree'] tracking-[0.5] text-white mr-6">
                  Side
                </div>
                <div className="text-center text-xs font-['Bai_Jamjuree'] tracking-[0.5] text-white self-start mr-5 w-1/8">
                  Unrealised P&L
                </div>
                <div className="text-center text-xs font-['Bai_Jamjuree'] tracking-[0.5] text-white mr-8">
                  Realised P&L
                </div>
                <div className="text-center text-xs font-['Bai_Jamjuree'] tracking-[0.5] text-white">
                  Close Order
                </div>
              </div>
              <div className="flex flex-row gap-2 items-start ml-6 mr-32">
                <div className="flex flex-col justify-between mt-px w-4 shrink-0 h-32 items-start">
                  <img
                    src="https://file.rendit.io/n/RDe07QtS9OVydVXzmCgO.svg"
                    className="w-4"
                    id="BTC2"
                  />
                  <img
                    src="https://file.rendit.io/n/RDe07QtS9OVydVXzmCgO.svg"
                    className="w-4"
                    id="BTC8"
                  />
                  <img
                    src="https://file.rendit.io/n/RDe07QtS9OVydVXzmCgO.svg"
                    className="w-4"
                    id="BTC14"
                  />
                  <img
                    src="https://file.rendit.io/n/RDe07QtS9OVydVXzmCgO.svg"
                    className="w-4"
                    id="BTC20"
                  />
                  <img
                    src="https://file.rendit.io/n/RDe07QtS9OVydVXzmCgO.svg"
                    className="w-4"
                    id="BTC26"
                  />
                </div>
                <div className="flex flex-col justify-between w-13 shrink-0 h-32 items-start mt-1 mr-10">
                  <div
                    className="text-xs font-['Bai_Jamjuree'] text-white"
                    id="BTC3"
                  >
                    BTC / USD
                  </div>
                  <div
                    className="text-xs font-['Bai_Jamjuree'] text-white"
                    id="BTC9"
                  >
                    BTC / USD
                  </div>
                  <div
                    className="text-xs font-['Bai_Jamjuree'] text-white"
                    id="BTC15"
                  >
                    BTC / USD
                  </div>
                  <div
                    className="text-xs font-['Bai_Jamjuree'] text-white"
                    id="BTC21"
                  >
                    BTC / USD
                  </div>
                  <div
                    className="text-xs font-['Bai_Jamjuree'] text-white"
                    id="BTC27"
                  >
                    BTC / USD
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-1 w-20 shrink-0 items-start mt-px mr-16">
                  <div
                    className="text-center text-xs font-['Work_Sans'] font-medium leading-[24px] text-[#28c59f] w-full"
                    id="BTC7"
                  >
                    0.12
                    <div className="font-semibold contents" id="BTC4">
                      {" "}
                    </div>
                    <div className="font-light contents" id="BTC5">
                      BTC
                    </div>
                    <div className="font-semibold contents" id="BTC6">
                      {" "}
                    </div>
                  </div>
                  <div
                    className="text-center text-xs font-['Work_Sans'] font-medium leading-[24px] text-[#28c59f] w-full"
                    id="BTC13"
                  >
                    0.12
                    <div className="font-semibold contents" id="BTC10">
                      {" "}
                    </div>
                    <div className="font-light contents" id="BTC11">
                      BTC
                    </div>
                    <div className="font-semibold contents" id="BTC12">
                      {" "}
                    </div>
                  </div>
                  <div
                    className="text-center text-xs font-['Work_Sans'] font-medium leading-[24px] text-[#28c59f] w-full"
                    id="BTC19"
                  >
                    0.12
                    <div className="font-semibold contents" id="BTC16">
                      {" "}
                    </div>
                    <div className="font-light contents" id="BTC17">
                      BTC
                    </div>
                    <div className="font-semibold contents" id="BTC18">
                      {" "}
                    </div>
                  </div>
                  <div
                    className="text-center text-xs font-['Work_Sans'] font-medium leading-[24px] text-[#28c59f] w-full"
                    id="BTC25"
                  >
                    0.12
                    <div className="font-semibold contents" id="BTC22">
                      {" "}
                    </div>
                    <div className="font-light contents" id="BTC23">
                      BTC
                    </div>
                    <div className="font-semibold contents" id="BTC24">
                      {" "}
                    </div>
                  </div>
                  <div
                    className="text-center text-xs font-['Work_Sans'] font-medium leading-[24px] text-[#28c59f] w-full"
                    id="BTC31"
                  >
                    0.12
                    <div className="font-semibold contents" id="BTC28">
                      {" "}
                    </div>
                    <div className="font-light contents" id="BTC29">
                      BTC
                    </div>
                    <div className="font-semibold contents" id="BTC30">
                      {" "}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between w-1/2 h-32 mt-px mr-32">
                  <div className="relative flex flex-col">
                    <div className="w-[307px] h-4 absolute top-0 left-0 flex flex-row justify-between items-start">
                      <div
                        className="text-center text-xs font-['Work_Sans'] font-medium leading-[16px] text-white"
                        id="USD1"
                      >
                        350
                        <div className="font-light contents" id="USD">
                          {" "}
                          USD
                        </div>
                      </div>
                      <div className="text-center text-xs font-['Work_Sans'] tracking-[0.5] text-[#e4e4e4]">
                        xyz
                      </div>
                    </div>
                    <div className="relative flex flex-row justify-between ml-[144px] items-start">
                      <div className="text-center text-xs font-['Work_Sans'] font-medium leading-[16px] text-white">
                        Long
                      </div>
                      <div className="text-center text-xs font-['Work_Sans'] tracking-[0.5] text-[#e4e4e4]">
                        xyz
                      </div>
                    </div>
                  </div>
                  <div className="relative flex flex-col">
                    <div className="w-[307px] h-4 absolute top-0 left-0 flex flex-row justify-between items-start">
                      <div
                        className="text-center text-xs font-['Work_Sans'] font-medium leading-[16px] text-white"
                        id="USD3"
                      >
                        350
                        <div className="font-light contents" id="USD2">
                          {" "}
                          USD
                        </div>
                      </div>
                      <div className="text-center text-xs font-['Work_Sans'] tracking-[0.5] text-[#e4e4e4]">
                        xyz
                      </div>
                    </div>
                    <div className="relative flex flex-row justify-between ml-[144px] items-start">
                      <div className="text-center text-xs font-['Work_Sans'] font-medium leading-[16px] text-white">
                        Long
                      </div>
                      <div className="text-center text-xs font-['Work_Sans'] tracking-[0.5] text-[#e4e4e4]">
                        xyz
                      </div>
                    </div>
                  </div>
                  <div className="relative flex flex-col">
                    <div className="w-[307px] h-4 absolute top-0 left-0 flex flex-row justify-between items-start">
                      <div
                        className="text-center text-xs font-['Work_Sans'] font-medium leading-[16px] text-white"
                        id="USD5"
                      >
                        350
                        <div className="font-light contents" id="USD4">
                          {" "}
                          USD
                        </div>
                      </div>
                      <div className="text-center text-xs font-['Work_Sans'] tracking-[0.5] text-[#e4e4e4]">
                        xyz
                      </div>
                    </div>
                    <div className="relative flex flex-row justify-between ml-[144px] items-start">
                      <div className="text-center text-xs font-['Work_Sans'] font-medium leading-[16px] text-white">
                        Short
                      </div>
                      <div className="text-center text-xs font-['Work_Sans'] tracking-[0.5] text-[#e4e4e4]">
                        xyz
                      </div>
                    </div>
                  </div>
                  <div className="relative flex flex-col">
                    <div className="w-[307px] h-4 absolute top-0 left-0 flex flex-row justify-between items-start">
                      <div
                        className="text-center text-xs font-['Work_Sans'] font-medium leading-[16px] text-white"
                        id="USD7"
                      >
                        350
                        <div className="font-light contents" id="USD6">
                          {" "}
                          USD
                        </div>
                      </div>
                      <div className="text-center text-xs font-['Work_Sans'] tracking-[0.5] text-[#e4e4e4]">
                        xyz
                      </div>
                    </div>
                    <div className="relative flex flex-row justify-between ml-[144px] items-start">
                      <div className="text-center text-xs font-['Work_Sans'] font-medium leading-[16px] text-white">
                        Long
                      </div>
                      <div className="text-center text-xs font-['Work_Sans'] tracking-[0.5] text-[#e4e4e4]">
                        xyz
                      </div>
                    </div>
                  </div>
                  <div className="relative flex flex-col">
                    <div className="w-[307px] h-4 absolute top-0 left-0 flex flex-row justify-between items-start">
                      <div
                        className="text-center text-xs font-['Work_Sans'] font-medium leading-[16px] text-white"
                        id="USD9"
                      >
                        350
                        <div className="font-light contents" id="USD8">
                          {" "}
                          USD
                        </div>
                      </div>
                      <div className="text-center text-xs font-['Work_Sans'] tracking-[0.5] text-[#e4e4e4]">
                        xyz
                      </div>
                    </div>
                    <div className="relative flex flex-row justify-between ml-[144px] items-start">
                      <div className="text-center text-xs font-['Work_Sans'] font-medium leading-[16px] text-white">
                        Long
                      </div>
                      <div className="text-center text-xs font-['Work_Sans'] tracking-[0.5] text-[#e4e4e4]">
                        xyz
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between w-12 shrink-0 h-32 items-start">
                  <button
                    className="border-solid border-white flex flex-col w-12 items-center px-2 py-0 border-0 rounded-[30px]  bg-black"
                    id="Button8"
                  >
                    <div className="text-xs font-['Bai_Jamjuree'] font-medium capitalize text-white">
                      Close
                    </div>
                  </button>
                  <button
                    className="border-solid border-white flex flex-col w-12 items-center px-2 py-0 border-0 rounded-[30px]  bg-black"
                    id="Button9"
                  >
                    <div className="text-xs font-['Bai_Jamjuree'] font-medium capitalize text-white">
                      Close
                    </div>
                  </button>
                  <button
                    className="border-solid border-white flex flex-col w-12 items-center px-2 py-0 border-0 rounded-[30px]  bg-black"
                    id="Button10"
                  >
                    <div className="text-xs font-['Bai_Jamjuree'] font-medium capitalize text-white">
                      Close
                    </div>
                  </button>
                  <button
                    className="border-solid border-white flex flex-col w-12 items-center px-2 py-0 border-0 rounded-[30px] bg-black"
                    id="Button11"
                  >
                    <div className="text-xs font-['Bai_Jamjuree'] font-medium capitalize text-white">
                      Close
                    </div>
                  </button>
                  <button
                    className="border-solid border-white flex flex-col w-12 items-center px-2 py-0 border-0 rounded-[30px] bg-black"
                    id="Button12"
                  >
                    <div className="text-xs font-['Bai_Jamjuree'] font-medium capitalize text-white">
                      Close
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-[-2px_0px_4px_0px_rgba(0,_0,_0,_0.1)] bg-[#000f37] flex flex-col justify-center pr-16 h-10 shrink-0 items-end">
        <div
          className="text-xs font-['Work_Sans'] leading-[24px] text-[#76809d]"
          id="Text1"
        >
          Powered by TIMECHAINLABS
        </div>
      </div>
    </div>
  );
};

export default Trade86;
