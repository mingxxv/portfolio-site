import React from 'react';

import { Section, SectionText, SectionTitle, EmojiSectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Typical from 'react-typical';

const Hero = (props) => (
  <Section >
    <LeftSection>
      <EmojiSectionTitle>
        Hi, I'm Gordon!
       
      </EmojiSectionTitle>
      <SectionText>
        I'm {' '}
        <Typical
    steps={[
      "a Software Engineer 👨‍💻",
      1500,
      "a hardware hobbyist 🔧",
      1500,
      "an amateur guitarist 🎸",
      1500,
      "curious about web3 🚀",
      1500,
      "a photographer 📸",
      1500,
    ]}
    loop={Infinity}
    wrapper="span"
  />
      </SectionText>
      <Button onClick={() => window.location = 'mailto:gordon_mx@pm.me'}>
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;