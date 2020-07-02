export function fetchUpcomingGames() {
    return (dispatch) => {
      fetch(`https://api.the-odds-api.com/v3/odds/?sport=upcoming&region=uk&mkt=h2h&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then((response) => response.json())
        .then((upcoming) =>
          dispatch({
            type: "FETCH_UPCOMING",
            payload: upcoming,
          })
        );
    };
  }