export default function nbaresults(state = [], action) {
    switch (action.type) {
      case "FETCH_NBARESULTS":
        return action.payload
      default:
        return state;
    }
  }
  