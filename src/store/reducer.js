import * as actionTypes from './actions';

const initialState = {
  questions: [],
  error: false,
  disableNextQ: true,
  score: 0,
  currentQ: 0,
  response: [],
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
    case actionTypes.NAVIGATE_NEXT_QUESTION:
      return {
        ...state,
        disableNextQ: true,
        currentQ: state.currentQ++,
      };
    case actionTypes.VALIDATE_SELECTED_OPTION:
      let isCorrect =
        action.event.target.value ===
        state.questions[state.currentQ].correct_answer;
      let updatedScore = state.score;
      let result = '';
      if (isCorrect) {
        updatedScore++;
        result = 'Y';
      } else {
        result = 'N';
      }
      console.log(updatedScore);
      return {
        ...state,
        score: updatedScore,
        disableNextQ: false,
        response: state.response.concat(result),
      };
    default:
      return state;
  }
};
export default reducer;
