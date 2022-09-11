import {Profile} from 'components/Profile/Profile'
import { Statistics } from 'components/Statistics/Statistics'
import {FriendsList} from 'components/Friends/FriendsList'
import { TransitionHistory } from './TransitionHistory/TransitionHistory'
import user from './data/user.json'
import data from 'components/data/data.json'
import friends from 'components/data/friends.json'

    export const App = () => {
    return(
    <div>
    <Profile 
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />
    <Statistics stats ={data}
    />
    <FriendsList  friends={friends}/>
    <TransitionHistory/>
    </div>
    )
    
    }
