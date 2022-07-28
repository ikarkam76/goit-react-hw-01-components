import PropTypes from 'prop-types';
import { StatsList, StatsItem, StatsLabel, StatsQuantity } from './ProfileStats.styled';

export const ProfileStats = ({followers, views, likes}) => {
    return <StatsList>
                <StatsItem>
                    <StatsLabel>Followers</StatsLabel>
                    <StatsQuantity>{followers}</StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Views</StatsLabel>
                    <StatsQuantity>{views}</StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Likes</StatsLabel>
                    <StatsQuantity>{likes}</StatsQuantity>
                </StatsItem>
            </StatsList>
            
};

ProfileStats.propTypes = {
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
   
};