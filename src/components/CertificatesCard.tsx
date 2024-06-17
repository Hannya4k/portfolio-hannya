import { FC } from 'react';

import styles from '../styles/components/certificatesCard.module.scss';

interface CertificatesCardProps {
    title: string;
    image: string;
}

const CertificatesCard: FC<CertificatesCardProps> = (props) => {

    return (
        <div className={styles.certificatesCard}>
            <div className={styles.imagewrapper}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={styles.content}>
                <h2>{props.title}</h2>
            </div>
        </div>
    );
};

export default CertificatesCard;