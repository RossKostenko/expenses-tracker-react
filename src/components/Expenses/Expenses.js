import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart"

import './Expenses.css'
import { useState } from "react";

const Expenses = props => {
   const [filterYear, setFilterYear] = useState('2020');
   const onFilterHandler = year => {
      setFilterYear(year);
   }
   const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filterYear;
   })

   return(
         <Card className="expenses">
            <ExpensesFilter 
               selected={filterYear} 
               onFilterUse={onFilterHandler}
            />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
         </Card> 
   )
}

export default Expenses;