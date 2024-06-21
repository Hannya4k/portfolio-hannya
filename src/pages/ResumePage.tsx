import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "../utils/FramerAnimation";

import resume from "../assets/Resume.png";
import { Contact } from '../data';

import styles from "../styles/pages/resume.module.scss";

const resumeOpen = "<resume>";
const resumeClose = "</resume>";

const ResumePage = () => {
    return (
        <div className={styles.resume}>
            <motion.div
                initial="init"
                animate="anim"
                exit="last"
                variants={pageVariants}
                transition={pageTransition}
            >
                <div className={styles.wrapper}>
                    <h3 className={styles.resumeOpen}>{resumeOpen}</h3>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={resume} alt="Profile" className={styles.image} />
                        <a
                            target="_blank"
                            className={`${styles.btncv} ${styles.link}`}
                            href={Contact.cv}
                            rel="noreferrer"
                        >
                            Download CV
                        </a>
                    </div>
                    <h3 className={styles.resumeClose}>{resumeClose}</h3>
                </div>
            </motion.div>
        </div>
    );
};

export default ResumePage;
