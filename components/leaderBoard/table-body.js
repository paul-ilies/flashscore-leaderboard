import clsx from "clsx";
import Image from "next/image";
import React from "react";
import Tooltip from "../tooltip";

const TableBody = ({
  leaderBoard = [],
  sortConfig,
  nextFixtures = [],
  pastGames = [],
}) => {
  return (
    <tbody className="bg-white">
      {leaderBoard.map((el) => {
        const {
          rank,
          goalsDiff,
          form,
          goals,
          points,
          logo,
          name,
          played,
          win,
          draw,
          lose,
          id,
        } = el;
        const isRankedUpFour = rank <= 4;
        const isRankedFive = rank === 5;
        const isRelegation = rank >= 18;
        //next fixture
        const nextGame = nextFixtures.find((el) => {
          const { teams } = el;
          const { home, away } = teams;
          const teamsId = [home.id, away.id];
          return teamsId.includes(id);
        });
        const { fixture, teams } = nextGame;
        const fixtureDate = new Date(fixture?.date);
        const day = fixtureDate.getDate();
        const month = fixtureDate.getMonth() + 1;
        const year = fixtureDate.getFullYear();
        const formattedDay = day < 10 ? "0" + day : day;
        const formattedMonth = month < 10 ? "0" + month : month;

        //last 5 games
        const lastFiveGames = pastGames
          .map((game) => {
            const { teams, goals } = game;
            const { home, away } = teams;
            const teamsId = [home.id, away.id];
            if (teamsId.includes(id)) {
              return { teams, goals };
            }
            return null;
          })
          .filter(Boolean);
        const showRankTooltip = isRankedUpFour || isRankedFive || isRelegation;
        return (
          <tr
            key={id}
            className="text-center text-xs font-thin h-[35px] border-b border-b-[#eee] text-[#001E28]"
          >
            <td className="w-[32px]">
              <div className="flex justify-center">
                {showRankTooltip && (
                  <Tooltip
                    tip={
                      isRankedUpFour ? (
                        <span>
                          Promotion - Champions League (Group Stage: )
                        </span>
                      ) : isRankedFive ? (
                        <span>Promotion - Europa League (Group Stage: )</span>
                      ) : isRelegation ? (
                        <span>Relegation - Championship</span>
                      ) : null
                    }
                  >
                    <div
                      className={clsx(
                        "w-5 h-5 rounded font-bold flex justify-center items-center",
                        isRankedUpFour && "bg-[#004682] !text-white",
                        isRankedFive && "bg-[#7F0029] !text-white",
                        isRelegation && "bg-[#BD0000] !text-white"
                      )}
                    >
                      {rank}.
                    </div>
                  </Tooltip>
                )}
                {!showRankTooltip && (
                  <div
                    className={clsx(
                      "w-5 h-5 rounded font-bold flex justify-center items-center",
                      isRankedUpFour && "bg-[#004682] !text-white",
                      isRankedFive && "bg-[#7F0029] !text-white",
                      isRelegation && "bg-[#BD0000] !text-white"
                    )}
                  >
                    {rank}.
                  </div>
                )}
              </div>
            </td>
            <td
              className={clsx(
                "px-2.5 ",
                sortConfig.key === "name" && "!bg-[#f7f8f8]"
              )}
            >
              <div className="flex items-center gap-x-2">
                <Image src={logo} width={20} height={20} alt="team logo" />
                <span className="hover:underline cursor-pointer">{name}</span>
              </div>
            </td>
            <td
              className={clsx(
                "w-[32px]",
                sortConfig.key === "played" && "!bg-[#f7f8f8]"
              )}
            >
              {played}
            </td>
            <td
              className={clsx(
                "w-[32px]",
                sortConfig.key === "win" && "!bg-[#f7f8f8]"
              )}
            >
              {win}
            </td>
            <td
              className={clsx(
                "w-[32px]",
                sortConfig.key === "draw" && "!bg-[#f7f8f8]"
              )}
            >
              {draw}
            </td>
            <td
              className={clsx(
                "w-[32px]",
                sortConfig.key === "lose" && "!bg-[#f7f8f8]"
              )}
            >
              {lose}
            </td>
            <td
              className={clsx(
                "w-[48px]",
                sortConfig.key === "goals" && "!bg-[#f7f8f8]"
              )}
            >
              {goals?.for}:{goals?.against}
            </td>
            <td
              className={clsx(
                "w-[48px]",
                sortConfig.key === "goalsDiff" && "!bg-[#f7f8f8]"
              )}
            >
              {goalsDiff}
            </td>
            <td
              className={clsx(
                "w-[32px]",
                sortConfig.key === "points" && "!bg-[#f7f8f8]"
              )}
            >
              <div className="font-bold">{points}</div>
            </td>
            <td className="w-[160px]">
              <div className="flex gap-x-1 items-center justify-center ">
                <div
                  className={clsx(
                    "flex justify-center w-5 h-5 text-white rounded bg-[#C8CDCD] cursor-pointer"
                  )}
                >
                  <Tooltip
                    tip={
                      <div className="flex flex-col text-[10px]">
                        <span className="font-bold text-left">Next match:</span>
                        <span>
                          {teams.home.name} - {teams.away.name}
                        </span>
                        <span className="text-left">
                          {formattedDay}.{formattedMonth.toLocaleString()}.
                          {year}
                        </span>
                      </div>
                    }
                  >
                    <span className="m-auto">?</span>
                  </Tooltip>
                </div>
                {form.split("").map((f, i) => {
                  const uniqueId = f + i;
                  const lowerForm = f.toLowerCase();
                  return (
                    <div
                      key={uniqueId}
                      className={clsx(
                        "flex justify-center w-5 h-5 text-white rounded cursor-pointer",
                        lowerForm === "w"
                          ? "bg-[#00A83F]"
                          : lowerForm === "l"
                          ? "bg-[#DC0000]"
                          : lowerForm === "d"
                          ? "bg-[#F3A000]"
                          : "bg-[#C8CDCD]"
                      )}
                    >
                      <Tooltip
                        tip={
                          <div className="flex flex-col text-[10px]">
                            <span>
                              <strong className="!text-white font-bold">
                                {lastFiveGames[i]?.goals?.home}:
                                {lastFiveGames[i]?.goals?.away}
                              </strong>{" "}
                              ({lastFiveGames[i]?.teams?.home?.name} -
                              {lastFiveGames[i]?.teams?.away?.name})
                            </span>
                            <span className="text-left">30.01.2024</span>
                          </div>
                        }
                      >
                        <span className="m-auto">{f}</span>
                      </Tooltip>
                    </div>
                  );
                })}
                {form.split("").length !== 5 && (
                  <div
                    className={clsx(
                      "flex justify-center w-5 h-5 text-white rounded bg-[#C8CDCD] cursor-pointer"
                    )}
                  >
                    <span className="m-auto">?</span>
                  </div>
                )}
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
