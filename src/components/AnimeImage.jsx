import * as FaIcon from 'react-icons/fa';
import Naruto_Shippuden_banner from '../assets/Naruto_Shippuden_banner.png'

// url if you want to use:https://www.animefillerlist.com/sites/default/files/styles/anime_poster/public/screenshot_2021-04-19_naruto-shippuden-1131_webp_webp_image_350_x_525_pixels_0.png?itok=dpibYojN
export const AnimeImage = () => {
  const handleClick = () => {
    console.log("You have clicked Twitter button");
  };
  return (
    <div className="ml-[230px] mt-[10px]">
      <div className="flex">
        <img src={Naruto_Shippuden_banner} />
      </div>
      <div className="flex flex-row  mt-[10px] ml-[100px] bg-[#1d9bf0] rounded-3xl w-[85px] h-[25px]cursor-pointer ">
        <FaIcon.FaTwitter size={12} className="mt-[2.5px] ml-[12px] mr-[5px] text-white" />
        <button className="flex rounded-md text-[12px] font-bold text-white" onClick={handleClick}>Tweet </button>
      </div>
    </div>
  );
};
