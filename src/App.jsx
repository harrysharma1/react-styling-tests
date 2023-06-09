import { AnimeImage } from './components/AnimeImage';
import { BreadCrumb } from './components/BreadCrumb';
import {Nav} from './components/Nav';
import { AnimeInfo } from './components/AnimeInfo';

const QuickList = ()=>{

    return(<div className="ml-[230px]">
 
    </div>)
}
function App() {
    return(
     <div className="flex flex-col h-screen w-screen">
      <Nav/>
      <BreadCrumb/>
      <div className="flex flex-row">
        <AnimeImage/>
        <AnimeInfo/>
      </div>
      <QuickList/>
      
     </div>
    )
}

export default App
