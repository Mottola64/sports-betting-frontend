import React from "react";
import { MLBTable } from "./MLBTable";
import {MLBTableMobile} from './MLBTableMobile';
import Breakpoint from "react-socks";
import "../index.css";
import "../mlbStandings.css";

const MLBStandings = (props) => {
  let sortedTeams = {};
  let team = props.mlbstandings;
  for (let i = 0; i < team.length; i++) {
    sortedTeams[team[i].group.name]
      ? sortedTeams[team[i].group.name].push(team[i])
      : (sortedTeams[team[i].group.name] = [team[i]]);
  }

  console.log(sortedTeams);

  return (
    <>
    <Breakpoint medium up>
      <div style={{ marginTop: "25px" }}>
        <h1>MLB Standings</h1>

        {Object.keys(sortedTeams).map((group) => (
          <MLBTable group={group} teams={sortedTeams[group]} />
        ))}
      </div>
    </Breakpoint>
    <Breakpoint xsmall up>
      <div style={{ marginTop: "25px" }}>
        <h1>MLB Standings</h1>

        {Object.keys(sortedTeams).map((group) => (
          <MLBTableMobile group={group} teams={sortedTeams[group]} />
        ))}
      </div>
    </Breakpoint>
    </>
  );
};

export default MLBStandings;
