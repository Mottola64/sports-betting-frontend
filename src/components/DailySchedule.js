import React from "react";
import {
  Card,
  CardHeader,
  CardImg,
  CardColumns,
  CardSubtitle,
  CardBody,
  Container,
} from "reactstrap";
import teamPictures from "../data/pictures";
import Moment from "react-moment";

class DailySchedule extends React.Component {
  render() {
    return (
      <Container fluid>
        <h1 style={{ marginTop: "20px" }}>MLB Games Today</h1>
        <CardColumns>
          {this.props.dailyschedule
            .filter((game) => game.status.short !== "CANC")
            .filter((game) => game.status.short !== "POST")
            .map((dailyScheduledGame) => {
              return (
                <Card key={dailyScheduledGame.id}>
                  <CardBody>
                    <CardHeader className="text-center" width="100%">
                      <strong>
                        {dailyScheduledGame.teams.away.name} at{" "}
                        {dailyScheduledGame.teams.home.name}
                      </strong>
                    </CardHeader>
                    <br></br>
                    <CardSubtitle>
                      <Moment unix format="LT">
                        {dailyScheduledGame.timestamp}
                      </Moment>
                    </CardSubtitle>
                    <CardSubtitle>
                      <CardImg
                        top
                        src={teamPictures[dailyScheduledGame.teams.away.name]}
                        style={{
                          width: "30%",
                          height: "30%",
                          backgroundColor: "white",
                        }}
                        alt="Card image cap"
                      />
                      {" @ "}
                      <CardImg
                        top
                        src={teamPictures[dailyScheduledGame.teams.home.name]}
                        style={{
                          width: "30%",
                          height: "30%",
                          backgroundColor: "white",
                        }}
                        alt="Card image cap"
                      />
                    </CardSubtitle>
                    <CardSubtitle>
                      {/* <strong>
                        {this.props.mlbodds.filter((game) => game.home_team.replace(
                            /\s+/g,
                            ""
                          ) ===
                          dailyScheduledGame.teams.away.name.replace(
                            /\s+/g,
                            ""
                          )) ? this.props.mlbodds[0].sites[0].odds.h2h[0]:null}
                      </strong> */}
                    </CardSubtitle>
                  </CardBody>
                </Card>
              );
            })}
        </CardColumns>
      </Container>
    );
  }
}

export default DailySchedule;
