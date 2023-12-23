const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => 
  <p>
    Number of exercises {parts.reduce((acc, p) => acc + p.exercises, 0)}
  </p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map(p => <Part key={p.id} part={p} />)}
  </>

const Course = ({courseData}) => 
  <>
    <Header course={courseData.name} />
    <Content parts={courseData.parts} />
    <Total parts={courseData.parts} />
  </>

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course courseData={course} />
}

export default App