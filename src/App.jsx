import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import HeroIndex from "./components/HeroIndex.jsx";
import HeroList from "./components/HeroList.jsx";
import HeroProfile from "./components/HeroProfile.jsx";

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <BrowserRouter>
      <StyledContainer>
        <div style={{ padding: "30px" }}>
          <HeroList></HeroList>
          <Switch>
            <Route path="/heroes/:heroId">
              <HeroProfile />
            </Route>
            <Route path="/heroes">
              <HeroIndex
                render={
                  <>
                    Welcome! <br /> Please Select a Hero!
                  </>
                }
              />
            </Route>
            <Redirect from="*" to="/heroes" />
          </Switch>
        </div>
      </StyledContainer>
    </BrowserRouter>
  );
};
export default App;
