import PropTypes from 'prop-types';
import { ProfileStats } from './ProfileStats/ProfileStats';
import { Profile, ProfileDescription, ProfileImg, ProfileName, ProfileTag, ProfileLocation } from './Profile.styled';

export const ProfileCard = ({user}) => {
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
        <ProfileStats stats = {user.stats} />
    </Profile>;
};


ProfileCard.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
};
