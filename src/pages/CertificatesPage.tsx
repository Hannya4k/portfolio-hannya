import { motion } from "framer-motion";
import { Certifications, Certificates, Trainings } from "../data";
import styles from "../styles/pages/certificates.module.scss";
import { pageTransition, pageVariants } from "../utils/FramerAnimation";
import CertificatesCard from "../components/cards/CertificatesCard";
import { useScramble } from "../hooks/useScramble";

const CertificatesPage = () => {
  const certificationsHeader = useScramble(
    "> whoami --certifications",
    100,
    200
  );
  const trainingsHeader = useScramble("> whoami --trainings", 100, 200);
  const certificatesHeader = useScramble("> whoami --certificates", 100, 200);
  return (
    <div className={styles.certificates}>
      <motion.div
        initial="init"
        animate="anim"
        exit="last"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className={styles.wrapper}>
          <h3 className={styles.headers}>{certificationsHeader}</h3>
          <div className={styles.certificates_content}>
            {Certifications.map((item, index) => (
              <CertificatesCard
                key={`${item.title}-${index}`}
                title={item.title}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div className={styles.wrapper}>
          <h3 className={styles.headers}>{trainingsHeader}</h3>
          <div className={styles.scroll_container}>
            <div className={styles.certificates_content}>
              {Trainings.map((item, index) => (
                <CertificatesCard
                  key={`${item.title}-${index}`}
                  title={item.title}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <h3 className={styles.headers}>{certificatesHeader}</h3>
          <div className={styles.scroll_container}>
            <div className={styles.certificates_content}>
              {Certificates.map((item, index) => (
                <CertificatesCard
                  key={`${item.title}-${index}`}
                  title={item.title}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default CertificatesPage;
