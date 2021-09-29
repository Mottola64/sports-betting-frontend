export function fetchNflOdds() {
    return (dispatch) => {
      fetch(
        `https://api.the-odds-api.com/v3/odds/?sport=americanfootball_nfl&region=us&mkt=spreads&oddsFormat=american&apiKey=${process.env.REACT_APP_API_KEY}`
      )
        .then((response) => response.json())
        .then((nflodds) =>
          dispatch({
            type: "FETCH_NFLODDS",
            payload: nflodds.data,
          })
        );
    };
  }
  