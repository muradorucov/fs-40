import { useState } from "react"
import { data } from "../db"
import Modal from "./modal"
import Product from "./product"
function Products({ searchVal }) {
  const [isModal, setIsModal] = useState(false);
  const [selectedPro, setSelectedPro] = useState({})


  return (
    <section id="products" className="grid grid-cols-4 gap-[30px]">
      {
        data.filter(item => item.name.toLowerCase().includes(searchVal)).map(item => <Product
          setIsModal={setIsModal}
          product={item}
          setSelectedPro={setSelectedPro}
          key={item.id}
        />)
      }
      {isModal && <Modal
        setIsModal={setIsModal}
        selectedPro={selectedPro}
      />}

    </section>
  )
}

export default Products