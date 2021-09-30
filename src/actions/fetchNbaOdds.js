export function fetchNbaOdds() {
    return (dispatch) => {
      fetch(
        `https://api.the-odds-api.com/v3/odds/?sport=basketball_nba&region=us&mkt=spreads&oddsFormat=american&apiKey=${process.env.API_KEY}`
      )
        .then((response) => response.json())
        .then((nbaodds) =>
          dispatch({
            type: "FETCH_NBAODDS",
            payload: nbaodds.data,
          })
        );
    };
  }
  