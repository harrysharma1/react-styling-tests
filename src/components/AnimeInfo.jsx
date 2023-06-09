import * as AiIcon from 'react-icons/ai';

export const AnimeInfo = () => {
  return (
    <div className="flex flex-col">
      <h1 className="font-sans text-[25px] font-semibold text-[#3e3c3e] ml-8">Naruto Shippuden Filler List</h1>
      <div className="flex flex-row ml-8">
        <AiIcon.AiOutlineClockCircle className="text-black opacity-40 font-extrabold mt-[2px]" />
        <p className="ml-[4px] text-sm text-black opacity-40">Updated on March 7, 2023</p>
      </div>
      <div className="w-96 h-24 ml-8 text-[14.5px]">
        <p className="text-black opacity-40">
          Naruto Shippuden was an anime series that ran from 2007 to 2017. In total 500 episodes of Naruto Shippuden were aired. With a total of 203 reported filler episodes, Naruto Shippuden has a high filler percentage of 41%.<br /><br />
          Set two-and-a-half years after the defection of Sasuke Uchiha, Shippuden continues where Naruto left off. Becoming increasingly powerful; Naruto will stop at nothing to protect his village, save his friend, and put an end to the evil organization known as the Akatsuki.
        </p>
      </div>
      <div className="font-semibold text-[#3e3c3e] mt-[130px] ml-8">
        Page Contributors:
      </div>
      <div className="grid  ml-8 grid-cols-10">
        {Array(65).fill().map((_, index) => (
          <img
            key={index}
            src="https://www.animefillerlist.com/sites/all/themes/afl/i/goku.jpg"
            className="w-[40px] h-[40px] mt-[10px] cursor-pointer rounded-full"
            alt="goku" />
        ))}
      </div>
      <div className="mt-5" />
      <div className=" text-[12px] ml-8 ">
        <p>Special thanks to the contributors that make this page possible. <span className="text-[#2785c1] hover:underline cursor-pointer" onClick={()=>{console.log("Register click")}}>Register</span></p>
        <p> to help make the animefillerlist.com wiki even better!</p>
      </div>

    </div>
  );
};
