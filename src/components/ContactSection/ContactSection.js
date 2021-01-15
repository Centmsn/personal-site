import emailjs from "emailjs-com";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useRef } from "react";

import SectionContainer from "../SectionContainer/SectionContainer";

const SERVICE_ID = "service_r7i52mu";
const TEMPLATE_ID = "template_oasdgmb";
const USER_ID = "user_GfqNlxrr83xLpWWIrrG8x";

const ContactSection = ({ isVisible }) => {
  const [status, setStatus] = useState("");
  const contactFormRef = useRef(null);

  const validationSchema = () =>
    Yup.object().shape({
      from_name: Yup.string()
        .required("Przedstaw się proszę")
        .min(2, "Imię musi zawierać co najmniej 2 znaki"),
      reply_to: Yup.string()
        .required("Muszę wiedzieć komu mam odpisać")
        .email("Niepoprawny adres email"),
      message: Yup.string()
        .required("Zapomniałeś o najważniejszym! O czym chciałeś napisać?")
        .min(10, "Wiadomość musi zawierać co najmniej 10 znaków"),
    });

  const formik = useFormik({
    initialValues: {
      from_name: "",
      reply_to: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, contactFormRef.current, USER_ID)
        .then(
          () => {
            setStatus("Wiadomość wysłana. Odpiszę najszybciej jak mogę.");
            resetForm({});

            setTimeout(() => {
              setStatus("");
            }, 8000);
          },
          () => {
            setStatus(
              "Uups... coś poszło nie tak, spróbuj ponownie za chwilę lub skontaktuj się w inny sposób."
            );

            if (status) return;
            setTimeout(() => {
              setStatus("");
            }, 8000);
          }
        );
    },
  });

  return (
    <SectionContainer isVisible={isVisible}>
      <form
        id="form"
        onSubmit={formik.handleSubmit}
        ref={contactFormRef}
        className="form"
      >
        <div className="form__section">
          <h4>Napisz do mnie wiadomość</h4>
          <div className="form__status">{status}</div>
        </div>

        <div className="form__section">
          <input
            type="text"
            name="from_name"
            id="from_name"
            onChange={formik.handleChange}
            value={formik.values.from_name}
            placeholder="Jak Cię zwą?"
          />
          {/* {nameTooltip} */}
        </div>

        <div className="form__section">
          <input
            type="email"
            name="reply_to"
            id="reply_to"
            onChange={formik.handleChange}
            value={formik.values.reply_to}
            placeholder="adres@email.com"
          />
          {/* {emailTooltip} */}
        </div>

        <div className="form__section form__section--large">
          <textarea
            type="text"
            name="message"
            id="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            placeholder="wiadomość..."
            re
          ></textarea>
          {/* {messageTooltip} */}
        </div>

        <div className="form__section">
          <button
            type="submit"
            id="button"
            value="Send Email"
            className="button form__btn"
          >
            Wyślij
          </button>
        </div>
      </form>

      {/* attribution */}
      <div>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
