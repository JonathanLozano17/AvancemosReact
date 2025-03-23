import emailjs from '@emailjs/browser';

const SERVICE_ID = "service_k1dpunf";
const TEMPLATE_ID = "template_9wnkjlk";
const PUBLIC_KEY = "urd--y_6PdcxJsHtU";

export const sendEmail = async (form: HTMLFormElement) => {
  try {
    const response = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
      publicKey: PUBLIC_KEY,
    });

    console.log("Email enviado con éxito:", response);
    return { success: true, message: "Correo enviado correctamente" };
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return { success: false, message: "Hubo un problema al enviar el correo" };
  }
};
