import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper, ImageWrapper } from "./styles";
import { PngIcon, SvgIcon } from "../../common/SvgIcon"

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: TFunction;
  icon:string
}

const MiddleBlock = ({ title, content, button, t, icon }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - 150,
        behavior: "smooth",
      });
    }
  };

  return (
   <MiddleBlockSection>
  <Slide direction="up" triggerOnce>
    <Row align="middle" gutter={[16, 16]}>
      {/* Content FIRST */}
      <Col lg={12} md={24} sm={24} xs={24}>
        <ContentWrapper>
          <h6>{t(title)
  .split("\n")
  .filter(line => line.trim() !== "")
  .map((line, index) => (
    <h6 key={index}>{line}</h6>
))}</h6>
          {t(content)
            .split("\n")
            .filter((line) => line.trim() !== "")
            .map((line, index) => (
              <Content key={index}>{line}</Content>
            ))}
          {/* Uncomment if button needed */}
          {/* {button && (
            <Button name="submit" onClick={() => scrollTo("projectIntro")}>
              {t(button)}
            </Button>
          )} */}
        </ContentWrapper>
      </Col>

      {/* Image SECOND */}
      <Col lg={12} md={24} sm={24} xs={24}>
        <ImageWrapper>
          <PngIcon src={icon} width="100%" height="100%" />
        </ImageWrapper>
      </Col>
    </Row>
  </Slide>
</MiddleBlockSection>


  );
};

export default withTranslation()(MiddleBlock);
