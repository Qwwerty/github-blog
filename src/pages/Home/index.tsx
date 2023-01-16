import { ListIssues } from "./components/ListIssues";
import { Profile } from "./components/Profile";

import "./styles.scss";

export function Home() {
  return (
    <main className="home-container">
      <Profile />
      <ListIssues />
    </main>
  );
}
