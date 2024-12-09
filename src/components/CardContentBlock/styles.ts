import styled,{ keyframes } from "styled-components";

interface CardWrapperProps {
  width?: string;
  height?: string;
}

const zoomIn = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;


export const ContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const CardWrapper = styled("div")<CardWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease, opacity 0.3s ease;
  width: ${(props) => props.width || "300px"};
  height: ${(props) => props.height || "400px"};
  background-color: #fff;
  transform: scale(0.8); /* Default small size */
  opacity: 0; /* Hidden by default */

  &.visible {
    transform: scale(1);
    opacity: 1;
    animation: ${zoomIn} 0.5s ease-in-out;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;


export const CardTitleWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const CardTitle = styled("h6")`
  font-size: 20px;
  margin: 0;
  color: #000;
  text-transform: capitalize;
`;

export const CardText = styled("p")`
  font-size: 16px;
  margin: 20px 0;
  color: #666;
  line-height: 1.5;
`;

export const CardButton = styled("a")`
  background: ${(p) => p.color || "#102D4D"};
  color: ${(p) => (p.color ? "#102D4D" : "#fff")};
  font-size: 13px;
  font-weight: 700;
  width: 100%;
  border: 1px solid #edf3f5;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 100px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid #4072AF;
    background-color: #4072AF;
  }
`;

export const ButtonWrapper = styled("div")`
  margin-top: auto; /* Ensures the button is pushed to the bottom */
  display: flex;
  justify-content: center; /* Centers the button horizontally */
  margin-bottom: 20px; /* Adjust as needed for spacing between button and card */
`;

