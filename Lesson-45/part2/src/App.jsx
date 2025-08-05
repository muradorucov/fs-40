import { RouterProvider } from 'react-router'
import { routes } from './routers'
import { useEffect } from 'react'
import { getAllProducts } from './service/products'
import { useDispatch } from 'react-redux'
import { getAllProductsAction } from './redux/actions/products.actions'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const getDatas = async () => {
      try {
        const [products] = await Promise.all([
          getAllProducts()
        ])
        dispatch(getAllProductsAction(products))
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }

    getDatas()
  }, [])

  return <RouterProvider router={routes} />
}

export default App