import React from 'react'
import { useState } from 'react'
import TransContext from './TransContext';

const TransactionForm = () => {

    let { AddTrans } = React.useContext(TransContext);
    let [newDesc, setDesc] = useState('');
    let [newAmount, setAmount] = useState(0);
    function generateID() {
        return Math.floor(Math.random() * 100000);
    } 
    const HandleAddition = (event) => {
        event.preventDefault();
        // console.log(newDesc , newAmount);
        if (Number(newAmount) === 0) {
            alert("Please Enter Correct Value.");
            return false;
        }
        AddTrans(
            {
                amount: Number(newAmount),
                desc: newDesc,
                id: generateID()
            })
        setDesc('');
        setAmount(0);

    }
    return (
        <div className="tran-form">
            <h3>Add new transaction</h3>
            <hr />
            <form onSubmit={HandleAddition}>
                <label>
                    <b>Text</b><br />
                    <input type="text" placeholder="Enter Description..." value={newDesc} onChange={(ev) => setDesc(ev.target.value)} required />
                </label>
                <br />
                <label>
                    <b> Amount</b><br />(negative-expense,positive-income) <br />
                    <input type="number" placeholder="Enter Amount..." value={newAmount} onChange={(ev) => setAmount(ev.target.value)} required />
                </label>
                <br />
                <input type="submit" value="Add Transaction" className="btn" />

            </form>

        </div>


    );
}
export default TransactionForm;