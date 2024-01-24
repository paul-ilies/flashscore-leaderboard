import React from "react";
import FilterButton from "./filter-button";

const SubFilter = () => {
  return (
    <div className="hidden lg:flex gap-x-2 p-2 border-b border-b-white  bg-[#EEEEEE] rounded-t-lg">
      <FilterButton label="overall" active variant="subFilter" />
      <FilterButton label="home" variant="subFilter" />
      <FilterButton label="away" variant="subFilter" />
    </div>
  );
};

export default SubFilter;
