import { Link } from "react-router-dom";
import styled from "styled-components";
import React, { memo } from "react";
const StyledHeroCard = styled(Link)`
  display: block;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  text-decoration: none;
  color: ${(props) => (props.selected ? "#ffffff" : "#000000")};
  * {
    transition: all 1s ease, color 1ms;
  }
  .card {
    padding: 10%;
    width: 100%;
    background: ${(props) => (props.selected ? "#910505" : "#ffffff")};
    border-radius: 10px;
    img {
      width: 100%;
      aspect-ratio: 1;
      border-radius: 10px;
      filter: ${(props) =>
        props.selected ? "brightness(100%)" : "brightness(50%)"};
    }
    .name {
      text-align: center;
      margin-top: 30px;
      font-size: 1.5rem;
    }
  }
  &:hover {
    color: white;
    .card {
      background: ${(props) =>
        props.selected ? "rgba(187, 5, 5, 0.5)" : "rgba(100, 100, 100, 0.5)"};
      img {
        filter: brightness(100%);
        transform: scale(1.1);
      }
    }
  }
`;

const HeroCard = memo(({ id, name, image, selected }) => {
  return (
    <StyledHeroCard to={`/heroes/${id}`} selected={selected}>
      <div className="card">
        <img alt={name} src={image} />
        <div className="name">{name}</div>
      </div>
    </StyledHeroCard>
  );
});

export default HeroCard;
