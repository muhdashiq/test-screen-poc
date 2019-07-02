import React from 'react'

const QuestionStatus = (props) => {
  const {currentQuestionIndex, questions, updateSelectedQuestion, answerChoices} = props;

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', padding: 15}}>
      {questions.map((question, index) => {
        const backgroundColor = getQuestionStatusBackgroundColor(index, answerChoices);
        return(
          <StatusBubble
            key={index}
            active={index === currentQuestionIndex}
            backgroundColor={backgroundColor}
            onPress={() => updateSelectedQuestion(index)}
            label={index + 1}
          />
        )
      })}
    </div>
  )
}

const StatusBubble = ({active, onPress, label, backgroundColor}) => {
  const bubbleColor = active ? '#c8dad3' : backgroundColor;
  return (
    <div
      style={{ display: 'flex', fontSize: 30, backgroundColor: bubbleColor,
        height: 60, width: 60, padding: 10, margin: 5, borderRadius: 40,
        alignItems: 'center', justifyContent: 'center'
      }}
      onClick={() => onPress()}
    >
      {label}
    </div>
  )
}

const getQuestionStatusBackgroundColor = ((questionIndex, answerChoices) => {
  if(answerChoices[questionIndex] !== undefined) {
    if(answerChoices[questionIndex].markForReview === true) return '#63707e';
    else if(answerChoices[questionIndex].selectedOption !== undefined) return '#93b5b3';
    else if(answerChoices[questionIndex].visited !== undefined) return '#f2f6f5';
  }

  return '#ffe6e6'
})

export default QuestionStatus;
