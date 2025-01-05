import { Carousel, Row } from "antd";
import { Slide } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { Container } from "../Block/styles";
import { MiddleBlockSection } from "../MiddleBlock/styles";
import { ContentSection } from "../CardContentBlock/styles";
import { contentStyle } from "./styles";

interface MiddleBlockProps {
  id: string;
  title: string;
  images: Array<{
    url: string;
  }>;
}

const ImageBlock = ({ title, id, images }: MiddleBlockProps) => {
  return (
    <ContentSection id={id}>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <Container>
            <h6>{title}</h6>
          </Container>
        </Row>
        <div style={{ borderRadius: 10, overflow: "hidden" }}>
          {" "}
          <Carousel autoplay>
            {images.map((image, index) => (
              <div key={index}>
                <div
                  style={{
                    ...contentStyle,
                    backgroundImage: `url('/img/icons/${image.url}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            ))}
          </Carousel>
        </div>
      </Slide>
    </ContentSection>
  );
};

export default withTranslation()(ImageBlock);
