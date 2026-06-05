import profilePic from "../assets/Hannya.png";
import { About, Links } from "../data";
import styles from "../styles/pages/home.module.scss";
import { useScramble } from "../hooks/useScramble";

const HomePage = () => {
  const hacker = useScramble(About.hackername, 100, 100);
  const expertise = useScramble(About.about, 100, 100);
  return (
    <section id="home" className={`${styles.home} ${styles.flicker}`}>
      <div className={styles.hero}>
        <div className={styles.image_container}>
          <img src={profilePic} alt="Profile" className={styles.image} />
        </div>
        <div className={styles.hero_text}>
          <h2 className={styles.title}>{hacker}</h2>
          <h3 className={styles.roles}>{expertise}</h3>
          <div className={styles.links}>
            {Links.map((item, index) => (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                key={item.title}
                className={styles.iconAnimated}
                style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
