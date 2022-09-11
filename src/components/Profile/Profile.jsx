import PropTypes from 'prop-types'
import css from './Profile.module.css'
import {Avatar} from './Profile.styled'

export const Profile = ({username, tag,location,avatar,stats,})=>{
  return(  <div className={css.desc}>
    <div className={css.profile}>
      <Avatar
        src={avatar}
        alt={username}
        
      />
      <p className={css.name}>Name: {username}</p>
      <p className={css.tag}>Tag:@ {tag}</p>
      <p className={css.location}>Location: {location}</p>
    </div>
  
    <ul className={css.stats}>
      <li className={css.infoStat}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>:{stats.followers}</span>
      </li>
      <li className={css.infoStat}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>:{stats.views}</span>
      </li>
      <li className={css.infoStat}>
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