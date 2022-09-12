import PropTypes from "prop-types"
import { TransitionHistoryList } from "./TransitionHistoryList"
import { Table, Th, TableTitle } from "./TransitionHistory.styled"
export const TransitionHistory = ({ items }) => {
  return (
    <Table>
      <TableTitle>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>

        <TransitionHistoryList item={items} />
      </TableTitle>
    </Table>
  )
}

TransitionHistory.propTypes = {
  items: PropTypes.array.isRequired,
}
