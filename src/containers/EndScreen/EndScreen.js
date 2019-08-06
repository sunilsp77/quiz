import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import Table from '../../components/UI/Table/Table';
import * as actionTypes from '../../store/actions';
import classes from './EndScreen.module.css';

class EndScreen extends Component {
  playAgain = () => {
    this.props.playQuizAgain();
    this.props.history.push('/start-quiz');
  };
  render() {
    let rowArray = [];
    for (let i = 0; i < this.props.questions.length; i++) {
      let questn = this.props.questions[i].question;
      let option = this.props.response[i] === 'Y' ? 'Correct' : 'Incorrect';
      rowArray.push({
        question: questn,
        value: option,
      });
    }
    return (
      <div>
        <Table quizQuestions={rowArray} />
        <Card h1="Your Score is:" p1={this.props.score} />
        <div className={classes.BtnDiv}>
          <button className={classes.Btn} onClick={this.playAgain}>
            Play Again!
          </button>
        </div>
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
