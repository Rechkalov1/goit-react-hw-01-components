import PropTypes from "prop-types"
import { StatisticTitle } from "./Title"
import { Statistic, StatList, Item, Span, Percentage } from "./Statistics.styled"

export const Statistics = ({ stats, title }) => {
  return (
    <Statistic>
      <StatisticTitle title={title}></StatisticTitle>

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <Span>{label}</Span>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </Statistic>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
}
