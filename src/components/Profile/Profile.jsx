import css from './Profile.module.css';

const Profile = ({ username, tag, location, stats, avatar }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={username} className={css.thrumImg} width="250" />
        <p className="name">
          <b>{username}</b>
        </p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>
            <b>Followers</b>
          </span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>
            <b>Views</b>
          </span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span className={css.label}>
            <b>Likes</b>
          </span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
