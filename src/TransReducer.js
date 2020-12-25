import React from 'react'

const TransactionReducer = ((state, action) => {
console.log(state);
    switch (action.type){
        case 'ADD Transaction':{
            return [action.payload, ...state]
        }
       case 'Delete_Transaction':
            
            return state.filter( transaction=> transaction.id !== action.payload);
         

        default:
            return state;
    }
})

export default TransactionReducer;