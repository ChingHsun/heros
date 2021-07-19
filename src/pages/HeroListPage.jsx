import { Col, Result, Row, Spin } from "antd";
import { useEffect, useState } from "react";
import HeroCard from "../components/HeroCard.jsx";
import { getHeroList } from "../utils/api";
import styled from "styled-components";
import { useRouteMatch } from "react-router-dom";
const StyledHeroList = styled(Row)`
  margin-bottom: 10%;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-left: 0px !important;
`;
const HeroListPage = () => {
  const [heroList, setHeroList] = useState([]);
  const routeMatch = useRouteMatch("/heroes/:heroId");
  const [ui, setUi] = useState("Loading");

  useEffect(() => {
    getHeroList()
      .then((resp) => {
        setUi("OK");
        setHeroList(resp);
      })
      .catch((err) => {
        setUi("Error");
        console.log(err);
      });
  }, []);
  switch (ui) {
    case "Loading":
      return (
        <StyledHeroList>
          <Col span={24}>
            <Spin />
          </Col>
        </StyledHeroList>
      );
    case "OK":
      return (
        <StyledHeroList gutter={[16, 16]}>
          {heroList?.map((hero) => (
            <Col sm={12} md={6} key={hero.id}>
              <HeroCard
                id={hero.id}
                name={hero.name}
                image={hero.image}
                selected={
                  routeMatch?.params?.heroId == hero.id ? "selected" : null
                }
              />
            </Col>
          ))}
        </StyledHeroList>
      );
    case "Error":
      return (
        <Result
          status="error"
          title="Error"
          subTitle="Sorry, something went wrong."
        ></Result>
      );
    default:
  }
};

export default HeroListPage;
