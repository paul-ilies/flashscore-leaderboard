import React from "react";
import FilterButton from "./filter-button";

const Filter = () => {
  return (
    <div className="hidden lg:flex gap-x-2 pb-4   ">
      <FilterButton label="standings" active variant="filter" />
      <FilterButton label="form" variant="filter" />
      <FilterButton label="over/under" variant="filter" />
      <FilterButton label="ht/ft" variant="filter" />
      <FilterButton label="top scorers" variant="filter" />
    </div>
  );
};

export default Filter;
