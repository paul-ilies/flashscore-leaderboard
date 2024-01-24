"use client";
import React, { Suspense, lazy, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const Table = lazy(() => import("./table"));

const LeaderBoard = ({ standings, fixtures, lastFixtures }) => {
  const [isRendered, setIsRendered] = useState(false);

  const isMediumDevice = useMediaQuery("only screen and (min-width: 1000px)");
  useEffect(() => {
    setIsRendered(true);
  }, [isRendered]);
  if (isRendered === false) return null;
  return (
    <>
      {!isMediumDevice ? (
        <div className="flex flex-col h-full justify-center items-center">
          <h1 className="text-3xl">This is for desktop only</h1>
          <p>Switch to desktop to get the most of it</p>
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="flex justify-center w-full my-5">
              <ClipLoader
                size={50}
                color="#FF0046"
                speedMultiplier={0.6}
                cssOverride={{ borderWidth: "5px" }}
              />
            </div>
          }
        >
          <Table
            standings={standings}
            fixtures={fixtures}
            lastFixtures={lastFixtures}
          />
        </Suspense>
      )}
    </>
  );
};

export default LeaderBoard;
