import React from 'react'
import TransContext from './TransContext'

const Balance = () => {
   
    const {transactions} = React.useContext(TransContext);

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
    
    return (<div className="balanc">
        <h4 className="blncolor">YOUR BALANCE</h4><h2 className="blncolor"> ${(getIncome()+getExpense()).toFixed(2)}</h2>
    </div>
    );
}
export default Balance;