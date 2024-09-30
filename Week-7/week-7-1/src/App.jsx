import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { Suspense, lazy } from "react"
import './App.css'
const Dashboard = lazy(() => import("./components/Dashboard"))
const   Landing = lazy(() => import("./components/Landing"))

function App() {
  return (
    <div>

    <BrowserRouter>
      <Appbar />
       <Routes>  
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}> <Dashboard /> </Suspense>} /> 
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
       </Routes>
    </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();
  
  return (
  <div> 
       <div>
          <button onClick={() => {
             navigate( "/");
          }}>Landing Page</button>  
       </div>

       <div>
          <button onClick={() => {
             window.location.href = "/dashboard";
          }}>Dashboard</button>  
     </div>
     </div>)
}

export default App
