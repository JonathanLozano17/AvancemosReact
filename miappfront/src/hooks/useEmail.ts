import { useState } from "react";
import { sendEmailService } from "../api/emailServiceApi";

export const useEmail = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);
  
    const sendEmail = async (form: HTMLFormElement) => {
      setLoading(true);
      setError(null);
      setSuccess(false);
  
      try {
        await sendEmailService(form);
        setSuccess(true);
        alert("Correo enviado exitosamente ✅");
        form.reset();
      } catch (err) {
        setError("Error al enviar el correo ❌");
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };
  
    return { sendEmail, loading, error, success };
  };