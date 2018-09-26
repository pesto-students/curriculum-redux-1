import React from 'react'
​
const Todo = ({ onClick, purchased, text }) => (
  <li
    onClick={onClick}
    style={ {
      color: purchased ? 'red' : 'black'
    }}
  >
    {text}
  </li>
)
​
export default groceryItem