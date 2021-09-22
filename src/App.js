import Header from "./components/Header"
import Footer  from "./components/Footer"
import About from "./components/About"
import Tasks from "./components/Tasks"
import Task from "./components/Task"
import AddTask from "./components/AddTask"
import { useState} from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'


function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    
 
        {
          "id": 1, 
          "text": "Food Shopping",
          "day": "Feb 5th at 2:30pm",
          "reminder": false
      }, 
      {
          "id": 2,
          "text": "React Course",
          "day": "Feb 7th at 10am",
          "reminder": true
      },
      {
        "id": 3,
        "text": "Lunch with Dad",
        "day": "Feb 7th at 2pm",
        "reminder": false
    }
  ])

    //Add Task 
    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1 
      // * make random id bc we don't have a database
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
    }

  // Delete Task 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder 
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task ))
  }

  return (
    <Router>   
    <div className="container">
    <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
  
    <Route path="/" exact render = {(props) => (
      <>
        {showAddTask && <AddTask onAdd={addTask}/>}
    {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} toggleReminder = {toggleReminder}/> : 'No Tasks'}
      </>
    )} />
    <Route path="/about" component={About} /> 
    <Footer/>
    </div>   
    </Router>
    // <> - JSX mora da ima parent element, ako nam ne treba mozemo da koristimo zagrade
  );
}

export default App;
