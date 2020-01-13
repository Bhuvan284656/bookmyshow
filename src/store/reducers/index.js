import { ADD_SEAT, REMOVE_SEAT } from "../actions";

const initialState = {
  count: 0,
  seats: []
};

//Add new Seat on Select
const Add_SeatData = (action, state) => {
  let seats = [...state.seats];
  const count = state.count;

  if(!seats) seats = [];
  seats = [...seats, action.value];

  return { ...state, count: count + 1, seats: seats };
};

//Unselect seat from Selected Seat.
const Remove_SeatData = (action, state) => {
  let seats = [...state.seats];
  let count = state.count;

  if (!seats) seats = [];
  if (count > 0) --count;

  var index = seats.indexOf(action.value);
  if (index !== -1) seats.splice(index, 1);

  return { ...state, count: count, seats: seats };
};

//reducer to save Selected Seat data
const SeatCounts = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEAT:
      return Add_SeatData(action, {...state});
    case REMOVE_SEAT:
      return Remove_SeatData(action, {...state});
    default:
      return state;
  }
};

export default SeatCounts;
