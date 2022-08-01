import PropTypes from 'prop-types';

import { ProfileStats } from './ProfileStats/ProfileStats';
import { Profile, ProfileDescription, ProfileImg, ProfileName, ProfileTag, ProfileLocation } from './Profile.styled';

export const ProfileCard = ({username, tag, avatar, location, stats}) => {
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
            <ProfileStats followers={stats.followers} views={stats.views} likes={stats.likes}/>
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
