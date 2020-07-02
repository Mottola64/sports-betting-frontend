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
//   let odds = {upcomingGame.sites.map((site) => {
//       site.
//   })}
//   convertOdds = (odds) => {
//       if(odds >= 2.00){
//           americanOdds = (({upcomingGame.sites.odds}-1)*100)
//       } else
//   { americanOdds = ((-100)/({upcomingGame.sites.odds}-1))}

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
            <CardSubtitle>{upcomingGame.teams[1]} vs. {upcomingGame.teams[0]}</CardSubtitle>

                  <br></br>
                  <CardText>{upcomingGame.commence_time}</CardText>
            <CardSubtitle>{upcomingGame.teams[1]}: {upcomingGame.sites.map((site) => {
                return(<CardText key={site.site_nice}>{site.site_nice}</CardText>)})}
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
