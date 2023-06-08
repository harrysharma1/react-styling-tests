import * as FaIcon from 'react-icons/fa'
import * as GrIcon from 'react-icons/gr'

export const Nav = () => {
  return <>
    <div className="flex flex-row justify-between items-center bg-[#e56e2e] text-white p-8 fixed w-full h-12 outline-black">
      <img src="https://www.animefillerlist.com/sites/all/themes/afl/i/logo.png" className="ml-[200px] w-64 " />
      <div className="flex flex-row gap-x-5 ml-[200px] text-[14px] ">
        <a href="#" className="underline">Shows</a>
        <a href="#" className="hover:underline">Login</a>
        <a href="#" className="hover:underline">Sign up</a>
      </div>
      <div className="flex flex-row mr-[250px] gap-x-2">
        <div className="flex flex-row bg-white" >
          <input type="text" placeholder="Search Anime..." className=" text-black outline-none placeholder:text-[12px] pl-4 pr-4" />
          <FaIcon.FaSearch size={18} className="text-[#e56e2e] mt-1 mr-1 cursor-pointer " />
        </div>
        <a href="#" className="hover:underline"><GrIcon.GrFacebook size={25} /></a>
      </div>
     
    
      </div>
   
  </>;
};
  