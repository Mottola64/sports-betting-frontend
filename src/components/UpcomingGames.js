import React from 'react'
import UpcomingGame from './UpcomingGame'

class UpcomingGames extends React.Component {
    render() {
        return(
            <div>
            {this.props.upcoming.map((upcomingGame) => (
              <UpcomingGame key={upcomingGame.id} upcomingGame={upcomingGame} />
            ))}
          </div>
        )
    }
}

export default UpcomingGames