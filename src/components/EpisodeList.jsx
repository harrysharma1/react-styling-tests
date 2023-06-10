import * as React from 'react';
const AnimeTitle=()=>{
  return(
    <>
      <table class="table-auto outline border-collapse w-[50%] ml-[230px]  outline-[0.5px] outline-[#CFCFCF] ">
  <thead className="bg-[#CFCFCF]" > 
    <tr>
      <th>#</th>
      <th>Title</th>
      <th>Type</th>
      <th>Airdate</th>
    </tr>
  </thead>
  <tbody className="">
    
  </tbody>
</table>
    </>
  )
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
