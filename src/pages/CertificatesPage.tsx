import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Certifications, Certificates, Trainings } from "../data";
import styles from "../styles/pages/certificates.module.scss";
import CertificatesCard from "../components/cards/CertificatesCard";
import { useScramble } from "../hooks/useScramble";

type Tab = "certifications" | "trainings" | "certificates";

const TABS: { key: Tab; label: string }[] = [
  { key: "certifications", label: "~/certifications" },
  { key: "trainings", label: "~/trainings" },
  { key: "certificates", label: "~/certificates" },
];

const DATA = {
  certifications: Certifications,
  trainings: Trainings,
  certificates: Certificates,
};

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" as const } },
};

const CertificatesPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("certifications");
  const header = useScramble("> whoami --certifications", 100, 200);

  return (
    <section id="certificates" className={styles.certificates}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <div className={styles.wrapper}>
          <h3 className={styles.header}>{header}</h3>
          <div className={styles.tabs}>
            {TABS.map((tab) => (
              <button
                key={tab.key}
                className={`${styles.tab} ${activeTab === tab.key ? styles.activeTab : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className={styles.certificates_content}
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              {DATA[activeTab].map((item, index) => (
                <motion.div key={`${item.title}-${index}`} variants={cardVariants}>
                  <CertificatesCard
                    title={item.title}
                    image={item.image}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default CertificatesPage;
