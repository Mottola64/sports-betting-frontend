export default function mlbStandings(state = [], action) {
  switch (action.type) {
    case "FETCH_MLBSTANDINGS":
      return {
        ...state,
        standings: action.payload
      }
    default:
      return state;
  }
}
