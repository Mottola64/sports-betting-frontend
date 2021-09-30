export function fetchSportsNews() {
  
  return (dispatch) => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${process.env.SPORTSNEWS_API_KEY}`)
      .then((response) => response.json())
      .then((sportsnews) =>
        dispatch({
          type: "FETCH_SPORTSNEWS",
          payload: sportsnews.articles,
        })
      );
  };
}
