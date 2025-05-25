import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
  IconBackground,
} from "./styles";
import { ContentBlockProps } from "../ContentBlock/types";
import Header from "../Header";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps & { t: TFunction }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ContentSection>
      <Header />
      <StyledRow justify="center" align="middle" id={id} direction={direction}>
        <Col span={24}>
          <IconBackground icon={icon}>
            <ContentWrapper>
              <h6 style={{ color: "white" }}>{t(title)}</h6>
              {id === "projectIntro" ? (
                <MinPara>{t(content)}</MinPara>
              ) : (
                <Content>{t(content)}</Content>
              )}

              {direction === "right" ? (
                <ButtonWrapper>
                  {Array.isArray(button) &&
                    button.map(({ color, title }, index) => (
                      <Button
                        key={index}
                        color={color}
                        onClick={() => scrollTo("about")}
                      >
                        {t(title)}
                      </Button>
                    ))}
                </ButtonWrapper>
              ) : (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {Array.isArray(section) &&
                      section.map(({ title, content, icon }, index) => (
                        <Col key={index} span={11}>
                          <MinTitle>{t(title)}</MinTitle>
                          <MinPara>{t(content)}</MinPara>
                        </Col>
                      ))}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </IconBackground>
        </Col>
      </StyledRow>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
