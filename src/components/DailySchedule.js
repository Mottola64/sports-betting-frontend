import React from "react";
import {
  Card,
  CardHeader,
  CardImg,
  CardColumns,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import teamPictures from "../data/pictures";

class DailySchedule extends React.Component {
  
  
  render() {
    return (
      <div>
        <h1>MLB Games Today</h1>
        <CardColumns>
          {this.props.dailyschedule
            .filter(
              (game) =>
                game.status.short !== "CANC"
            )
            .filter(
              (game) =>
                game.status.short !== "POST"
            )
            .map((dailyScheduledGame) => {
              return (
                <Card key={dailyScheduledGame.id}>
                  <CardBody>
                    <CardHeader className="text-center" width="100%">
                      <strong>
                        {dailyScheduledGame.teams.away.name}
                        at {dailyScheduledGame.teams.home.name}
                      </strong>
                    </CardHeader>
                    <br></br>
                    <CardSubtitle><CardImg
                          top src={teamPictures[dailyScheduledGame.teams.away.name]}
                          style=
                          {{
                            width: "40%",
                            height: "40%",
                            backgroundColor: "white",
                          }}
                          alt="Card image cap" />{" "}
                        at
                        <CardImg
                          top
                          src={teamPictures[dailyScheduledGame.teams.home.name]}
                          style={{
                            width: "40%",
                            height: "40%",
                            backgroundColor: "white",
                          }}
                          alt="Card image cap"
                        /></CardSubtitle>
                  </CardBody>
                </Card>
              );
            })}
        </CardColumns>
      </div>
    );
  }
}

export default DailySchedule;
