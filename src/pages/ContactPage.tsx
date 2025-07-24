import { Contact } from "../data";
import styles from "../styles/pages/contact.module.scss";
import { useScramble } from "../hooks/useScramble";

const ContactPage = () => {
  const header = useScramble("> whoami --contact", 100, 100);
  const description = useScramble(`${Contact.description}`, 100, 100);
  const email = useScramble(`${Contact.email}`, 100, 100);
  const cv = useScramble(`[Download CV]`, 100, 100);
  return (
    <div className={`${styles.contact} ${styles.crt}`}>
      <h3 className={styles.header}>{header}</h3>
      <div className={styles.contact_container}>
        <h4 className={styles.description}>{description}</h4>

        <h6 className={styles.description}>{email}</h6>
        {/* <h6 className={styles.description}>{location}</h6> */}
        {/* <div className={styles.links}>
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
        </div> */}
        <div className={styles.download}>
          <a
            target="_blank"
            className={styles.dlbtn}
            href={Contact.cv}
            rel="noreferrer"
          >
            {cv}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
