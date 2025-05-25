import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import {
  FooterSection,
  Title,
  Language,
  Para,
  Extra,
  NavLink,
  LogoContainer,
  Chat,
  Large,
} from "./styles";
import { CustomNavLinkSmall } from "../Header/styles";

const Footer = ({ t }: { t: TFunction }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      const offsets: { [key: string]: number } = {
        about: 150,
        projectIntro: 150,
        projectDoc: -10,
        projectPresentation: -10,
        milestone: 40,
        domain: 50,
        imageBlock: 5,
        profileCard: 100,
        contact: 100,
      };

      const offset = offsets[id] || 100;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const MenuItem = () => {
    return (
      <ul>
        <li>
          <Title>{t("Research Project")}</Title>
          <Para onClick={() => scrollTo("about")}>{t("About")}</Para>
        </li>
        <li>
          <Para onClick={() => scrollTo("projectIntro")}>
            {t("Introduction")}
          </Para>
        </li>
        <li>
          <Para onClick={() => scrollTo("projectDoc")}>{t("Documents")}</Para>
        </li>
        <li>
          <Para onClick={() => scrollTo("projectPresentation")}>
            {t("Presentations")}
          </Para>
        </li>
        <li>
          <Para onClick={() => scrollTo("milestone")}>{t("Milestone")}</Para>
        </li>
        <li>
          <Para onClick={() => scrollTo("domain")}>{t("Domain")}</Para>
        </li>
        <li>
          <Para onClick={() => scrollTo("imageBlock")}>
            {t("Group Images")}
          </Para>
        </li>
        <li>
          <Para onClick={() => scrollTo("profileCard")}>{t("Team")}</Para>
        </li>
        <li>
          <Para onClick={() => scrollTo("contact")}>{t("Contact")}</Para>
        </li>
      </ul>
    );
  };

  return (
    <FooterSection>
      <Container>
        <Row gutter={[32, 16]} justify="space-between">
          <Col lg={10} md={10} sm={24} xs={24}>
            <Language>{t("Contact")}</Language>
            <Large to="/">{t("Tell us everything")}</Large>
            <Para>
              {t("Do you have any question? Feel free to reach out.")}
            </Para>
            <a href="mailto:kaveeshakarunasena@gmail.com">
              <Chat>{t("Let's Chat")}</Chat>
            </a>
          </Col>

          <Col lg={8} md={8} sm={24} xs={24}>
            <Title>{t("Research Project")}</Title>
            <Para>{t("Water Quality Management System")}</Para>
          </Col>

          <Col lg={6} md={6} sm={24} xs={24}>
            <Language>{t("Institution")}</Language>
            <Para>{t("Sri Lanka Institute of Information Technology")}</Para>
          </Col>
        </Row>

        <Row gutter={[32, 16]} justify="space-between">
          <Col lg={10} md={10} sm={24} xs={24}>
            <Language>{t("Our Team")}</Language>
            <Para>
              <a
                href="https://www.linkedin.com/in/shamry-shiraz-0b80b21a9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgIcon src="linkedin.svg" width="20px" height="20px" />
              </a>
              <a
                href="mailto:shamryshiraz@gmail.com"
                style={{ marginLeft: "8px" }}
              >
                Shamry Shiraz
              </a>
            </Para>
            <Para>
              <a
                href="https://www.linkedin.com/in/kaveesha-karunasena/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgIcon src="linkedin.svg" width="20px" height="20px" />
              </a>
              <a
                href="mailto:kaveeshalankeshwara2001@gmail.com"
                style={{ marginLeft: "8px" }}
              >
                Kaveesha Karunasena
              </a>
            </Para>
            <Para>
              <a
                href="https://www.linkedin.com/in/hansani-mudelige-2a7776275/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgIcon src="linkedin.svg" width="20px" height="20px" />
              </a>
              <a
                href="mailto:hansanimu00@gmail.com"
                style={{ marginLeft: "8px" }}
              >
                Hansani Mudalige
              </a>
            </Para>
            <Para>
              <a
                href="https://www.linkedin.com/in/oshadhi-anjana-kumarasinghe-a784aa213/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgIcon src="linkedin.svg" width="20px" height="20px" />
              </a>
              <a
                href="mailto:oshadhianjana@gmail.com"
                style={{ marginLeft: "8px" }}
              >
                Oshadhi Kumrasighe
              </a>
            </Para>
          </Col>

          <Col lg={14} md={8} sm={10} xs={10}>
            <MenuItem />
          </Col>
        </Row>
      </Container>
    </FooterSection>
  );
};

export default withTranslation()(Footer);
