import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.tableList}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
       {items.map(item=>{return (
         <tr key={item.id} className={css.trColor}>
           <td>{item.type}</td>
           <td>{item.amount}</td>
           <td>{item.currency}</td>
         </tr>
       );})}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default TransactionHistory;
