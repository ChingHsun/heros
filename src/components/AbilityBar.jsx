import { Button, Row, Space, Statistic } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import styled from "styled-components";

const StyledBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  .ability {
    min-width: 50px;
    font-size: 1.2rem;
  }

  .points {
    min-width: 30px;
    font-size: 1.2rem;
    text-align: center;
  }

  button {
    border: 1px solid #00bea4;
    background: #00bea4;
    color: white;
    :hover,
    :focus {
      border: 1px solid #00bea4;
      color: #00bea4;
    }
  }
`;

const AbilityBar = ({ ability, points, onPlus, onMinus }) => {
  return (
    <StyledBar>
      <div className="ability">{ability.toUpperCase()}</div>
      <Button icon={<MinusOutlined />} onClick={onMinus}></Button>
      <div className="points">{points}</div>
      <Button icon={<PlusOutlined />} onClick={onPlus}></Button>
    </StyledBar>
  );
};

export default AbilityBar;
