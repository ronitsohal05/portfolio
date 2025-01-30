import { useState } from 'react';
import { Intro } from './Intro';
import './App.css';
import { WireframeAnimation } from './WireframeAnimation';
import { SocialIcons } from './SocialIcons';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#030303', // Black background for the tab container
    },
    secondary: {
      main: '#ffffff', // White text for the tabs
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: '#030303', // Black background for the tab container
          borderRadius: '8px',
          padding: '8px',
          display: 'flex',
          justifyContent: 'center', // Center the tabs
          width: 'fit-content',
          margin: '0 auto', // Center horizontally
        },
        indicator: {
          backgroundColor: '#ffffff', // The tab indicator color is white
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: 'white', // Text color always white
          margin: '0 32px', // Increased spacing between tabs
          '&.Mui-selected': {
            color: '#ffffff', // Keep text white for selected tab
          },
        },
      },
    },
  },
});

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  // Handle tab change
  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="bg-primary min-h-screen overflow-hidden">
        <Box sx={{ width: '100%', textAlign: 'center', marginTop: '24px' }}>
          <Tabs
            value={tabIndex}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="black and white tabs"
          >
            <Tab label="Home" />
            <Tab label="About Me" />
            <Tab label="Projects" />
            <Tab label="Memories" />
          </Tabs>
        </Box>
        <div className="flex flex-row items-center justify-evenly h-screen bg-primary text-white overflow-hidden">
          <WireframeAnimation />
          <div className='w-1/3 flex justify-start'>
            <Intro
              name="Ronit Sohal"
              characteristics={['developer', 'problem-solver', 'team player']}
            />
          </div>
          <div>
            <SocialIcons />
          </div>
        </div>
        
      </div>
    </ThemeProvider>
  );
}

export default App;