export default function nbaschedule(state = [], action) {
  switch (action.type) {
    case "FETCH_NBASCHEDULE":
      return action.payload;
    default:
      return state;
  }
}
