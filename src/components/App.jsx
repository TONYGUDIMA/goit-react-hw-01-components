import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import Statistics from './Statistics/Statistics';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../jsons/user.json';
import friends from '../jsons/friends.json';
import data from '../jsons/data.json';
import transactions from '../jsons/transactions.json';
console.log(data);
export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile user={user} />
      <FriendList friendList={friends} />
      {data.title ? (
        <Statistics title={data.title} stats={data} />
      ) : (
        <Statistics stats={data} />
      )}
      <TransactionHistory items={transactions} />
    </div>
  );
};
