import React, { useState } from "react";
import { Table } from "react-bootstrap";
import teamPictures from "../data/pictures";

export const MLBTableMobile = (props) => {
  const [group] = useState(props.group);
  const [teams] = useState(props.teams);

  return (
    <>
      <h4>{group}</h4>
      <Table
        striped
        hover
        style={{
          display: "flexbox",
          flexDirection: "row",
          contentAlignment: "middle-center"
        }}
      >
        <thead>
          <tr>
            <th style={{ padding: "0px" }}></th>
            
            <th className="th">Wins</th>
            <th className="th">Losses</th>
            <th className="th">Win PCT</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
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
             

              <td>{team.games.win.total}</td>
              <td>{team.games.lose.total}</td>
              <td>{team.games.win.percentage}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
