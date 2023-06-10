import { AnimeImage } from './components/AnimeImage';
import { BreadCrumb } from './components/BreadCrumb';
import { Nav } from './components/Nav';
import { AnimeInfo } from './components/AnimeInfo';
import * as React from 'react';
import { AnimeTabs } from './components/AnimeTabs';

function App() {
    return(
     <div className="flex flex-col h-screen w-screen">
      <Nav/>
      <BreadCrumb/>
      <div className="flex flex-row">
        <AnimeImage/>
        <AnimeInfo/>
      </div>
      <AnimeTabs/>
     </div>
    )
}

export default App
