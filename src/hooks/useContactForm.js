import { useState } from "react";
import { sendContactMessage } from "../services/contactService";

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      await sendContactMessage(formData);
      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "An unexpected error occurred.";
      setStatus({ submitting: false, success: false, error: errorMessage });
    }
  };

  return { formData, status, handleChange, handleSubmit };
};
