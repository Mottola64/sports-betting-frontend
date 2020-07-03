export default function sports(state = [], action) {
    switch (action.type) {
      case "FETCH_SPORTS":
        return action.payload;
      default:
        return state;
    }
  }