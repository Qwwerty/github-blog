import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./src/layouts/DefaultLayout";
import { Home } from "./src/pages/Home";
import { Post } from "./src/pages/Post";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:number" element={<Post />} />
      </Route>
    </Routes>
  );
}
