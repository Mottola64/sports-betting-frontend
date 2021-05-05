export default function sportsnews(state = [], action) {
    switch (action.type) {
      case "FETCH_SPORTSNEWS":
        return action.payload;
      default:
        return state;
    }
  }