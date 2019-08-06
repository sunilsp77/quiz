import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios';
import Question from '../../components/Question/Question';
import * as actionTypes from '../../store/actions';
import EndScreen from '../EndScreen/EndScreen';

class Questions extends Component {
  componentDidMount() {
    axios
      .get('')
      .then(response => {
        const questions = response.data.results;
        const updatedQuestions = questions.map(q => {
          return {
            question: q.question,
            correct_answer: q.correct_answer,
            incorrect_answer: q.incorrect_answers.toString(),
          };
        });
        console.log(updatedQuestions);
        // this.setState({
        //   questions: updatedQuestions,
        // });
        this.props.set_questions(updatedQuestions);
      })
      .catch(error => {
        console.log(error);
        // this.setState({ error: true });
        this.props.fetch_questions_failed();
      });
  }

  //   validateAnswer = event => {
  //     console.log(event.target);
  //     if (
  //       this.props.questions[this.state.currentQ].correct_answer ===
  //       event.target.value
  //     ) {
  //       console.log(event.target);
  //       this.setState((state, props) => {
  //         return {
  //           score: this.state.score + 1,
  //           result: 'You answer is Correct',
  //           nextQ: false,
  //         };
  //       });
  //     } else {
  //       this.setState((state, props) => {
  //         return {
  //           result: 'You answer is Wrong',
  //           nextQ: false,
  //         };
  //       });
  //     }
  //   };
  //   navigateToNext = () => {
  //     this.setState((state, props) => {
  //       return {
  //         result: '',
  //         nextQ: true,
  //         currentQ: this.state.currentQ + 1,
  //       };
  //     });
  //   };
  render() {
    let q = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
    if (!this.props.error) {
      q = this.props.questions.map((question, index) => {
        return (
          <Question
            key={question.index}
            question={question.question}
            rightAnswer={question.correct_answer}
            wrongAnswer={question.incorrect_answer}
            checkAnswer={this.props.validate_selected_option}
          />
        );
      });
    }
    let index = this.props.currentQ;
    let result = null;
    if (this.props.currentResponse === 'Y') {
      result = <p>Your answer is Correct</p>;
    } else if (this.props.currentResponse === 'N') {
      result = <p>Your answer is Incorrect</p>;
    }
    return (
      <div>
        <h2>{q[index]}</h2>
        {result}
        <button
          disabled={this.props.disableNextQ}
          onClick={this.navigate_next_question}
        >
          Next
        </button>
        <EndScreen />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions,
    error: state.error,
    disableNextQ: state.disableNextQ,
    currentQ: state.currentQ,
    currentResponse: state.response[state.currentQ],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    set_questions: questions =>
      dispatch({ type: actionTypes.SET_QUESTIONS, questions: questions }),
    fetch_questions_failed: () =>
      dispatch({
        type: actionTypes.FETCH_QUESTIONS_FAILED,
      }),
    validate_selected_option: event =>
      dispatch({ type: actionTypes.VALIDATE_SELECTED_OPTION, event: event }),
    navigate_next_question: () =>
      dispatch({ type: actionTypes.NAVIGATE_NEXT_QUESTION }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Questions);
