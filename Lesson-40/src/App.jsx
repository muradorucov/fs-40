import { useState } from "react"
import Products from "./components/products"
import Footer from "./layout/footer"
import Header from "./layout/header"

function App() {
  const [searchVal, setSearchVal] = useState("")
  return (
    <div className="max-w-[1140px] mx-[auto] w-[80%]">
      <Header
        setSearchVal={setSearchVal} />
      <main className="py-[4rem]">
        <Products searchVal={searchVal} />
      </main>
      <Footer />
    </div>
  )
}

export default App