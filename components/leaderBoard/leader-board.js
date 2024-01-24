"use client";
import React, { useState } from "react";
import TableHeader from "./table-header";
import TableBody from "./table-body";
import Table from "./table";

const LeaderBoard = ({ standings }) => {
  return <Table standings={standings} />;
};

export default LeaderBoard;
