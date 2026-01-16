import React, { useContext } from 'react'
import { themeDAtaContext } from '../context/ThemeContext';

const btn = () => {
  const [theme]  useContext(themeDAtaContext)
    const chnageTheme =()=>{
        console.log('hhhhh');
        
    }
  return (
    <div >
        <button onClick={chnageTheme}>change theme</button>

    </div>
  )
}

export default btn