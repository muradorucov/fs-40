import { useRef } from "react"

function Modal({ setIsModal, selectedPro }) {
  const modalRef = useRef(null)

  function closeModal(e) {
    if (e.target === modalRef.current) {
      setIsModal(false)
    }
  }


  return (
    <div
      className="flex fixed justify-center items-center inset-0 bg-[#000000ae] backdrop-blur-lg"
      ref={modalRef}
      onClick={closeModal}
    >
      <div className="max-w-[600px]  bg-[#fff] grid grid-cols-2 items-center gap-6 ">
        <img src={selectedPro.img} alt="" />
        <div>
          <h2>{selectedPro.name}</h2>
          <p>{selectedPro.dsc}</p>
          <p>Price: {selectedPro.price}</p>
        </div>
      </div>
    </div>
  )
}

export default Modal