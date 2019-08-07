import * as actionTypes from './actions';

const initialState = {
  questions: [],
  error: false,
  disableNextQ: true,
  endOfQuiz: false,
  score: 0,
  currentQ: 0,
  response: [],
  radioBtn: null,
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
      state.radioBtn.checked = false;
      disableRadioButtons(false);
      return {
        ...state,
        disableNextQ: true,
        currentQ: state.currentQ + 1,
        radioBtn: null,
      };
    case actionTypes.VALIDATE_SELECTED_OPTION:
      disableRadioButtons(true);
      let isCorrect =
        action.event.target.value ===
        state.questions[state.currentQ].correct_answer;
      let updatedScore = state.score;
      let result = '';
      if (isCorrect) {
        updatedScore = updatedScore + 1;
        result = 'Y';
      } else {
        result = 'N';
      }
      if (state.currentQ + 1 === state.questions.length) {
        return {
          ...state,
          score: updatedScore,
          disableNextQ: false,
          endOfQuiz: true,
          radioBtn: action.event.target,
          response: state.response.concat(result),
        };
      }
      return {
        ...state,
        score: updatedScore,
        disableNextQ: false,
        radioBtn: action.event.target,
        response: state.response.concat(result),
      };
    case actionTypes.PLAY_QUIZ_AGAIN:
      return initialState;
    default:
      return state;
  }
};
export default reducer;

function disableRadioButtons(disable) {
  let radioBtnsList = document.getElementsByName('radioButtons');
  radioBtnsList[0].disabled = disable;
  radioBtnsList[1].disabled = disable;
}
