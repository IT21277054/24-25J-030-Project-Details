import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { useEffect, useRef } from "react";
import { MiddleBlockSection, ContentWrapper } from "./styles";
import "./ProjectMilestones.scss";

interface MiddleBlockProps {
  id: string;
  title: string;
}

const ProjectMilestones = ({ title, id }: MiddleBlockProps) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const isElementInViewport = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const callbackFunc = () => {
    const items = timelineRef.current?.querySelectorAll("li") || [];
    items.forEach((item) => {
      const element = item as HTMLElement;
      if (isElementInViewport(element)) {
        element.classList.add("in-view");
      } else {
        element.classList.remove("in-view");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("load", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

    return () => {
      window.removeEventListener("load", callbackFunc);
      window.removeEventListener("scroll", callbackFunc);
    };
  }, []);

  return (
    <MiddleBlockSection id={id}>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{title}</h6>
              <section className="timeline" ref={timelineRef}>
                <ul>
                  <li>
                    <div>
                      <time>Aug 16th 2024</time>
                      <div className="discovery">
                        <h1>PROJECT PROPOSAL</h1>
                        <h2>
                          Showcase and the delivery of the project proposal.
                        </h2>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <time>Dec 4th 2024</time>
                      <div className="discovery">
                        <h1>PROGRESS PRESENTATION 1</h1>
                        <h2>
                          Showcase of the actual features with an estimated
                          implementation of 50%.
                        </h2>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <time>Mar 18th 2025</time>
                      <div className="discovery">
                        <h1>PROGRESS PRESENTATION 2</h1>
                        <h2>
                          Showcase of the actual features with an estimated
                          implementation of 90%.
                        </h2>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <time>May 26th 2025</time>
                      <div className="discovery">
                        <h1>FINAL ASSESSMENT</h1>
                        <h2>Showcase of the final product.</h2>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <time>May 26th 2025</time>
                      <div className="discovery">
                        <h1>Final Viva</h1>
                        <h2>Showcase of the final product.</h2>
                      </div>
                    </div>
                  </li>
                </ul>
              </section>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(ProjectMilestones);
