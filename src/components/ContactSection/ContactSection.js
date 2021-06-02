import email_svg from "../../assets/email.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import gsap from "gsap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useRef } from "react";

import Footer from "components/Footer/Footer";
import SectionContainer from "components/SectionContainer/SectionContainer";
import {
  Wrapper,
  Form,
  FormSection,
  SendingFeedback,
  Button,
  Input,
  FormTitle,
  FormTooltip,
} from "./styled";

const SERVICE_ID = "service_r7i52mu";
const TEMPLATE_ID = "template_oasdgmb";
const USER_ID = "user_GfqNlxrr83xLpWWIrrG8x";

/**
 * Enum for contact form status
 * @readonly
 * @enum { number }
 */
const MESSAGE_STATUS = {
  PENDING: 0,
  SENDING: 1,
  ERROR: 2,
  OK: 3,
};

/**
 * functional React component - renders contant section on the screen
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
const ContactSection = ({ isVisible }) => {
  const [status, setStatus] = useState(MESSAGE_STATUS.OK);
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
        .required("Wiadomość jest trochę za krótka...")
        .min(10, "Wiadomość musi zawierać co najmniej 10 znaków"),
    });

  const formik = useFormik({
    initialValues: {
      from_name: "",
      reply_to: "",
      message: "",
    },
    validationSchema,
    onSubmit: (_, { resetForm }) => {
      setStatus(MESSAGE_STATUS.SENDING);
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, contactFormRef.current, USER_ID)
        .then(
          () => {
            setStatus(MESSAGE_STATUS.OK);
            resetForm({});

            const tl = gsap.timeline();
            const form = contactFormRef.current;
            tl.to(form, { y: "100vh" })
              .to(form.lastChild, { autoAlpha: 1, duration: 0 }, "-=0.3")
              .to(form, { y: 0 }, "+=7")
              .to(form.lastChild, { autoAlpha: 0, duration: 0 });

            setTimeout(() => {
              setStatus(MESSAGE_STATUS.PENDING);
            }, 8000);
          },
          () => {
            setStatus(MESSAGE_STATUS.ERROR);

            const tl = gsap.timeline();
            const form = contactFormRef.current;
            tl.to(form, { y: "100vh" })
              .to(form.lastChild, { autoAlpha: 1, duration: 0 }, "-=0.3")
              .to(form, { y: 0 }, "+=7")
              .to(form.lastChild, { autoAlpha: 0, duration: 0 });

            setTimeout(() => {
              setStatus(MESSAGE_STATUS.PENDING);
            }, 8000);
          }
        );
    },
  });

  const buttonText =
    status === MESSAGE_STATUS.SENDING && !Object.keys(formik.errors).length
      ? "Wysyłanie..."
      : "Wyślij";

  let feedback;

  if (status === MESSAGE_STATUS.ERROR) {
    feedback =
      "Uupsss... coś poszło nie tak. Spróbuj ponownie za chwilę, lub skorzystaj z innej formy kontaktu";
  } else if (status === MESSAGE_STATUS.OK) {
    feedback =
      "Otrzymałem Twoją wiadomość i odpowiem najszybciej jak to możliwe.";
  }

  return (
    <SectionContainer isVisible={isVisible} paddingSize="0px">
      <Wrapper>
        <Form
          id="form"
          onSubmit={formik.handleSubmit}
          ref={contactFormRef}
          onBlur={formik.handleBlur}
        >
          <FormSection>
            <FormTitle>Napisz do mnie wiadomość</FormTitle>
          </FormSection>

          <FormSection>
            <Input
              type="text"
              name="from_name"
              id="from_name"
              onChange={formik.handleChange}
              value={formik.values.from_name}
              placeholder="Jak Cię zwą?"
            />
            <FormTooltip
              active={!!(formik.errors.from_name && formik.touched.from_name)}
            >
              {formik.errors.from_name}
            </FormTooltip>
          </FormSection>

          <FormSection>
            <Input
              type="email"
              name="reply_to"
              id="reply_to"
              onChange={formik.handleChange}
              value={formik.values.reply_to}
              placeholder="adres@email.com"
            />
            <FormTooltip
              active={!!(formik.errors.reply_to && formik.touched.reply_to)}
            >
              {formik.errors.reply_to}
            </FormTooltip>
          </FormSection>

          <FormSection>
            <Input
              type="text"
              name="message"
              id="message"
              onChange={formik.handleChange}
              value={formik.values.message}
              placeholder="wiadomość..."
              as="textarea"
              style={{ height: "15rem" }}
            ></Input>
            <FormTooltip
              active={!!(formik.errors.message && formik.touched.message)}
            >
              {formik.errors.message}
            </FormTooltip>
          </FormSection>

          <FormSection>
            <Button
              type="submit"
              id="button"
              disabled={
                status === MESSAGE_STATUS.SENDING &&
                !Object.keys(formik.errors).length
              }
            >
              {buttonText}
              <img src={email_svg} alt="" />
            </Button>
          </FormSection>

          <SendingFeedback error={status === MESSAGE_STATUS.ERROR}>
            <span>
              <FontAwesomeIcon
                icon={
                  status === MESSAGE_STATUS.OK
                    ? faCheckCircle
                    : faExclamationTriangle
                }
              />
            </span>
            <p>{feedback}</p>
          </SendingFeedback>
        </Form>
        <Footer isVisible={isVisible} />
      </Wrapper>
    </SectionContainer>
  );
};

export default ContactSection;
