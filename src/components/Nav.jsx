import * as FaIcon from 'react-icons/fa'
import * as GrIcon from 'react-icons/gr'
import logo from '../assets/logo.png'

// url if you want to use it: https://www.animefillerlist.com/sites/all/themes/afl/i/logo.png
export const Nav = () => {
  return <>
    <div className="flex flex-row justify-between items-center bg-[#e56e2e] text-white p-8 fixed w-full h-12 outline-black">
      <img src={logo} className="ml-[200px] w-64 cursor-pointer" />
      <div className="flex flex-row gap-x-5 flex-shrink-0 ml-[200px] text-[14px] ">
        <a href="#" className="underline" onClick={()=>{console.log("Show click")}}>Shows</a>
        <a href="#" className="hover:underline" onClick={()=>{console.log("Login click")}}>Login</a>
        <a href="#" className="hover:underline" onClick={()=>{console.log("Sign up click")}}>Sign up</a>
        <a href="#" className="hover:underline" onClick={()=>{console.log("Contact click")}}>Contact</a>
      </div>
      <div className="flex flex-row mr-[150px] flex-shrink-0 gap-x-2">
        <div className="flex flex-row bg-white" >
          <input type="text" placeholder="Search Anime..." className=" text-black outline-none placeholder:text-[12px] pl-4 pr-4" />
          <FaIcon.FaSearch size={18} className="text-[#e56e2e] mt-1 mr-1 cursor-pointer " />
        </div>
        <a href="#" className="hover:underline"><GrIcon.GrFacebook size={25} /></a>
      </div>
     
    
      </div>
   
  </>;
};
  