import css from './FriendListItem.module.css';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  const statusOnline = isOnline ? css.online : css.offline;
  return (
    <li className={css.item} key={id}>
      <span className={`${css.status} ${statusOnline}`} />
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>
        <b>{name}</b>
      </p>
    </li>
  );
};

export default FriendListItem;
