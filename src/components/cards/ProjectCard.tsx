import { FC } from "react";
import styles from "../../styles/components/projectCard.module.scss";
import { useScramble } from "../../hooks/useScramble";
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, image }) => {
  const name = useScramble(title, 100, 100);
  const what = useScramble(description, 100, 200);
  return (
    <div className={styles.projectCard}>
      <div className={styles.imagewrapper}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.content}>
        <h2>{name}</h2>
        <p>{what}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
