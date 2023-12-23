import { useState } from 'react'

const Button = (prop) => (
  <button onClick={prop.handleClick}>
    {prop.text}
  </button>
)

const StatisticLine = ({ text, value }) => (
  <div>
    {text} {value}
  </div>
)

const StatisticsBlock = (props) => {

  const total = props.stats.reduce((acc, s) => acc + s.value, 0)

  if (total == 0) {
    return (
      <>
        <h1>
          statistics
        </h1>
        No feedback yet
      </>
    )
  }

  const average = (props.stats[0].value - props.stats[2].value) / total
  const positivePercentage = (props.stats[0].value) / total

  return (
    <>
      <h1>
        statistics
      </h1>
      <div>
        {/* Could map over props list */}
        <StatisticLine text="good" value={props.stats[0].value} />
        <StatisticLine text="neutral" value={props.stats[1].value} />
        <StatisticLine text="bad" value={props.stats[2].value} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positivePercentage} />
      </div>
    </>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const statlist = [
      {
        value: good,
        setFunc: setGood
      },
      {
        value: neutral,
        setFunc: setNeutral
      },
      {
        value: bad,
        setFunc: setBad
      }
    ]

  return (
    <>
      <h1>
        give feedback
      </h1>
      <Button text='good' handleClick={() => setGood(good + 1)} />
      <Button text='neutral' handleClick={() => setNeutral(neutral + 1)} />
      <Button text='bad' handleClick={() => setBad(bad + 1)} />
      <StatisticsBlock stats={statlist}></StatisticsBlock>
    </>
  )
}

export default App