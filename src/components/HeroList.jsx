import { Col, Result, Row, Skeleton } from "antd";
import { useEffect, useState } from "react";
import HeroCard from "./HeroCard.jsx";
import { getHeroList } from "../utils/api";

const HeroList = () => {
  const [heroList, setHeroList] = useState([]);
  const [ui, setUi] = useState("Loading");
  useEffect(() => {
    getHeroList()
      .then((resp) => {
        setHeroList(resp);
        setUi("OK");
      })
      .catch((err) => {
        setUi("Error");
        console.log(err);
      });
  }, []);
  switch (ui) {
    case "Loading":
      return <Skeleton />;
    case "OK":
      return (
        <Row gutter={[16, 16]} style={{ marginBottom: "50px" }}>
          {heroList?.map((hero) => (
            <Col xs={24} sm={12} md={6} key={hero.id}>
              <HeroCard id={hero.id} name={hero.name} image={hero.image} />
            </Col>
          ))}
        </Row>
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
      return <Skeleton />;
  }
};

export default HeroList;
