import { useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import HeroContext from "./components/context/HeroContext.jsx";
// import HeroList from "./components/HeroList.jsx";
// import HeroProfile from "./components/HeroProfile.jsx";
import marvel from "./imgs/marvel.jpeg";
import Loadable from "react-loadable";
const StyledContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: center;
  margin: 0 auto;
  min-height: 100vh;
  background: url(${marvel});
  background-size: cover;
  background-repeat: no-repeat;
  .inner__container {
    width: 1200px;
    padding: 100px 30px 30px;
  }
`;
const HeroList = Loadable({
  loader: () => import("./components/HeroList.jsx"),
  loading: "loading",
});
const HeroProfile = Loadable({
  loader: () => import("./components/HeroProfile.jsx"),
  loading: "loading",
});
const App = () => {
  const [currentHeroId, setCurrentHeroId] = useState(null);
  return (
    <HeroContext.Provider value={{ currentHeroId, setCurrentHeroId }}>
      <BrowserRouter>
        <StyledContainer>
          <div className="inner__container">
            <HeroList />
            <Switch>
              <Route path="/heroes/:heroId">
                <HeroProfile />
              </Route>
              <Route path="*">
                <Redirect to="/heroes" />
              </Route>
            </Switch>
          </div>
        </StyledContainer>
      </BrowserRouter>
    </HeroContext.Provider>
  );
};
export default App;
