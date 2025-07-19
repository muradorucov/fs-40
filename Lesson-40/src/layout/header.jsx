
function Header({ setSearchVal }) {
  function inputHandler(e) {
    setSearchVal(e.target.value.toLowerCase())
  }
  return (
    <header className="flex items-center justify-between">
      <div className="text-[30px] font-bold text-[violet]">Şirniyyat Dükanı</div>
      <input
        type="search"
        className="border-2 shadow-md rounded-xl px-[40px]"
        onChange={inputHandler} />
    </header>
  )
}

export default Header