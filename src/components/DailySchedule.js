import React from 'react'

class DailySchedule extends React.Component {
render() {
    return(
        <div>        <CardColumns>
        {this.props.dailyschedule.map((dailyScheduledGame) => {
          return (
            <Card key={dailyScheduledGame.home_team}>
              <CardBody>
                <CardHeader className="text-center" width="100%">
                  <strong>{dailyScheduledGame.sport_nice}</strong>
                </CardHeader>
                <br></br>
                <CardSubtitle>
                  {dailyScheduledGame.teams[1]} vs. {dailyScheduledGame.teams[0]}
                </CardSubtitle>
              </CardBody>
            </Card>
          );
        })}
      </CardColumns></div>
    )
}
}

export default DailySchedule