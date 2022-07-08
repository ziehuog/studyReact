import React from 'react'
import { useState } from 'react';
import './ExpenseItem.css';


function ExpenseItem(props) {

  const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const year = props.date.getFullYear();

  const [title, setTitle] = useState(props.title);
  
  // let title = props.title;

  const clickHandler = () => {
    setTitle('update!!')
    // title = 'Update!'
    console.log(title);
  }



  return (
    <div className='expense-item'>
      <div className='expense-date'>
        <div className='expense-date__month'>{day}</div>
        <div className='expense-date__year'>{month}</div>
        <div className='expense-date__day'>{year}</div>
      </div>

      <div className='expense-item__description'>
        <h2 >{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>

      <button onClick={clickHandler}>Change Title</button>
    </div>
  )
}

export default ExpenseItem