import styles from "../styles/components/skeleton.module.scss";

const Block = ({ className }: { className: string }) => (
  <div className={`${styles.block} ${className}`} />
);

const Skeleton = () => (
  <div className={styles.skeleton}>
    {/* Navbar */}
    <div className={styles.skeletonNav}>
      <Block className={styles.navLogo} />
      <div className={styles.navLinks}>
        {[...Array(4)].map((_, i) => <Block key={i} className={styles.navLink} />)}
      </div>
    </div>

    {/* Hero */}
    <div className={styles.hero}>
      <Block className={styles.avatar} />
      <div className={styles.heroText}>
        <Block className={styles.heroTitle} />
        <Block className={styles.heroSubtitle} />
        <div className={styles.heroIcons}>
          {[...Array(3)].map((_, i) => <Block key={i} className={styles.heroIcon} />)}
        </div>
      </div>
    </div>

    {/* About */}
    <div className={styles.section}>
      <Block className={styles.sectionHeader} />
      <div className={styles.twoCol}>
        <div className={styles.colLines}>
          <Block className={styles.lineWide} />
          <Block className={styles.lineMed} />
          <Block className={styles.lineWide} />
          <Block className={styles.lineShort} />
        </div>
        <div className={styles.skillGrid}>
          {[...Array(8)].map((_, i) => <Block key={i} className={styles.skillItem} />)}
        </div>
      </div>
    </div>

    {/* Experience */}
    <div className={styles.section}>
      <Block className={styles.sectionHeader} />
      <div className={styles.timeline}>
        {[...Array(3)].map((_, i) => <Block key={i} className={styles.expCard} />)}
      </div>
    </div>

    {/* Projects */}
    <div className={styles.section}>
      <Block className={styles.sectionHeader} />
      <Block className={styles.featuredCard} />
      <div className={styles.projectGrid}>
        {[...Array(3)].map((_, i) => <Block key={i} className={styles.projectCard} />)}
      </div>
    </div>
  </div>
);

export default Skeleton;
