import React from 'react';



const initialtransactions = [
    { id:1, amount: +500, desc: "Cash" },
    { id:2, amount: -50, desc: "Book"  },
    { id:3, amount: -200, desc: "Camera" }
];
const TransContext = React.createContext(initialtransactions);
export default TransContext;



