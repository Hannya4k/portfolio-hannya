import { FC } from "react";
import styles from "../../styles/components/projectCard.module.scss";
import { useScramble } from "../../hooks/useScramble";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  featured?: boolean;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, tech, image, featured = false }) => {
  const name = useScramble(title, 100, 100);
  const what = useScramble(description, 100, 200);
  return (
    <div className={`${styles.projectCard} ${featured ? styles.featured : ''}`}>
      <div className={styles.imagewrapper}>
        <img src={image} alt={title} />
        <div className={styles.hover_overlay}>
          <span>[ view ]</span>
        </div>
      </div>
      <div className={styles.content}>
        <h2>{name}</h2>
        <p>{what}</p>
        <div className={styles.tech}>
          {tech.map((t) => <span key={t}>{t}</span>)}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
