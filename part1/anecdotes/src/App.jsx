import { useState } from 'react'

const Button = (prop) => (
  <button onClick={prop.handleClick}>
    {prop.text}
  </button>
)

const DisplayVote = (prop) => (
  <>
    has {prop.voteCount} votes
  </>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [indexWithMostVotes, setIndexWithMostVotes] = useState(0)
  
  const pointsMap = new Map();
  for (var i = 0; i < anecdotes.length; i++) {
    pointsMap.set(i, 0)
  }
  const [points, setPoints] = useState({pointsMap})

  const getRandomAnecdoteIndex = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    const copy = {...points}
    copy.pointsMap.set(selected, copy.pointsMap.get(selected) + 1)
    setPoints(copy)

    if (points.pointsMap.get(selected) > points.pointsMap.get(indexWithMostVotes)) {
      setIndexWithMostVotes(selected)
    }
  }

  return (
    <>
      <h1>
        Anecdote of the day
      </h1>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        <DisplayVote voteCount={points.pointsMap.get(selected)} />
      </div>
      <div>
        <Button text='vote' handleClick={handleVote} />
        <Button text='next anecdote' handleClick={getRandomAnecdoteIndex} />
      </div>
      <h1>
        Anecdote with most votes
      </h1>
      <div>
        {anecdotes[indexWithMostVotes]}
      </div>
      <div>
        <DisplayVote voteCount={points.pointsMap.get(indexWithMostVotes)} />
      </div>
    </>
  )
}

export default App