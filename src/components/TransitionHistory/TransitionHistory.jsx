import PropTypes from 'prop-types'
import {TransitionHistoryList} from './TransitionHistoryList'
import transactions from 'components/data/transactions.json'
import{Table,Tr,Th} from './TransitionHistory.styled'
export const TransitionHistory = ()=>{
    return(
    <Table>
      <Tr>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
      </Tr>
      <Tr>
        <TransitionHistoryList item ={transactions}/>
      </Tr>
    
  </Table>)
}

TransitionHistory.propTypes ={
    item:PropTypes.array.isRequired,
}