export default function mlbodds(state = [], action) {
    switch (action.type) {
      case "FETCH_MLBODDS":
        return {
          ...state,
          mlbodds: action.payload
        }
      default:
        return state;
    }
  }
  