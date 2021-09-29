export function fetchNcaafOdds() {
    return (dispatch) => {
      fetch(
        `https://api.the-odds-api.com/v3/odds/?sport=americanfootball_ncaaf&region=us&mkt=spreads&oddsFormat=american&apiKey=${process.env.REACT_APP_API_KEY}`
      )
        .then((response) => response.json())
        .then((ncaafodds) =>
          dispatch({
            type: "FETCH_NCAAFODDS",
            payload: ncaafodds.data,
          })
        );
    };
  }
  