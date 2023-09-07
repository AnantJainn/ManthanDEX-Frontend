import React from "react";
// import "./style.css";

export const Frame = (): JSX.Element => {
  //   return (
  //     <div className="frame">
  //       <div className="group">
  //         <div className="div">
  //           <div className="avatar">
  //             <div className="overlap-group">
  //               <div className="text-wrapper">B</div>
  //             </div>
  //           </div>
  //           <div className="div-2">
  //             <div className="div-3">
  //               <div className="div-4">
  //                 <div className="text-wrapper-2">BTC</div>
  //                 <div className="text-wrapper-3">News</div>
  //               </div>
  //               <p className="bitcoin-baru-saja-me">
  //                 Bitcoin baru saja menguat 5 poin kalau tidak salah lho
  //               </p>
  //               <div className="div-5">
  //                 <div className="group-2">
  //                   <div className="text-wrapper-4">+39.69%</div>
  //                   <img
  //                     className="combined-shape"
  //                     alt="Combined shape"
  //                     src="combined-shape.svg"
  //                   />
  //                 </div>
  //                 <div className="text-wrapper-5">Trade now</div>
  //               </div>
  //             </div>
  //             <div className="text-wrapper-6">3 hours ago</div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="group">
  //         <div className="div">
  //           <div className="avatar">
  //             <div className="overlap-group">
  //               <div className="text-wrapper">B</div>
  //             </div>
  //           </div>
  //           <div className="div-2">
  //             <div className="div-3">
  //               <div className="div-4">
  //                 <div className="text-wrapper-2">BTC</div>
  //                 <div className="text-wrapper-3">News</div>
  //               </div>
  //               <p className="bitcoin-baru-saja-me">
  //                 Bitcoin baru saja menguat 5 poin kalau tidak salah lho
  //               </p>
  //               <div className="div-5">
  //                 <div className="group-2">
  //                   <div className="text-wrapper-4">+39.69%</div>
  //                   <img
  //                     className="combined-shape"
  //                     alt="Combined shape"
  //                     src="image.svg"
  //                   />
  //                 </div>
  //                 <div className="text-wrapper-5">Trade now</div>
  //               </div>
  //             </div>
  //             <div className="text-wrapper-6">3 hours ago</div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="group">
  //         <div className="div">
  //           <div className="avatar">
  //             <div className="overlap-group">
  //               <div className="text-wrapper">B</div>
  //             </div>
  //           </div>
  //           <div className="div-2">
  //             <div className="div-3">
  //               <div className="div-4">
  //                 <div className="text-wrapper-2">BTC</div>
  //                 <div className="text-wrapper-3">News</div>
  //               </div>
  //               <p className="bitcoin-baru-saja-me">
  //                 Bitcoin baru saja menguat 5 poin kalau tidak salah lho
  //               </p>
  //               <div className="div-5">
  //                 <div className="group-2">
  //                   <div className="text-wrapper-4">+39.69%</div>
  //                   <img
  //                     className="combined-shape"
  //                     alt="Combined shape"
  //                     src="combined-shape-2.svg"
  //                   />
  //                 </div>
  //                 <div className="text-wrapper-5">Trade now</div>
  //               </div>
  //             </div>
  //             <div className="text-wrapper-6">3 hours ago</div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="group">
  //         <div className="div">
  //           <div className="avatar">
  //             <div className="overlap-group">
  //               <div className="text-wrapper">B</div>
  //             </div>
  //           </div>
  //           <div className="div-2">
  //             <div className="div-3">
  //               <div className="div-4">
  //                 <div className="text-wrapper-2">BTC</div>
  //                 <div className="text-wrapper-3">News</div>
  //               </div>
  //               <p className="bitcoin-baru-saja-me">
  //                 Bitcoin baru saja menguat 5 poin kalau tidak salah lho
  //               </p>
  //               <div className="div-5">
  //                 <div className="group-2">
  //                   <div className="text-wrapper-4">+39.69%</div>
  //                   <img
  //                     className="combined-shape"
  //                     alt="Combined shape"
  //                     src="combined-shape-3.svg"
  //                   />
  //                 </div>
  //                 <div className="text-wrapper-5">Trade now</div>
  //               </div>
  //             </div>
  //             <div className="text-wrapper-6">3 hours ago</div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  return (
    <div className="frame align-items-start flex flex-col gap-16 p-0 8 position-relative w-80">
      <div className="group h-89 position-relative w-76">
        <div className="div align-items-start flex gap-8 position-relative w-76">
          <div className="avatar h-32 position-relative w-34">
            <div className="overlap-group bg-gradient-to-br from-pink-400 to-purple-900 rounded-16 h-32 position-relative w-32">
              <div className="text-wrapper text-light left-12 letter-spacing-0 line-height-normal position-absolute text-center top-11 whitespace-nowrap width-9">
                B
              </div>
            </div>
          </div>
          <div className="div-2  flex flex-col gap-4 position-relative">
            <div className="div-3  flex flex-col gap-8 position-relative">
              <div className="div-4 align-items-center inline-flex gap-12 position-relative">
                <div className="text-wrapper-2 text-white font-semibold text-14 opacity-80 relative width-fit">
                  BTC
                </div>
                <div className="text-wrapper-3 text-gray-300 font-normal text-11 opacity-70 relative whitespace-nowrap width-fit">
                  News
                </div>
              </div>
              <p className="bitcoin-baru-saja-me text-white font-light text-10 relative width-248">
                Bitcoin baru saja menguat 5 poin kalau tidak salah lho
              </p>
              <div className="div-5 align-items-center flex justify-between position-relative w-215">
                <div className="group-2 h-16 position-relative w-70">
                  <div className="text-wrapper-4 text-green-500 font-normal text-13 left-16 letter-spacing-0 line-height-normal absolute top--1 whitespace-nowrap">
                    +39.69%
                  </div>
                  <img
                    className="combined-shape h-5 left-3 position-absolute top-5 w-5"
                    alt="Combined shape"
                    src="image.svg"
                  />
                </div>
                <div className="text-wrapper-5 text-blue-500 font-normal text-12 relative text-right whitespace-nowrap width-fit">
                  Trade now
                </div>
              </div>
            </div>
            <div className="text-wrapper-6 text-white-50 font-normal text-9 relative width-52">
              3 hours ago
            </div>
          </div>
        </div>
      </div>
      <div className="group h-89 position-relative w-76">
        <div className="div align-items-start flex gap-8 position-relative w-76">
          <div className="avatar h-32 position-relative w-34">
            <div className="overlap-group bg-gradient-to-br from-pink-400 to-purple-900 rounded-16 h-32 position-relative w-32">
              <div className="text-wrapper text-light left-12 letter-spacing-0 line-height-normal position-absolute text-center top-11 whitespace-nowrap width-9">
                B
              </div>
            </div>
          </div>
          <div className="div-2  flex flex-col gap-4 position-relative">
            <div className="div-3  flex flex-col gap-8 position-relative">
              <div className="div-4 align-items-center inline-flex gap-12 position-relative">
                <div className="text-wrapper-2 text-white font-semibold text-14 opacity-80 relative width-fit">
                  BTC
                </div>
                <div className="text-wrapper-3 text-gray-300 font-normal text-11 opacity-70 relative whitespace-nowrap width-fit">
                  News
                </div>
              </div>
              <p className="bitcoin-baru-saja-me text-white font-light text-10 relative width-248">
                Bitcoin baru saja menguat 5 poin kalau tidak salah lho
              </p>
              <div className="div-5 align-items-center flex justify-between position-relative w-215">
                <div className="group-2 h-16 position-relative w-70">
                  <div className="text-wrapper-4 text-green-500 font-normal text-13 left-16 letter-spacing-0 line-height-normal absolute top--1 whitespace-nowrap">
                    +39.69%
                  </div>
                  <img
                    className="combined-shape h-5 left-3 position-absolute top-5 w-5"
                    alt="Combined shape"
                    src="image.svg"
                  />
                </div>
                <div className="text-wrapper-5 text-blue-500 font-normal text-12 relative text-right whitespace-nowrap width-fit">
                  Trade now
                </div>
              </div>
            </div>
            <div className="text-wrapper-6 text-white-50 font-normal text-9 relative width-52">
              3 hours ago
            </div>
          </div>
        </div>
      </div>
      <div className="group h-89 position-relative w-76">
        <div className="div align-items-start flex gap-8 position-relative w-76">
          <div className="avatar h-32 position-relative w-34">
            <div className="overlap-group bg-gradient-to-br from-pink-400 to-purple-900 rounded-16 h-32 position-relative w-32">
              <div className="text-wrapper text-light left-12 letter-spacing-0 line-height-normal position-absolute text-center top-11 whitespace-nowrap width-9">
                B
              </div>
            </div>
          </div>
          <div className="div-2  flex flex-col gap-4 position-relative">
            <div className="div-3  flex flex-col gap-8 position-relative">
              <div className="div-4 align-items-center inline-flex gap-12 position-relative">
                <div className="text-wrapper-2 text-white font-semibold text-14 opacity-80 relative width-fit">
                  BTC
                </div>
                <div className="text-wrapper-3 text-gray-300 font-normal text-11 opacity-70 relative whitespace-nowrap width-fit">
                  News
                </div>
              </div>
              <p className="bitcoin-baru-saja-me text-white font-light text-10 relative width-248">
                Bitcoin baru saja menguat 5 poin kalau tidak salah lho
              </p>
              <div className="div-5 align-items-center flex justify-between position-relative w-215">
                <div className="group-2 h-16 position-relative w-70">
                  <div className="text-wrapper-4 text-green-500 font-normal text-13 left-16 letter-spacing-0 line-height-normal absolute top--1 whitespace-nowrap">
                    +39.69%
                  </div>
                  <img
                    className="combined-shape h-5 left-3 position-absolute top-5 w-5"
                    alt="Combined shape"
                    src="image.svg"
                  />
                </div>
                <div className="text-wrapper-5 text-blue-500 font-normal text-12 relative text-right whitespace-nowrap width-fit">
                  Trade now
                </div>
              </div>
            </div>
            <div className="text-wrapper-6 text-white-50 font-normal text-9 relative width-52">
              3 hours ago
            </div>
          </div>
        </div>
      </div>
      <div className="group h-89 position-relative w-76">
        <div className="div align-items-start flex gap-8 position-relative w-76">
          <div className="avatar h-32 position-relative w-34">
            <div className="overlap-group bg-gradient-to-br from-pink-400 to-purple-900 rounded-16 h-32 position-relative w-32">
              <div className="text-wrapper text-light left-12 letter-spacing-0 line-height-normal position-absolute text-center top-11 whitespace-nowrap width-9">
                B
              </div>
            </div>
          </div>
          <div className="div-2  flex flex-col gap-4 position-relative">
            <div className="div-3  flex flex-col gap-8 position-relative">
              <div className="div-4 align-items-center inline-flex gap-12 position-relative">
                <div className="text-wrapper-2 text-white font-semibold text-14 opacity-80 relative width-fit">
                  BTC
                </div>
                <div className="text-wrapper-3 text-gray-300 font-normal text-11 opacity-70 relative whitespace-nowrap width-fit">
                  News
                </div>
              </div>
              <p className="bitcoin-baru-saja-me text-white font-light text-10 relative width-248">
                Bitcoin baru saja menguat 5 poin kalau tidak salah lho
              </p>
              <div className="div-5 align-items-center flex justify-between position-relative w-215">
                <div className="group-2 h-16 position-relative w-70">
                  <div className="text-wrapper-4 text-green-500 font-normal text-13 left-16 letter-spacing-0 line-height-normal absolute top--1 whitespace-nowrap">
                    +39.69%
                  </div>
                  <img
                    className="combined-shape h-5 left-3 position-absolute top-5 w-5"
                    alt="Combined shape"
                    src="image.svg"
                  />
                </div>
                <div className="text-wrapper-5 text-blue-500 font-normal text-12 relative text-right whitespace-nowrap width-fit">
                  Trade now
                </div>
              </div>
            </div>
            <div className="text-wrapper-6 text-white-50 font-normal text-9 relative width-52">
              3 hours ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
