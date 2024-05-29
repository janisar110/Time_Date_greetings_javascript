import Task1 from "./Components/Task1"
import Task2 from "./Components/Task2"
import Task3 from "./Components/Task3"

function App() {
  

  return (
    <>
    <div className="grid grid-cols-3 gap-10 max-w-[1420px] mx-auto h-screen place-content-center">
      <Task1/>
      <Task2/>
      <Task3/>
      </div>
      
    </>
  )
}

export default App
