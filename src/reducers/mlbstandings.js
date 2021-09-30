export default function mlbStandings(state = [], action) {
  switch (action.type) {
    case "FETCH_MLBSTANDINGS":
      return action.payload
    default:
      return state;
  }
}
