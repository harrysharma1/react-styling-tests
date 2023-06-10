import * as React from 'react';

export const FillerEpisodeTable = () => {
  const filler = ["57-71", "91-112", "144-151", "170-171", "176-196", "223-242", "257-260", "271", "279-281", "284-295", "303-320", "347-361", "376-377", "388-390", "394-413", "416-417", "422-423", "427-450", "464-468", "480-483"];
  const animeCanon = ["28"];
  return (<>
    <table class="table-fixed outline outline-[0.5px] outline-[#CFCFCF]">
      <thead className="bg-[#dedede] text-[14px] font-bold">
        Filler Episodes:
      </thead>
      <tbody className="bg-[#FDE9EA]">
        <tr>
          {filler.map((item, index) => {
            return (
              <>
                <span className="text-[#A14A40] text-[14px] hover:underline cursor-pointer font-sans ">
                  {item}

                </span>
                <span className="text-[#A14A40] text-[14px] cursor-pointer font-sans ">
                  {index !== filler.length - 1 ? ", " : ""}
                </span>
              </>
            );
          })}
        </tr>
      </tbody>
      <thead className="bg-[#dedede] text-[14px] font-bold">
        Anime Canon Episodes:
      </thead>
      <tbody>
        <tr>
          {animeCanon.map((item, index) => {
            return (
              <>
                <span className="text-[#3e3c3c] text-[14px] hover:underline cursor-pointer font-sans ">
                  {item}

                </span>
                <span className="text-[#3e3c3c] text-[14px] cursor-pointer font-sans ">
                  {index !== animeCanon.length - 1 ? ", " : ""}
                </span>
              </>
            );
          })}
        </tr>
      </tbody>
    </table>

  </>);
};
