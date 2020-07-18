export default function dailyschedule(state = [], action) {
    switch (action.type) {
      case "FETCH_DAILYSCHEDULE":
        return action.payload;
      default:
        return state;
    }
  }