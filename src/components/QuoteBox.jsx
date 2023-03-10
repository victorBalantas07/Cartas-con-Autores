import React from 'react'
import QuoteButtom from './QuoteButtom'

const QuoteBox = ({quote, newQuote, color}) => {
  return (
    <div className='quoteBox' style={{color: color}}>
        <p className='quoteBox-quote'>{quote.quote}</p>
        <h3 className='quoteBox-author'>{quote.author}</h3>
        <i className='quoteBox-icon bx bxl-react' ></i>
        <QuoteButtom color={color} newQuote={newQuote} />

    </div>
  ) 
}

export default QuoteBox