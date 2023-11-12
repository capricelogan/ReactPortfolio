import { Box, Card } from '@mui/material';
import React from 'react';
import './portfolio.css';
import '../../stories/header.css';
import profileImage from '../../stories/assets/ColdInNY.png';
import { Button } from '../../components/Button';
import portfolioData from './portfolioData';

interface CardBoxProps {
  children: React.ReactNode;
}

const CardBox = ({ children }: CardBoxProps) => (
  <Box className="card-box">
    <Card elevation={3}>{children}</Card>
  </Box>
);

const Portfolio = () => {
  return (
    <div>
      <CardBox>
        <header className="storybook-header">
          {' '}
          <img src={profileImage} alt="Profile" className="profile-image" />
          {portfolioData.header.title}
        </header>
      </CardBox>
      <CardBox>
        <section id="about">
          <h2>{portfolioData.about.title}</h2>
          <p>{portfolioData.about.content}</p>
        </section>
      </CardBox>
      <CardBox>
        <section id="skills">
          <h2>Technical Toolkit</h2>

          <ul style={{ listStyleType: 'none', margin: '10px' }}>
            {portfolioData.skills.map(
              (skillCategory: { category: string; skills: string[] }) => {
                return (
                  <li key={skillCategory.category}>
                    <b>{skillCategory.category}:</b>
                    <ul
                      style={{
                        listStyleType: 'none',
                        marginTop: '5px',
                        marginBottom: '5px',
                        marginLeft: '-25px',
                      }}
                    >
                      {skillCategory.skills.map((skill: string) => {
                        return <li key={skill}>{skill}</li>;
                      })}
                    </ul>
                  </li>
                );
              }
            )}
          </ul>
          <p>
            <a href="https://capricelogan.github.io">
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button label="View Projects" />
              </Box>
            </a>
          </p>
        </section>
      </CardBox>
      <CardBox>
        <section id="contact">
          <h2>Contact</h2>
          <p>
            <a href="mailto:themichellelogan@gmail.com">
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button label="Email" />
              </Box>
            </a>
          </p>
          <p>
            <a href="www.linkedin.com/in/michelleloganmc">
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button label="LinkedIn" />
              </Box>
            </a>
          </p>
        </section>
      </CardBox>
    </div>
  );
};

export default Portfolio;
