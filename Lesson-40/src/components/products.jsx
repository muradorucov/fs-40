import { data } from "../db"
import Product from "./product"
function Products() {
  // Components
  // Props

  return (
    <section id="products" className="grid grid-cols-4 gap-[30px]">
      {
        data.map(item => <Product name={item.name} price={item.price} img={item.img} />)
      }
    </section>
  )
}

export default Products