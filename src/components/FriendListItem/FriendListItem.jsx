import css from './FriendListItem.module.css';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
    return (
      <li className={css.item} key={id}>
        <span className={css.status}>{isOnline}</span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>
          <b>{name}</b>
        </p>
      </li>
    );
}

export default FriendListItem;  