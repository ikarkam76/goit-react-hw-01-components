import PropTypes from 'prop-types';

import { FriendAvatar, FriendCard, FriendName, FriendStatus } from 'components/FriendList/Friend/Friend.styled';


export const Friend = ({status, avatar, name}) => {
    return <FriendCard>
      <FriendStatus isOnline={status} />
      <FriendAvatar src={avatar} alt="User avatar" />
      <FriendName>{name}</FriendName>
  </FriendCard>
}

Friend.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}