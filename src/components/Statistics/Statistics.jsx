import PropTypes from 'prop-types'
export const Statistics = ({stats}) => {

return (
<section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
   {stats.map(({id,label,percentage})=>(
    <li key={id} className="item">
      <span className="label">{label}:</span>
      <span className="percentage">{percentage}%</span>
    </li>))}
  </ul>
</section>
)
};

Statistics.propTypes ={
    id: PropTypes.string,
    label:PropTypes.string.isRequired,
    percentage:PropTypes.number.isRequired,
}