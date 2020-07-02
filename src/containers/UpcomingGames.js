import React from 'react'

class UpcomingGames extends React.Component {

    componentDidMount() {
        this.props.fetchUpcomingGames();
    }


    render() {
        return(
            <div></div>
        )
    }
}

export default connect(mapStateToProps, { fetchUpcomingGames })(UpcomingGames)