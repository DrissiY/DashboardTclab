import react, { useMemo } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material/styles';
import createTheme from '@mui/material';
import  {themeSettings} from "../theme";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./scenes/dashboard";
import Layout from './scenes/Layout/layout';


import { useSelector } from 'react-redux';

function App() {
 
const mode = useSelector((state) => state.global.mode);
const theme = useMemo(() => createTheme(themeSettings(mode)),  [mode])
  return (
    <div className='app'>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
    <CssBaseline>
      <Routes>
        <Route elements={<Layout />}>
          <Route path='/' element={<navigate to ="/dashboard" replace />} />  
          <Route path='/dashboard' element={<Dashboard />} />  
        </Route>
      </Routes>
    </CssBaseline>
  </ThemeProvider>
      </BrowserRouter>
  
       
    </div>
  )
}

export default App
