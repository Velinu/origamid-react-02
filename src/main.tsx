import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Click from './clickTest.tsx'
import Ex02 from './exercicio2.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Ex02/> */}
    <Click nome={"dd"}></Click>
  </React.StrictMode>,
)
