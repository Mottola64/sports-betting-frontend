export default function nbaodds(state = [], action) {
    switch (action.type) {
      case "FETCH_NBAODDS":
        return action.payload;
      default:
        return state;
    }
  }
  