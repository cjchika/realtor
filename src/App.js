import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import HomePage from "./pages/HomePage";
import Listings from "./pages/Listings";
import ListingDetail from "./pages/ListingDetail";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Agent from "./pages/Agent";
import Layout from "./components/Layout/Layout";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="home" />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/listings" exact>
          <Listings />
        </Route>
        <Route path="/listings/:listingId">
          <ListingDetail />
        </Route>
        <Route path="/agent">
          <Agent />
        </Route>
        <Route path="/blog" exact>
          <Blog />
        </Route>
        <Route path="/blog/:blogId">
          <Blog />
        </Route>
        <Route path="/signup">
          {!isAuthenticated && <Signup />}
          {isAuthenticated && <Redirect to="/" />}
        </Route>
        <Route path="/login">
          {!isAuthenticated && <Login />}
          {isAuthenticated && <Redirect to="/" />}
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
