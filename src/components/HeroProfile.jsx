import { Alert, Button, Col, message, Row, Skeleton, Statistic } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import AbilityBar from "./AbilityBar.jsx";
import { getHeroProfile, updateHeroProfile } from "../utils/api";
import HeroIndex from "./HeroIndex.jsx";

const StyledSavedArea = styled.div`
  display: ${(props) => (props.xs ? "block" : "flex")};
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
  .rest {
    font-size: 1.2rem;

    margin-bottom: 10px;
    span {
      display: inline-block;

      font-size: 1.5rem;
      min-width: 100px;
    }
  }
`;

const StyledButton = styled(Button)`
  background: #fa8b00;
  border: 1px solid #fa8b00;
  color: white;
  border-radius: 5px;
  width: 100%;
  font-size: 1.5rem;
  height: auto;
  :hover,
  :focus {
    border: 1px solid #fa8b00;
    color: #fa8b00;
  }
`;

const HeroProfile = () => {
  const { heroId } = useParams();
  const [abilities, setAbilities] = useState({});
  const [restPoints, setRestPoints] = useState(0);
  const [ui, setUi] = useState("Loading");
  const { xs, sm, md, lg } = useBreakpoint();
  useEffect(() => {
    setUi("Loading");
    getHeroProfile(heroId)
      .then((resp) => {
        setAbilities(resp);
        setRestPoints(0);
        setUi("OK");
      })
      .catch((err) => {
        console.log("er", err);
        setUi("Error");
      });
  }, [heroId]);

  const onSave = () => {
    console.log("onSave");
    if (restPoints === 0) {
      updateHeroProfile(heroId, abilities)
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => {
          console.log("err", err);
        });
    } else {
      message.error("剩餘點數必須為零");
    }
  };

  const handlePlusPoint = ({ ability, points }) => {
    if (restPoints > 0) {
      setRestPoints((pre) => pre - 1);
      setAbilities({ ...abilities, [ability]: points + 1 });
    } else {
      message.error("你沒有剩餘點數喔ＱＱ");
    }
  };

  const handleMinusPoint = ({ ability, points }) => {
    if (points > 0) {
      setRestPoints((pre) => pre + 1);
      setAbilities({ ...abilities, [ability]: points - 1 });
    } else {
      message.error("點數不得為負");
    }
  };
  switch (ui) {
    case "Loading":
      return <Skeleton />;
    case "OK":
      return (
        <>
          <Row>
            <Col xs={24} sm={12}>
              {Object.entries(abilities).map(([ability, points]) => {
                return (
                  <AbilityBar
                    key={ability}
                    ability={ability}
                    points={points}
                    onPlus={() => handlePlusPoint({ ability, points })}
                    onMinus={() => handleMinusPoint({ ability, points })}
                  ></AbilityBar>
                );
              })}
            </Col>
            <Col xs={24} sm={12}>
              <StyledSavedArea xs={xs}>
                <div>
                  <div className="rest">
                    剩餘點數：
                    <span> {restPoints}</span>
                  </div>
                  <div>
                    <StyledButton onClick={onSave}>儲存</StyledButton>
                  </div>
                </div>
              </StyledSavedArea>
            </Col>
          </Row>
        </>
      );
    case "Error":
      return (
        <HeroIndex
          render={
            <>
              Sorry! <br /> Could Not Find Hero Profile At Index {heroId}.
            </>
          }
        />
      );

    default:
      return <Skeleton />;
  }
};

export default HeroProfile;
