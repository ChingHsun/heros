import { Row } from "antd";
import styled from "styled-components";
const StyledIndex = styled.div`
  font-size: 1.5rem;
  line-height: 2;
`;
const HeroIndex = ({ render }) => {
  return (
    <StyledIndex>
      <Row>{render}</Row>
    </StyledIndex>
  );
};

export default HeroIndex;
