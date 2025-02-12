import { useState } from 'react';
import './App.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Homepage } from './Homepage/Homepage';
import { AboutMe } from './AboutMe/AboutMe';
import { Projects } from './Projects/Projects';
import { Memories } from './Memories/Memories'


const theme = createTheme({
  palette: {
    primary: {
      main: '#030303', // Black background
    },
    secondary: {
      main: '#ffffff', // White text
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: '#030303',
          borderRadius: '8px',
          padding: '8px',
          display: 'flex',
          justifyContent: 'center',
          width: 'fit-content',
          margin: '0 auto',
          position: 'fixed', // Keep tabs at the top
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000, // Ensure tabs stay on top
        },
        indicator: {
          backgroundColor: '#ffffff',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: 'customFont',
          color: 'white',
          margin: '0 32px',
          '&.Mui-selected': {
            color: '#ffffff',
          },
        },
      },
    },
  },
});

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="bg-primary pt-20">
        {/* Tabs Section */}
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <Tabs
            value={tabIndex}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="black and white tabs"
            variant="fullWidth"
            scrollButtons="auto"
          >
            <Tab label="Home" />
            <Tab label="About Me" />
            <Tab label="Projects" />
            <Tab label="Memories" />
          </Tabs>
        </Box>

        {/* Main Content Section */}
        {tabIndex === 0 && (
          <Homepage />
        )}
        {tabIndex === 1 && (
          <AboutMe />
        )}
        {tabIndex === 2 && (
          <Projects />
        )}
        {tabIndex === 3 && (
          <Memories />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;