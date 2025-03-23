import emailjs from '@emailjs/browser';

const SERVICE_ID = "service_k1dpunf";
const TEMPLATE_ID = "template_9wnkjlk";
const PUBLIC_KEY = "urd--y_6PdcxJsHtU";

export const sendEmailService = async (form: HTMLFormElement) => {
    try {
      const response = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      return response;
    } catch (error) {
      throw error;
    }
  };