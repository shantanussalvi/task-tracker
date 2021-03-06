import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react'

function App() {
  const [showAdd, setShowAdd] = useState(false)


  const [tasks, setTask] = useState([{
    id: 1,
    text: "Meeting",
    day: "10th May at 3:00 pm",
    reminder: true
  },
  {
    id: 2,
    text: "Dentist Appointment",
    day: "11th May at 4:00 pm",
    reminder: true
  },
  {
    id: 3,
    text: "Shopping",
    day: "12th May at 5:00 pm",
    reminder: false
  }])

  const addTask = (task) => {
    const id = tasks.length + 1
    console.log(id)
    const newTask = {id, ...task}
    setTask([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTask(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd = {() => setShowAdd(!showAdd)}  show = {showAdd}/>
      {showAdd ? <AddTask onAdd = {addTask}/> : ""}
      {tasks.length > 0 ? (<Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder} />) : ("No tasks to show")}
    </div>
  );
}

export default App;
