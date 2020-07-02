export default function upcomingGames(state = [], action) {
    switch (action.type) {
      case "FETCH_UPCOMING":
        return action.payload;
      default:
        return state;
    }
  }