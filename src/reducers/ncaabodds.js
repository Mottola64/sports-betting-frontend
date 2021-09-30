export default function ncaabodds(state = [], action) {
    switch (action.type) {
      case "FETCH_NCAABODDS":
        return {
          ...state,
          ncaaodds: action.payload
        }
      default:
        return state;
    }
  }
  