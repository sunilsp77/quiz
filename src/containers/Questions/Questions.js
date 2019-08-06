import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios';
import Question from '../../components/Question/Question';
import * as actionTypes from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';

class Questions extends Component {
  componentDidMount() {
    let parser = new DOMParser();
    axios
      .get('')
      .then(response => {
        const questions = response.data.results;
        const updatedQuestions = questions.map(q => {
          let questn = parser.parseFromString(q.question, 'text/html').body
            .textContent;
          return {
            question: questn,
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
  seeResults = () => {
    this.props.history.push('/end');
  };
  render() {
    let q = this.props.error ? (
      <p style={{ textAlign: 'center' }}>Something went wrong!</p>
    ) : (
      <Spinner />
    );

    let result = null;
    if (this.props.currentResponse === 'Y') {
      result = <p>Your answer is Correct</p>;
    } else if (this.props.currentResponse === 'N') {
      result = <p>Your answer is Incorrect</p>;
    }
    if (Array.isArray(this.props.questions) && this.props.questions.length) {
      console.log(this.props.questions);
      let currentQuestion = this.props.questions[this.props.currentQ];
      q = (
        <Question
          question={currentQuestion.question}
          rightAnswer={currentQuestion.correct_answer}
          wrongAnswer={currentQuestion.incorrect_answer}
          checkAnswer={this.props.validate_selected_option}
        />
      );
    }
    let btn = (
      <button
        disabled={this.props.disableNextQ}
        onClick={this.props.navigate_next_question}
      >
        Next
      </button>
    );
    if (this.props.endOfQuiz) {
      console.log('END OF QUIZ');
      console.log(this.props.endOfQuiz);
      btn = <button onClick={this.seeResults}>See your Score!</button>;
    }
    return (
      <div>
        {q}
        {result}
        {btn}
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
    endOfQuiz: state.endOfQuiz,
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
