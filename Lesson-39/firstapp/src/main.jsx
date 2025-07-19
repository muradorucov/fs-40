import { createRoot } from 'react-dom/client'
import "./main.css"
import image from "./download.png"

function Book() {
  return <div className="w-[300px] bg-blue-500 text-white p-4 rounded-lg shadow-lg">
    <img src={image} alt="" />
  </div>
}


createRoot(document.getElementById('root')).render(<div>
  <Book />
  <Book />
  <Book />
  <Book />
</div>)
