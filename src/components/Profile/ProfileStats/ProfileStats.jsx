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
    stats: PropTypes.exact({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }),   
   
};