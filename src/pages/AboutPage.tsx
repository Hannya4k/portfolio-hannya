import { FaMapMarkerAlt } from "react-icons/fa";
import { About, Skills } from "../data";
import styles from "../styles/pages/about.module.scss";
import { useScramble } from "../hooks/useScramble";

const AboutPage = () => {
  const fullname = useScramble(`${About.firstName}  ${About.lastName}`, 100, 100);
  const header = useScramble("> whoami");
  const location = useScramble("Somewhere in PH", 300, 200);
  const skills = useScramble("What I work with", 110, 100);
  const description = useScramble(About.description, 50, 100);
  const offer = useScramble(About.offer, 50, 100);
  return (
    <section id="about" className={styles.about}>
      <div className={styles.about_inner}>
        <h3 className={styles.header}>{header}</h3>
        <div className={styles.about_grid}>
          <div className={styles.about_container}>
            <h2 className={styles.name}>{fullname}</h2>
            <span className={styles.location}>
              <FaMapMarkerAlt style={{ marginRight: "0.4em" }} />
              {location}
            </span>
            <h3 className={styles.description}>{description}</h3>
            <h3 className={styles.description}>{offer}</h3>
          </div>
          <div className={styles.linksWrapper}>
            <h2 className={styles.skills_header}>{skills}</h2>
            <div className={styles.skills_grid}>
              {Skills.map((item) => (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  key={item.name}
                  className={styles.skill_item}
                >
                  <span className={styles.skill_icon}>{item.icon}</span>
                  <span className={styles.skill_name}>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
