import { AnimeImage } from './components/AnimeImage';
import { BreadCrumb } from './components/BreadCrumb';
import { Nav } from './components/Nav';
import { AnimeInfo } from './components/AnimeInfo';
import * as React from 'react';
import { AnimeTabs } from './components/AnimeTabs';
import { EpisodeList } from './components/EpisodeList';

const RelatedAnime = () => {
  return(
  <>
    <div className="flex flex-col ml-[250px] mt-5 w-[650px]">
    <div className="font-sans font-bold text-[#3e3c3e] text-[25px]"> Related Show</div>
    <div className="text-[15px]">
       <span className="text-[#2785c1] hover:underline cursor-pointer" onClick={()=>{console.log("Naruto click")}}>
         Naruto
       </span>
      
       ,
       {" "}
       <span className="text-[#2785c1] hover:underline cursor-pointer" onClick={()=>{console.log("Boruto click")}}>
        Boruto: Naruto Next Generations
       </span> 
      
       , 
       {" "}
       <span className="text-[#2785c1] hover:underline cursor-pointer" onClick={()=>{console.log("Boruto (Manga) click")}}>
         Boruto: Naruto Next Generations (Manga Only)
       </span>
      
       ,
       {" "}
       <span className="text-[#2785c1] hover:underline cursor-pointer" onClick={()=>{console.log("Naruto film click")}}>
          Naruto Films
       </span>
     
    </div>
    
    <div className="mt-7">
    <span className="text-[#2785c1] hover:underline cursor-pointer" onClick={()=>{console.log("Login click")}}>Log in</span> or <span className="text-[#2785c1] hover:underline cursor-pointer" onClick={()=>{console.log("Register click")}}>register</span> to post comments
    </div>

  </div>
  
  </>)
}


const Footer = () => {
  return(<>
  <div className="flex flex-row text-[#9b9898] text-[14px] mt-10">
      <div className="flex-1 cursor-pointer ml-[250px]">
      <span className="hover:underline">
        Home
      </span> 
      {" "}|{" "}
      <span className="hover:underline">
         Privacy Policy
      </span>
      {" "}|{" "}
      <span className="hover:underline">
      Changelog
      </span>
      </div>

      <div className="mr-[580px]">
      © 2023 www.animefillerlist.com
      </div>
  </div>
  
  </>)
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
      <AnimeTabs/>
      <EpisodeList/>
      <RelatedAnime/>
      <Footer/>
     </div>
    )
}

export default App
