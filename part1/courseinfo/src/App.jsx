const Header = (prop) => {
  return ( 
    <>
      <h1>{prop.msg}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part 
        partInfo={props.exerciseList[0]}
        />
      <Part 
        partInfo={props.exerciseList[1]} 
        />
      <Part 
        partInfo={props.exerciseList[2]} 
        />
      
    </div>
  )
}

const Part = (prop) => {
  return (
    <p>{prop.partInfo.name} {prop.partInfo.exercises}</p>
  )
}

// Alternative to content, which an accept an array of a length other than 3.
const ContentAlternative = (propList) => {
  let exerciseData = propList.exerciseList.map(
    e => <Part partName={e.name} numExercises={e.exercises}/>
  );

  return (
    <>
      {exerciseData}
    </>
  )
}

const Total = (prop) => {
  let sumTotal = prop.exerciseList.reduce(
    (acc, cur) => acc + cur.exercises, 0
  );

  return (
    <p>Number of exercises {sumTotal}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header msg={course}/>
      <Content exerciseList={parts}/>
      <Total exerciseList={parts}/>
    </div>
  )
}

export default App