import React from "react";
import {
  Card,
  CardHeader,
  CardColumns,
  CardSubtitle,
  CardBody,
} from "reactstrap";
class DailySchedule extends React.Component {
render() {
    return(
        <div>
          <h1>MLB Games Today</h1>
          <CardColumns>
        {this.props.dailyschedule
        .filter(dailyScheduledGame => dailyScheduledGame.status.short !== "CANC").map((dailyScheduledGame) => {
          return (
            <Card key={dailyScheduledGame.id}>
              <CardBody>
                <CardHeader className="text-center" width="100%">
                  <strong>{dailyScheduledGame.teams.away.name} at {dailyScheduledGame.teams.home.name}</strong>
                </CardHeader>
                <br></br>
                <CardSubtitle>
                  
                </CardSubtitle>
              </CardBody>
            </Card>
          );
        })}
      </CardColumns>
      </div>
    )
}
}

export default DailySchedule