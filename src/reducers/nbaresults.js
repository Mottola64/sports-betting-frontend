export default function nbaresults(state = [], action) {
    switch (action.type) {
      case "FETCH_NBARESULTS":
        return {
          ...state,
          nbaresults: action.payload
        }
      default:
        return state;
    }
  }
  