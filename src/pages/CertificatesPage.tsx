// const Flip = require('react-reveal/Flip');
import { motion } from 'framer-motion';

import { Certifications, Certificates } from '../data';
import styles from '../styles/pages/certificates.module.scss';
import { pageTransition, pageVariants } from '../utils/FramerAnimation';
import CertificatesCard from '../components/CertificatesCard';

const certificationsOpen = '<certifications>';
const certificationsClose = '</certifications>';

const certificatesOpen = '<certificates>';
const certificatesClose = '</certificates>';


const CertificatesPage = () => {
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
                    <h3 className={styles.certificatesOpen}>{certificationsOpen}</h3>

                    <div className={styles.certificates_content}>
                        {Certifications.map((item, index) =>
                            index % 2 === 0 ? (
                                <div key={item.title}>
                                    <CertificatesCard
                                        key={item.title}
                                        title={item.title}
                                        image={item.image}
                                    />
                                </div>
                            ) : (
                                <div key={item.title}>
                                    <CertificatesCard
                                        key={item.title}
                                        title={item.title}
                                        image={item.image}
                                    />
                                </div>
                            ),
                        )}
                    </div>

                    <h3 className={styles.certificatesClose}>{certificationsClose}</h3>
                </div>
                <div className={styles.wrapper}>
                    <h3 className={styles.certificatesOpen}>{certificatesOpen}</h3>

                    <div className={styles.certificates_content}>
                        {Certificates.map((item, index) =>
                            index % 2 === 0 ? (
                                <div key={item.title}>
                                    <CertificatesCard
                                        key={item.title}
                                        title={item.title}
                                        image={item.image}
                                    />
                                </div>
                            ) : (
                                <div key={item.title}>
                                    <CertificatesCard
                                        key={item.title}
                                        title={item.title}
                                        image={item.image}
                                    />
                                </div>
                            ),
                        )}
                    </div>

                    <h3 className={styles.certificatesClose}>{certificatesClose}</h3>
                </div>
            </motion.div>
        </div>
    )
};
export default CertificatesPage;