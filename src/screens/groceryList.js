
import React from 'react'
import groceryItem from './groceryItem'
import groceryList from '../redux/groceryList';
​
const groceryList = ({ items, handleClick }) => (
  <ul>
    {items.map((item, index) => (
      <groceryItem key={index} onClick={() => handleClick(index)} />
    ))}
  </ul>
)
​
export default groceryList;