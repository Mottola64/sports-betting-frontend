export function fetchSports() {
  return (dispatch) => {
    fetch("https://api-football-v1.p.rapidapi.com/v2/predictions/157462", {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.REACT_APP_API_KEY2}`,
      },
    })
      .then((response) => response.json())

      .then((sports) =>
        dispatch({
          type: "FETCH_SPORTS",
          payload: sports,
        })
      );
  };
}
