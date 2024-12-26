import React from 'react';
import { Row, Col } from 'antd';
import {Zoom} from 'react-awesome-reveal';
import { withTranslation, TFunction } from 'react-i18next';
import { PngIcon, SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  CardWrapper,
  CardTitleWrapper,
  CardTitle,
  CardText,
  SocialIconsWrapper,
  SocialIcon,
  AvatarWrapper,
  AvatarImage,
  CardRoleText
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface ProfileCardContentBlockProps {
    id:string;
  title: string;
  cards: Array<{
    name: string;
    role: string;
    designation:string;
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

const ProfileCardContentBlock = ({ title, cards, t, id}: ProfileCardContentBlockProps) => {
  return (
    <ContentSection id ={id}>
     {/* <Zoom duration={1000} delay={300} triggerOnce> */}
      <h2>{t(title)}</h2>
      <Row gutter={[16, 16]}>
        {cards.map((card, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <CardWrapper>
              <CardTitleWrapper>
                <AvatarWrapper>
                    <PngIcon src={card.avatar} width="100%" height="100%" />
                  <SocialIconsWrapper>
                    <a href={card.socialLinks.email} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon  icon={faEnvelope} style={{ fontSize: '20px' }} color="#6e6e6e"/>
                    </a>
                    <a href={card.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon  icon={faLinkedin} style={{ fontSize: '20px' }} color="#0a528a"/>
                    </a>
                    {card.socialLinks.twitter && (
                      <a href={card.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon  icon={faTwitter} style={{ fontSize: '20px' }}color="#74C0FC"/>
                      </a>
                    )}
                    <a href={card.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon  icon={faFacebook}  style={{ fontSize: '20px' }}  color="#316FF6"/>
                    </a>
                  </SocialIconsWrapper>
                </AvatarWrapper>
              </CardTitleWrapper>
              <CardTitle>{t(card.name)}</CardTitle>
              <CardRoleText>{t(card.role)}</CardRoleText>
              <CardText>{t(card.designation)}</CardText>
            </CardWrapper>
          </Col>
        ))}
      </Row>
      {/* </Zoom> */}
    </ContentSection>
  );
};

export default withTranslation()(ProfileCardContentBlock);
