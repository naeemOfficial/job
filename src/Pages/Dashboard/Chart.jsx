import React from "react";
import Button from "./Button";

const Chart = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col items-start justify-end gap-[15px] text-sm text-gray-dark-2 font-tittle-12-m">
      <div className="self-stretch flex flex-row items-start justify-between">
        <b className="relative inline-block w-[115px] shrink-0">20 June 2023</b>
        <div className="rounded-3xs bg-whitesmoke-200 flex flex-row items-start justify-start gap-[8px]">
          <Button
            day="Weekly"
            buttonPosition="unset"
            buttonBackgroundColor="unset"
            buttonJustifyContent="center"
            buttonWidth="51px"
            dayColor="#5f6165"
          />
          <Button
            day="Monthly"
            buttonPosition="unset"
            buttonBackgroundColor="unset"
            buttonJustifyContent="center"
            buttonWidth="52px"
            dayColor="#5f6165"
          />
          <Button
            day="Yearly"
            buttonPosition="unset"
            buttonBackgroundColor="#6078ea"
            buttonJustifyContent="center"
            buttonWidth="55px"
            dayColor="#fff"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-end justify-start gap-[10px] text-xs text-gray-dark-6">
        <div className="flex flex-col items-start justify-start gap-[26px]">
          <div className="relative font-medium">100</div>
          <div className="relative font-medium">50</div>
          <div className="relative font-medium">40</div>
          <div className="relative font-medium">30</div>
          <div className="relative font-medium">20</div>
          <div className="relative font-medium">10</div>
          <div className="relative font-medium">0</div>
        </div>
        <div className="w-[1431px] h-[204px] flex flex-col items-start justify-start gap-[20px] text-base text-theme-color-grey-body font-cairo">
          <div className="self-stretch flex-1 relative">
            <div className="absolute top-[-58px] left-[9px] w-[400px] flex flex-row items-start justify-between">
              <div className="relative bg-whitesmoke-300 w-[1.03px] h-[236px]" />
              <div className="relative bg-whitesmoke-300 w-[1.03px] h-[236px]" />
              <div className="relative bg-whitesmoke-300 w-[1.03px] h-[236px]" />
              <div className="relative bg-whitesmoke-300 w-[1.03px] h-[236px]" />
              <div className="relative bg-whitesmoke-300 w-[1.03px] h-[236px]" />
              <div className="relative bg-whitesmoke-300 w-[1.03px] h-[236px]" />
              <div className="relative bg-whitesmoke-300 w-[1.03px] h-[236px]" />
              <div className="relative bg-whitesmoke-300 w-[1.03px] h-[236px]" />
            </div>
            <img
              className="absolute top-[-124.5px] left-[-0.04px] w-[1431.04px] h-[302.5px]"
              alt=""
              src="/group-1000002964.svg"
            />
            <div className="absolute top-[-61px] left-[703px] w-[132px] h-[61px] flex flex-row items-center justify-end">
              <img
                className="relative w-[148px] h-[77px]"
                alt=""
                src="/background.svg"
              />
              <div className="w-[94px] h-[46px] flex flex-col py-0 pr-0 pl-0.5 box-border items-start justify-start ml-[-105px]">
                <b className="relative">30%</b>
                <div className="relative text-sm leading-[21px] font-barlow text-theme-color-grey-4 inline-block w-[94px] mt-[-5px]">
                  20 April 2023
                </div>
              </div>
            </div>
            <div className="absolute top-[-19px] left-[692px] rounded-[50%] bg-beguni box-border w-[11px] h-[11px] border-[3px] border-solid border-royalblue-200" />
          </div>
          <div className="w-[1431px] flex flex-row items-center justify-between text-sm text-gray-dark-5 font-tittle-12-m">
            <div className="relative">Jan</div>
            <div className="relative">Feb</div>
            <div className="relative">Mar</div>
            <div className="relative">Apr</div>
            <div className="relative">May</div>
            <div className="relative">Jun</div>
            <div className="relative">Jul</div>
            <div className="relative">Aug</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
