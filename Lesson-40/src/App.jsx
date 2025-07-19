import Products from "./components/products"
import Footer from "./layout/footer"
import Header from "./layout/header"

function App() {
  return (
    <div className="max-w-[1140px] mx-[auto] w-[80%]">
      <Header />
      <main className="py-[4rem]">
        <Products />
      </main>
      <Footer />
    </div>
  )
}

export default App