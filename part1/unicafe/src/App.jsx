import { useState } from 'react'

const Button = (prop) => (
  <button onClick={prop.handleClick}>
    {prop.text}
  </button>
)

const StatisticsDisplay = (prop) => (
  <>
    {prop.text} {prop.stat}
  </>
)

const Total = (props) => (
  <>
    all {props.statlist.reduce((acc, s) => acc + s, 0)}
  </>
)

const Average = ({ good, neutral, bad }) => {
  let average = (good - bad) / (good + neutral + bad)

  if (isNaN(average)) {
    average = 0
  }

  return (
    <>
      average {average}
    </>
  )
}

const Percentage = ({text, good, neutral, bad}) => {
  let percentage = good / (good + neutral + bad)

  if (isNaN(percentage)) { 
    percentage = 0 
  }

  return (
    <>
      {text} {percentage}
    </>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const statlist = [good, neutral, bad]

  return (
    <>
      <h1>
        give feedback
      </h1>
      <Button text='good' handleClick={() => setGood(good + 1)} />
      <Button text='neutral' handleClick={() => setNeutral(neutral + 1)} />
      <Button text='bad' handleClick={() => setBad(bad + 1)} />
      <h1>
        statistics
      </h1>
      <div>
        <StatisticsDisplay text='good' stat={good} />
      </div>
      <div>
        <StatisticsDisplay text='neutral' stat={neutral} />
      </div>
      <div>
        <StatisticsDisplay text='bad' stat={bad} />
      </div>
      <div>
        <Total statlist={statlist} />
      </div>
      <div>
        <Average good={good} neutral={neutral} bad={bad} />
      </div>
      <div>
        <Percentage text='positive' good={good} neutral={neutral} bad={bad} />
      </div>
    </>
  )
}

export default App