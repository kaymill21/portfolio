import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
  Over the past coule years I have learned essential skills, including Javascript, the React UI framework, Ruby, mySQL and git source control. I have also learned about Object Oriented Programming, REST, and Test Driven Development.

In September of 2022 I started an internship at a startup company. I got the opportunity to work solo and one-on-one designing features built out using Bootstrap as well as custom CSS/HTML to override the Bootstrap CSS.

In November of 2022 I started working for Ideatrek as a freelance Web designer. I work with clients all over the world to communicate with them about what needs fixing for their website (as in, re-designing, fixing coding errors) or building their desired website from scratch using WIX editor X. 

   As an employee I am hard working, and a team player. I am dependable, 
  determined to succeed and would work diligently to be an asset to your company. I am a 
fast learner and would be excited to learn whatever technologies are necessary for the job. 

      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
