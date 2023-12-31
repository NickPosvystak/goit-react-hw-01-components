import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import user from '../src/data/user.json';
import data from './data/data.json';
import FriendsList from 'components/FriendList/FriendList';
import friends from './data/friends.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
};
