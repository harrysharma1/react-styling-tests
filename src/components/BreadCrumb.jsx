import Breadcrumbs from '@mui/material/Breadcrumbs';



export const BreadCrumb = () => {
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  const breadcrumbs = [
    <a href="#" onClick={handleClick} id='1' className="hover:underline text-xs text-[#e56e2e]">Home</a>,
    <a href='#' onClick={handleClick} id='2'className="hover:underline text-xs text-[#e56e2e]">Shows</a>, 
    <a href='#' onClick={handleClick} id='3'className="text-xs cursor-text">Naruto Shippuden</a>]
   ;
  return <div className="mt-[75px] ml-[230px]">
    <Breadcrumbs separator="›" aria-label="breadcrumb" className="">
        {breadcrumbs}
      </Breadcrumbs>
  </div>;
};
  