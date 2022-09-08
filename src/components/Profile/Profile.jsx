import PropTypes from 'prop-types'
import css from './Profile.module.css'
export const Profile = ({username, tag,location,avatar,stats,})=>{
  return(  <div className={css.desc}>
    <div className={css.profile}>
      <img
        src={avatar}
        alt={username}
        className={css.avatar}
      />
      <p className={css.name}>Name: {username}</p>
      <p className={css.tag}>Tag:@ {tag}</p>
      <p className="location">Location: {location}</p>
    </div>
  
    <ul className="stats">
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>:{stats.followers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>:{stats.views}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>:{stats.likes}</span>
      </li>
    </ul>
  </div>
    )
  };



Profile.propTypes = {
    username:PropTypes.string.isRequired,
     tag:PropTypes.string.isRequired,
     location:PropTypes.string.isRequired,
     avatar:PropTypes.string.isRequired,
    stats:PropTypes.objectOf(PropTypes.number),
};