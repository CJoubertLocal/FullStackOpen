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
        partName={props.exercises[0].name} 
        numExercises={props.exercises[0].numExercises}
        />
      <Part 
        partName={props.exercises[1].name} 
        numExercises={props.exercises[1].numExercises}
        />
      <Part 
        partName={props.exercises[2].name} 
        numExercises={props.exercises[2].numExercises}
        />
      
    </div>
  )
}

const Part = (prop) => {
  return (
    <p>{prop.partName} {prop.numExercises}</p>
  )
}

const ContentAlternative = (propList) => {
  let exerciseData = propList.exercises.map(
    e =>
      <p>
        {e.name} {e.total}
      </p>
  );

  return (
    <>
      {exerciseData}
    </>
  )
}

const Total = (prop) => {
  let sumTotal = prop.exercises.reduce(
    (acc, cur) => acc + cur.total, 0
  );

  return (
    <p>Number of exercises {sumTotal}</p>
  )
}

class Exercise {
  constructor(nameIn, numExercises) {
    this.name = nameIn
    this.total = numExercises
  }
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  let exerciseList = [
    new Exercise(part1, exercises1),
    new Exercise(part2, exercises2),
    new Exercise(part3, exercises3)
  ];

  return (
    <div>
      <Header msg={course}/>
      <Content exercises={exerciseList}/>
      <Total exercises={exerciseList}/>
    </div>
  )
}

export default App