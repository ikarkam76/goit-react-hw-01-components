import { ProfileCard } from "components/Profile/Profile";
import profile from "components/path/user";
import { Container } from "components/AppContainer/App.styled";



export const App = () => {
  return (
    <Container>
      <ProfileCard user={profile} />
    </Container>
  );
};

