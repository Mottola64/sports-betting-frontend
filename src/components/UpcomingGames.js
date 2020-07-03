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
          {this.props.upcoming.map((upcomingGame) => {
            return (
              <Card key={upcomingGame.home_team}>
                <CardBody>
                  <CardHeader className="text-center" width="100%">
                    <strong>{upcomingGame.sport_nice}</strong>
                  </CardHeader>
                  <br></br>
                  <CardSubtitle>
                    {upcomingGame.teams[1]} vs. {upcomingGame.teams[0]}
                  </CardSubtitle>

                  <br></br>
                  <CardText>{upcomingGame.commence_time}</CardText>
                  <CardSubtitle>
                    {upcomingGame.teams[1]}:{" "}
                    {upcomingGame.sites.map((site) => {
                      return (
                        <CardText key={site.site_nice}>
                          {site.site_nice}
                        </CardText>
                      );
                    })}
                    {/* <CardSubtitle>
                      {odds.h2h.map((odds) => {
                        return <CardText key={odds.h2h}>{odds.h2h}</CardText>;
                      })}
                    </CardSubtitle> */}
                  </CardSubtitle>
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
