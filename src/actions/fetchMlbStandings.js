export function fetchMlbStandings() {
  return (dispatch) => {
    fetch(
      "https://api-baseball.p.rapidapi.com/standings?league=1&season=2021",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "api-baseball.p.rapidapi.com",
          "x-rapidapi-key": `${process.env.DAILYSCHEDULE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((mlbstandings) =>
        dispatch({
          type: "FETCH_MLBSTANDINGS",
          payload: mlbstandings.response[0],
        })
      );
  };
}
