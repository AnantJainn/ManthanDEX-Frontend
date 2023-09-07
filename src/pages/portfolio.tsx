// import React from "react";
// import BellPinLight from "./bell-pin-light";
// import Button from "./Button";
// import { DivWrapper } from "./DivWrapper";
// import { Down } from "./Down";
// import { ExpandDownLight } from "./ExpandDownLight";
// import { Frame } from "./Frame";
// import { Frame48095477 } from "./Frame48095477";
// import { Frame48095479 } from "./Frame48095479";
// import { Frame48095497 } from "./Frame48095497";
// import { Frame48095501 } from "./Frame48095501";
// import { Frame48095502 } from "./Frame48095502";
// import { Frame48095503 } from "./Frame48095503";
// import { PropertyDefaultWrapper } from "./PropertyDefaultWrapper";
// import { PropertyWrapper } from "./PropertyWrapper";
// import { Sun } from "./Sun";
// // import "./style.css";
// import "../global.css";
// export const Trade = (): JSX.Element => {
//   return (
//     <div className="trade">
//       <div className="div-2">
//         <footer className="footer">
//           <div className="overlap-group-2">
//             <div className="text">Powered by TIMECHAINLABS</div>
//           </div>
//         </footer>
//         <div className="top-navigation">
//           <div className="frame-15">
//             <div className="frame-16">
//               <img className="group-2" alt="Group" src="group-1.png" />
//               <div className="frame-17">
//                 <Frame
//                   divClassName="frame-13004"
//                   property1="default"
//                   text="TRADE"
//                 />
//                 <PropertyWrapper
//                   className="frame-instance"
//                   divClassName="frame-13003-instance"
//                   property1="variant-3"
//                   rectangleClassName="frame-18"
//                   text="PORTFOLIO"
//                 />
//               </div>
//             </div>
//             <div className="frame-19">
//               <img
//                 className="metamask-fox"
//                 alt="Metamask fox"
//                 src="metamask-fox-1.png"
//               />
//               <BellPinLight
//                 className="design-component-instance-node-2"
//                 ellipse="ellipse-45-3.svg"
//                 ellipseClassName="bell-pin-light-instance"
//                 subtract="subtract-3.svg"
//               />
//               <div className="sign-up-button">
//                 <div className="frame-20">
//                   <Sun className="icon-instance-node" />
//                   <ExpandDownLight
//                     className="icon-instance-node"
//                     color="#E4E4E4"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="current-value">
//           <div className="overlap">
//             <div className="rectangle-2" />
//             <div className="frame-wrapper">
//               <div className="frame-21">
//                 <div className="overlap-group-wrapper">
//                   <div className="overlap-group-3">
//                     <img className="line" alt="Line" src="line-48.svg" />
//                     <div className="rectangle-3" />
//                   </div>
//                 </div>
//                 <div className="frame-22">
//                   <div className="text-wrapper-3">Current Value</div>
//                   <div className="frame-23">
//                     <div className="frame-24">
//                       <div className="text-wrapper-4">$360.54</div>
//                       <div className="frame-25">
//                         <div className="element-6">+4.66%</div>
//                         <Down className="down-instance" />
//                       </div>
//                     </div>
//                     <div className="frame-26">
//                       <div className="element-7">$345.95</div>
//                       <div className="bitcoin-4">(Last week)</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="overlap-wrapper">
//           <div className="overlap">
//             <div className="stroke" />
//             <div className="frame-27">
//               <div className="frame-28">
//                 <div className="text-wrapper-5">+82.9%</div>
//                 <div className="rectangle-wrapper">
//                   <div className="rectangle-4" />
//                 </div>
//                 <div className="text-wrapper-6">BTC</div>
//               </div>
//               <div className="frame-28">
//                 <div className="text-wrapper-5">+22.6%</div>
//                 <div className="img-wrapper">
//                   <img
//                     className="rectangle-5"
//                     alt="Rectangle"
//                     src="rectangle-180.svg"
//                   />
//                 </div>
//                 <div className="text-wrapper-6">BSV</div>
//               </div>
//               <div className="frame-28">
//                 <div className="text-wrapper-5">+53.6%</div>
//                 <div className="group-3">
//                   <div className="rectangle-6" />
//                 </div>
//                 <div className="text-wrapper-6">ETH</div>
//               </div>
//               <div className="frame-28">
//                 <div className="text-wrapper-7">-59.6%</div>
//                 <div className="rectangle-wrapper">
//                   <div className="rectangle-7" />
//                 </div>
//                 <div className="text-wrapper-6">BNB</div>
//               </div>
//               <div className="frame-28">
//                 <div className="text-wrapper-5">+53.6%</div>
//                 <div className="group-4">
//                   <div className="rectangle-8" />
//                 </div>
//                 <div className="text-wrapper-6">SOL</div>
//               </div>
//               <div className="frame-28">
//                 <div className="text-wrapper-7">-29.6%</div>
//                 <div className="group-3">
//                   <div className="rectangle-9" />
//                 </div>
//                 <div className="text-wrapper-6">DOGE</div>
//               </div>
//             </div>
//             <img className="line-2" alt="Line" src="line-47.svg" />
//           </div>
//         </div>
//         <div className="group-5">
//           <div className="overlap-2">
//             <div className="frame-29">
//               <div className="frame-30">
//                 <PropertyDefaultWrapper
//                   className="frame-instance"
//                   iconsCryptoBitcoinBtcClassName="frame-48095476"
//                   iconsCryptoBitcoinShape="shape-8.svg"
//                   property1="default"
//                 />
//                 <Frame48095477
//                   className="frame-instance"
//                   iconsCryptoEthClassName="frame-48095477-instance"
//                   iconsCryptoShape="shape-9.svg"
//                   property1="default"
//                 />
//                 <DivWrapper
//                   className="frame-instance"
//                   iconsCryptoXemOFctClassName="frame-48095478"
//                   iconsCryptoXemOShape="shape-10.svg"
//                   property1="default"
//                 />
//                 <Frame48095479
//                   className="frame-instance"
//                   image="image.png"
//                   property1="default"
//                 />
//               </div>
//               <div className="frame-30">
//                 <PropertyDefaultWrapper
//                   className="frame-instance"
//                   iconsCryptoBitcoinBtcClassName="frame-48095476-instance"
//                   iconsCryptoBitcoinShape="shape-11.svg"
//                   property1="default"
//                 />
//                 <Frame48095477
//                   className="frame-instance"
//                   group="group-13019-2.png"
//                   iconsCryptoEthClassNameOverride="frame-31"
//                   iconsCryptoImg="shape-12.svg"
//                   property1="variant-3"
//                 />
//                 <DivWrapper
//                   className="frame-instance"
//                   iconsCryptoXemOFctClassName="frame-48095478-instance"
//                   iconsCryptoXemOShape="shape-13.svg"
//                   property1="default"
//                 />
//                 <Frame48095479
//                   className="frame-instance"
//                   image="image-107-2.png"
//                   property1="default"
//                 />
//               </div>
//             </div>
//             <div className="group-6">
//               <Button
//                 className="button-14"
//                 property1="variant-3"
//                 propertyWrapperDivClassName="button-instance"
//                 propertyWrapperHasRectangle={false}
//                 propertyWrapperPropertyClassName="button-14-instance"
//                 propertyWrapperText="COLLECTIONS"
//               />
//               <div className="rectangle-10" />
//             </div>
//           </div>
//         </div>
//         <div className="group-7">
//           <div className="overlap-3">
//             <div className="frame-32">
//               <Frame48095497
//                 className="design-component-instance-node-2"
//                 property1="default"
//                 userLightEllipse="ellipse-45-4.svg"
//               />
//               <Frame48095501
//                 className="design-component-instance-node-2"
//                 property1="default"
//                 sendLightSubtract="subtract-4.svg"
//               />
//               <Frame48095502 property1="default" />
//               <Frame48095503 property1="default" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
export const Portfolio = () => {
  return (
    <div
      className="overflow-hidden bg-[#0c1326] flex flex-col gap-px w-full"
      id="TradeRoot"
    >
      {/* <p>hi</p> */}
      <div className="flex flex-col">
        <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.1)] bg-[#000921] flex flex-col justify-end h-16 shrink-0 px-16 py-2">
          <div className="bg-[#000921] flex flex-row justify-between mr-3 items-center">
            <div className="self-start flex flex-row gap-10 items-start">
              <div className="bg-[url(https://file.rendit.io/n/Fl3po3cyzZk8NtWFcmUt.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat relative flex flex-col justify-center w-12 shrink-0 items-end pt-3 pb-2 px-1">
                <img
                  src="https://file.rendit.io/n/pIe1HiGo6vEOBkMytbo7.svg"
                  className="w-4 h-3 absolute top-2 left-4"
                />
                <img
                  src="https://file.rendit.io/n/5HAnuHoHlQxKYJ1r08Kw.svg"
                  className="w-4 h-3 absolute top-3 left-1"
                />
                <img
                  src="https://file.rendit.io/n/E9la5OHeqjESppohLcfI.svg"
                  className="relative w-4"
                />
              </div>

              <a href="/trade-86">
                <div
                  className="text-sm font-['Bai_Jamjuree'] uppercase text-[#e5e7eb] mt-1 mr-5"
                  id="PROFILE"
                >
                  TRADE
                </div>
              </a>
              <div className="self-center flex flex-col w-20 shrink-0 items-start">
                <div
                  className="text-sm font-['Bai_Jamjuree'] font-medium uppercase text-white"
                  id="TRADE"
                >
                  PORTFOLIO
                </div>
                <div className="bg-[linear-gradient(#66c8ff,_#66c8ff),_linear-gradient(90deg,_#543a84_37%,#9c76eb_10771%,#8ab7fd_20854%)] bg-cover,_cover bg-50%_50%,_50%_50% bg-blend-normal,_normal bg-repeat-no-repeat,_no-repeat w-20 h-px shrink-0 rounded-sm" />
              </div>
            </div>
            <div className="flex flex-row gap-4 items-start">
              <img
                src="https://file.rendit.io/n/0HvvKTecgnWYkavaGTQ2.png"
                className="w-6 shrink-0"
                id="MetaMaskFox"
              />
              <div className="relative flex flex-col justify-end mt-1 w-4 shrink-0 items-center pt-4 px-1">
                <div
                  className="w-4 h-4 bg-[url(https://file.rendit.io/n/khtedfgG6LvXS5iaQata.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-0 left-0 flex flex-col items-end pr-px py-px"
                  id="Subtract"
                >
                  <div
                    className="bg-[#e55555] w-1 h-1 shrink-0 rounded-[50%]"
                    id="Ellipse1"
                  />
                </div>
                <img
                  src="https://file.rendit.io/n/yqXNlIULzR4COLBNnZ1f.svg"
                  className="relative w-2"
                  id="Ellipse"
                />
              </div>
              <button
                className="border-solid border-[#e4e4e4] flex flex-row gap-3 w-12 shrink-0 h-6 items-center px-1 border-0 rounded-[40px]"
                id="SignUpButton"
              >
                <div className="relative flex flex-col w-4 shrink-0 items-start">
                  <div className="border-solid border-[#e4e4e4] w-2 h-2 absolute top-1 left-1 border" />
                  <img
                    src="https://file.rendit.io/n/z2kdQU7y9jJa0mwWfQRa.svg"
                    className="relative w-4"
                  />
                </div>
                <img
                  src="https://file.rendit.io/n/AvMOBvMKR0QcCIN8TSko.svg"
                  className="w-2 shrink-0"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between mr-32 items-start">
          <div className="relative flex flex-col w-16 shrink-0 items-start">
            <div className="blur-[3px] w-6 h-40 bg-[rgba(6,_231,_237,_0)] absolute top-16 left-6 rounded" />
            <div className="w-6 h-40 bg-[rgba(6,_231,_237,_0)] absolute top-16 left-6 rounded" />
            <div className="bg-[#000921] relative flex flex-col gap-4 w-16 h-[909px] shrink-0 items-start py-16">
              <div className="bg-[#000921] flex flex-col gap-1 w-16 h-8 shrink-0 items-center py-2">
                <div
                  className="border-solid border-white w-2 h-2 shrink-0 border rounded-[50%]"
                  id="Ellipse3"
                />
                <img
                  src="https://file.rendit.io/n/J36plTpBCoHB8cK2FYsS.svg"
                  className="w-4"
                  id="Ellipse2"
                />
              </div>
              <div className="bg-[#000921] flex flex-col w-16 h-8 shrink-0 items-center py-2">
                <img
                  src="https://file.rendit.io/n/ZyHRsqntMFlsM0sxPvFI.svg"
                  className="w-3"
                  id="Subtract1"
                />
              </div>
              <div className="bg-[#000921] relative flex flex-col w-16 items-center px-5 py-2">
                <img
                  src="https://file.rendit.io/n/141lPTPCiNbu83dXa7Fv.svg"
                  className="w-px h-2 absolute top-3 left-6"
                />
                <img
                  src="https://file.rendit.io/n/CxOeBtfqCOhkgAiXNzyx.svg"
                  className="w-px h-1 absolute top-4 left-8"
                />
                <img
                  src="https://file.rendit.io/n/3sIRi2mr6Q79wo5EmZQf.svg"
                  className="w-px h-2 absolute top-3 left-8"
                />
                <div className="border-solid border-white relative w-5 h-4 shrink-0 border rounded-sm" />
              </div>
              <div className="bg-[#000921] flex flex-col w-16 h-8 shrink-0 items-center py-1">
                <div
                  className="border-solid border-white flex flex-col w-4 h-4 shrink-0 items-start pl-1 py-1 border rounded-[50%]"
                  id="Ellipse4"
                >
                  <img
                    src="https://file.rendit.io/n/gRhxxo712EE9eKwq2jTt.svg"
                    className="ml-1 w-1"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-16 gap-10 w-[1082px]">
            <div className="flex flex-row gap-12 items-start">
              <div className="relative flex flex-col w-[235px] shrink-0">
                <div className="w-[235px] h-40 bg-[#092879] absolute top-0 left-0 rounded-tl-lg rounded-tr-lg" />
                <div
                  className="border-solid border-white w-56 h-0 absolute top-40 left-2 border-0"
                  id="Line"
                />
                <div className="border-solid border-white relative flex flex-col gap-6 h-[321px] shrink-0 items-start px-6 py-4 border-0 rounded-lg">
                  <div className="text-lg font-['Bai_Jamjuree'] font-bold capitalize text-[#e4e4e4]">
                    Current Value
                  </div>
                  <div className="self-stretch flex flex-col mr-px gap-3">
                    <div className="flex flex-row gap-3 items-start">
                      <div className="text-2xl font-['Bai_Jamjuree'] font-bold capitalize text-white mr-2">
                        $360.54
                      </div>
                      <div
                        className="text-sm font-['Oxygen'] font-light text-[#55c793] mt-px"
                        id="Element2"
                      >
                        +4.66%
                      </div>
                      <img
                        src="https://file.rendit.io/n/2gX7d1rnAXbLSZs8odYv.svg"
                        className="mt-1 w-2 shrink-0"
                        id="Shape"
                      />
                    </div>
                    <div className="flex flex-row mr-16 gap-2 items-start">
                      <div
                        className="text-sm font-['Work_Sans'] font-medium text-white"
                        id="Element3"
                      >
                        $345.95
                      </div>
                      <div
                        className="text-xs font-['Work_Sans'] font-light text-[#e4e4e4] mt-1"
                        id="Bitcoin"
                      >
                        (Last week)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col justify-center w-[791px] items-end py-40">
                <div className="w-[789px] h-[321px] bg-[#000921] absolute top-0 left-0 flex flex-col gap-2 items-start px-20 py-2 rounded-lg">
                  <div className="flex flex-row mb-px gap-5 items-start">
                    <div className="text-xs font-['Bai_Jamjuree'] text-[#22ccc4]">
                      +82.9%
                    </div>
                    <div className="text-xs font-['Bai_Jamjuree'] text-[#22ccc4] mr-0">
                      +22.6%
                    </div>
                    <div className="text-xs font-['Bai_Jamjuree'] text-[#22ccc4] mr-px">
                      +53.6%
                    </div>
                    <div className="text-xs font-['Bai_Jamjuree'] text-[#be3c5b] mr-px">
                      -59.6%
                    </div>
                    <div className="text-xs font-['Bai_Jamjuree'] text-[#22ccc4] mr-px">
                      +53.6%
                    </div>
                    <div className="text-xs font-['Bai_Jamjuree'] text-[#be3c5b]">
                      -29.6%
                    </div>
                  </div>
                  <div className="flex flex-row ml-3 gap-12 items-start">
                    <div className="bg-[#2b2b36] flex flex-col mr-0 w-2 shrink-0 h-64 items-start py-6 rounded">
                      <div className="bg-[#22ccc4] w-2 h-24 shrink-0 rounded-tl rounded-tr" />
                    </div>
                    <div className="bg-[#2b2b36] flex flex-col mr-0 w-2 shrink-0 h-64 items-start pt-24 pb-32 pl-0 rounded">
                      <div className="bg-[#22ccc4] ml-0 w-2 h-8 shrink-0 rounded-tl rounded-tr" />
                    </div>
                    <div className="relative flex flex-col w-2 shrink-0 items-start pt-16 pb-32">
                      <div className="w-2 h-64 bg-[#2b2b36] absolute top-0 left-0 rounded" />
                      <div className="bg-[#22ccc4] relative ml-0 w-2 h-16 shrink-0 rounded-tl rounded-tr" />
                    </div>
                    <div className="bg-[#2b2b36] flex flex-col justify-end mr-0 w-2 shrink-0 h-64 items-start py-16 rounded">
                      <div className="bg-[#be3c5b] w-2 h-20 shrink-0 rounded-br rounded-bl" />
                    </div>
                    <div className="relative flex flex-col mr-0 w-2 shrink-0 items-start pt-10 pb-32">
                      <div className="w-2 h-64 bg-[#2b2b36] absolute top-0 left-0 rounded" />
                      <div className="bg-[#22ccc4] relative w-2 h-24 shrink-0 rounded-tl rounded-tr" />
                    </div>
                    <div className="relative flex flex-col w-2 shrink-0 items-start pt-32 pb-24">
                      <div className="w-2 h-64 bg-[#2b2b36] absolute top-0 left-0 rounded" />
                      <div className="bg-[#be3c5b] relative w-2 h-8 shrink-0 rounded-br rounded-bl" />
                    </div>
                  </div>
                  <div className="flex flex-row ml-2 gap-8 items-start">
                    <div className="text-xs font-['Bai_Jamjuree'] text-white mt-px mr-1">
                      BTC
                    </div>
                    <div className="text-xs font-['Bai_Jamjuree'] text-white mt-px mr-1">
                      BSV
                    </div>
                    <div className="text-xs font-['Bai_Jamjuree'] text-white mt-px mr-1">
                      ETH
                    </div>
                    <div className="text-xs font-['Bai_Jamjuree'] text-white mt-px mr-1">
                      BNB
                    </div>
                    <div className="text-xs font-['Bai_Jamjuree'] text-white">
                      SOL
                    </div>
                    <div className="text-xs font-['Bai_Jamjuree'] text-white mt-px">
                      DOGE
                    </div>
                  </div>
                </div>
                <img
                  src="https://file.rendit.io/n/ncV8i4IH1cjZqv1Gq0ah.png"
                  className="relative"
                  id="Line1"
                />
              </div>
            </div>
            <div className="flex flex-col mr-px items-start">
              <button
                className="bg-[#092879] flex flex-col h-8 shrink-0 items-center py-2 rounded-tl-lg rounded-tr-lg"
                id="Button1"
              >
                <div
                  className="text-sm font-['Bai_Jamjuree'] font-medium uppercase text-white mx-6"
                  id="TRADE1"
                >
                  COLLECTIONS
                </div>
              </button>
              <div className="self-stretch relative flex flex-col">
                <div className="w-[244px] h-12 overflow-hidden bg-[#000f37] absolute top-6 left-0 flex flex-row justify-center gap-16 items-center p-3 rounded-lg">
                  <div className="flex flex-row gap-3 w-16 shrink-0 items-center">
                    <div
                      className="bg-[url(https://file.rendit.io/n/WylSp7o4WF9zroSshRwo.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col w-5 shrink-0 h-5 items-start pl-1 py-1"
                      id="Fill"
                    >
                      <img
                        src="https://file.rendit.io/n/eeovvA4GN22iWpSZUIF5.svg"
                        className="w-3"
                        id="Shape1"
                      />
                    </div>
                    <div className="self-start flex flex-col w-8 shrink-0 items-start">
                      <div className="text-sm font-['Bai_Jamjuree'] font-light text-white">
                        BTC
                      </div>
                      <div className="text-xs font-['Work_Sans'] font-light text-white">
                        Bitcoin
                      </div>
                    </div>
                  </div>
                  <div
                    className="text-right text-sm font-['Bai_Jamjuree'] text-white"
                    id="Element10"
                  >
                    $ 30,643.00
                  </div>
                </div>
                <div className="w-[244px] h-12 overflow-hidden bg-[#000f37] absolute top-6 left-[278.6669921875px] flex flex-row justify-center gap-12 items-center p-3 rounded-lg">
                  <div className="flex flex-row gap-3 w-20 shrink-0 items-center">
                    <div
                      className="bg-[url(https://file.rendit.io/n/VlDvJSBgc6IwIye2ZjxP.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col w-5 shrink-0 items-center px-1 py-px"
                      id="Fill1"
                    >
                      <img
                        src="https://file.rendit.io/n/cUwEFlHYb7qgGwhZfiu1.svg"
                        className="w-3"
                        id="Shape2"
                      />
                    </div>
                    <div className="self-start flex flex-col w-12 shrink-0 items-start">
                      <div
                        className="text-sm font-['Bai_Jamjuree'] font-light text-white"
                        id="BTC3"
                      >
                        ETH
                      </div>
                      <div
                        className="text-xs font-['Work_Sans'] font-light text-white"
                        id="Bitcoin2"
                      >
                        Ethereum
                      </div>
                    </div>
                  </div>
                  <div
                    className="text-right text-sm font-['Bai_Jamjuree'] text-white"
                    id="Element11"
                  >
                    $ 30,643.00
                  </div>
                </div>
                <div className="w-[244px] h-12 overflow-hidden bg-[#000f37] absolute top-6 left-[557.3330078125px] flex flex-row justify-center gap-16 items-center p-3 rounded-lg">
                  <div className="flex flex-row gap-3 w-16 shrink-0 items-center">
                    <div
                      className="bg-[url(https://file.rendit.io/n/Zir1zN2IOI9Full8K7Uv.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col w-5 shrink-0 h-5 items-center py-1"
                      id="Fill2"
                    >
                      <img
                        src="https://file.rendit.io/n/0SGKy62n28aShmlcrJO4.svg"
                        className="w-3"
                        id="Shape3"
                      />
                    </div>
                    <div className="self-start flex flex-col w-8 shrink-0 items-start">
                      <div
                        className="text-sm font-['Bai_Jamjuree'] font-light text-white"
                        id="BTC4"
                      >
                        XEM
                      </div>
                      <div
                        className="text-xs font-['Work_Sans'] font-light text-white"
                        id="Bitcoin3"
                      >
                        NEM
                      </div>
                    </div>
                  </div>
                  <div
                    className="text-right text-sm font-['Bai_Jamjuree'] text-white"
                    id="Element12"
                  >
                    $ 30,643.00
                  </div>
                </div>
                <div className="w-[244px] h-16 overflow-hidden bg-[#000f37] absolute top-6 left-[836px] flex flex-row justify-center gap-6 items-center p-3 rounded-lg">
                  <div className="self-start flex flex-row gap-3 w-32 shrink-0 items-start">
                    <img
                      src="https://file.rendit.io/n/wmbYu1QrD77E187AhGTq.png"
                      className="mt-1 w-5 shrink-0"
                      id="Image1"
                    />
                    <div className="flex flex-col w-24 shrink-0 items-start">
                      <div
                        className="text-sm font-['Bai_Jamjuree'] font-light text-white"
                        id="BTC5"
                      >
                        BSV
                      </div>
                      <div
                        className="text-xs font-['Work_Sans'] font-light text-white"
                        id="Bitcoin4"
                      >
                        Bitcoin Satoshi Vision
                      </div>
                    </div>
                  </div>
                  <div
                    className="text-right text-sm font-['Bai_Jamjuree'] text-white"
                    id="Element13"
                  >
                    $ 368.00
                  </div>
                </div>
                <div className="w-[244px] h-12 overflow-hidden bg-[#000f37] absolute top-32 left-0 flex flex-row justify-center gap-16 items-center p-3 rounded-lg">
                  <div className="flex flex-row gap-3 w-16 shrink-0 items-center">
                    <div
                      className="bg-[url(https://file.rendit.io/n/WylSp7o4WF9zroSshRwo.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col w-5 shrink-0 h-5 items-start pl-1 py-1"
                      id="Fill3"
                    >
                      <img
                        src="https://file.rendit.io/n/eeovvA4GN22iWpSZUIF5.svg"
                        className="w-3"
                        id="Shape4"
                      />
                    </div>
                    <div className="self-start flex flex-col w-8 shrink-0 items-start">
                      <div className="text-sm font-['Bai_Jamjuree'] font-light text-white">
                        BTC
                      </div>
                      <div className="text-xs font-['Work_Sans'] font-light text-white">
                        Bitcoin
                      </div>
                    </div>
                  </div>
                  <div
                    className="text-right text-sm font-['Bai_Jamjuree'] text-white"
                    id="Element14"
                  >
                    $ 30,643.00
                  </div>
                </div>
                <div className="w-[244px] h-32 overflow-hidden bg-[#000f37] absolute top-24 left-[278.6669921875px] flex flex-col gap-2 items-center pr-3 py-3 rounded-lg">
                  <div className="flex flex-row mb-0 gap-12 w-56 items-center">
                    <div className="self-start flex flex-row gap-3 w-20 shrink-0 items-center">
                      <div
                        className="bg-[url(https://file.rendit.io/n/7sClLWV5FvuAGDFxvP42.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col w-5 shrink-0 items-center px-1 py-px"
                        id="Fill4"
                      >
                        <img
                          src="https://file.rendit.io/n/XYvf2lCQmweIWKahhyIv.svg"
                          className="w-3"
                          id="Shape5"
                        />
                      </div>
                      <div className="self-start flex flex-col w-12 shrink-0 items-start">
                        <div
                          className="text-sm font-['Bai_Jamjuree'] font-light text-white"
                          id="BTC8"
                        >
                          ETH
                        </div>
                        <div
                          className="text-xs font-['Work_Sans'] font-light text-white"
                          id="Bitcoin6"
                        >
                          Ethereum
                        </div>
                      </div>
                    </div>
                    <div
                      className="text-right text-sm font-['Bai_Jamjuree'] text-white"
                      id="Element15"
                    >
                      $ 30,643.00
                    </div>
                  </div>
                  <div className="self-end flex flex-row mr-px gap-2 w-16 items-center">
                    <div
                      className="text-xs font-['Work_Sans'] text-[#55c793] self-start"
                      id="Element16"
                    >
                      +4.66%
                    </div>
                    <img
                      src="https://file.rendit.io/n/GzclWFMnKl5oKVIqhbDo.svg"
                      className="w-2 shrink-0"
                      id="Shape6"
                    />
                  </div>
                  <div
                    className="bg-[url(https://file.rendit.io/n/9CKJpEQnIdPLx5YX3Ngt.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row ml-3 pt-0 gap-3 w-56 items-center"
                    id="Path"
                  >
                    <img
                      src="https://file.rendit.io/n/6RNHpT5VAEOYeHzOOTKv.svg"
                      className="mb-0"
                      id="Shade"
                    />
                    <img
                      src="https://file.rendit.io/n/Zxf0biUHj23Y3pqrgWFL.svg"
                      className="self-start mt-1 w-4 shrink-0"
                      id="Shade1"
                    />
                  </div>
                </div>
                <div className="w-[244px] h-12 overflow-hidden bg-[#000f37] absolute top-32 left-[557.3330078125px] flex flex-row justify-center gap-16 items-center p-3 rounded-lg">
                  <div className="flex flex-row gap-3 w-16 shrink-0 items-center">
                    <div
                      className="bg-[url(https://file.rendit.io/n/Zir1zN2IOI9Full8K7Uv.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col w-5 shrink-0 h-5 items-center py-1"
                      id="Fill5"
                    >
                      <img
                        src="https://file.rendit.io/n/0SGKy62n28aShmlcrJO4.svg"
                        className="w-3"
                        id="Shape7"
                      />
                    </div>
                    <div className="self-start flex flex-col w-8 shrink-0 items-start">
                      <div
                        className="text-sm font-['Bai_Jamjuree'] font-light text-white"
                        id="BTC9"
                      >
                        XEM
                      </div>
                      <div
                        className="text-xs font-['Work_Sans'] font-light text-white"
                        id="Bitcoin7"
                      >
                        NEM
                      </div>
                    </div>
                  </div>
                  <div
                    className="text-right text-sm font-['Bai_Jamjuree'] text-white"
                    id="Element17"
                  >
                    $ 30,643.00
                  </div>
                </div>
                <div className="w-[244px] h-16 overflow-hidden bg-[#000f37] absolute top-32 left-[836px] flex flex-row justify-center gap-6 items-center p-3 rounded-lg">
                  <div className="self-start flex flex-row gap-3 w-32 shrink-0 items-start">
                    <img
                      src="https://file.rendit.io/n/wmbYu1QrD77E187AhGTq.png"
                      className="mt-1 w-5 shrink-0"
                      id="Image2"
                    />
                    <div className="flex flex-col w-24 shrink-0 items-start">
                      <div
                        className="text-sm font-['Bai_Jamjuree'] font-light text-white"
                        id="BTC10"
                      >
                        BSV
                      </div>
                      <div
                        className="text-xs font-['Work_Sans'] font-light text-white"
                        id="Bitcoin8"
                      >
                        Bitcoin Satoshi Vision
                      </div>
                    </div>
                  </div>
                  <div
                    className="text-right text-sm font-['Bai_Jamjuree'] text-white"
                    id="Element18"
                  >
                    $ 368.00
                  </div>
                </div>
                <div className="border-solid border-white relative h-[371px] shrink-0 border-0 rounded-tr-lg rounded-br-lg rounded-bl-lg" />
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
