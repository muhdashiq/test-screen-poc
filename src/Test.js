import React, {Component} from 'react';
import QuestionStatus from "./QuestionStatus"
import Question from './Question'
import fetchedQuestionFromAPI from './SampleQuestions'

class Test extends Component {

  state = {
    questions: fetchedQuestionFromAPI,
    currentQuestionIndex: 0,
    answerChoices: {}
  }


  updateChoice = ((questionIndex, choice, value) => {
    const {answerChoices} = this.state;
    if(answerChoices[questionIndex] === undefined) {
      answerChoices[questionIndex] = {};
    }
    answerChoices[questionIndex][choice] = value;
    this.setState({answerChoices});
  })

  render() {
    const {questions, currentQuestionIndex, answerChoices} = this.state;
    return (
      <div style={styles.container}>
        <h1>Sample test taking react application - POC</h1>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{display: 'flex', flex: 2, backgroundColor: '#f9fce1', margin: 10, borderRadius: 5, padding: 20}}>
            <Question
              currentQuestionIndex={currentQuestionIndex}
              question={questions[currentQuestionIndex]}
              answerChoice={answerChoices[currentQuestionIndex]}
              updateChoice={this.updateChoice}
            />
          </div>
          <div style={{display: 'flex', flex: 1, backgroundColor: '#f1f8b9', margin: 10, borderRadius: 5, padding: 20}}>
            <QuestionStatus
              currentQuestionIndex = {currentQuestionIndex}
              questions={questions}
              answerChoices={answerChoices}
              updateSelectedQuestion={(index) => this.setState({currentQuestionIndex: index})}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    //backgroundColor: ''
  }
}

export default Test;
