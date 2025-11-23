import { useState } from "react";
import { social_media } from "../../Constants/data";
import styles from "../Styles/contacts.module.css";
import toast from "react-hot-toast";
import axios from "axios";

const form_url = "https://submit-form.com/fde0VIvSR";
const ContactWrapper = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };

  const validateForm = () => {
    if (!formData.name) {
      toast.error("Name is required!");
    } else if (!formData.email) {
      toast.error("E-mail is required!");
    } else if (!formData.message) {
      toast.error("Message is required!");
    } else {
      sendForm();
    }
  };

  const sendForm = () => {
    setLoading(false);
    axios
      .post(form_url, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      })
      .then(function (response) {
        console.log(response);
        toast.success("Form Submitted!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setLoading(true);
      })
      .catch(function (error) {
        console.log(error);
        toast.error(error.message)
      });
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h3>
            <i className="fa-solid fa-envelope-circle-check"></i>&nbsp; Contact
            Form
          </h3>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.grp}>
              <label htmlFor="name">
                Name <span className={styles.red}>*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="What's your name?"
                value={formData.name || ""}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className={styles.grp}>
              <label htmlFor="email">
                E-mail <span className={styles.red}>*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="And your e-mail address..."
                autoComplete="off"
                value={formData.email || ""}
                onChange={handleChange}
              />
            </div>
            <div className={styles.grp}>
              <label htmlFor="message">
                Message <span className={styles.red}>*</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows="7"
                placeholder="A little gist about the job..."
                autoComplete="off"
                value={formData.message || ""}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit">
              {loading ? (
                <>
                  Send &nbsp; <i className="fa-regular fa-paper-plane"></i>
                </>
              ) : (
                <>
                  Sending &nbsp; <i className="fa-regular fa-clock"></i>
                </>
              )}
            </button>
          </form>
        </div>

        <div className={styles.wrapper}>
          <h3>
            <i className="fa-solid fa-square-share-nodes"></i>&nbsp; Social
            Media
          </h3>
          <ul>
            {social_media.map((item, index) => (
              <li className={styles.links} key={index}>
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-media-link"
                >
                  <div>
                    <i className={item.iconClass}></i>
                    <span>{item.name}</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-angle-right"></i>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContactWrapper;
