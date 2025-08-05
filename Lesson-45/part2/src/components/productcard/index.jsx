import React from 'react'

function ProductCard({ product }) {
  const { id, title, description, price, thumbnail } = product;
  return (
    <div className='shadow-md rounded-md'>
      <img src={thumbnail} alt={title} className='w-full h-48 object-cover rounded-t-md' />
      <div className='p-4'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <p className='text-gray-600'>{description}</p>
        <span className='text-xl font-bold'>${price}</span>
      </div>
      <div className='p-4 flex justify-between'>
        <button className='bg-green-500 text-white px-4 py-2 rounded-md mr-2 cursor-pointer'>View Details</button>
        <button className='bg-yellow-500 text-white px-4 py-2 rounded-md mr-2 cursor-pointer'>Add to Wishlist</button>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard