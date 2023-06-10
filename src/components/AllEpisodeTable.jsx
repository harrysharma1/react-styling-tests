import * as React from 'react';

export const AllEpisodeTable = () => {
  const mangaCanon = ["20-23", "26-27", "29-44", "46-48", "51-53", "55", "72-88", "113-114", "116-126", "129-143", "152-169", "172-175", "197-212", "214-222", "243-253", "255-256", "261-270", "272-278", "282-283", "297-302", "321-323", "325-326", "329", "332-337", "339-345", "363-375", "378-384", "387", "391-393", "414", "418", "420-421", "424-425", "459", "463", "470", "473-477", "484-500"];
  const mixedCanonFiller = ["1-19", "24-25", "45", "49-50", "54", "56", "89-90", "115", "127-128", "213", "254", "296", "324", "327-328", "330-331", "338", "346", "362", "385-386", "415", "419", "426", "451-458", "460-462", "469", "471-472", "478-479"];
  const filler = ["57-71", "91-112", "144-151", "170-171", "176-196", "223-242", "257-260", "271", "279-281", "284-295", "303-320", "347-361", "376-377", "388-390", "394-413", "416-417", "422-423", "427-450", "464-468", "480-483"];
  const animeCanon = ["28"];
  return (<>
    <table class="table-fixed outline outline-[0.5px] outline-[#CFCFCF]">
      <thead className="bg-[#dedede] text-[14px] font-bold">
        Manga Canon Episodes:
      </thead>
      <tbody>
        <tr>
          {mangaCanon.map((item, index) => {
            return (
              <>
                <span className="text-[#3e3c3c] text-[14px] hover:underline cursor-pointer font-sans ">
                  {item}

                </span>
                <span className="text-[#3e3c3c] text-[14px] cursor-pointer font-sans ">
                  {index !== mangaCanon.length - 1 ? ", " : ""}
                </span>
              </>
            );
          })}
        </tr>
      </tbody>
      <thead className="bg-[#dedede] text-[14px] font-bold">
        Mixed Canon/Filler Episodes:
      </thead>
      <tbody>
        <tr>
          {mixedCanonFiller.map((item, index) => {
            return (
              <>
                <span className="text-[#3e3c3c] text-[14px] hover:underline cursor-pointer font-sans ">
                  {item}

                </span>
                <span className="text-[#3e3c3c] text-[14px] cursor-pointer font-sans ">
                  {index !== mixedCanonFiller.length - 1 ? ", " : ""}
                </span>
              </>
            );
          })}
        </tr>
      </tbody>
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
