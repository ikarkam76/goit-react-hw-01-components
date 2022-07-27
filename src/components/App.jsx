import { ProfileCard } from "components/Profile/Profile";
import profile from "components/path/user";


export const App = () => {
  return (
    <div>
      <ProfileCard user={profile} />
    </div>
  );
};

