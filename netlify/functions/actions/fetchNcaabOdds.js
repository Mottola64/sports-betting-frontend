export function fetchNcaabOdds() {
    return (dispatch) => {
      fetch(
        `https://api.the-odds-api.com/v3/odds/?sport=basketball_ncaab&region=us&mkt=spreads&oddsFormat=american&apiKey=${process.env.REACT_APP_API_KEY}`
      )
        .then((response) => response.json())
        .then((ncaabodds) =>
          dispatch({
            type: "FETCH_NCAABODDS",
            payload: ncaabodds.data,
          })
        );
    };
  }
  