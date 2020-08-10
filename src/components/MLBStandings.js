import React from "react";
import axios from 'axios'
import Table from './Table'

function MLBStandings() {
    let [responseData, setResponseData] = React.useState('');

    const fetchData = React.useCallback(() => {
        axios({
          "method": "GET",
          "url": "https://api-baseball.p.rapidapi.com/standings?league=1&season=2020",
          "headers": {
            "content-type": "application/json",
            "x-rapidapi-host": "api-baseball.p.rapidapi.com",
          "x-rapidapi-key": `${process.env.REACT_APP_DAILYSCHEDULE_API_KEY}`
          }
        })
        .then((response) => {
          setResponseData(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
      }, [])
      React.useEffect(() => {
        fetchData()
      }, [fetchData])
  return (
    <div className="App">
        
    </div>
  );
}

export default MLBStandings;