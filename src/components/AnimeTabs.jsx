import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { AllEpisodeTable } from './AllEpisodeTable';
import { FillerEpisodeTable } from './FillerEpisodeTable';
import { CanonEpisodeTable } from './CanonEpisodeTable';

export const AnimeTabs = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '82%', px: 29 ,flexShrink:0}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 0.3, borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" >
            <Tab label="Show all episodes" value="1" />
            <Tab label="Show filler episodes" value="2" />
            <Tab label="Show canon episodes" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className="flex flex-row">
            <h1 className="flex-1 text-[25px] font-semibold text-[#3e3c3e] font-sans">Quick List</h1>
            <span className="text-[#797979] text-[13px] font-sans">Click the episode number to see more info</span>
          </div>
          <AllEpisodeTable/>

        </TabPanel>
        <TabPanel value="2">
          <div className="flex flex-row">
            <h1 className="flex-1 text-[25px] font-semibold text-[#3e3c3e] font-sans">Quick List</h1>
            <span className="text-[#797979] text-[13px] font-sans">Click the episode number to see more info</span>
          </div>
          <FillerEpisodeTable/>
        </TabPanel>
        <TabPanel value="3">
          <div className="flex flex-row">
              <h1 className="flex-1 text-[25px] font-semibold text-[#3e3c3e] font-sans">Quick List</h1>
              <span className="text-[#797979] text-[13px] font-sans">Click the episode number to see more info</span>
          </div>
          <CanonEpisodeTable/>
          
        </TabPanel>
      </TabContext>
    </Box>
  );
};
