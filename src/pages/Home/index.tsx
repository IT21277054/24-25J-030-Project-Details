import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import ProjectIntroContent from "../../content/ProjectIntroContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import ProjectDocContetnt from "../../content/ProjectDocContetnt.json";
import ProjectPresentationContent from "../../content/ProjectPresentationContent.json";
import ProfieCardContent from "../../content/ProfileCardContent.json"

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const CardContentBlock = lazy(() => import("../../components/CardContentBlock"))
const ProfileCardContentBlock = lazy(() => import("../../components/ProfileCardContentBlock"))

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={ProjectIntroContent.title}
        content={ProjectIntroContent.text}
        icon="product-launch.svg"
        id="projectIntro"
      />
      <CardContentBlock
       direction="left"
        title={ProjectDocContetnt.title}
        cards={ProjectDocContetnt.cards}
        id ="projectDoc"
      />
       <CardContentBlock
        direction="right"
        title={ProjectPresentationContent.title}
        cards={ProjectPresentationContent.cards}
        id ="projectPresentation"
      />
      <ProfileCardContentBlock
        title={ProfieCardContent.title}
        cards={ProfieCardContent.cards}
        id ="profileCard"
      />
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
