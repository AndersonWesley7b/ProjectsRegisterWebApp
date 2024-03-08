import { Routes, Route, BrowserRouter } from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../Pages/Home/Index"
import Projects from "../Pages/Projects"
import Users from "../Pages/Users"

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routing