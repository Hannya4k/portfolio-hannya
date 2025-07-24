import { motion } from "framer-motion";
import ProjectCard from "../components/cards/ProjectCard";
import { Projects } from "../data";
import styles from "../styles/pages/projects.module.scss";
import { pageTransition, pageVariants } from "../utils/FramerAnimation";
import { useScramble } from "../hooks/useScramble";

const ProjectsPage = () => {
  const header = useScramble("> whoami --projects", 100, 200);
  return (
    <div className={styles.projects}>
      <motion.div
        initial="init"
        animate="anim"
        exit="last"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className={styles.wrapper}>
          <h3 className={styles.header}>{header}</h3>
          <div className={styles.projects_content}>
            {Projects.map((item, index) =>
              index % 2 === 0 ? (
                <div key={item.title}>
                  <ProjectCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    // gitHub={item.GitHub}
                    // hosted={item.hosted}
                  />
                </div>
              ) : (
                <div key={item.title}>
                  <ProjectCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    // gitHub={item.GitHub}
                    // hosted={item.hosted}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
