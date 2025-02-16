import "./App.css"
import TaskColumn from "./components/TaskColumn"
import TaskForm from "./Components/TaskForm"
import general from "/src/assets/General.png";
import backlog from "/src/assets/Blocklog.png"; 
import progress from "/src/assets/Progress.png";
import paused from "/src/assets/Paused.png";
import done from "/src/assets/Done.png";

const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <TaskColumn title="Details" icon={general}/>
        <TaskColumn title="Backlog" icon={backlog}/>
        <TaskColumn title="In Progress" icon={progress}/>
        <TaskColumn title="Paused" icon={paused}/>
        <TaskColumn title="Done" icon={done}/>
      </main>
    </div>
  )
}

export default App
