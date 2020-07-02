import React from "react";
// import UpcomingGame from "./UpcomingGame";
import {
  Card,
  Button,
  CardImg,
  CardHeader,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
} from "reactstrap";

class UpcomingGames extends React.Component {
  render() {
    return (
      <div>
        <CardColumns>
          {this.state.upcoming.map((upcomingGame) => {
            const { id, upcoming } = upcomingGame;
            return (
              <Card key={upcoming.id}>
                <CardBody>
                  <CardHeader className="text-center" width="100%">
                    <strong>{upcoming.sport_nice}</strong>
                  </CardHeader>
                  <br></br>
            <CardSubtitle>{upcoming.teams[1]} vs. {upcoming.teams[0]}</CardSubtitle>

                  <br></br>
                  <CardText>Year: {upcomingGame.year_id}</CardText>
                  <CardText>Pts: {upcomingGame.points}</CardText>
                  <CardText>Onbase: {upcomingGame.onbase}</CardText>
                  <CardText>
                    Position: {upcomingGame.starting_position}+
                    {upcomingGame.fielding_one}
                  </CardText>
                </CardBody>
              </Card>
            );
          })}
        </CardColumns>
      </div>
    );
  }
}

export default UpcomingGames;
