import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 0;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const IconBackground = styled.div<{ icon: string }>`
  background-image: url(${({ icon }) => `./img/svg/${icon}`});
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
  position: relative;
  width: 101%;
  height: 100%;
  min-height: 700px;

  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;

  & > div {
    position: relative;
    z-index: 2;
    max-width: 60%;
    padding: 6rem;
    margin-top: auto;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    min-height: 400px;
  }
`;

export const ContentWrapper = styled("div")`
  position: relative;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const StyledRow = styled(Row)`
  display: flex;
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  color: #fff;
  line-height: 1.6;
`;

export const MinTitle = styled("h2")`
  font-size: 13px;
  line-height: 1rem;
  padding: 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 17px;
  text-align: justify;
  margin: 0;
  color: #fff;
`;

export const AboutContent = styled("p")`
  margin: 1.5rem 0 2rem 0;
  color: #fff;
  line-height: 1.6;
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;
