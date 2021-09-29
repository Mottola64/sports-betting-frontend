export function fetchMlbOdds() {
  return (dispatch) => {
    fetch(
      `https://api.the-odds-api.com/v3/odds/?sport=baseball_mlb&region=us&mkt=h2h&oddsFormat=american&apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((mlbodds) =>
        dispatch({
          type: "FETCH_MLBODDS",
          payload: mlbodds.data,
        })
      );
  };
}
