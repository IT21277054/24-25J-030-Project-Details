import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { PngIcon, SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          {icon === "none" ? (
            ""
          ) : (
            <Col lg={11} md={11} sm={12} xs={24}>
              {(id === "projectIntro" || id === "product") ? (
               <PngIcon src={icon} width="100%" height="100%" />
              ) : ( <PngIcon src={icon} width="60%" height="60%" />)}
              

              {direction !== "right" && (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {typeof section === "object" &&
                      section.map(
                        (
                          item: {
                            title: string;
                            content: string;
                            icon: string;
                          },
                          id: number
                        ) => (
                          <Col key={id} span={11}>
                            <SvgIcon
                              src={item.icon}
                              width="60px"
                              height="60px"
                            />
                            <MinTitle>{t(item.title)}</MinTitle>
                            <MinPara>{t(item.content)}</MinPara>
                          </Col>
                        )
                      )}
                  </Row>
                </ServiceWrapper>
              )}
            </Col>
          )}

          <Col
            lg={icon === "none" ? 24 : 11}
            md={icon === "none" ? 24 : 11}
            sm={icon === "none" ? 24 : 11}
            xs={icon === "none" ? 24 : 24}
          >
            <ContentWrapper>
              <h6>{t(title)}</h6>
              {id === "projectIntro" ? (
                <MinPara>{t(content)}</MinPara>
              ) : (
                <Content>
                  {t(content)
                    .split("\n")
                    .filter((line) => line.trim() !== "")
                    .map((line, index) => (
                      <Content key={index}>{line}</Content>
                    ))}
                </Content>
              )}

              {direction === "right" && (
                <ButtonWrapper>
                  {typeof button === "object" &&
                    button.map(
                      (
                        item: {
                          color?: string;
                          title: string;
                        },
                        id: number
                      ) => (
                        <Button
                          key={id}
                          color={item.color}
                          onClick={() => scrollTo("about")}
                        >
                          {t(item.title)}
                        </Button>
                      )
                    )}
                </ButtonWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
