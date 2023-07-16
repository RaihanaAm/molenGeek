import {Navbar } from "./layout/header/header";
import {Home } from "./pages/home/home";
import {About } from "./pages/about/about";
import { Formation } from "./pages/Formation/formation";


export const App = () => {

  return (
    <div className="">
      <Navbar/>
      <Home/>
      <About/>
      <Formation/>

    </div>
  )

}