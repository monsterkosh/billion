import React from 'react';
import { Button, Container } from '../../globalStyles';
import {
  InfoColumn,
  InfoRow,
  TextWrapper,
  InfoSec,
  TopLine,
  Heading,
  Subtitle,
} from './InfoSection.elements';
import { Link } from 'react-router-dom';

const InfoSection = ({
  primary,
  lighBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  buttonLabel,
  description,
  headline,
  topLine,
}) => {
  return (
    <>
      <InfoSec lighBg={lighBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to='/sign-up'>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
