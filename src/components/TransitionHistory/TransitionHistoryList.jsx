
import PropTypes from 'prop-types'
import { Th,Tr} from './TransitionHistory.styled';

export const TransitionHistoryList =({item})=>{
return( item.map(({id,type,amount,currency}) =>(
   
    <Tr key={id}>
      <Th>{type}</Th>
      <Th>{amount}</Th>
      <Th>{currency}</Th>
    </Tr>
  


)));
};


TransitionHistoryList.propTypes ={
    item:PropTypes.arrayOf(
        PropTypes.exact({  
            id:PropTypes.string.isRequired,
            type:PropTypes.string.isRequired,
            amount:PropTypes.string.isRequired,
            currency:PropTypes.string.isRequired,})
      

    )
}