import * as Yup from "yup";

export const validationSchema = () =>
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

export enum MessageStatus {
  PENDING,
  SENDING,
  ERROR,
  OK,
}
