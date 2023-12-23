const Course = ({courseData}) => 
  <>
    <Header course={courseData.name} />
    <Content parts={courseData.parts} />
    <Total parts={courseData.parts} />
  </>
  
const Header = ({ course }) => <h1>{course}</h1>

const Content = ({ parts }) => 
  <>
    {parts.map(p => <Part key={p.id} part={p} />)}
  </>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Total = ({ parts }) => {
    const total = parts.reduce((acc, p) => acc + p.exercises, 0)
  
    return (
      <p>
        <b>
        total of {total} exercises
        </b>
      </p>
    )}

export default Course