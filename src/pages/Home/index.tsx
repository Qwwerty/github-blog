import { ListIssues } from "./components/ListIssues";
import { Profile } from "./components/Profile";
import { Search } from "./components/Search";

import "./styles.scss";

export function Home() {
  return (
    <main className="home-container">
      <Profile />
      <Search />
      
      <ListIssues />
    </main>
  );
}
