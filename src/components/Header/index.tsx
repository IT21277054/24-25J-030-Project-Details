import { useState, useEffect } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { PngIcon } from "../../common/SvgIcon";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const MenuItem = () => {
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
          screenShots: -20,
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
      setVisibility(false);
    };

    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <Span>{t("About")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("projectIntro")}>
          <Span>{t("Introduction")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("projectDoc")}>
          <Span>{t("Documents")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("projectPresentation")}>
          <Span>{t("Presentations")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("screenShots")}>
          <Span>{t("Screen Shots")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("milestone")}>
          <Span>{t("Milestone")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("domain")}>
          <Span>{t("Domain")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("imageBlock")}>
          <Span>{t("Group Images")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("profileCard")}>
          <Span>{t("Team")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("contact")}>
          <Span>{t("Contact")}</Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection className={scrolled ? "scrolled" : ""} scrolled={scrolled}>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <div style={{ padding: "5px" }}>
              <PngIcon src="logo6.png" width="50px" height="50px" />
            </div>
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
