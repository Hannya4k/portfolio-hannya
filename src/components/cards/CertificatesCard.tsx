import { FC, useState } from "react";

import styles from "../../styles/components/certificatesCard.module.scss";
import { Modal } from "antd";

interface CertificatesCardProps {
  title: string;
  image: string;
}

const CertificatesCard: FC<CertificatesCardProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);
  return (
    <>
      <div
        className={styles.certificatesCard}
        style={{ cursor: "zoom-in" }}
        onClick={handleOpen}
      >
        <div className={styles.imagewrapper}>
          <img src={props.image} alt={props.title} />
          <div className={styles.overlay}>
            <h2>{props.title}</h2>
          </div>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onCancel={handleClose}
        footer={null}
        centered
        width="auto"
        styles={{
          body: {
            padding: 0,
            background: "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          content: {
            background: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <img
          src={props.image}
          alt={props.title}
          style={{
            maxWidth: "90vw",
            maxHeight: "80vh",
            objectFit: "contain",
            borderRadius: "10px",
          }}
        />
      </Modal>
    </>
  );
};

export default CertificatesCard;
