import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';

class EndScreen extends Component {
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

    return (
      <div>
        {q}
        <Link
          to={{
            pathname: './start-quiz',
          }}
        >
          Play Again!
        </Link>{' '}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions,
    score: state.score,
  };
};

export default connect(mapStateToProps)(EndScreen);
