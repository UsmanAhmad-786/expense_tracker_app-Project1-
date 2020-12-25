import React,{ useContext } from 'react'
import TransContext from './TransContext'

const Incomexpense = () => {
    const {transactions} = React.useContext(TransContext);
    console.log(transactions);

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
       
    }
    
    return (
        <div className="incomexpense">
          <h3 className="incomecolor">  INCOME<br/> ${ getIncome().toFixed(2)} </h3>
           <h3 className="expensecolor"> EXPENSE<br/> ${getExpense().toFixed(2)}</h3>
        </div>
    );

}
export default Incomexpense;