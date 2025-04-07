import React from 'react'
import TextAreas from './components/TextAreas'
import AppBtns from './components/AppBtns'
import './App.css'
import Button from '@mui/material/Button';
function App() {
  return (
    <div>
      <div className='container'>
      <AppBtns/>
      <TextAreas/>
      <div className='login'>
      <Button className='reactBtn' variant="contained">Giriş Yap</Button>
      </div>
      </div>
    </div>
  )
}

export default App