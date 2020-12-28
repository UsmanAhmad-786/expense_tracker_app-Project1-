import React from 'react'
import TransContext from './TransContext'

const Incomexpense = () => {
    const {transactions} = React.useContext(TransContext);
    console.log(transactions);
    const transactionAmounts = transactions.map(transaction=>transaction.amount);
   /* 
    This is another method for doing this but this is lengthy Solution
    const getIncome = () => {
        
        let income=0;
        for (var index = 0; index<transactions.length; index++) {
            if(transactions[index].amount > 0)
                income+=transactions[index].amount;
            
        }
        return income;
    }
    const getExpense = () => {
        
        let Expense=0;
        for (var i = 0; i<transactions.length; i++) {
            if(transactions[i].amount < 0)
                Expense+=transactions[i].amount;
            
        }
        
        return Expense;
       
    } */
    const income = transactionAmounts
    .filter(transaction => transaction > 0)
    .reduce((acc, transaction) => (acc += transaction), 0)
    .toFixed(2);

const expense = Math.abs(transactionAmounts
    .filter(transaction => transaction < 0)
    .reduce((acc, transaction) => (acc += transaction), 0)
    ).toFixed(2);
    
    return (
        <div className="incomexpense">
          <h3 className="incomecolor">  INCOME<br/> ${income} </h3>
           <h3 className="expensecolor"> EXPENSE<br/> ${expense}</h3>
        </div>
    );

}
export default Incomexpense;