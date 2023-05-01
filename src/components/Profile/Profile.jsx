import React from 'react';
import css from './Profile.module.css';
import PropTypes from 'prop-types';
export default function Profile({ user }) {
  const { avatar, location, stats, tag, username } = user;

  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img className={css.img} src={avatar} alt="User avatar" />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.statsList}>
        <li className={css.followers}>
          <p>Followers </p>
          <span>{stats.followers}</span>
        </li>
        <li className={css.views}>
          <p>Views </p>
          <span>{stats.views}</span>
        </li>
        <li className={css.likes}>
          <p>Likes </p>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.propTypes = {
  user: PropTypes.object,
};
