import { useState } from "react";
import { sendEmail } from "../api/emailServiceApi";

export const useEmail = () => {
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleSendEmail = async (form: HTMLFormElement) => {
    setLoading(true);
    const result = await sendEmail(form);
    setResponseMessage(result.message);
    setLoading(false);
  };

  return { handleSendEmail, loading, responseMessage };
};
