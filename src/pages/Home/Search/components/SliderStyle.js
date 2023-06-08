import { styled } from "styled-components";

export const SCInput = styled.input`
  height: 8px;
  width: 100%;
  cursor: pointer;
  appearance: none;
  border-radius: 20px;

  &::-webkit-slider-thumb {
    appearance: none;
    margin-top: -6px;
    background-color: #1b1b1b;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 5px solid #ffd05d;
  }

  &::-webkit-slider-runnable-track {
    background-image: ${(props) => {
      const value = parseInt(props.value);
      const endPoint = (100 / 12).toFixed(1) * (value - 3);
      return `linear-gradient(to right, #ff5c01 0%, #ffd25f ${endPoint}%, 0, rgba(255, 255, 255, 0.5) 100%);`;
    }};
    margin-top: -15px;
    height: 8px;
    width: 100%;
    border-radius: 20px;
  }
`;
