import { Link } from "react-router-dom";
import styled from "styled-components";
import { Card, Image, Skeleton } from "antd";
import Meta from "antd/lib/card/Meta";
import loadingImage from "../imgs/loadingImage.png";
const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  max-width: 267px;
  margin: 0 auto;
  border-bottom: 8px solid #00bea4;
`;
const StyledImage = styled.img`
  height: 267px;
  background: url(${loadingImage});
`;
const HeroCard = ({ id, name, image }) => {
  return (
    <StyledLink to={`/heroes/${id}`}>
      <Card hoverable cover={<StyledImage alt={name} src={image} />}>
        <Meta title={name} />
      </Card>
    </StyledLink>
  );
};

export default HeroCard;
