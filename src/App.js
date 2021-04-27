import { Component } from 'react';
import './App.css';
import Container from './components/UI/container'
import ButtonControl from './components/buttonControl'
import Section from './components/UI/Section'
import Statistics from './components/statistics'
import Notification from './components/notification'


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = range => {
    this.setState(prevState => ({ [range]: prevState[range] + 1 }));
  };
  countFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positivePercentage = () => {
    const { good, neutral, bad } = this.state;
    const positive = good / (good + neutral + bad);
    return positive && Math.round(positive * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countFeedback();
    const positiveFeedback = this.positivePercentage();
    return (
      <div className="App" >
        <Container>
          <Section title="Please leave feedback">
            <ButtonControl
              feedbackRange={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.addFeedback}
            />

          </Section>
          <Section title="Statistics">
            {totalFeedback > 0 ? (<Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positive={positiveFeedback}
            />) : (<Notification message="No feedback given"></Notification>)
            }
          </Section>
        </Container>
      </div>
    );
  }
}

// const App = () => {
//   return <div className="App" >
//     <Container>
//       <Section title="Please leave feedback">
//         <ButtonWrap></ButtonWrap>
//       </Section>
//       <Section title="Statistics"></Section>

//     </Container>
//   </div>
// }


export default App;
