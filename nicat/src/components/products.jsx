import React from 'react'
import { data } from '../db/index.js'
import Product from './product.jsx'

function Products() {
  return (
    <div className='grid grid-cols-4 gap-[30px]'>
      {
        data.map(item => {
          return <Product name={item.name} img={item.img} price={item.price} rate={item.rate} />
        })
      }
    </div>
  )
}

export default Products