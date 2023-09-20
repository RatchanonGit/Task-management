import { useEffect, useState } from "react";
import Addform from "./components/Addform";
import Header from "./components/Header";
import Item from "./components/Item";
import "./App.css";
function App() {

  const [tasks, SetTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [])
  const [title, setTitle] = useState("")
  const [editId, setEditId] = useState(null)
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  function deleteTask(id) {
    const result = tasks.filter(item => item.id !== id)
    SetTasks(result)
  }

  function saveTask(e) {
    e.preventDefault();

    if (!title) {
      alert("pls input")
    }
    else if (editId) {
      const upadteTask = tasks.map((item) => {
        if (item.id === editId) {
          return { ...item, title: title }
        }
        return item
      })
      SetTasks(upadteTask)
      setEditId(null)
      setTitle("")
    }
    else {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        title: title
      }
      SetTasks([...tasks, newTask])
      setTitle("")
    }
  }

  function editTask(id) {
    setEditId(id)
    const editTask = tasks.find((item) => item.id === id)
    setTitle(editTask.title)
  }

  return (
    <div className={"App " + theme}>
      <Header theme={theme} setTheme={setTheme} />
      <div className="container">
        <Addform title={title} setTitle={setTitle} saveTask={saveTask} editId={editId} />
        <section>
          {
            tasks.map((data) => (
              <Item key={data.id} data={data} deleteTask={deleteTask} editTask={editTask} />
            ))

          }
        </section>
      </div>
    </div>
  );
}

export default App;
