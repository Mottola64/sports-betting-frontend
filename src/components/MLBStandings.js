import React from "react";
import {Table} from 'react-bootstrap'
class MLBStandings extends React.Component {
    renderTeam = (team) => (
        <tr key={team.team.name}>
          <td>{team.team.name}</td>
          <td>{team.group.name}</td>
          <td>{team.games.win.total}</td>
          <td>{team.games.lose.total}</td>
          <td>{team.games.win.percentage}</td>
          <td>{team.form}</td>
        </tr>
      );
    
    render() {
    return (
      <div>
        <Table hover>
          <thead>
            <tr>MLB Standings</tr>
            <tr>
              <th>Team</th>
              <th>Division</th>
              <th>Wins</th>
              <th>Losses</th>
              <th>Win Percentage</th>
              <th>Last 5</th>
            </tr>
          </thead>
          <tbody>
            {this.props.mlbstandings.length > 0 &&
              this.props.mlbstandings.map((team) =>
                this.renderTeam(team)
              )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default MLBStandings;
