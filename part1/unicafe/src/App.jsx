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
      all {props.stats.reduce((acc, s) => acc + s, 0)}
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

const Percentage = (props) => {
  let percentage = props.stats.filter(s => s.name === 'good')[0].value / 
                    props.stats.reduce((acc, s) => acc + s.value, 0)

  if (isNaN(percentage)) { 
    percentage = 0 
  }

  return (
    <>
      {props.text} {percentage}
    </>
  )
}

const StatisticsBlock = (props) => {

  if (props.stats.reduce((acc, s) => acc + s.value, 0) == 0) {
    return (
      <>
        <h1>
          statistics
        </h1>
        No feedback yet
      </>
    )
  }

  return (
    <>
      <h1>
        statistics
      </h1>
      <div>
        {props.stats.map(s => 
          <div>
            <StatisticsDisplay
              text={s.name}
              stat={s.value} />
          </div>
        )}
      </div>
      <div>
        <Total 
          stats={props.stats.map(s => s.value)} />
      </div>
      <div>
        <Average 
          good={props.stats[0].value} 
          neutral={props.stats[1].value} 
          bad={props.stats[2].value} />
      </div>
      <div>
        <Percentage 
          text='positive' 
          stats={props.stats} />
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
        name: 'good',
        value: good,
        setFunc: setGood
      },
      {
        name: 'neutral',
        value: neutral,
        setFunc: setNeutral
      },
      {
        name: 'bad',
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