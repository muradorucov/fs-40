
function Increase({ cnt, setCnt }) {
  return (
    <button onClick={() => setCnt(cnt + 1)}>+</button>
  )
}

export default Increase