import { Carousel, Row } from "antd";
import { Slide } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { Container } from "../Block/styles";
import { ContentSection } from "../CardContentBlock/styles";
import { contentStyle } from "./styles";
import styled from "styled-components";

interface MiddleBlockProps {
  id: string;
  title: string;
  images: Array<{
    url: string;
  }>;
}

const ImageBlock = ({ title, id, images }: MiddleBlockProps) => {
  const StyledCarousel = styled(Carousel)`
    .slick-dots li button {
      background-color: rgb(0, 116, 248); /* Inactive pill color */
    }

    .slick-dots li.slick-active button {
      background-color: rgb(12, 14, 95); /* Active pill color */
    }
  `;

  return (
    <ContentSection id={id}>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <Container>
            <h6>{title}</h6>
          </Container>
        </Row>
        <div
          style={{
            borderRadius: 10,
            overflow: "hidden",
            width: "100%",
            margin: "0 auto",
          }}
        >
          {" "}
          <StyledCarousel autoplay>
            {images.map((image, index) => (
              <div key={index}>
                <div
                  style={{
                    ...contentStyle,
                    backgroundImage: `url('./img/icons/${image.url}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            ))}
          </StyledCarousel>
        </div>
      </Slide>
    </ContentSection>
  );
};

export default withTranslation()(ImageBlock);
