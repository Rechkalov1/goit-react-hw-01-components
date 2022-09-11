import PropTypes from 'prop-types'

import { Avatar, Desc, Name, Tag, Location, Stats, InfoStat, Label, Quantity, Profiles } from './Profile.styled'

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Desc>
      <Profiles>
        <Avatar src={avatar} alt={username} />
        <Name>Name: {username}</Name>
        <Tag>Tag:@ {tag}</Tag>
        <Location>Location: {location}</Location>
      </Profiles>

      <Stats>
        <InfoStat>
          <Label>Followers</Label>
          <Quantity>:{stats.followers}</Quantity>
        </InfoStat>
        <InfoStat>
          <Label>Views</Label>
          <Quantity>:{stats.views}</Quantity>
        </InfoStat>
        <InfoStat>
          <Label>Likes</Label>
          <Quantity>:{stats.likes}</Quantity>
        </InfoStat>
      </Stats>
    </Desc>
  )
}

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
}
