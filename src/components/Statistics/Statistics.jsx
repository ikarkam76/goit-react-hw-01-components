import PropTypes from 'prop-types';
import { StatEvent } from './StatEvent/StatEvent';
import { StatisticSection, StatisticsList } from 'components/Statistics/Statistics.styled';



export const Statistics = ({ title, stats }) => {
    return <StatisticSection>
        <h2 className="title">{title}</h2>
        <StatisticsList>
            {stats.map(stat =>
                <StatEvent key={stat.id} label={stat.label} percentage={stat.percentage} />)}
        </StatisticsList>
        </StatisticSection>
    
};


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}

