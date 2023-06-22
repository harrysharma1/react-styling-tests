import * as React from 'react';

export const RelatedAnime = () => {
  return (
    <>
      <div className="flex flex-col ml-[250px] mt-5 w-[650px]">
        <div className="font-sans font-bold text-[#3e3c3e] text-[25px]"> Related Show</div>
        <div className="text-[15px]">
          <span className="text-[#2785c1] hover:underline cursor-pointer" onClick={() => { console.log("Naruto click"); }}>
            Naruto
          </span>

          ,
          {" "}
          <span className="text-[#2785c1] hover:underline cursor-pointer" onClick={() => { console.log("Boruto click"); }}>
            Boruto: Naruto Next Generations
          </span>

          ,
          {" "}
          <span className="text-[#2785c1] hover:underline cursor-pointer" onClick={() => { console.log("Boruto (Manga) click"); }}>
            Boruto: Naruto Next Generations (Manga Only)
          </span>

          ,
          {" "}
          <span className="text-[#2785c1] hover:underline cursor-pointer" onClick={() => { console.log("Naruto film click"); }}>
            Naruto Films
          </span>

        </div>

        <div className="mt-7">
          <span className="text-[#2785c1] hover:underline cursor-pointer" onClick={() => { console.log("Login click"); }}>Log in</span> or <span className="text-[#2785c1] hover:underline cursor-pointer" onClick={() => { console.log("Register click"); }}>register</span> to post comments
        </div>

      </div>

    </>);
};
