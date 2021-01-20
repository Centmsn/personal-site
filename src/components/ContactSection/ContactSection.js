import email_svg from "../../assets/email.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import gsap from "gsap";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useRef } from "react";

import { device } from "../../GlobalStyles";
import Footer from "../Footer/Footer";
import SectionContainer from "../SectionContainer/SectionContainer";

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
    onSubmit: (values, { resetForm }) => {
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
    <SectionContainer isVisible={isVisible}>
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
            style={{ height: "250px" }}
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
    </SectionContainer>
  );
};

const Form = styled.form`
  position: relative;
  grid-area: 2/3/11/6;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    grid-area: 2/1/11/6;
  }

  @media ${device.tablet} {
    grid-area: 1/1/10/13;
  }
`;

const FormSection = styled.div`
  position: relative;
  flex-basis: 100%;
  margin-bottom: 25px;

  display: flex;
  justify-content: center;
`;

const SendingFeedback = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  transform: translateY(-100vh);

  font-size: 2rem;
  text-align: center;

  opacity: 0;
  visibility: hidden;

  span {
    font-size: 10rem;
    color: ${({ error, theme }) =>
      error ? theme.colors.yellow : "rgb(98, 168, 116)"};
  }
`;

const FormTooltip = styled.span`
  position: absolute;
  top: calc(-1.25rem - 10px);
  left: 0;
  right: 0;
  transform: translateY(${({ active }) => (active ? 0 : "-10px")});

  font-size: 1.25rem;
  text-align: center;

  background-color: ${({ theme }) => theme.colors.gray};
  color: white;

  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: 300ms;
`;

const FormTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  text-shadow: 4px 4px 0 ${({ theme }) => theme.colors.yellow};

  color: ${({ theme }) => theme.colors.gray};
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 25px;

  border: 4px solid ${({ theme }) => theme.colors.gray};

  font-size: 1.5rem;

  resize: none;
  padding: 5px;

  &:focus {
    background-color: ${({ theme }) => theme.colors.yellow};
  }
`;

const Button = styled.button`
  position: relative;
  width: 200px;

  box-shadow: 0 0 0 5px ${({ theme }) => theme.colors.yellow};

  font-size: 1.75rem;
  font-family: ${({ theme }) => theme.fonts.title};
  letter-spacing: 2px;

  color: white;
  background-color: ${({ theme }) => theme.colors.gray};

  transition: 300ms;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 4px white, 0 0 0 9px ${({ theme }) => theme.colors.yellow};
  }

  &:hover img {
    transform: translate(100px);
    opacity: 1;
  }

  &:disabled {
    color: gray;

    box-shadow: 0 0 0 4px white, 0 0 0 9px ${({ theme }) => theme.colors.gray};
  }

  img {
    z-index: -1;
    position: absolute;

    opacity: 0;
    transition: 300ms;
  }
`;

export default ContactSection;
