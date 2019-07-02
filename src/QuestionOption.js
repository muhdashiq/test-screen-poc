import React from 'react'

const QuestionOption = ({label, content, onPress, active}) => {
  const backgroundColor = active? '#fbd1b7': '#fee9b2';
  return (
    <div
      style={{display: 'flex', flexDirection: 'row', padding: 15, margin: 5, backgroundColor: backgroundColor, borderRadius: 5, fontSize: 30}}
      onClick={onPress}
    >
      <div style={{display: 'flex', marginRight: 20, backgroundColor: '#fbd1b7', width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}>
        {label}
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {content}
      </div>
    </div>
  )
}

export default QuestionOption;
