import PropTypes from 'prop-types';
import { List, FriendList, Status } from './FriendList.styled';
export const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendList key={id}>
          <Status status={isOnline} />
          <img src={avatar} alt="User avatar" width="48" />
          <p>{name}</p>
        </FriendList>
      ))}
    </List>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
