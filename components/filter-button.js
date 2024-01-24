"use client";

import clsx from "clsx";
import React from "react";

const FilterButton = ({ active, variant, label }) => {
  const defaultValue = `px-3 uppercase rounded-lg text-xs font-bold h-[28px] ${
    active ? "cursor-auto" : "cursor-pointer"
  } `;
  const buttonVariants = {
    filter: `${
      active ? "text-[#FFFFFF] bg-[#ff0046]" : "text-[#555e61] bg-[#eee]"
    } ${!active ? "hover:bg-[#c8cdcd] hover:text-[#001e28]" : ""}  `,
    subFilter: `${
      active ? "text-[#0f2d37] bg-[#FFFFFF]" : "text-[#555e61] bg-[#eee]"
    } ${!active ? "hover:bg-[#FFFFFF]" : ""}  `,
  };

  return (
    <button className={clsx(defaultValue, buttonVariants[variant])}>
      {label}
    </button>
  );
};

export default FilterButton;
