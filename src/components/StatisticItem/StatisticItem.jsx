import React from 'react';
import PropTypes from 'prop-types';
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function StatisticItem({ data }) {
  return (
    <li
      style={{
        backgroundColor: getRandomColor(),
        width: `${data.percentage}%`,
      }}
    >
      <span>{data.label}</span>
      <br />
      <span>{data.percentage}%</span>
    </li>
  );
}

StatisticItem.propTypes = {
  data: PropTypes.object,
};
