"use client";
import React from "react";
import Table from "./table";

const LeaderBoard = ({ standings, fixtures, lastFixtures }) => {
  return (
    <Table
      standings={standings}
      fixtures={fixtures}
      lastFixtures={lastFixtures}
    />
  );
};

export default LeaderBoard;
