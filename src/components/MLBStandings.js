import React, { useMemo, useState, useEffect } from "react";
import Table from "./Table";
import axios from "axios";

function MLBStandings() {
  let [responseData, setResponseData] = React.useState("");

  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: "https://api-baseball.p.rapidapi.com/standings?league=1&season=2020",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "api-baseball.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.REACT_APP_DAILYSCHEDULE_API_KEY}`,
      },
    })
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const columns = useMemo(
    () => [
      {
        columns: [
          {
            Header: "Name",
            accessor: "team.name",
          },
          {
            Header: "Division",
            accessor: "group.name",
          },
          {
            Header: "Win",
            accessor: "games.win.total",
          },
          {
            Header: "Loss",
            accessor: "games.lose.total",
          },
          {
            Header: "Percentage",
            accessor: "games.win.percentage"
          },
          {
            Header: "Last 5",
            accessor: "form"
          },
        ],
      },
    ],
    []
  );
  return <div className="App"></div>;
}

export default MLBStandings;
