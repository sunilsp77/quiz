import * as actionTypes from './actions';

const initialState = {
  questions: [],
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_QUESTIONS:
      return {
        ...state,
        questions: action.questions,
        error: false,
      };
    case actionTypes.FETCH_QUESTIONS_FAILED:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
export default reducer;
