import Decrease from "./decrease"
import Increase from "./increase"

function Counter({ cnt, setCnt, setList, list }) {
  const addToList = () => {
    if (!list.includes(cnt)) {
      setList([...list, cnt])
    }
  }
  return (
    <div>
      <Decrease
        cnt={cnt}
        setCnt={setCnt}
      />
      <button onClick={addToList}>{cnt}</button>
      <Increase
        cnt={cnt}
        setCnt={setCnt}
      />
    </div>
  )
}

export default Counter