import * as React from 'react';

export const Footer = () => {
  return (<>
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

  </>);
};
