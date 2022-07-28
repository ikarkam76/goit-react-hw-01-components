import profile from "components/path/user";
import data from 'components/path/data';

import { ProfileCard } from "components/Profile/Profile";
import { Container } from "components/AppContainer/App.styled";
import { Statistics } from "components/Statistics/Statistics";



export const App = () => {
  return <Container>
      <ProfileCard user={profile} />
      <Statistics title="Upload stats" stats={data} />
    </Container>
};

