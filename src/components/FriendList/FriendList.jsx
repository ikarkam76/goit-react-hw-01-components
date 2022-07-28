import PropTypes from 'prop-types';

import { Friend } from 'components/FriendList/Friend/Friend';
import { FriendCardList } from 'components/FriendList/FriendList.styled';

export const FriendList = ({friends}) => {
    return <FriendCardList>
            {friends.map(friend => <Friend key={friend.id} status={friend.isOnline} avatar={friend.avatar} name={friend.name} />)}
    </FriendCardList>
};


FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}