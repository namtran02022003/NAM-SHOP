import { publicRoutes } from './Routers/index'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DefaultLayout from "./Components/Layout/DefaultLayOut"
import { Fragment, useEffect } from 'react'
import {createContext,useState} from 'react'

export const CartProducts = createContext()
function App() {
  const[Carts,setCarts] = useState([])
  useEffect(()=>{
    const CartsLocalStorAge = localStorage.getItem('cart')
    setCarts(JSON.parse(CartsLocalStorAge)|| [])
  },[])
console.log(Carts)
  return (
    <CartProducts.Provider value={{
      Carts:Carts,
      setCarts:setCarts
    }}>
      <div className='app'>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            var Layout = DefaultLayout
            if (route.layout) {
              Layout = route.layout
            } if (route.layout === null) {
              Layout = Fragment
            }
            return <Route key={index} path={route.path} element={<Layout ><Page /></Layout>}></Route>
          })}
        </Routes>
      </Router>
    </div>
    </CartProducts.Provider>
  )
}

export default App
