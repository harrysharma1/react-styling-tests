import { AnimeImage } from './components/AnimeImage';
import { BreadCrumb } from './components/BreadCrumb';
import {Nav} from './components/Nav';
function App() {
    return(
     <div className="flex flex-col h-screen">
      <Nav/>
      <BreadCrumb/>
      <AnimeImage/>
     </div>
    )
}

export default App
