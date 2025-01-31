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
      <div className="bg-primary">
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
        <div style={{ 
          paddingTop: '64px',
          height: 'calc(100vh - 64px)',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden' // Add this
        }}>
          {/* Wireframe Animation Container */}
          <div style={{ 
            flex: 1, // Increased flex growth
            width: '70%', // Increased width for more space
            height: '70%', // Full height of the viewport
            display: 'flex',
            alignItems: 'center',
            marginLeft: '5%',
            marginRight: '10%', // Adjusted margin for better spacing
            position: 'relative'
          }}>
            <WireframeAnimation />
          </div>

          {/* Name & Description (Middle) */}
          <div style={{
            flex: 1,
            display: 'flex text-left',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            <Intro
              name="Ronit Sohal"
              characteristics={['developer', 'problem-solver', 'team player']}
            />
          </div>

          {/* Social Icons (Fixed Right Side) */}
          <div style={{
            position: 'fixed',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            padding: '16px'
          }}>
            <SocialIcons />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;