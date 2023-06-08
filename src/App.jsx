import { AnimeImage } from './components/AnimeImage';
import { BreadCrumb } from './components/BreadCrumb';
import {Nav} from './components/Nav';

const AnimeInfo =()=>{
  return(
    <div className="flex flex-col">
      <h1 className="font-sans text-[25px] font-semibold text-[#3e3c3e]">Naruto Shippuden Filler List</h1>
    </div>
  )
}


function App() {
    return(
     <div className="flex flex-col h-screen">
      <Nav/>
      <BreadCrumb/>
      <div className="flex flex-row">
        <AnimeImage/>
        <AnimeInfo/>
      </div>
      
     </div>
    )
}

export default App
