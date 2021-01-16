import email_svg from "../../assets/email.svg";

import emailjs from "emailjs-com";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useRef } from "react";

import SectionContainer from "../SectionContainer/SectionContainer";
import Footer from "../Footer/Footer";

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

  const nameTooltip = formik.errors.from_name ? (
    <span>{formik.errors.from_name}</span>
  ) : null;

  const emailTooltip = formik.errors.reply_to ? (
    <span>{formik.errors.reply_to}</span>
  ) : null;

  const messageTooltip = formik.errors.message ? (
    <span>{formik.errors.message}</span>
  ) : null;

  return (
    <SectionContainer isVisible={isVisible}>
      <Form id="form" onSubmit={formik.handleSubmit} ref={contactFormRef}>
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
          {nameTooltip}
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
          {emailTooltip}
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
          {messageTooltip}
        </FormSection>

        <FormSection>
          <Button type="submit" id="button">
            Wyślij
            <img src={email_svg} alt="" />
          </Button>
        </FormSection>
      </Form>

      <Footer />
    </SectionContainer>
  );
};

const Form = styled.form`
  grid-area: 2/3/11/6;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const FormSection = styled.div`
  position: relative;
  flex-basis: 100%;
  margin-bottom: 25px;

  display: flex;
  justify-content: center;

  span {
    position: absolute;
    top: calc(-1.25rem - 10px);
    left: 0;
    right: 0;

    font-size: 1.25rem;
    text-align: center;
  }
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
    transform: translate(150%);
    opacity: 1;
  }

  img {
    z-index: -1;
    position: absolute;

    opacity: 0;
    transition: 300ms;
  }
`;

export default ContactSection;
