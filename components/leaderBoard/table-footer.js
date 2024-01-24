import React from "react";
import LegendLabel from "./legend-label";
import { IoInformationCircleOutline } from "react-icons/io5";

const TableFooter = () => {
  return (
    <div className="hidden lg:flex text-xs font-thin mx-2.5 mt-2.5">
      <div className="flex flex-col gap-y-4 w-[60%]">
        <div className="flex flex-col gap-y-[6px]">
          <LegendLabel
            label="Promotion - Champions League (Group Stage: )"
            color="#004682"
          />
          <LegendLabel
            label="Promotion - Europa League (Group Stage: )"
            color="#7F0029"
          />
          <LegendLabel
            label="Relegation - Championship
            "
            color="#BD0000"
          />
        </div>
        <p className="text-[#555e61] text-[11px]">
          If teams finish on equal points at the end of the season, score
          difference will be the tie-breaker.
        </p>
      </div>
      <div className="flex justify-center gap-x-[6px] text-[#555e61] ml-7">
        <IoInformationCircleOutline className="w-[14px] h-[18px]" />
        <span className="text-[11px]">
          Everton: -10 points (Federation decision)
        </span>
      </div>
    </div>
  );
};

export default TableFooter;
