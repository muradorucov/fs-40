import { useState } from "react";
import Counter from "./components/counter";
import List from "./components/list";

function App() {
  const [cnt, setCnt] = useState(0)
  const [list, setList] = useState([])

  return (
    <div>
      <Counter
        cnt={cnt}
        setCnt={setCnt}
        setList={setList}
        list={list}
      />
      <List
        list={list}
      />
    </div >
  )
}

export default App