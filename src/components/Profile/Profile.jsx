import css from './Profile.module.css';
import PropTypes from 'prop-types';

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

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
export default Profile;
