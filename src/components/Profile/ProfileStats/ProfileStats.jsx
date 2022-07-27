import PropTypes from 'prop-types';
import { StatsList, StatsItem, StatsLabel, StatsQuantity } from './ProfileStats.styled';

export const ProfileStats = ({stats}) => {
    return <StatsList>
                <StatsItem>
                    <StatsLabel>Followers</StatsLabel>
                    <StatsQuantity>{stats.followers}</StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Views</StatsLabel>
                    <StatsQuantity>{stats.views}</StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Likes</StatsLabel>
                    <StatsQuantity>{stats.likes}</StatsQuantity>
                </StatsItem>
            </StatsList>
};

ProfileStats.propTypes = {
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
};