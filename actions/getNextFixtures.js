export const getNextFixtures = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.RAPID_API_HOST,
    },
  };
  try {
    const response = await fetch(
      "https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=2023&next=10",
      options
    );
    if (response.ok) {
      const data = await response.json();

      return data.response;
    }
  } catch (error) {
    return { error: "Something went wrong" };
  }
};
