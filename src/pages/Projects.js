import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo1 from '../fotky/logo1.png';
import logo2 from '../fotky/logo2.png';
import logo3 from '../fotky/logo3.png';
import logo4 from '../fotky/logo4.png';
import "./projects.css"

const StyledPage = styled.div`
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.p`
  font-size: 50px;
  margin-top: 50px;
  color: #fff;
`;

const StyledRectangle = styled(motion.div)`
  background-color: #140B29;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-top: 200px;
`;

const StyledLogo = styled(motion.img)`
  max-width: 150px;
  max-height: 150px;
  margin: 0 50px;
  cursor: pointer;
`;

const StyledWhite = styled.span`
  color: #fff;
  font-size: 60px;
`;

const StyledGreen = styled(StyledWhite)`
  color: #35FF69;
`;

const StyledBlue = styled(StyledWhite)`
  color: #5F4BB6;
`;

const StyledPink = styled(StyledWhite)`
  color: #CF1259;
`;

const Projects = () => {
    const logos = [logo1, logo2, logo3, logo4];
    const [hoveredLogo, setHoveredLogo] = useState(null);

    const handleLogoHover = (index) => {
        setHoveredLogo(index);
    };

    const handleLogoLeave = () => {
        setHoveredLogo(null);
    };

    return (

        <StyledPage>
            <motion.div className="projects-info" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <StyledPink style={{ fontSize: '60px' }}>&lt;</StyledPink>
                <div style={{ lineHeight: '1.2', textAlign: 'center' }}>
                    <StyledBlue>Here </StyledBlue><StyledWhite>are some</StyledWhite><br />
                    <StyledWhite>of my </StyledWhite>
                    <StyledGreen>Projects  </StyledGreen>
                    <StyledPink style={{ fontSize: '60px' }}>/&gt;</StyledPink>
                </div>
            </motion.div>

            <StyledRectangle initial= {{scale: 1, opacity: 0, y: 70}}
                             whileInView={{opacity: 1, y: 0}}
                             transition={{duration: 1}}
                             viewport={{once: false}}>
                {logos.map((logo, index) => (
                    <StyledLogo
                        key={index}
                        src={logo}
                        alt={`logo${index + 1}.png`}
                        onMouseEnter={() => handleLogoHover(index)}
                        onMouseLeave={handleLogoLeave}
                        whileHover={{ scale: 1.2 }}
                        initial={{ scale: 1 }}
                    />
                ))}
            </StyledRectangle>
        </StyledPage>
    );
};

export default Projects;
