import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quotes from './quotes.json'
import QuoteBox from './components/QuoteBox'
import Button from './components/Button'

function App() {
  const randomIndex = Math.floor(Math.random()*quotes.length)
  const [index, setIndex] = useState(randomIndex)

  const changeQuotes =()=>{
    const randomIndex= Math.floor(Math.random()*quotes.length)
    setIndex(randomIndex)  
  }

  const colors = ['#FFBE0B', '#FD8A09', '#FB5607', '#FF006E', '#C11CAD', '#8338EC', '#5F5FF6', '#3A86FF']
  const randomColor = Math.floor(Math.random()*colors.length)
  document.body.style = `background: ${colors[randomColor]}`

  return (
    <div className="App">
      <QuoteBox
      quote= {quotes[index].quote}
      author={quotes[index].author}
      color={colors[randomColor]}
      />
      <Button
      button={changeQuotes}
      background={colors[randomColor]}
      />
    </div>
  )
}

export default App