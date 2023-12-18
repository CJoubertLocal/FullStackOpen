const Header = (prop) => {
  return ( 
    <>
      <h1>{prop.courseInfo.name}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part 
        partInfo={props.courseInfo.parts[0]}
        />
      <Part 
        partInfo={props.courseInfo.parts[1]} 
        />
      <Part 
        partInfo={props.courseInfo.parts[2]} 
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
  let sumTotal = prop.courseInfo.parts.reduce(
    (acc, cur) => acc + cur.exercises, 0
  );

  return (
    <p>Number of exercises {sumTotal}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header courseInfo={course}/>
      <Content courseInfo={course}/>
      <Total courseInfo={course}/>
    </div>
  )
}

export default App