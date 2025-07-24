import { motion } from "framer-motion";
import ExperienceCard from "../components/cards/ExperienceCard";
import { Experience } from "../data";
import styles from "../styles/pages/experience.module.scss";
import { pageTransition, pageVariants } from "../utils/FramerAnimation";
import { useScramble } from "../hooks/useScramble";

const ExperiencePage = () => {
  const header = useScramble("> whoami --experience", 100, 200);
  return (
    <div className={styles.experience}>
      <motion.div
        initial="init"
        animate="anim"
        exit="last"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className={styles.wrapper}>
          <h3 className={styles.header}>{header}</h3>
          <iframe
            src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=4640638"
            style={{ border: "none", width: "100%", height: "100px" }}
          ></iframe>
          {Experience.map((item, index) => (
            <ExperienceCard
              key={`${item.title}-${index}`}
              title={item.title}
              subtitle={item.subtitle}
              website={item.website}
              date={item.date}
              content={item.content}
              scrambleDelay={index * 200}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ExperiencePage;
