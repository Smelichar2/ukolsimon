
import React from 'react';
import { motion } from 'framer-motion';
import "./about.css";
import styled from "styled-components";
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
const About = () => {
    return (
        <div className="section">
            <div className="skills">
                <div className="skills-box">
                    <motion.div className="purple-box" whileHover={{ scale: 1.1 }}>
                        <a> <StyledPink style={{ fontSize: '60px' }}>&lt;</StyledPink>WEB DESIGN <StyledPink style={{ fontSize: '60px' }}>/&gt;</StyledPink></a>
                    </motion.div>
                    <motion.div className="purple-box" whileHover={{ scale: 1.1 }}>
                        <a> <StyledPink style={{ fontSize: '60px' }}>&lt;</StyledPink>CODING <StyledPink style={{ fontSize: '60px' }}>/&gt;</StyledPink></a>
                    </motion.div>
                </div>
                <motion.div
                    initial= {{scale: 1, opacity: 0, y: 70}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                    viewport={{once: false}}
                    className="skills-text"
                >
                    <h2><StyledPink style={{ fontSize: '60px' }}>&lt;</StyledPink>My name is Simon Melichar<StyledPink style={{ fontSize: '60px' }}>/&gt;</StyledPink></h2>
                    <div className="skills-text-more">
                        <p><p1>Lorem ipsum dolor</p1> sit amet, consectetuer <p3>adipiscing elit</p3>. Praesent in mauris eu tortor porttitor <p2>accumsan.</p2></p>
                        <p><p1>Lorem ipsum dolor</p1> sit amet, consectetuer <p3>adipiscing elit</p3>. Praesent in mauris eu tortor porttitor <p2>accumsan.</p2> Praesent in mauris eu tortor porttitor <p2>accumsan.</p2></p>
                        <p><p1>Lorem ipsum dolor</p1> sit amet, consectetuer <p3>adipiscing elit</p3>. Praesent in mauris eu tortor porttitor <p2>accumsan.</p2> Praesent in mauris eu tortor porttitor <p2>accumsan.</p2>Lorem ipsum dolor sit amet, consectetuer <p3>adipiscing elit</p3>.</p>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default About;