import PropTypes from 'prop-types'
import { TransitionHistoryList } from './TransitionHistoryList'
import { Table, Tr, Th } from './TransitionHistory.styled'
export const TransitionHistory = (items) => {
  return (
    <Table>
      <Tr>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
      </Tr>
      <Tr>
        <TransitionHistoryList item={items} />
      </Tr>
    </Table>
  )
}

TransitionHistory.propTypes = {
  items: PropTypes.array.isRequired,
}
