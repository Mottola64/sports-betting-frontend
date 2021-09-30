export default function ncaabodds(state = [], action) {
    switch (action.type) {
      case "FETCH_NCAABODDS":
        return action.payload
      default:
        return state;
    }
  }
  