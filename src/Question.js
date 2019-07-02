import React from 'react'
import QuestionOption from './QuestionOption'

const Question = (props) => {
  const {currentQuestionIndex, updateChoice, answerChoice} = props;
  const {question, options} = props.question;

  let currentReviewStatus = false;
  if(answerChoice && answerChoice.markForReview){
    currentReviewStatus = true;
  }

  return (
    <div>
      <div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', marginBottom: 20, color: 'gray'}}>Question # {currentQuestionIndex + 1}</div>
          <MarkForReview
            onPress={() =>updateChoice(currentQuestionIndex, 'markForReview', !currentReviewStatus)}
            mark={currentReviewStatus}
          />
        </div>
        <div style={{display: 'flex', flexDirection: 'row', padding: 15, margin: 5, backgroundColor: '#fee9b2', borderRadius: 5, fontSize: 30}}>
          {question}
        </div>
      </div>
      <div>
        {options.map( (option, index) =>
          <QuestionOption
            key={index}
            content={option}
            label={index + 1}
            active={answerChoice !== undefined && answerChoice.selectedOption === index}
            onPress={() => updateChoice(currentQuestionIndex, 'selectedOption', index)}
          />)}
      </div>
    </div>
  )
}

const MarkForReview = ({onPress, mark}) => {
  const backgroundColor = mark?'#63707e':'#f2f6f5';
  return(
    <div
      style={{ display: 'flex', backgroundColor: backgroundColor, fontSize: 15, padding: 10, margin:5, borderRadius: 15}}
      onClick={onPress}
    >
      {mark?'Marked':'Mark Question'}
    </div>
  )
}

export default Question;
