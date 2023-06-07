import {Nav} from './components/Nav';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const BreadCrumb = () => {
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  
  const breadcrumbs = [
    <a href="#" onClick={handleClick} className="hover:underline text-xs text-[#e56e2e]">Home</a>,
    <a href='#' onClick={handleClick} className="hover:underline text-xs text-[#e56e2e]">Shows</a>,
    <a href='#' onClick={handleClick} className="text-xs cursor-text">Naruto Shippuden</a>,
  ];

 return(
  <div className="mt-[75px] ml-[230px]">
    <Breadcrumbs separator="›" aria-label="breadcrumb" className="">
        {breadcrumbs}
      </Breadcrumbs>
  </div>
 )
 }

function App() {
    return(
     <div className="flex flex-row h-screen">
      <Nav/>
      <BreadCrumb/>
 
     </div>
    )
}

export default App
