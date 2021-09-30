export default function nbaodds(state = [], action) {
    switch (action.type) {
      case "FETCH_NBAODDS":
        return {
          ...state,
          nbaodds: action.payload
        }
      default:
        return state;
    }
  }
  