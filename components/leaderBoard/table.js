import React, { useState } from "react";
import TableHeader from "./table-header";
import TableBody from "./table-body";

const Table = ({ standings = [] }) => {
  const [leaderBoard, setLeaderBoard] = useState(() => standings);
  const [sortConfig, setSortConfig] = useState({
    key: "rank",
    direction: "asc",
  });

  return (
    <table>
      <TableHeader
        setLeaderBoard={setLeaderBoard}
        leaderBoard={leaderBoard}
        sortConfig={sortConfig}
        setSortConfig={setSortConfig}
      />
      <TableBody leaderBoard={leaderBoard} sortConfig={sortConfig} />
    </table>
  );
};

export default Table;
