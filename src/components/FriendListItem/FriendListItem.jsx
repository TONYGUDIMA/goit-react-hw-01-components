import React from 'react';
import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export default function FriendListItem({ friend }) {
  return (
    <li className={css.friendListItem}>
      <span className={friend.isOnline ? css.isOnline : css.isOffline}></span>
      <img src={friend.avatar} alt="User avatar" width="48" />
      <p className={css.friend__paragraph}>{friend.name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  friend: PropTypes.object,
};
