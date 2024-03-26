


import './App.css'
import Header from './components/Header'
import goalsImage from "./assets/goals.jpg"
import { useState } from 'react'
import CourseGoalList from './components/CourseGoalList'
import NewGoal from './components/NewGoal'

export type CourseGoalProps = {
  id: number;
  title: string;
  description: string;
}

function App() {

  const [goals, setGoals] = useState<CourseGoalProps[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    const newGoal = {id: Math.random(), title: goal, description: summary};
    setGoals((prevState) => ([newGoal, ...prevState]))
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevState) => prevState.filter((goal) => goal.id !== id))
  }

  return (
    <>
      <main>
        <Header image={{ src: goalsImage, alt:"Goal Image" }}>
          <h1>Your Course Goal</h1>
        </Header>

        <NewGoal onAddGoal={handleAddGoal} />

        <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />

      </main>
    </>
  )
}

export default App
