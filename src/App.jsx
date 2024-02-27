import { useState } from 'react'
import data from './data.json'
import Question from './components/Question'
import Option from './components/Option'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const options = data[count].options
  const corrrectAnswer = data[count].correctAnswer
  
  const handleButtonClick = () => {
    if (count === 3) {
      setCount(0)
    } else {
      setCount(count + 1)
    }
    setSelectedIndex(null)
  }
  const handleOptionClick = (index) => {
    setSelectedIndex(index)
  }

  return (
    <div>
      <h1 className='header'>Welcome To My Quiz App</h1>
      <Question text={data[count].question} />
      {options.map((option, index) => {
        return (<Option
          key={index}
          option={option}
          index={index}
          handleOptionClick={handleOptionClick}
          selectedIndex={selectedIndex}
          correctAnswer={corrrectAnswer} />)
      })
      }
      <button className='button' onClick={handleButtonClick}>Next</button>
    </div>

  )
}

export default App
