export default function odds(state = [], action) {
    switch (action.type) {
      case "FETCH_ODDS":
        return action.payload;
      default:
        return state;
    }
  }
  