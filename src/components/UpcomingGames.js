import React from "react";
import {
  Card,
  CardHeader,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
} from "reactstrap";

class UpcomingGames extends React.Component {
  render() {
    function convertTimestamp(timestamp) {
      var d = new Date(timestamp * 1000),
        mm = ("0" + (d.getMonth() + 1)).slice(-2),
        dd = ("0" + d.getDate()).slice(-2),
        hh = d.getHours(),
        h = hh,
        min = ("0" + d.getMinutes()).slice(-2),
        ampm = "AM",
        time;

      if (hh > 12) {
        h = hh - 12;
        ampm = "PM";
      } else if (hh === 12) {
        h = 12;
        ampm = "PM";
      } else if (hh === 0) {
        h = 12;
      }

      time = mm + "-" + dd + ", " + h + ":" + min + " " + ampm;

      return time;
    }

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
                  <CardText>
                    {convertTimestamp(upcomingGame.commence_time)}
                  </CardText>
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
