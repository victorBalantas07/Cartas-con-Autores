import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import db from "./db/quotes.json"

const arrayColors = ["#454B05", "#E08804", "#B5070F", "#4C0293", "#A2B001", "#2DCC02", "#02B0AF", "#4F2F23", "#2C5FE8", "#C42CE8", "#EDB423"]

function App() {
  const getRandom = (arrayElements) => {
    const quantityValues = arrayElements.length
    const randomIndex = Math.floor(Math.random() * quantityValues)
    return arrayElements[randomIndex]

  } 
 const [quote, setQuote] = useState(getRandom(db))

 const [color, setcolor] = useState(getRandom(arrayColors))

 const newQuote = () => {
  setQuote(getRandom(db))
  setcolor(getRandom(arrayColors))
 }

  

  return (
    <div className="App" style={{backgroundColor: color}}>
    <QuoteBox  quote={quote} newQuote={newQuote} color={color} />
    </div>
  )
  }

export default App
