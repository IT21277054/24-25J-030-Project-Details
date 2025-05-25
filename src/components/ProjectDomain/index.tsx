import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { useState } from "react";
import { ContentWrapper, MiddleBlockSection } from "./styles";
import { Container } from "../Block/styles";
import "./ProjectDomain.scss";

interface MiddleBlockProps {
  id: string;
  title: string;
  details: Array<{
    title: string;
    content: string;
  }>;
}

const logos = [
  {
    src: "https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png",
    alt: "React",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg",
    alt: "Spring",
  },
  {
    src: "https://blog.desdelinux.net/wp-content/uploads/2023/06/SQL.png",
    alt: "SQL",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-OMrt3EwbCypP0TaPYChn1QGcfCRwVEUZ1w",
    alt: "Twilio",
  },
  {
    src: "https://allvectorlogo.com/img/2021/12/github-logo-vector.png",
    alt: "GitHub",
  },
];

const ProjectDomain = ({ title, id, details }: MiddleBlockProps) => {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <>
      {" "}
      <MiddleBlockSection id={id}>
        <Slide direction="up" triggerOnce>
          <Row justify="center" align="middle">
            <Container>
              <h6>{title}</h6>
              <div className="container">
                <div className="tabs">
                  {details.map((tab, index) => (
                    <div key={index}>
                      <input
                        type="radio"
                        id={`radio-${index + 1}`}
                        name="tabs"
                        checked={activeTab === index + 1}
                        onChange={() => setActiveTab(index + 1)}
                      />
                      <label className="tab" htmlFor={`radio-${index + 1}`}>
                        {tab.title}
                      </label>
                    </div>
                  ))}
                  <span
                    className="glider"
                    style={{
                      transform: `translateX(${(activeTab - 1) * 100}%)`,
                    }}
                  />
                </div>
              </div>
            </Container>
            <div className="tab-content">
              <div className="content-box">
                <div
                  dangerouslySetInnerHTML={{
                    __html: details[activeTab - 1].content,
                  }}
                />
              </div>
            </div>
          </Row>
        </Slide>
      </MiddleBlockSection>
      <div className="slider-container">
        <div className="slider-track">
          {[...logos, ...logos].map((logo, index) => (
            <div
              className={`logo ${
                logo.alt === "React" || logo.alt === "GitHub" ? "large" : ""
              }`}
              key={index}
            >
              <img src={logo.src} alt={`${logo.alt} Logo`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default withTranslation()(ProjectDomain);
