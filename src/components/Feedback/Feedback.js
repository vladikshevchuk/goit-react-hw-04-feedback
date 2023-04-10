import { useState } from 'react';
import './Feedback.css';

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedBack = () => {
    let total = good + neutral + bad;

    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    let positiveFeedback = 0;

    positiveFeedback = (good / (good + neutral + bad)) * 100;

    if (isNaN(positiveFeedback)) {
      return 'no feedback';
    }

    return `${positiveFeedback.toFixed(0)} %`;
  };

  return (
    <section>
      <h2>Please leave feedback</h2>
      <div className="btns">
        <button type="button" name='good' onClick={() => setGood(state => state + 1)}>
          Good
        </button>
        <button type="button" onClick={() => setNeutral(state => state + 1)}>
          Neutral
        </button>
        <button type="button" onClick={() => setBad(state => state + 1)}>
          Bad
        </button>
      </div>
      <div>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Netural: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {countTotalFeedBack()}</p>
        <p>Positive feedback: {countPositiveFeedbackPercentage()}</p>
      </div>
    </section>
  );
}

export default Feedback;
