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

const ProjectDomain = ({ title, id, details }: MiddleBlockProps) => {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
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
  );
};

export default withTranslation()(ProjectDomain);
