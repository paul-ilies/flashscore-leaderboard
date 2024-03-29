import dynamic from "next/dynamic";
import { getLastFixtures } from "@/actions/getLastFixtures";
import { getNextFixtures } from "@/actions/getNextFixtures";
import { getTeams } from "@/actions/getTeams";
import Filter from "@/components/filter";
import Footer from "@/components/footer";
import LeaderBoard from "@/components/leaderBoard/leader-board";
import TableFooter from "@/components/leaderBoard/table-footer";
import SubFilter from "@/components/sub-filter";

export default async function Home() {
  const standings = await getTeams();
  const fixtures = await getNextFixtures();
  const lastFixtures = await getLastFixtures();

  return (
    <div className="flex flex-col h-full pt-20 ">
      <section className="bg-white rounded-lg max-w-[688px] w-full flex flex-col py-4 px-3 mx-auto">
        <Filter />
        <div className="flex flex-col">
          <SubFilter />
          <LeaderBoard
            standings={standings}
            fixtures={fixtures}
            lastFixtures={lastFixtures}
          />
          <TableFooter />
        </div>
      </section>
      <Footer />
    </div>
  );
}
