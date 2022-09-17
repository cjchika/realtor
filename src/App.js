import { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Listings from "./pages/Listings";
import ListingDetail from "./pages/ListingDetail";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import MainHeader from "./components/Layout/MainHeader";

function App() {
  return (
    <Fragment>
      <MainHeader />
      <main>
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
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
