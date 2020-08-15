import React from "react";
import { Table } from "react-bootstrap";
import teamPictures from "../data/pictures";
import "../index.css";

const MLBStandings = (props) => {
  return (
    <div style={{ marginTop: "25px" }}>
      <h1>MLB Standings</h1>
      <h4>AL East</h4>
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
            <th className="th">Division</th>
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
                      alt="Card image cap"
                    />
                  </td>
                  <td style={{ marginTop: "25px" }} key={team.team.name}>
                    <strong>{team.team.name}</strong>
                  </td>
                  <td key={team.group.name}>{team.group.name}</td>
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
            <th className="th">Division</th>
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
                      alt="Card image cap"
                    />
                  </td>
                  <td style={{ marginTop: "25px" }} key={team.team.name}>
                    <strong>{team.team.name}</strong>
                  </td>
                  <td key={team.group.name}>{team.group.name}</td>
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
            <th className="th">Division</th>
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
                      alt="Card image cap"
                    />
                  </td>
                  <td style={{ marginTop: "25px" }} key={team.team.name}>
                    <strong>{team.team.name}</strong>
                  </td>
                  <td key={team.group.name}>{team.group.name}</td>
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
            <th className="th">Division</th>
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
                      alt="Card image cap"
                    />
                  </td>
                  <td style={{ marginTop: "25px" }} key={team.team.name}>
                    <strong>{team.team.name}</strong>
                  </td>
                  <td key={team.group.name}>{team.group.name}</td>
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
            <th className="th">Division</th>
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
                      alt="Card image cap"
                    />
                  </td>
                  <td style={{ marginTop: "25px" }} key={team.team.name}>
                    <strong>{team.team.name}</strong>
                  </td>
                  <td key={team.group.name}>{team.group.name}</td>
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
            <th className="th">Division</th>
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
                      alt="Card image cap"
                    />
                  </td>
                  <td style={{ marginTop: "25px" }} key={team.team.name}>
                    <strong>{team.team.name}</strong>
                  </td>
                  <td key={team.group.name}>{team.group.name}</td>
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
