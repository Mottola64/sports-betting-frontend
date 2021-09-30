export default function nflodds(state = [], action) {
    switch (action.type) {
      case "FETCH_NFLODDS":
        return action.payload
      default:
        return state;
    }
  }
  