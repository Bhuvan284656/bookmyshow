import { ADD_SEAT, REMOVE_SEAT } from "../actions";
const initialState = {
  count: 0,
  seats: []
};

const Add_SeatData = (action, state) => {
  let seats = [...state.seats];
  if(!seats) seats = [];
  const count = state.count;
  seats = [...seats, action.value];
  return { ...state, count: count + 1, seats: seats };
};

const Remove_SeatData = (action, state) => {
  let seats = [...state.seats];
  if (!seats) seats = [];
  let count = state.count;
  if (count > 0) --count;
  var index = seats.indexOf(action.value);
  if (index !== -1) seats.splice(index, 1);

  return { ...state, count: count, seats: seats };
};

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
