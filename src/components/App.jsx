import { Profile } from 'components/Profile/Profile'
import { Statistics } from 'components/Statistics/Statistics'
import { FriendsList } from 'components/Friends/FriendsList'
import { TransitionHistory } from './TransitionHistory/TransitionHistory'
import user from 'components/data/user.json'
import statistic from 'components/data/statistic.json'
import friends from 'components/data/friends.json'
import transactions from 'components/data/transactions.json'

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statistic} />
      <FriendsList friends={friends} />

      <TransitionHistory items={transactions} />
    </div>
  )
}
