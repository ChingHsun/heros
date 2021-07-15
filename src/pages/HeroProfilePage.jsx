import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AbilityBar from "../components/AbilityBar.jsx";
import { getHeroProfile, updateHeroProfile } from "../utils/api";

const HeroProfilePage = () => {
  const { heroId } = useParams();
  const [abilities, setAbilities] = useState({});
  const [restPoints, setRestPoints] = useState(0);

  useEffect(() => {
    getHeroProfile(heroId)
      .then((resp) => {
        setAbilities(resp);
        setRestPoints(0);
      })
      .catch((err) => {
        console.log("er", err);
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
    }
  };

  const handlePlusPoint = ({ ability, points }) => {
    if (restPoints > 0) {
      setRestPoints((pre) => pre - 1);
      setAbilities({ ...abilities, [ability]: points + 1 });
    }
  };

  const handleMinusPoint = ({ ability, points }) => {
    if (points > 0) {
      setRestPoints((pre) => pre + 1);
      setAbilities({ ...abilities, [ability]: points - 1 });
    }
  };

  return (
    <>
      <div>
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
      </div>
      <div>
        <div> 剩餘點數：{restPoints}</div>

        <button onClick={onSave}>save</button>
      </div>
    </>
  );
};

export default HeroProfilePage;
