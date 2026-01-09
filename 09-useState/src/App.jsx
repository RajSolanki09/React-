import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)

  function increaceNum(){
    setnum(num + 1)
  }
  function decreaceNum(){
    setnum(num - 1)
  }
  function jumpBy5(){
    setnum(num + 5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaceNum}>increace</button>
      <button onClick={decreaceNum}>decreace</button>
      <button onClick={jumpBy5}>Jump by 5</button>
    </div>
  )
}

export default App