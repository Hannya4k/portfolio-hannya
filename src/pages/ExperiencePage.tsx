import { motion } from "framer-motion";
import ExperienceCard from "../components/cards/ExperienceCard";
import { Experience } from "../data";
import styles from "../styles/pages/experience.module.scss";
import { useScramble } from "../hooks/useScramble";

const timelineVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: (i: number) => ({ opacity: 0, x: i % 2 === 0 ? -50 : 50 }),
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const ExperiencePage = () => {
  const header = useScramble("> whoami --experience", 100, 200);
  return (
    <section id="experience" className={styles.experience}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <div className={styles.wrapper}>
          <h3 className={styles.header}>{header}</h3>
          <motion.div
            className={styles.timeline}
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {Experience.map((item, index) => (
              <motion.div
                className={styles.timeline_item}
                key={`${item.title}-${index}`}
                variants={itemVariants}
                custom={index}
              >
                <div className={styles.timeline_dot} />
                <ExperienceCard
                  title={item.title}
                  subtitle={item.subtitle}
                  website={item.website}
                  date={item.date}
                  content={item.content}
                  scrambleDelay={index * 200}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperiencePage;
