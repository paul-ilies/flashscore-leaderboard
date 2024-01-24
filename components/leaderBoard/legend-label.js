import clsx from "clsx";
import React from "react";

const LegendLabel = ({ color, label }) => {
  return (
    <div className="flex gap-x-2.5 text-[11px]">
      <div
        className={clsx("w-[14px] h-[14px] rounded", color && `bg-[${color}]`)}
      />
      <span className="text-[#00141e]">{label}</span>
    </div>
  );
};

export default LegendLabel;
