import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            name={name}
            avatar={avatar}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};
export default FriendsList;
