export const getTeams = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.RAPID_API_HOST,
    },
  };
  try {
    const response = await fetch(
      "https://api-football-v1.p.rapidapi.com/v3/standings?season=2023&league=39",
      options
    );
    if (response.ok) {
      const data = await response.json();
      const standings = await data.response[0]?.league?.standings;
      return standings[0].map((teamObj) => {
        const { rank, all, goalsDiff, points, team, form } = teamObj;
        const { played, win, draw, lose, goals } = all;
        const { name, logo, id } = team;
        return {
          rank,
          goalsDiff,
          points,
          played,
          win,
          draw,
          lose,
          name,
          form,
          logo,
          goals,
          id,
        };
      });
    }
  } catch (error) {
    return { error: "Something went wrong" };
  }
};
