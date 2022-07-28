import PropTypes from 'prop-types';

import { ProfileStats } from './ProfileStats/ProfileStats';
import { Profile, ProfileDescription, ProfileImg, ProfileName, ProfileTag, ProfileLocation } from './Profile.styled';
import { Statistics } from 'components/Profile/Statistics/Statistics';

export const ProfileCard = ({username, tag, avatar, location, stats, statistics}) => {
    return <Profile>
        <ProfileDescription>
            <ProfileImg
                src={avatar}
                alt="User avatar"
                className="avatar"
            />
            <ProfileName>{username}</ProfileName>
            <ProfileTag>@{tag}</ProfileTag>
            <ProfileLocation>{location}</ProfileLocation>
        </ProfileDescription>
        <ProfileStats stats={stats} />
        <Statistics title="Upload stats" stats={statistics} />
    </Profile>;
};


ProfileCard.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
    statistics: PropTypes.array.isRequired,

};
