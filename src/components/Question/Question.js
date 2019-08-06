import React from 'react';

const question = props => {
  let randomIndex = Math.floor(Math.random() * 2);
  let firstOption = props.wrongAnswer,
    secondOption = props.rightAnswer;
  if (randomIndex === 1) {
    firstOption = props.rightAnswer;
    secondOption = props.wrongAnswer;
  }
  return (
    <article>
      <h1>{props.question}</h1>
      {/* <button onClick={props.checkAnswer}>{firstOption}</button>
      <button onClick={props.checkAnswer}>{secondOption}</button> */}
      <input
        type="radio"
        name="radio1"
        value={firstOption}
        onChange={props.checkAnswer}
      />
      {firstOption}
      <br />
      <input
        type="radio"
        name="radio1"
        value={secondOption}
        onChange={props.checkAnswer}
      />
      {secondOption}
      <br />
    </article>
  );
};

export default React.memo(question);
