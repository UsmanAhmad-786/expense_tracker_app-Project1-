import React,{useReducer} from 'react'
import TransContext from './TransContext'
import TransactionReducer from './TransReducer'
import {useContext} from 'react'


export const TransProvider = ({ children }) => {

    let [state, dispatch] = useReducer(TransactionReducer, useContext(TransContext));
  
    function AddTrans(transObj) {

        dispatch({
            type: 'ADD Transaction',
            payload: {
                id: transObj.id,
                amount: transObj.amount,
                desc: transObj.desc
                
            },
        
        })
    }
    function  deleteTransaction(id) {
        dispatch({
            type: 'Delete_Transaction',
            payload: id
            

        });
    }
    return (
        <TransContext.Provider value={{
            transactions: state,
            AddTrans,
            deleteTransaction
        }}>
            {children}
        </TransContext.Provider>
    );


}