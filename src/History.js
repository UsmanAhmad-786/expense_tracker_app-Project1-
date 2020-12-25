import React,{useContext} from 'react'
import TransContext from './TransContext';



const History = () => {
   
  
    let {transactions,deleteTransaction}=useContext(TransContext);//for delete transactions 
    //it send "id" of specific transaction that is going to be delete
    // to the transcontxt that is global storage
    //after this reducer called by transcontext and filter transactions 
    // and reducer return updated states.
    console.log(transactions)
    
    const deleteSingleTransaction = (id) => {        
        deleteTransaction(id);    
        console.log(id);            
    }

    return (
        <div>
            <h3>History </h3>
            <hr />
            <ul className="Trans-list">
                {transactions.map((transObj,ind) => {
                    return (
                        <li key={transObj.id} className={transObj.amount>0? 'plus': 'minus'}>
                            <span>{transObj.desc}</span>
                            <span >{transObj.amount>0? '+':''}{transObj.amount}</span>
                            <button className="delete-btn" onClick={()=>deleteSingleTransaction(transObj.id)}>x</button>
                            </li>
                 
                    )
                    
                })}

            </ul>
        </div>

    )

}
export default History;