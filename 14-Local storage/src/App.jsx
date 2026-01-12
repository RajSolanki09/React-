import React from 'react'

const App = () => {

  // we can set data in local storage as string only
  // to store complex data types like objects and arrays we need to convert them into string using JSON.stringify() method
  // to retrieve complex data types from local storage we need to parse them back using JSON.parse() method
  // localStorage.setItem('key','value'); // to set data in local storage
  // const value = localStorage.getItem('key'); // to get data from local storage
  // localStorage.removeItem('key'); // to remove data from local storage
  // localStorage.clear(); // to clear all data from local storage
  // localStorage.key(index); // to get key at specific index

  const user =  {
    username: 'john_doe',
    age: 30,
    preferences: {
      theme: 'dark',
    } 
  }
  localStorage.setItem('user',JSON.stringify(user));

  const User = JSON.parse(localStorage.getItem('user'));
  console.log(User);
  return (
    <div>App</div>
  )
}

export default App