import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import gsap from "gsap";
import { useFormik } from "formik";
import Footer from "components/Footer/Footer";
import SectionContainer from "components/SectionContainer/SectionContainer";
import { validationSchema, MessageStatus } from "./constants";
import * as P from "./parts";
import email_svg from "../../assets/email.svg";

const SERVICE_ID = "service_r7i52mu";
const TEMPLATE_ID = "template_oasdgmb";
const USER_ID = "user_GfqNlxrr83xLpWWIrrG8x";

export interface ContactSectionProps {
  isVisible: boolean;
}

/**
 * functional React component - renders contant section on the screen
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
const ContactSection = ({ isVisible }: ContactSectionProps) => {
  const [status, setStatus] = useState(MessageStatus.OK);
  const contactFormRef = useRef<HTMLFormElement>(null);

  const formik = useFormik({
    initialValues: {
      from_name: "",
      reply_to: "",
      message: "",
    },
    validationSchema,
    onSubmit: (_, { resetForm }) => {
      setStatus(MessageStatus.SENDING);
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, contactFormRef.current, USER_ID)
        .then(
          () => {
            setStatus(MessageStatus.OK);
            resetForm({});

            const tl = gsap.timeline();
            const form = contactFormRef.current;
            tl.to(form, { y: "100vh" })
              .to(form.lastChild, { autoAlpha: 1, duration: 0 }, "-=0.3")
              .to(form, { y: 0 }, "+=7")
              .to(form.lastChild, { autoAlpha: 0, duration: 0 });

            setTimeout(() => {
              setStatus(MessageStatus.PENDING);
            }, 8000);
          },
          () => {
            setStatus(MessageStatus.ERROR);

            const tl = gsap.timeline();
            const form = contactFormRef.current;
            tl.to(form, { y: "100vh" })
              .to(form.lastChild, { autoAlpha: 1, duration: 0 }, "-=0.3")
              .to(form, { y: 0 }, "+=7")
              .to(form.lastChild, { autoAlpha: 0, duration: 0 });

            setTimeout(() => {
              setStatus(MessageStatus.PENDING);
            }, 8000);
          }
        );
    },
  });

  const buttonText =
    status === MessageStatus.SENDING && !Object.keys(formik.errors).length
      ? "Wysyłanie..."
      : "Wyślij";

  let feedback;

  if (status === MessageStatus.ERROR) {
    feedback =
      "Uupsss... coś poszło nie tak. Spróbuj ponownie za chwilę, lub skorzystaj z innej formy kontaktu";
  } else if (status === MessageStatus.OK) {
    feedback =
      "Otrzymałem Twoją wiadomość i odpowiem najszybciej jak to możliwe.";
  }

  return (
    <SectionContainer isVisible={isVisible} paddingSize="0px">
      <P.Wrapper>
        <P.Form
          id="form"
          onSubmit={formik.handleSubmit}
          ref={contactFormRef}
          onBlur={formik.handleBlur}
        >
          <P.FormSection>
            <P.FormTitle>Napisz do mnie wiadomość</P.FormTitle>
          </P.FormSection>

          <P.FormSection>
            <P.Input
              type="text"
              name="from_name"
              id="from_name"
              onChange={formik.handleChange}
              value={formik.values.from_name}
              placeholder="Jak Cię zwą?"
            />
            <P.FormTooltip
              isActive={!!(formik.errors.from_name && formik.touched.from_name)}
            >
              {formik.errors.from_name}
            </P.FormTooltip>
          </P.FormSection>

          <P.FormSection>
            <P.Input
              type="email"
              name="reply_to"
              id="reply_to"
              onChange={formik.handleChange}
              value={formik.values.reply_to}
              placeholder="adres@email.com"
            />
            <P.FormTooltip
              isActive={!!(formik.errors.reply_to && formik.touched.reply_to)}
            >
              {formik.errors.reply_to}
            </P.FormTooltip>
          </P.FormSection>

          <P.FormSection>
            <P.Input
              type="text"
              name="message"
              id="message"
              onChange={formik.handleChange}
              value={formik.values.message}
              placeholder="wiadomość..."
              as="textarea"
              style={{ height: "15rem" }}
            ></P.Input>
            <P.FormTooltip
              isActive={!!(formik.errors.message && formik.touched.message)}
            >
              {formik.errors.message}
            </P.FormTooltip>
          </P.FormSection>

          <P.FormSection>
            <P.Button
              type="submit"
              id="button"
              disabled={
                status === MessageStatus.SENDING &&
                !Object.keys(formik.errors).length
              }
            >
              {buttonText}
              <img src={email_svg} alt="" />
            </P.Button>
          </P.FormSection>

          <P.SendingFeedback hasError={status === MessageStatus.ERROR}>
            <span>
              <FontAwesomeIcon
                icon={
                  status === MessageStatus.OK
                    ? faCheckCircle
                    : faExclamationTriangle
                }
              />
            </span>
            <p>{feedback}</p>
          </P.SendingFeedback>
        </P.Form>
        <Footer isVisible={isVisible} />
      </P.Wrapper>
    </SectionContainer>
  );
};

export default ContactSection;
