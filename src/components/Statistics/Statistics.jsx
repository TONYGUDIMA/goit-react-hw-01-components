import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
export default function Statistics({ stats, title }) {
  stats.sort((a, b) => a.percentage - b.percentage);
  if (title) {
    return (
      <div>
        <h2>{title}</h2>
        <ul className={css.statsList}>
          {stats.map(el => {
            return (
              <li
                key={el.id}
                style={{
                  backgroundColor: getRandomColor(),
                  width: `${el.percentage}%`,
                }}
              >
                <span>{el.label}</span>
                <br />
                <span>{el.percentage}%</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else
    return (
      <div>
        <ul className={css.statsList}>
          {stats.map(el => {
            return (
              <li
                key={el.id}
                style={{
                  backgroundColor: getRandomColor(),
                  width: `${el.percentage}%`,
                }}
              >
                <span>{el.label}</span>
                <br />
                <span>{el.percentage}%</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
}

Statistics.propTypes = {
  stats: PropTypes.array,
  title: PropTypes.string,
};
