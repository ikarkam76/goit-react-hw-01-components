import PropTypes from 'prop-types';
import { StatEventItem, StatisticsLabel, StatisticsPercentage } from 'components/Profile/Statistics/StatEvent/StatEvent.styled';

export const StatEvent = ({ label, percentage }) => {
    return <StatEventItem>
        <StatisticsLabel>{label}</StatisticsLabel>
        <StatisticsPercentage>{percentage}%</StatisticsPercentage>
    </StatEventItem>
};

StatEvent.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}