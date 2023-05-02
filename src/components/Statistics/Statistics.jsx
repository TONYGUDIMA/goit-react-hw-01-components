import StatisticItem from 'components/StatisticItem/StatisticItem';
import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({ stats, title }) {
  stats.sort((a, b) => a.percentage - b.percentage);
  if (title) {
    return (
      <div>
        <h2>{title}</h2>
        <ul className={css.statsList}>
          {stats.map(el => (
            <StatisticItem key={el.id} data={el} />
          ))}
        </ul>
      </div>
    );
  } else
    return (
      <div>
        <ul className={css.statsList}>
          {stats.map(el => (
            <StatisticItem key={el.id} data={el} />
          ))}
        </ul>
      </div>
    );
}

Statistics.propTypes = {
  stats: PropTypes.array,
  title: PropTypes.string,
};
