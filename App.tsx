
import './App.css'
import React, { useState } from 'react'
import Alert from './Alert/alert'


import { Info } from 'lucide-react';


function App() {
  const paragraph : string='Vite requires Node.js version 18+. 20+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.'
  const paragraph1 : string = 'Vite aims to provide out-of-the-box support for common web development patterns. Before searching for a Vite or Compatible Rollup plugin, check out the Features Guide. A lot of the cases where a plugin would be needed in a Rollup project are already covered in Vite.';
  return (
    <>
    <Alert classNameType='REJECT' title='Compatibility Note  ' description={paragraph} icon=<Info/>  >
    
    </Alert>
    
    <Alert classNameType='info' title='NOTE' description={paragraph1} icon=<Info/> />
    </>
  )
}

export default App
  