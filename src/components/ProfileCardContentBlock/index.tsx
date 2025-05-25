import React from "react";
import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { PngIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  CardWrapper,
  CardTitleWrapper,
  CardTitle,
  CardText,
  SocialIconsWrapper,
  AvatarWrapper,
  CardRoleText,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface ProfileCardContentBlockProps {
  id: string;
  title: string;
  cards: Array<{
    name: string;
    role: string;
    designation: string;
    socialLinks: {
      email: string;
      linkedin: string;
      twitter?: string;
      facebook: string;
    };
    avatar: string;
  }>;
  t: TFunction;
}

const ProfileCardContentBlock = ({
  title,
  cards,
  t,
  id,
}: ProfileCardContentBlockProps) => {
  return (
    <ContentSection id={id}>
      <h2>{t(title)}</h2>
      <Row gutter={[16, 16]} justify="center">
        {cards.map((card, index) => (
          <Col key={index} xs={24} sm={12} md={6}>
            <CardWrapper>
              <CardTitleWrapper>
                <AvatarWrapper>
                  <PngIcon src={card.avatar} width="100%" height="100%" />
                  <SocialIconsWrapper>
                    <a
                      href={`mailto:${card.socialLinks.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Email"
                    >
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{ fontSize: "20px" }}
                        color="#6e6e6e"
                      />
                    </a>
                    <a
                      href={card.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{ fontSize: "20px" }}
                        color="#0a528a"
                      />
                    </a>
                    {card.socialLinks.twitter && (
                      <a
                        href={card.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                      >
                        <FontAwesomeIcon
                          icon={faTwitter}
                          style={{ fontSize: "20px" }}
                          color="#74C0FC"
                        />
                      </a>
                    )}
                    <a
                      href={card.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <FontAwesomeIcon
                        icon={faFacebook}
                        style={{ fontSize: "20px" }}
                        color="#316FF6"
                      />
                    </a>
                  </SocialIconsWrapper>
                </AvatarWrapper>
                <CardTitle>{card.name}</CardTitle>
                <CardRoleText>{card.role}</CardRoleText>
                <CardText>{card.designation}</CardText>
              </CardTitleWrapper>
            </CardWrapper>
          </Col>
        ))}
      </Row>
    </ContentSection>
  );
};

export default withTranslation()(ProfileCardContentBlock);
