import './App.css';
import Header from './Header';
import Balance from './Balance';
import Incomexpense from './Incomexpense';
import History from './History';
import TransactionForm from './TransactionForm';
import {TransProvider} from './TransProvider';
function App() {
  return (
    <div className="main">
    <TransProvider>
      <Header />
      <Balance />
      <Incomexpense />
      <History />
      <TransactionForm />
    </TransProvider>
     </div>
  );
}

export default App;
