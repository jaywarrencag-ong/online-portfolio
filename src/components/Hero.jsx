import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';

const phrases = [
  "applications.",
  "modern web solutions.",
  "embedded systems."
];

const Hero = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 1000); // pause at full word
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[220px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Warren</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I design and develop {text}
            <span className="blinking-cursor">|</span>
          </p>
        </div>
      </div>

      <div className="relative w-full h-full flex justify-end items-end pr-4 sm:pr-12">
        <div className="relative w-[250px] sm:w-[350px] md:w-[650px] lg:w-[550px] h-auto">
          <img
            src="/src/assets/hero.png"
            alt="Hero Side"
            className="w-full h-auto object-contain pointer-events-none select-none"
            draggable="false"
          />

          <motion.div 
            className="absolute top-1/4 right-[64%] z-10"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
          >
            <EarthCanvas />
          </motion.div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
              animate={{ y: [0, 24, 0] }} 
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} 
              className="w-3 h-3 rounded-full bg-secondary mb-1" 
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
