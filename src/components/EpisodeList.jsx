import {useState, useEffect} from 'react';
import episode from './data/episode.json'


const AnimeTitle=()=>{
  const columns=["#","Title","Type","Airdate"]
  return (
    <>
      <table className="w-[50vw] ml-[230px] border table-auto">
        <thead className="bg-[#CFCFCF]">
          <tr>
            {columns.map((column) => (
              <th className="border-x-2" key={column}>
                <span className="float-left">{column}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {episode.map((entry) => (
            <tr key={entry.id}>
              {columns.map((column) => (
                <td key={column} className="border-x-2 border-y-2">
                  <span className={column.toLocaleLowerCase()==="title"?"text-[#2785c1] text-[13px] hover:underline cursor-pointer":"text-[#3e3c3c] text-[15px] font-sans"}>
                     {entry[column.toLowerCase()]}
                  </span>
                 
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );

}
export const EpisodeList = () => {
  const options = [];
  for (let i = 1; i <= 500; i += 1) {
    options.push({ value: i, label: `${i}` });
  }

  return (
    <>
      <div className="flex flex-row ml-[230px] mt-[10px]">
        <div className="text-[25px] font-semibold text-[#3e3c3e] font-sans">Naruto Shippuden Episode List</div>
        <div className="flex flex-col ">
          <span className="ml-[240px] text-[13px]">Jump to: 
            <select className="outline rounded-sm ml-1">
              {options.map((option) => (
                <option value={option.value} key={option.value}>{option.label}</option>
              ))}
            </select>
            
          </span>
          <span className="ml-[240px] text-[13px] capitalize text-[#e56e2e] mt-[13px] hover:underline cursor-pointer" onClick={()=>{console.log("Hide Episode click")}}>Hide episode title</span>
        </div>
      </div>

      <AnimeTitle/>
    </>
  );
};
