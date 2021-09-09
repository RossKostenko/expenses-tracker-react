import React from 'react';
import { useState } from 'react/cjs/react.development';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = props => {
   const [isEditing, setIsEditing] = useState(false)
   const saveExpenseDataHanlder = enteredExpenseData => {
      const expenseData = {
         ...enteredExpenseData,
         id: Math.random().toLocaleString()
      }
      props.onAddExpense(expenseData);
      setIsEditing(false)
   }
   const startEditingHandler = () => {
      setIsEditing(true)
   }
   const stopEditingHandler = () => {
      setIsEditing(false)
   }


   return (
      <div className="new-expense">
         {!isEditing && (
            <button onClick={startEditingHandler}>Add New Expense</button>
            )}
         {isEditing && (
            <ExpenseForm 
               onCancel={stopEditingHandler} 
               onSaveExpenseData={saveExpenseDataHanlder}
            />)}
      </div>
   )
};

export default NewExpense;