import { publicRoutes } from './Routers/index'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DefaultLayout from "./Components/Layout/DefaultLayOut"
import { Fragment } from 'react'
import { createContext, useState } from 'react'
import AppTest from './AppTest'
export const CartProducts = createContext()
export const ShowSsProduct = createContext()
function App() {
  const [Carts, setCarts] = useState(JSON.parse(localStorage.getItem('cart')) || [])
  const [listId, setListId] = useState( JSON.parse(localStorage.getItem('listIdSs'))||[])
  const [showSs, setShowSs] = useState(false)
  console.log('a',listId)
  return (
    <CartProducts.Provider value={{
      Carts: Carts,
      setCarts: setCarts
    }}>
      <ShowSsProduct.Provider value={
        {
          listId: listId,
          setListId: setListId,
          showSs: showSs,
          setShowSs: setShowSs
        }
      }>
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
      </ShowSsProduct.Provider>
    </CartProducts.Provider>

  )
}

export default App
