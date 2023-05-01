import React from 'react';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactions}>
      <thead className={css.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(el => {
          return (
            <tr key={el.id}>
              <td className={css.td}>{el.type}</td>
              <td className={css.td}>{el.amount}</td>
              <td className={css.td}>{el.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
