export function fetchSports() {

  
  return (dispatch) => {
    fetch("https://api-football-v1.p.rapidapi.com/v2/predictions/157462", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "ea855c707cb722f7be2cd51bc427793f",
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
