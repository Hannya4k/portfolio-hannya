import { FC } from "react";
import { ExperienceType } from "../../data/Experience";
import styles from "../../styles/components/experienceCard.module.scss";
import { useScramble } from "../../hooks/useScramble";

interface ExperienceCardProps extends ExperienceType {
  scrambleDelay?: number;
}

const ExperienceCard: FC<ExperienceCardProps> = (props) => {
  const title = useScramble(props.title, 100, 100);
  const subtitle = useScramble(props.subtitle, 100, 200);
  return (
    <div className={styles.expcard}>
      <section>
        <div className={styles.card_header}>
          <p className={styles.title}>{title}</p>
          <p className={styles.date}>{props.date}</p>
        </div>
        <div className={styles.meta}>
          <p className={styles.subtitle}>{subtitle}</p>
          {props.website && (
            <a
              href={props.website}
              target="_blank"
              rel="noreferrer"
              className={styles.visit}
            >
              Visit ↗
            </a>
          )}
        </div>
        {props.content.list.length > 0 && (
          <ul>
            {props.content.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {props.content.tech.length > 0 && (
          <div className={styles.badges}>
            {props.content.tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default ExperienceCard;
