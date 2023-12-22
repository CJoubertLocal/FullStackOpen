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

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
    </>
  )
}

export default App