import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Fade, Zoom } from "react-awesome-reveal";
import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { PngIconDoc, SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  CardWrapper,
  CardTitleWrapper,
  CardTitle,
  CardText,
  CardButton,
  ButtonWrapper,
} from "./styles";

interface CardContentBlockProps {
  id: string;
  title: string;
  cards: Array<{
    title: string;
    text: string;
    icon: string;
    button: {
      title: string;
      url: string;
    };
  }>;
  t: TFunction;
  direction: "left" | "right";
}

const CardContentBlock = ({
  title,
  cards,
  t,
  direction,
  id,
}: CardContentBlockProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    console.log("In view:", inView);
  }, [inView]);

  return (
    <ContentSection ref={ref} id={id}>
      <Zoom duration={1000} delay={300} triggerOnce>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>{t(title)}</h2>
          <Row
            gutter={[16, 16]}
            justify="center" // Centering columns inside the row
            style={{ maxWidth: "1200px", width: "100%" }} // Optional: to limit row width
          >
            {cards.map((card, index) => (
              <Col key={index} xs={24} sm={12} md={8}>
                <CardWrapper
                  width="350px"
                  height="400px"
                  style={{
                    animation: inView ? "zoomIn 0.5s ease-in-out" : "none",
                    opacity: inView ? 1 : 0,
                  }}
                >
                  <CardTitleWrapper>
                    <CardTitle>{t(card.title)}</CardTitle>
                    <PngIconDoc src={card.icon} width="80px" height="80px" />
                  </CardTitleWrapper>
                  <CardText>{t(card.text)}</CardText>
                  <ButtonWrapper>
                    <CardButton href={card.button.url}>
                      {t(card.button.title)}
                    </CardButton>
                  </ButtonWrapper>
                </CardWrapper>
              </Col>
            ))}
          </Row>
        </div>
      </Zoom>
    </ContentSection>
  );
};

export default withTranslation()(CardContentBlock);
