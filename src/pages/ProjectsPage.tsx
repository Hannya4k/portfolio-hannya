import { motion } from "framer-motion";
import ProjectCard from "../components/cards/ProjectCard";
import { Projects } from "../data";
import styles from "../styles/pages/projects.module.scss";
import { useScramble } from "../hooks/useScramble";

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const ProjectsPage = () => {
  const header = useScramble("> whoami --projects", 100, 200);
  return (
    <section id="projects" className={styles.projects}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <div className={styles.wrapper}>
          <h3 className={styles.header}>{header}</h3>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ProjectCard
              featured
              title={Projects[0].title}
              description={Projects[0].description}
              tech={Projects[0].tech}
              image={Projects[0].image}
            />
          </motion.div>
          <motion.div
            className={styles.projects_content}
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {Projects.slice(1).map((item) => (
              <motion.div key={item.title} variants={cardVariants}>
                <ProjectCard
                  title={item.title}
                  description={item.description}
                  tech={item.tech}
                  image={item.image}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsPage;
