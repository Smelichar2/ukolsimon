import React from 'react';
import { motion } from 'framer-motion';
import fotka from '../fotky/foteckak.JPG';
import "./home.css"

const Home = () => {
    return (

            <div className="landscape">
                <motion.div
                    initial= {{scale: 1, opacity: 0, y: 40, }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                    viewport={{once: false}}
                >

                    <div className="hero">
                        <img src={fotka}/>

                        <p><p1>Lorem ipsum dolors </p1>sit amet, consectetuer <p2>adipiscing elit</p2>. Praesent in mauris eu tortor porttitor <p3>accumsan</p3>.</p>
                    </div>
                </motion.div>
                <div className="stats-info">
                    <div className="stat1">
                        <a>25+</a>
                        <p>Projects to do </p>

                        <p1>&lt;currently working on/&gt;</p1>
                    </div>
                    <div className="stat2">
                        <a>55+</a>
                        <p>Projects</p><p1> Done</p1>
                    </div>
                    <div className="stat3">
                        <a>10</a>
                        <p>Years of</p><p1>experience</p1>
                    </div>
                </div>
            </div>

    );
};

export default Home;