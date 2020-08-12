export default function nhlschedule(state = [], action) {
  switch (action.type) {
    case "FETCH_NHLSCHEDULE":
      return action.payload;
    default:
      return state;
  }
}
