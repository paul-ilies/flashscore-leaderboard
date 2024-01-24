import React, { useState } from "react";
import TableHeader from "./table-header";
import TableBody from "./table-body";

const Table = ({ standings = [], fixtures = [], lastFixtures = [] }) => {
  const [leaderBoard, setLeaderBoard] = useState(() => standings);
  const [nextFixtures, setNextFixtures] = useState(() => fixtures);
  const [pastGames, setPastGames] = useState(() => lastFixtures);
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
      <TableBody
        leaderBoard={leaderBoard}
        sortConfig={sortConfig}
        nextFixtures={nextFixtures}
        pastGames={pastGames}
      />
    </table>
  );
};

export default Table;
