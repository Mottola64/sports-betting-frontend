export default function mlbodds(state = [], action) {
    switch (action.type) {
      case "FETCH_MLBODDS":
        return action.payload;
      default:
        return state;
    }
  }
  