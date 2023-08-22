// import { FunctionComponent, memo } from "react";

// const BtcUsd: FunctionComponent = memo(() => {
//     return (
//         <div className="w-[765px] h-[464px] relative">
//             <div className="w-[765px] h-[464px] left-0 top-0 absolute opacity-30 bg-sky-300 rounded-[7px] blur-[20px]" />
//             <div className="w-[765px] h-[464px] left-0 top-0 absolute bg-slate-950 rounded-[7px] border backdrop-blur-[50px]" />
//             <div className="w-[734px] left-0 top-[46px] absolute flex-col justify-start items-center gap-6 inline-flex">
//                 <div className="w-[734px] px-4 justify-start items-center gap-[15px] inline-flex">
//                     <div className="grow shrink basis-0 self-stretch justify-start items-start gap-[30px] flex">
//                         <div className="justify-start items-start gap-3 flex">
//                             <div className="w-5 h-5 relative" />
//                             <div className="w-5 h-5 relative">
//                                 <img className="w-[10.83px] h-[13.31px] left-[4.58px] top-[3.78px] absolute rounded-[0.15px] border border-white" src="https://via.placeholder.com/11x13" />
//                                 <img className="w-[5.83px] h-[7.47px] left-[7.08px] top-[9.62px] absolute rounded-[0.15px] border border-white" src="https://via.placeholder.com/6x7" />
//                             </div>
//                         </div>
//                         <div className="h-[18px] justify-start items-start gap-10 flex">
//                             <div className="text-white text-sm font-semibold">CRYPTO</div>
//                             <div className="text-white text-sm font-medium">STOCKS</div>
//                             <div className="text-white text-sm font-medium">COMMODITIES</div>
//                             <div className="text-white text-sm font-medium">FOREX</div>
//                             <div className="text-white text-sm font-medium">INDICES</div>
//                         </div>
//                     </div>
//                     <div className="w-40 h-3.5 relative">
//                     </div>
//                 </div>
//                 <div className="w-[734px] flex-col justify-start items-start gap-4 flex">
//                     <div className="self-stretch grow shrink basis-0 px-10 justify-between items-start gap-[60px] inline-flex">
//                         <div className="text-white text-opacity-80 text-sm font-semibold leading-normal">Market</div>
//                         <div className="text-white text-opacity-80 text-sm font-semibold leading-normal">24 Hour</div>
//                         <div className="rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
//                             <div className="text-center text-white text-opacity-80 text-sm font-bold leading-normal">Price</div>
//                         </div>
//                         <div className="rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
//                             <div className="text-center text-white text-opacity-80 text-sm font-bold leading-normal">7 Days</div>
//                         </div>
//                         <div className="rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
//                             <div className="text-center text-white text-opacity-80 text-sm font-bold leading-normal">This Month</div>
//                         </div>
//                     </div>
//                     <div className="w-[726px] h-[292px] flex-col justify-start items-start gap-[11px] flex">
//                         <div className="w-[725px] h-[27px] px-4 justify-between items-start gap-4 inline-flex">
//                             <div className="justify-start items-start gap-2 flex">
//                                 <div className="w-6 h-6 relative" />
//                                 <div className="text-white text-sm font-normal leading-normal">ETH/USD</div>
//                             </div>
//                             <div className="text-white text-sm font-normal leading-normal">+2.50%</div>
//                             <div className="text-white text-sm font-normal leading-normal">26.100</div>
//                         </div>
//                         <div className="w-[726px] h-[27px] px-4 justify-between items-start gap-4 inline-flex">
//                             <div className="justify-start items-start gap-2 flex">
//                                 <div className="w-6 h-6 relative" />
//                                 <div className="text-white text-sm font-normal leading-normal">ETH/USD</div>
//                             </div>
//                             <div className="text-white text-sm font-normal leading-normal">+2.50%</div>
//                             <div className="text-white text-sm font-normal leading-normal">26.100</div>
//                         </div>
//                         <div className="w-[726px] h-[27px] px-4 justify-between items-start gap-4 inline-flex">
//                             <div className="justify-start items-start gap-2 flex">
//                                 <div className="w-6 h-6 relative" />
//                                 <div className="text-white text-sm font-normal leading-normal">ETH/USD</div>
//                             </div>
//                             <div className="text-white text-sm font-normal leading-normal">+2.50%</div>
//                             <div className="text-white text-sm font-normal leading-normal">26.100</div>
//                         </div>
//                         <div className="w-[726px] h-[27px] px-4 justify-between items-start gap-4 inline-flex">
//                             <div className="justify-start items-start gap-2 flex">
//                                 <div className="w-6 h-6 relative" />
//                                 <div className="text-white text-sm font-normal leading-normal">ETH/USD</div>
//                             </div>
//                             <div className="text-white text-sm font-normal leading-normal">+2.50%</div>
//                             <div className="text-white text-sm font-normal leading-normal">26.100</div>
//                         </div>
//                         <div className="w-[726px] h-[27px] px-4 justify-between items-start gap-4 inline-flex">
//                             <div className="justify-start items-start gap-2 flex">
//                                 <div className="w-6 h-6 relative" />
//                                 <div className="text-white text-sm font-normal leading-normal">ETH/USD</div>
//                             </div>
//                             <div className="text-white text-sm font-normal leading-normal">+2.50%</div>
//                             <div className="text-white text-sm font-normal leading-normal">26.100</div>
//                         </div>
//                         <div className="w-[726px] h-[26px] px-4 justify-between items-start gap-4 inline-flex">
//                             <div className="justify-start items-start gap-2 flex">
//                                 <div className="w-6 h-6 relative" />
//                                 <div className="text-white text-sm font-normal leading-normal">ETH/USD</div>
//                             </div>
//                             <div className="text-white text-sm font-normal leading-normal">+2.50%</div>
//                             <div className="text-white text-sm font-normal leading-normal">26.100</div>
//                         </div>
//                         <div className="w-[726px] h-[27px] px-4 justify-between items-start gap-4 inline-flex">
//                             <div className="justify-start items-start gap-2 flex">
//                                 <div className="w-6 h-6 relative" />
//                                 <div className="text-white text-sm font-normal leading-normal">ETH/USD</div>
//                             </div>
//                             <div className="text-white text-sm font-normal leading-normal">+2.50%</div>
//                             <div className="text-white text-sm font-normal leading-normal">26.100</div>
//                         </div>
//                         <div className="w-[726px] h-[27px] px-4 justify-between items-start gap-4 inline-flex">
//                             <div className="justify-start items-start gap-2 flex">
//                                 <div className="w-6 h-6 relative" />
//                                 <div className="text-white text-sm font-normal leading-normal">ETH/USD</div>
//                             </div>
//                             <div className="text-white text-sm font-normal leading-normal">+2.50%</div>
//                             <div className="text-white text-sm font-normal leading-normal">26.100</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="w-[765px] h-[30px] pl-2 pr-1 py-[18px] left-0 top-0 absolute bg-blue-900 rounded-tl-[7px] rounded-tr-[7px] flex-col justify-center items-start gap-2.5 inline-flex">
//                 <div className="text-white text-sm font-semibold capitalize">MARKET INFO</div>
//             </div>
//         </div>
//     );
// });

