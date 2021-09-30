export default function ncaafodds(state = [], action) {
    switch (action.type) {
      case "FETCH_NCAAFODDS":
        return {
          ...state,
          ncaaf: action.payload
        }
      default:
        return state;
    }
  }
  