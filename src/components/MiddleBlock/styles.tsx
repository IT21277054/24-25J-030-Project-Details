import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
 text-align: left;
  margin-bottom: 8px; /* reduce spacing */
  line-height: 1.5;
  text-align: justify;
`;

export const ContentWrapper = styled.div`
  max-width: 100%;
  padding: 0 1rem; /* Small horizontal padding */

  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;


export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top:7rem /* Less padding to reduce margin */
`;