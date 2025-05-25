import styled from "styled-components";


export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  font-size: 1rem;
  color: #333;  // Change text color here (dark gray)
  background-color: #fff;  // Ensure background is white or desired color
  
  &:focus {
    outline: none;
    border-color: #4f8a8b;  // Focus border color
  }
`;

export const ContactContainer = styled("div")`
  padding-bottom: 5rem;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;
