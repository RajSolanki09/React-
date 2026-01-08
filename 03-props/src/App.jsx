import React from 'react'
import Card from './assets/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Aman' age={25} img='https://images.unsplash.com/photo-1762770658886-da04e85dd246?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Raj' age={30} img='https://media.istockphoto.com/id/2171639496/photo/joyful-mid-adult-caucasian-woman-enjoying-nature-in-woodland.jpg?s=2048x2048&w=is&k=20&c=QevXqMKEpaVTpqkNUS1WHEQoaONuywsLP_iCjQnSM0g='/>
      <Card user='Ravi' age={28} img='https://images.unsplash.com/photo-1764147385366-066a40da163f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App