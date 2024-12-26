import styled from "styled-components";

export const ContentSection = styled("section")`
  padding: 3rem 0;
`;

export const CardWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  text-align: center;
  background-color: #fff;
  position: relative;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const CardTitleWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  position: relative;
`;

export const CardTitle = styled("h6")`
  font-size: 18px;
  color: #333;
`;

export const CardText = styled("p")`
  font-size: 14px;
  color: #666;
`;

export const CardRoleText = styled("h6")`
  font-size: 14px;
  color: #666;
`;

export const AvatarWrapper = styled("div")`
  position: relative;
  margin-bottom: 10px;
`;

export const AvatarImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SocialIconsWrapper = styled("div")`
  display: flex;
  gap: 20px;
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 10;

  ${CardWrapper}:hover & {
    opacity: 1;
  }

  a {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    display: flex;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #DFF5FF;
    }
  }
`;

export const SocialIcon = styled("img")`
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;