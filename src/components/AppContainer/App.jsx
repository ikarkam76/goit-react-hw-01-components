import user from "DataDir/user";
import data from 'DataDir/data';
import friendList from 'DataDir/friends';
import transactions from 'DataDir/transactions';

import { ProfileCard } from "components/Profile/Profile";
import { Container } from "components/AppContainer/App.styled";
import { FriendList } from "components/FriendList/FriendList";
import { Transactions } from "components/TransactionHistory/TransactionHistory";
import { Statistics } from 'components/Statistics/Statistics';




export const App = () => {
  return (
    <Container>
      <ProfileCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friendList} />
      <Statistics title="Upload stats" stats={data} />
      <Transactions items={transactions} />
    </Container>
  );
};

