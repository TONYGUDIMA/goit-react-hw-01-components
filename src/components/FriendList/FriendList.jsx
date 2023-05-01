import FriendListItem from 'components/FriendListItem/FriendListItem';
import React from 'react';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export default function FriendList({ friendList }) {
  if (!friendList) {
    return <h1>Error</h1>;
  }
  return (
    <ul className={css.friendList}>
      {friendList &&
        friendList.map(el => <FriendListItem friend={el} key={el.id} />)}
    </ul>
  );
}
FriendList.propTypes = {
  friendList: PropTypes.array,
};
