import profile from "components/path/user";
import data from 'components/path/data';
import friendList from 'components/path/friends'

import { ProfileCard } from "components/Profile/Profile";
import { Container } from "components/AppContainer/App.styled";
import { FriendList } from "components/FriendList/FriendList";



export const App = () => {
  return <Container>
    <ProfileCard user={profile} statistics={data} />
    <FriendList friends={friendList} />
    </Container>
};

// friends={friendList}