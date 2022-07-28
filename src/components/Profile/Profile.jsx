import PropTypes from 'prop-types';

import { ProfileStats } from './ProfileStats/ProfileStats';
import { Profile, ProfileDescription, ProfileImg, ProfileName, ProfileTag, ProfileLocation } from './Profile.styled';
import { Statistics } from 'components/Profile/Statistics/Statistics';

export const ProfileCard = ({user, statistics}) => {
    return <Profile>
        <ProfileDescription>
            <ProfileImg
                src={user.avatar}
                alt="User avatar"
                className="avatar"
            />
            <ProfileName>{user.username}</ProfileName>
            <ProfileTag>@{user.tag}</ProfileTag>
            <ProfileLocation>{user.location}</ProfileLocation>
        </ProfileDescription>
        <ProfileStats stats={user.stats} />
        <Statistics title="Upload stats" stats={statistics} />
    </Profile>;
};


ProfileCard.propTypes = {
    user: PropTypes.exact({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.object.isRequired,
    }),
    statistics: PropTypes.array.isRequired,

};
