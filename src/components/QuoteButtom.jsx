import React from 'react'

const QuoteButtom = ({newQuote, color}) => {
  return (
    <button className='quoteButtom' onClick={newQuote} style={{backgroundColor: color}}>
        <i className='bx bx-right-arrow-circle'></i>
    </button>
  )
}

export default QuoteButtom