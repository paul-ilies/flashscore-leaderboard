"use client";
import clsx from "clsx";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const headers = {
  rank: "#",
  name: "team",
  played: "mp",
  win: "w",
  draw: "d",
  lose: "l",
  goals: "g",
  goalsDiff: "gd",
  points: "pts",
  form: "form",
};

const TableHeader = ({
  setLeaderBoard,
  leaderBoard,
  sortConfig,
  setSortConfig,
}) => {
  const handleSort = (key) => {
    const newSortConfig = { key, direction: "asc" };
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      newSortConfig.direction = "desc";
    }
    setSortConfig(newSortConfig);

    const sortedLeaderBoard = [...leaderBoard].sort((a, b) => {
      const aValue =
        key === "points"
          ? parseInt(a[key])
          : key === "goals"
          ? a["goalsDiff"]
          : a[key];
      const bValue =
        key === "points"
          ? parseInt(b[key])
          : key === "goals"
          ? b["goalsDiff"]
          : b[key];

      let comparison = 0;
      if (aValue > bValue) {
        comparison = 1;
      } else if (aValue < bValue) {
        comparison = -1;
      }

      return newSortConfig.direction === "asc" ? comparison : -comparison;
    });

    setLeaderBoard(sortedLeaderBoard);
  };

  const getSortArrow = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc" ? (
        <IoMdArrowDropup />
      ) : (
        <IoMdArrowDropdown />
      );
    }
    return null;
  };

  return (
    <thead className="h-[29px] bg-[#EEEEEE]">
      <tr>
        {Object.entries(headers).map(([key, value]) => {
          const isKeyPoints = key === "points";
          const isTeam = key === "name";

          return (
            <th
              key={key}
              onClick={() => key !== "form" && handleSort(key)}
              className={clsx(
                "uppercase text-[11px] text-[#00141e] font-thin first:rounded-bl-lg last:rounded-br-lg cursor-pointer last:cursor-default",
                isKeyPoints && "!font-bold",
                isTeam && "!text-left px-2.5",
                key !== "rank" && key === sortConfig?.key && "bg-[#dfe1e2]",
                key !== "form" && "hover:underline"
              )}
            >
              <div
                className={clsx(
                  "flex items-center justify-center w-full",
                  key === "name" && "!justify-start"
                )}
              >
                {value}
                {getSortArrow(key)}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
