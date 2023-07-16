import {Navbar } from "./layout/header/header";
import {Home } from "./pages/home/home";
import {About } from "./pages/about/about";


export const App = () => {

  return (
    <div className="">
      <Navbar/>
      <Home/>
      <About/>

    </div>
  )

}