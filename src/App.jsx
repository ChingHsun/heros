import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import HeroListPage from "./pages/HeroListPage.jsx";
import HeroProfilePage from "./pages/HeroProfilePage.jsx";

const StyledContainer = styled.div`
    max-width: 1200px;
    margin: 50px auto;
`

const App = () => {
    return (
        <BrowserRouter>
            <StyledContainer>
                <HeroListPage></HeroListPage>
                <Switch>
                    <Route path="/heroes/:heroId">
                        <HeroProfilePage />
                    </Route>
                    <Route path="*">
                        {/* <HeroIndexPage /> */}
                        <div>HeroIndexPage</div>
                    </Route>
                </Switch>

            </StyledContainer>
        </BrowserRouter>


    );
}
export default App