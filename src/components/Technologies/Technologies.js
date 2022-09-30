import React from 'react';
import { DiFirebase, DiCode, DiReact, DiGoogleCloudPlatform, DiJqueryLogo } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    {/* <SectionText>
      Fluent in Frontend technologies
    </SectionText> */}
    <List>

    <ListItem>
        <DiCode size="3rem"/>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Fluent in Javascript/Typescript. Basic knowledge of Python and Bash shell scripting
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with ReactJS, Vue3, and basic jQuery.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiGoogleCloudPlatform size="3rem"/>
        <ListContainer>
          <ListTitle>AI Dialog Modelling</ListTitle>
          <ListParagraph>
            Experience with Google Dialogflow CX, basic knowledge of IBM Watson
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Basic experience with Express.JS, FastAPI, and Django.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      

    </List>
    </Section>
);

export default Technologies;
