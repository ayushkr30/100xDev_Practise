import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { Suspense, lazy, useContext, useState } from "react"
import './App.css'
import { set } from "zod"
const Dashboard = lazy(() => import("./components/Dashboard"))
const   Landing = lazy(() => import("./components/Landing"))

import { CountContext } from "./context";

/*
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

*/

function App() {

  const [count, setCount]= useState(0);

  //wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
       <CountContext.Provider value={count}>
        <Count setCount={setCount} />
       </CountContext.Provider>
    </div>
  )
}

function Count({setCount}) {
  return <div>
    <CountRenderer />
    <Buttons setCount={setCount} />
  </div>
}

function CountRenderer() {
  const count = useContext(CountContext);

  return <div>
    {count}
  </div>
}

function Buttons({setCount}) {
const count = useContext(CountContext);

  return <div>
    <button onClick={()=> {
      setCount(count+1)
    }}>Increase</button>

    <button onClick={()=> {
      setCount(count-1)
    }}>Decrease</button>
  </div>
}

export default App
