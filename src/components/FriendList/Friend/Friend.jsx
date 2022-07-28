import PropTypes from 'prop-types';

import { FriendAvatar, FriendCard, FriendName, FriendStatus } from 'components/FriendList/Friend/Friend.styled';


export const Friend = ({status, avatar, name}) => {
    return <FriendCard>
      <FriendStatus isOnline={status} />
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
  </FriendCard>
}

Friend.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}