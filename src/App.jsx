import { publicRoutes } from './Routers/index'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DefaultLayout from "./Components/Layout/DefaultLayOut"
import GioiThieu from './Pages/FooterOtherPages/GioiThieu'
import { Fragment } from 'react'
import Home from './Pages/Home/Home'

function App() {

  return (
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
  )
}

export default App
