import { useState } from "react";
import { toast } from "react-toastify";
import { Contact, Links } from "../data";
import styles from "../styles/pages/contact.module.scss";
import { useScramble } from "../hooks/useScramble";
import { WEB3FORMS_ACCESS_KEY } from "../config/web3forms";

const ContactPage = () => {
  const header = useScramble("> whoami --contact", 100, 100);
  const email = useScramble(`${Contact.email}`, 100, 100);
  const cv = useScramble(`[Download CV]`, 100, 100);

  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !fromEmail.trim() || !message.trim()) return;

    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          email: fromEmail,
          message,
          subject: `Portfolio message from ${name}`,
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent!");
        setName("");
        setFromEmail("");
        setMessage("");
      } else {
        toast.error("Failed to send. Try emailing directly.");
      }
    } catch {
      toast.error("Failed to send. Try emailing directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contact_inner}>
        <h3 className={styles.header}>{header}</h3>
        <div className={styles.contact_grid}>
          <div className={styles.contact_info}>
            <p className={styles.description}>{Contact.description}</p>
            <a href={`mailto:${Contact.email}`} className={styles.email}>
              {email}
            </a>
            <div className={styles.links}>
              {Links.map((item, index) => (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  key={item.title}
                  className={styles.iconAnimated}
                  style={{ animationDelay: `${index * 0.15 + 0.3}s` }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
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

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.form_group}>
              <label className={styles.label} htmlFor="name">&gt; name</label>
              <input
                id="name"
                type="text"
                className={styles.input}
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className={styles.form_group}>
              <label className={styles.label} htmlFor="email">&gt; email</label>
              <input
                id="email"
                type="email"
                className={styles.input}
                placeholder="your@email.com"
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.form_group}>
              <label className={styles.label} htmlFor="message">&gt; message</label>
              <textarea
                id="message"
                className={styles.textarea}
                placeholder="What's on your mind?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className={styles.submit_btn}
              disabled={loading}
            >
              {loading ? "sending..." : "[send_message]"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
