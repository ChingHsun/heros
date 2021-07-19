import { Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { memo } from "react";

const StyledBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 1.5rem;
  .ability {
    min-width: 80px;
    text-align: center;
  }
  .points {
    min-width: 30px;
    text-align: center;
  }
  button {
    border: 2px solid #910505;
    background: #910505;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    transition: transform 250ms ease;
    &:hover {
      border: 2px solid #910505;
      background: #910505;
      color: white;
      transform: scale(1.1);
    }
    &:focus {
      border: 2px solid #910505;
      color: #910505;
    }
    &:focus:hover {
      border: 2px solid #910505;
      color: #910505;
      background: white;
      transform: scale(1.1);
    }
  }
`;

// eslint-disable-next-line react/display-name
const AbilityBar = memo(({ ability, points, onPlus, onMinus }) => {
  return (
    <StyledBar>
      <div className="ability">{ability.toUpperCase()}</div>
      <Button icon={<MinusOutlined />} onClick={onMinus}></Button>
      <div className="points">{points}</div>
      <Button icon={<PlusOutlined />} onClick={onPlus}></Button>
    </StyledBar>
  );
});

export default AbilityBar;
