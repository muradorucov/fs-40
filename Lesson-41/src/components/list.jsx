function List({ list }) {
  return (
    <ul>
      {
        list.map((item) => <li key={item}>{item}</li>)
      }
    </ul>
  )
}

export default List