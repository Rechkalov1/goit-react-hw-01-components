  
  import PropTypes from 'prop-types'
  import {Statistic,StatList,Item,Span, Percentage} from './Statistics.styled';
  export const Statistics = ({title='Upload Stats',stats}) => {
 
  return (
  <Statistic >
    <h2>{title}</h2>

    <StatList >
    {stats.map(({id,label,percentage})=>(
      <Item key={id} >
        <Span >{label}:</Span>
        <Percentage >{percentage}%</Percentage>
      </Item>))}
    </StatList>
  </Statistic>
  )
  };

  Statistics.propTypes = {
    title:PropTypes.string,
  stats:PropTypes.arrayOf( 
    PropTypes.exact({ 
      id: PropTypes.string.isRequired,
      label:PropTypes.string.isRequired,
      percentage:PropTypes.number.isRequired,})
    )
    
  }