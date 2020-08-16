import React from "react";
import { Table } from "react-bootstrap";
import teamPictures from "../data/pictures";
import "../index.css";
import "../mlbStandings.css";

const MLBStandings = (props) => {
  return (
    <div style={{ marginTop: "25px" }}>
      <h1>MLB Standings</h1>
      <h4>AL East</h4>
      {/* <div class="table-container" role="table" aria-label="Standings">
<div class="flex-table header" role="rowgroup">
<div class="flex-row first" role="columnheader"></div>
<div class="flex-row" role="columnheader">Team</div>
<div class="flex-row" role="columnheader">Division</div>
<div class="flex-row" role="columnheader">Wins</div>
<div class="flex-row" role="columnheader">Losses</div>
<div class="flex-row" role="columnheader">Win PCT</div>
<div class="flex-row" role="columnheader">Last Five</div>
</div>

{props.mlbstandings.length > 0 && props.mlbstandings
    .filter((team) => team.group.name === "AL East")
    .map((team) => (
<div class="flex-table row" role="rowgroup">
  <div class="flex-row first" role="cell"><img
  src={teamPictures[team.team.name]}
  style={{
    width: "15vw",
    height: "15vh",
    margin: "0px",
    padding: "0px",
  }}
  alt="Card image cap"
/></div>
  <div class="flex-row" role="cell">{team.team.name}</div>
  <div class="flex-row" role="cell">{team.group.name}</div>
  <div class="flex-row" role="cell">{team.games.win.total}</div>
  <div class="flex-row" role="cell">{team.games.lose.total}</div>
  <div class="flex-row" role="cell">{team.games.win.percentage}</div>
  <div class="flex-row" role="cell">{team.form}</div>
</div>))}
</div> */}
      <Table
        striped
        bordered
        hover
        style={{
          display: "flexbox",
          flexDirection: "row",
          contentAlignment: "middle-center",
        }}
      >
        <thead>
          <tr>
            <th style={{ padding: "0px" }}></th>
            <th className="th">Team</th>
            <th className="th">Wins</th>
            <th className="th">Losses</th>
            <th className="th">Win Percentage</th>
            <th className="th">Last 5</th>
          </tr>
        </thead>
        <tbody>
          {props.mlbstandings.length > 0 &&
            props.mlbstandings
              .filter((team) => team.group.name === "AL East")
              .map((team) => (
                <tr key={team.team.name}>
                  <td
                    style={{
                      margin: "0px",
                      padding: "0px",
                      verticalAlign: "top",
                    }}
                  >
                    <img
                      src={teamPictures[team.team.name]}
                      style={{
                        width: "15vw",
                        height: "15vh",
                        margin: "0px",
                        padding: "0px",
                      }}
                      alt=""
                    />
                  </td>
                  <td style={{ marginTop: "25px" }} key={team.team.name}>
                    <strong>{team.team.name}</strong>
                  </td>

                  <td>{team.games.win.total}</td>
                  <td>{team.games.lose.total}</td>
                  <td>{team.games.win.percentage}</td>
                  <td>{team.form}</td>
                </tr>
              ))}
        </tbody>
      </Table>
      <h4>AL Central</h4>
      <Table
        striped
        bordered
        hover
        style={{ textAlign: "center", verticalAlign: "middle" }}
      >
        <thead>
          <tr>
            <th style={{ padding: "0px" }}></th>
            <th className="th">Team</th>

            <th className="th">Wins</th>
            <th className="th">Losses</th>
            <th className="th">Win Percentage</th>
            <th className="th">Last 5</th>
          </tr>
        </thead>
        <tbody>
          {props.mlbstandings.length > 0 &&
            props.mlbstandings
              .filter((team) => team.group.name === "AL Central")
              .map((team) => (
                <tr key={team.team.name}>
                  <td
                    style={{
                      margin: "0px",
                      padding: "0px",
                      verticalAlign: "top",
                    }}
                  >
                    <img
                      src={teamPictures[team.team.name]}
                      style={{
                        width: "15vw",
                        height: "15vh",
                        margin: "0px",
                        padding: "0px",
                      }}
                      alt=""
                    />
                  </td>
                  <td style={{ marginTop: "25px" }} key={team.team.name}>
                    <strong>{team.team.name}</strong>
                  </td>
                  <td>{team.games.win.total}</td>
                  <td>{team.games.lose.total}</td>
                  <td>{team.games.win.percentage}</td>
                  <td>{team.form}</td>
                </tr>
              ))}
        </tbody>
      </Table>
      <h4>AL West</h4>
      <Table
        striped
        bordered
        hover
        style={{ textAlign: "center", verticalAlign: "middle" }}
      >
        <thead>
          <tr>
            <th style={{ padding: "0px" }}></th>
            <th className="th">Team</th>
            <th className="th">Wins</th>
            <th className="th">Losses</th>
            <th className="th">Win Percentage</th>
            <th className="th">Last 5</th>
          </tr>
        </thead>
        <tbody>
          {props.mlbstandings.length > 0 &&
            props.mlbstandings
              .filter((team) => team.group.name === "AL West")
              .map((team) => (
                <tr key={team.team.name}>
                  <td
                    style={{
                      margin: "0px",
                      padding: "0px",
                      verticalAlign: "top",
                    }}
                  >
                    <img
                      src={teamPictures[team.team.name]}
                      style={{
                        width: "15vw",
                        height: "15vh",
                        margin: "0px",
                        padding: "0px",
                      }}
                      alt=""
                    />
                  </td>
                  <td style={{ marginTop: "25px" }} key={team.team.name}>
                    <strong>{team.team.name}</strong>
                  </td>
                  <td>{team.games.win.total}</td>
                  <td>{team.games.lose.total}</td>
                  <td>{team.games.win.percentage}</td>
                  <td>{team.form}</td>
                </tr>
              ))}
        </tbody>
      </Table>
      <h4>NL East</h4>
      <Table
        striped
        bordered
        hover
        style={{ textAlign: "center", verticalAlign: "middle" }}
      >
        <thead>
          <tr>
            <th style={{ padding: "0px" }}></th>
            <th className="th">Team</th>
            <th className="th">Wins</th>
            <th className="th">Losses</th>
            <th className="th">Win Percentage</th>
            <th className="th">Last 5</th>
          </tr>
        </thead>
        <tbody>
          {props.mlbstandings.length > 0 &&
            props.mlbstandings
              .filter((team) => team.group.name === "NL East")
              .map((team) => (
                <tr key={team.team.name}>
                  <td
                    style={{
                      margin: "0px",
                      padding: "0px",
                      verticalAlign: "top",
                    }}
                  >
                    <img
                      src={teamPictures[team.team.name]}
                      style={{
                        width: "15vw",
                        height: "15vh",
                        margin: "0px",
                        padding: "0px",
                      }}
                      alt=""
                    />
                  </td>
                  <td style={{ marginTop: "25px" }} key={team.team.name}>
                    <strong>{team.team.name}</strong>
                  </td>
                  <td>{team.games.win.total}</td>
                  <td>{team.games.lose.total}</td>
                  <td>{team.games.win.percentage}</td>
                  <td>{team.form}</td>
                </tr>
              ))}
        </tbody>
      </Table>
      <h4>NL Central</h4>
      <Table
        striped
        bordered
        hover
        style={{ textAlign: "center", verticalAlign: "middle" }}
      >
        <thead>
          <tr>
            <th style={{ padding: "0px" }}></th>
            <th className="th">Team</th>
            <th className="th">Wins</th>
            <th className="th">Losses</th>
            <th className="th">Win Percentage</th>
            <th className="th">Last 5</th>
          </tr>
        </thead>
        <tbody>
          {props.mlbstandings.length > 0 &&
            props.mlbstandings
              .filter((team) => team.group.name === "NL Central")
              .map((team) => (
                <tr key={team.team.name}>
                  <td
                    style={{
                      margin: "0px",
                      padding: "0px",
                      verticalAlign: "top",
                    }}
                  >
                    <img
                      src={teamPictures[team.team.name]}
                      style={{
                        width: "15vw",
                        height: "15vh",
                        margin: "0px",
                        padding: "0px",
                      }}
                      alt=""
                    />
                  </td>
                  <td style={{ marginTop: "25px" }} key={team.team.name}>
                    <strong>{team.team.name}</strong>
                  </td>
                  <td>{team.games.win.total}</td>
                  <td>{team.games.lose.total}</td>
                  <td>{team.games.win.percentage}</td>
                  <td>{team.form}</td>
                </tr>
              ))}
        </tbody>
      </Table>
      <h4>NL West</h4>
      <Table
        striped
        bordered
        hover
        style={{ textAlign: "center", verticalAlign: "middle" }}
      >
        <thead>
          <tr>
            <th style={{ padding: "0px" }}></th>
            <th className="th">Team</th>
            <th className="th">Wins</th>
            <th className="th">Losses</th>
            <th className="th">Win Percentage</th>
            <th className="th">Last 5</th>
          </tr>
        </thead>
        <tbody>
          {props.mlbstandings.length > 0 &&
            props.mlbstandings
              .filter((team) => team.group.name === "NL West")
              .map((team) => (
                <tr key={team.team.name}>
                  <td
                    style={{
                      margin: "0px",
                      padding: "0px",
                      verticalAlign: "top",
                    }}
                  >
                    <img
                      src={teamPictures[team.team.name]}
                      style={{
                        width: "15vw",
                        height: "15vh",
                        margin: "0px",
                        padding: "0px",
                      }}
                      alt=""
                    />
                  </td>
                  <td style={{ marginTop: "25px" }} key={team.team.name}>
                    <strong>{team.team.name}</strong>
                  </td>
                  <td>{team.games.win.total}</td>
                  <td>{team.games.lose.total}</td>
                  <td>{team.games.win.percentage}</td>
                  <td>{team.form}</td>
                </tr>
              ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MLBStandings;
