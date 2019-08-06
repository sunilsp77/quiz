import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import Table from '../../components/UI/Table/Table';
import * as actionTypes from '../../store/actions';

class EndScreen extends Component {
  playAgain = () => {
    this.props.playQuizAgain();
    this.props.history.push('/start-quiz');
  };
  render() {
    // const allQuestions = this.props.questions.map(q => (
    //   <div>
    //     <h2>q.question</h2>
    //   </div>
    // ));
    console.log(this.props.questions);
    let q = this.props.questions.map((q, index) => {
      return (
        <Card
          key={index}
          question={q.question}
          correctAnswer={q.correct_answer}
          incorrectAnswer={q.incorrect_answer}
        />
      );
    });

    let rowArray = [];
    for (let i = 0; i < this.props.questions.length; i++) {
      let questn = this.props.questions[i].question;
      let option = this.props.response[i] === 'Y' ? 'Correct' : 'Incorrect';
      rowArray.push({
        question: questn,
        value: option,
      });
    }
    console.log(rowArray);

    return (
      <div>
        <Table quizQuestions={rowArray} />
        <Card h1="Your Score is:" p1={this.props.score} />
        {/* <Link
          to={{
            pathname: './start-quiz',
          }}
        >
          Play Again!
        </Link>{' '} */}
        <button onClick={this.playAgain}>Play Again!</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions,
    score: state.score,
    response: state.response,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    playQuizAgain: () => dispatch({ type: actionTypes.PLAY_QUIZ_AGAIN }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EndScreen);
