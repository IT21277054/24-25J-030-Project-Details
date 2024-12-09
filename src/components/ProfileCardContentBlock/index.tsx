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
  AvatarImage
} from './styles';

interface ProfileCardContentBlockProps {
    id:string;
  title: string;
  cards: Array<{
    name: string;
    role: string;
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

const ProfileCardContentBlock = ({ title, cards, t }: ProfileCardContentBlockProps) => {
  return (
    <ContentSection>
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
                      <SvgIcon src="github.svg" width="30px" height="30px" />
                    </a>
                    <a href={card.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <SvgIcon src="linkedin.svg" width="30px" height="30px" />
                    </a>
                    {card.socialLinks.twitter && (
                      <a href={card.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                        <SvgIcon src="twitter.svg" width="30px" height="30px" />
                      </a>
                    )}
                    <a href={card.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                      <SvgIcon src="twitter.svg" width="30px" height="30px" />
                    </a>
                  </SocialIconsWrapper>
                </AvatarWrapper>
                <CardTitle>{t(card.name)}</CardTitle>
                <CardText>{t(card.role)}</CardText>
              </CardTitleWrapper>
            </CardWrapper>
          </Col>
        ))}
      </Row>
      {/* </Zoom> */}
    </ContentSection>
  );
};

export default withTranslation()(ProfileCardContentBlock);
