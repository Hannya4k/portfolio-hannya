import { useState, useEffect } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { IoClose, IoMenu } from "react-icons/io5";
import { NavLinks, Contact } from "../data";
import styles from "../styles/components/navbar.module.scss";

const SECTION_IDS = ['about', 'experience', 'projects', 'certificates', 'contact'];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleMobileMenuToggle = () => setIsMenuOpen((prev) => !prev);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('');
  };

  return (
    <>
      <nav className={styles.navbar}>
        <h2 className={styles.logo} onClick={scrollToTop}>
          <span className={styles.typing}>&gt; h4nny4 </span>
        </h2>
        <LayoutGroup>
          <div className={styles.desktopitems}>
            {NavLinks.map((link) => (
              <a
                href={link.linkTo}
                key={link.title}
                className={`${styles.link} ${activeSection === link.linkTo.slice(1) ? styles.activeLink : ''}`}
              >
                {link.title}
                {activeSection === link.linkTo.slice(1) && (
                  <motion.span layoutId="nav-indicator" className={styles.navIndicator} />
                )}
              </a>
            ))}
            <a
              target="_blank"
              className={`${styles.btncv} ${styles.link}`}
              href={Contact.cv}
              rel="noreferrer"
            >
              [CV]
            </a>
          </div>
        </LayoutGroup>
        <div className={styles.mobileview}>
          <div
            className={isMenuOpen ? `${styles.mobilemenu} ${styles.active}` : styles.mobilemenu}
            onClick={handleMobileMenuToggle}
          >
            <IoMenu size={40} color="#f7f7f7" />
          </div>
          <div
            className={!isMenuOpen ? `${styles.mobilemenu} ${styles.active}` : styles.mobilemenu}
            onClick={handleMobileMenuToggle}
          >
            <IoClose size={40} color="#f7f7f7" />
          </div>
        </div>
      </nav>
      <div
        className={isMenuOpen ? `${styles.mobileMenuModal} ${styles.active}` : styles.mobileMenuModal}
      >
        {NavLinks.map((link) => (
          <a
            href={link.linkTo}
            key={link.title}
            className={`${styles.mobileLinks} ${activeSection === link.linkTo.slice(1) ? styles.activeMobileLink : ''}`}
            onClick={handleMobileMenuToggle}
          >
            {link.title}
          </a>
        ))}
        <a
          target="_blank"
          className={`${styles.mobileBtncv} ${styles.mobileLinks}`}
          href={Contact.cv}
          rel="noreferrer"
          onClick={handleMobileMenuToggle}
        >
          [Download CV]
        </a>
      </div>
    </>
  );
};

export default Navbar;
