import { FC } from "react";
import { FaGlobe } from "react-icons/fa";
import { ExperienceType } from "../../data/Experience";
import styles from "../../styles/components/experienceCard.module.scss";
import { LinkButton } from "../LinkButton";
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
        <div className={styles.details}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{subtitle}</p>
          <p className={styles.date}>{props.date}</p>
        </div>
        {props.content.list.length > 0 && (
          <ul>
            {props.content.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        <div className={styles.buttons}>
          {props.website && (
            <>
              <LinkButton
                style={{ paddingBottom: 1 }}
                icon={<FaGlobe style={{ marginBottom: -2 }} />}
                label={"Visit"}
                className={styles.hosted}
                link={props.website}
              />
            </>
          )}
        </div>
        {props.content.tech.length > 0 && (
          <div className={styles.badges}>
            {props.content.tech.map((item) => (
              <span key={item}>{`${item}`}</span>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default ExperienceCard;
