export default function ncaafodds(state = [], action) {
    switch (action.type) {
      case "FETCH_NCAAFODDS":
        return action.payload
      default:
        return state;
    }
  }
  