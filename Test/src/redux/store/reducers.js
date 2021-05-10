import {ADDITION, SUBTRACTIONS} from './acctionType';

const initialState = {
  counter: 0,
};

export const mainReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADDITION:
      return {...state, counter: state.counter + 1};

    case SUBTRACTIONS:
      return {...state, counter: state.counter - 1};

    default:
      return state;
  }
};
