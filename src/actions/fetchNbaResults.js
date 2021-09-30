export function fetchNbaResults() {
    return (dispatch) => {
      fetch("https://thesportsdb.p.rapidapi.com/eventspastleague.php?id=4387", {
        method: "GET",
        headers: {
          "x-rapidapi-host": "thesportsdb.p.rapidapi.com",
          "x-rapidapi-key": `${process.env.SPORTSDB_API_KEY}`,
        },
      })
        .then((response) => response.json())
        .then((nbaresults) =>
          dispatch({
            type: "FETCH_NBARESULTS",
            payload: nbaresults.events,
          })
        );
    };
  }

