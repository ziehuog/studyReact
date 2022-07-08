import React from 'react'
import './ExpenseForm.css'

function ExpenseForm() {

    const titleChangeHandle = () => {
        
    }

  return (
    <form>
        <div className = "new-expense__controls">
            <div className = "new-expense__controls">
                <label>Title</label>
                <input 
                    type = "text" 
                    onChange={titleChangeHandle}
                    />
            </div>
            <div className = "new-expense__controls">
                <label>Amount</label>
                <input type = "number" min= "0.01" step = "0.01" />
            </div>
            <div className = "new-expense__controls">
                <label>Date</label>
                <input type = "date" min= "2020-01-01" max = "2022-12-31" />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'> Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm