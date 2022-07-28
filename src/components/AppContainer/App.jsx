import profile from "components/path/user";
import data from 'components/path/data';

import { ProfileCard } from "components/Profile/Profile";
import { Container } from "components/AppContainer/App.styled";



export const App = () => {
  return <Container>
    <ProfileCard user={profile} statistics={data} />
      
    </Container>
};

