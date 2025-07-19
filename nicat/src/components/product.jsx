import React from 'react'

function Product(data) {
  return (
    <div>
      <img src={data.img} className='w-[200px] h-[200px]' />
      <h2 className={`text-[30px] ${data.rate >= 5 ? 'text-red-500' : 'text-black'}`}>{data.name}</h2>
      <p>Price: ${data.price}</p>
    </div>
  )
}

export default Product