// export default BtcUsd;

import React from 'react';

const BtcUsd: React.FC = () => {
    return (
        <div className="relative flex flex-col w-full top-[1rem]">
            <div className="blur-[4px] w-[765px] h-[464px] bg-[#72ddff] absolute top-0 left-0 rounded-lg" />
            <div className="bg-[#000921] relative flex flex-col gap-2 h-[464px] shrink-0 rounded-lg">
                <button
                    className="bg-[#092879] flex flex-col mb-2 h-8 shrink-0 items-start pl-2 py-1 rounded-tl-lg rounded-tr-lg"
                    id="Button1"
                >
                    <div className="text-sm font-['Bai_Jamjuree'] font-semibold capitalize text-white">
                        MARKET INFO
                    </div>
                </button>
                <div className="flex flex-row gap-3 items-start mb-3 ml-4 mr-8">
                    <img
                        src="https://file.rendit.io/n/FovymdclmmK9T87K7hyV.svg"
                        className="w-5 shrink-0"
                        id="Favoritelight"
                    />
                    <img
                        src="https://file.rendit.io/n/hphUSCy4tDxu2bHvBbFj.svg"
                        className="mr-4 w-5 shrink-0"
                        id="Firelight"
                    />
                    <div className="text-sm font-['Bai_Jamjuree'] font-semibold text-white mr-6">
                        CRYPTO
                    </div>
                    <div className="text-sm font-['Bai_Jamjuree'] font-medium text-white mr-6">
                        STOCKS
                    </div>
                    <div className="text-sm font-['Bai_Jamjuree'] font-medium text-white mr-6">
                        COMMODITIES
                    </div>
                    <div className="text-sm font-['Bai_Jamjuree'] font-medium text-white mr-6">
                        FOREX
                    </div>
                    <div className="text-sm font-['Bai_Jamjuree'] font-medium text-white mr-px">
                        INDICES
                    </div>
                    <img
                        src="https://file.rendit.io/n/qgAcGXfokdEgO3vaSMus.svg"
                        className="mt-px"
                    />
                </div>
                <div className="flex flex-row justify-between items-start mb-2 ml-10 mr-16">
                    <div className="text-sm font-['Bai_Jamjuree'] font-semibold leading-[24px] text-white/80">
                        Market
                    </div>
                    <div className="text-sm font-['Bai_Jamjuree'] font-semibold leading-[24px] text-white/80">
                        24 Hour
                    </div>
                    <button className="w-8 shrink-0 h-6 rounded-lg" id="Text1" />
                    <button className="w-12 shrink-0 h-6 rounded-lg" id="Text2" />
                    <button className="w-20 shrink-0 h-6 rounded-lg" id="Text3" />
                </div>
                <div className="flex flex-row gap-2 items-start mb-px ml-4 mr-12">
                    <img
                        src="https://file.rendit.io/n/aGqRZDGs4QlPCHto61u0.svg"
                        className="mt-px w-6 shrink-0"
                        id="Favoritelight1"
                    />
                    <div className="text-sm font-['Poppins'] leading-[24px] text-white mt-px mr-16">
                        ETH/USD
                    </div>
                    <div className="text-sm font-['Poppins'] leading-[24px] text-white mt-px mr-16">
                        +2.50%
                    </div>
                    <div className="text-sm font-['Poppins'] leading-[24px] text-white mt-px mr-16">
                        26.100
                    </div>
                    <img
                        src="https://file.rendit.io/n/uFCleTkY8CDgxuDSixSV.svg"
                        className="mr-16"
                    />
                    <img
                        src="https://file.rendit.io/n/SQHSDZZoa8VOeSYHHLqx.svg"
                        className=""
                    />
                </div>
                <div className="flex flex-row gap-2 items-start mb-px ml-4 mr-12">
                    <img
                        src="https://file.rendit.io/n/aGqRZDGs4QlPCHto61u0.svg"
                        className="mt-px w-6 shrink-0"
                        id="Favoritelight2"
                    />
                    <div className="text-sm font-['Poppins'] leading-[24px] text-white mt-px mr-16">
                        ETH/USD
                    </div>
                    <div className="text-sm font-['Poppins'] leading-[24px] text-white mt-px mr-16">
                        +2.50%
                    </div>
                    <div className="text-sm font-['Poppins'] leading-[24px] text-white mt-px mr-16">
                        26.100
                    </div>
                    <img
                        src="https://file.rendit.io/n/bpcufiLjcN5n4656Q6Yk.svg"
                        className="mr-16"
                    />
                    <img
                        src="https://file.rendit.io/n/SQHSDZZoa8VOeSYHHLqx.svg"
                        className=""
                    />
                </div>
                <div className="flex flex-row gap-2 items-start mb-px ml-4 mr-12">
                    <img
                        src="https://file.rendit.io/n/3LfQcWXbKkm68Cn455De.svg"
                        className="mt-px w-6 shrink-0"
                        id="Favoritelight3"
                    />
                    <div className="text-sm font-['Poppins'] leading-[24px] text-white mt-px mr-16">
                        ETH/USD
                    </div>
                    <div className="text-sm font-['Poppins'] leading-[24px] text-white mt-px mr-16">
                        +2.50%
                    </div>
                    <div className="text-sm font-['Poppins'] leading-[24px] text-white mt-px mr-16">
                        26.100
                    </div>
                    <img
                        src="https://file.rendit.io/n/4DM8GwfuYp7YJntdksKC.svg"
                        className="mr-16"
                    />
                    <img
                        src="https://file.rendit.io/n/OqX2IUf2BrjWvfVHWBIb.svg"
                        className=""
                    />
                </div>
                <div className="flex flex-row gap-2 items-start mb-px ml-4 mr-12">
                    <img
                        src="https://file.rendit.io/n/3LfQcWXbKkm68Cn455De.svg"
                        className="mt-px w-6 shrink-0"
                        id="Favoritelight4"
                    />
                    <div className="text-sm font-['Poppins'] leading-[24px] text-white mt-px mr-16">
                        ETH/USD
                    </div>
                    <div className="text-sm font-['Poppins'] leading-[24px] text-white mt-px mr-16">
                        +2.50%
                    </div>
                    <div className="text-sm font-['Poppins'] leading-[24px] text-white mt-px mr-16">
                        26.100
                    </div>
                    <img
                        src="https://file.rendit.io/n/4DM8GwfuYp7YJntdksKC.svg"
                        className="mr-16"
                    />
                    <img
                        src="https://file.rendit.io/n/OqX2IUf2BrjWvfVHWBIb.svg"
                        className=""
                    />
                </div>
                <div className="flex flex-row gap-2 items-start mb-px ml-4 mr-12">
                    <img
                        src="https://file.rendit.io/n/3LfQcWXbKkm68Cn455De.svg"
                        className="mt-px w-6 shrink-0"
                        id="Favoritelight5"
                    />
                    <div className="text-sm font-['Poppins'] leading-[24px] text-white mt-px mr-16">
                        ETH/USD
                    </div>
                    <div className="text-sm font-['Poppins'] leading-[24px] text-white mt-px mr-16">
                        +2.50%
                    </div>
                    <div className="text-sm font-['Poppins'] leading-[24px] text-white mt-px mr-16">
                        26.100
                    </div>
                    <img
                        src="https://file.rendit.io/n/4DM8GwfuYp7YJntdksKC.svg"
                        className="mr-16"
                    />
                    <img
                        src="https://file.rendit.io/n/OqX2IUf2BrjWvfVHWBIb.svg"
                        className=""
                    />
                </div>
                <div className="flex flex-row gap-2 items-start ml-4 mr-12">
                    <img
                        src="https://file.rendit.io/n/3LfQcWXbKkm68Cn455De.svg"
                        className="mt-px w-6 shrink-0"
                        id="Favoritelight6"
                    />
                    <div className="text-sm font-['Poppins'] leading-[24px] text-white mt-px mr-16">
                        ETH/USD
                    </div>
                    <div className="text-sm font-['Poppins'] leading-[24px] text-white mt-px mr-16">
                        +2.50%
                    </div>
                    <div className="text-sm font-['Poppins'] leading-[24px] text-white mt-px mr-16">
                        26.100
                    </div>
                    <img
                        src="https://file.rendit.io/n/4DM8GwfuYp7YJntdksKC.svg"
                        className="mr-16"
                    />
                    <img
                        src="https://file.rendit.io/n/OqX2IUf2BrjWvfVHWBIb.svg"
                        className=""
                    />
                </div>
                <div className="flex flex-row gap-2 items-start mb-px ml-4 mr-12">
                    <img
                        src="https://file.rendit.io/n/3LfQcWXbKkm68Cn455De.svg"
                        className="mt-px w-6 shrink-0"
                        id="Favoritelight7"
                    />
                    <div className="text-sm font-['Poppins'] leading-[24px] text-white mt-px mr-16">
                        ETH/USD
                    </div>
                    <div className="text-sm font-['Poppins'] leading-[24px] text-white mt-px mr-16">
                        +2.50%
                    </div>
                    <div className="text-sm font-['Poppins'] leading-[24px] text-white mt-px mr-16">
                        26.100
                    </div>
                    <img
                        src="https://file.rendit.io/n/bpcufiLjcN5n4656Q6Yk.svg"
                        className="mr-16"
                    />
                    <img
                        src="https://file.rendit.io/n/SQHSDZZoa8VOeSYHHLqx.svg"
                        className=""
                    />
                </div>
                <div className="flex flex-row gap-2 items-start ml-4 mr-12">
                    <img
                        src="https://file.rendit.io/n/3LfQcWXbKkm68Cn455De.svg"
                        className="mt-px w-6 shrink-0"
                        id="Favoritelight8"
                    />
                    <div className="text-sm font-['Poppins'] leading-[24px] text-white mt-px mr-16">
                        ETH/USD
                    </div>
                    <div className="text-sm font-['Poppins'] leading-[24px] text-white mt-px mr-16">
                        +2.50%
                    </div>
                    <div className="text-sm font-['Poppins'] leading-[24px] text-white mt-px mr-16">
                        26.100
                    </div>
                    <img
                        src="https://file.rendit.io/n/4DM8GwfuYp7YJntdksKC.svg"
                        className="mr-16"
                    />
                    <img
                        src="https://file.rendit.io/n/OqX2IUf2BrjWvfVHWBIb.svg"
                        className=""
                    />
                </div>
            </div>
        </div>

    );
};

export default BtcUsd;
