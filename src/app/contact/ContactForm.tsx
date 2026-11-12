"use client";

import { useState } from "react";
import styles from "./ContactForm.module.scss";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
      setFeedback("");
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        const messages: Record<number, string> = {
          413: "Your message is too large. Please shorten it.",
          429: "You've sent too many messages. Please try again later.",
          503: "Our contact service is temporarily unavailable. Please try again later.",
        };

        throw new Error(
          messages[response.status] ||
            result.message ||
            "Unable to send your message. Please try again.",
        );
      }

      setStatus("success");
      setFeedback(result.message);
      setForm(initialForm);
    } catch (error) {
      setStatus("error");

      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Your Name
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          minLength={2}
          maxLength={100}
          disabled={status === "loading"}
        />
      </label>

      <label>
        Email Address
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          maxLength={254}
          disabled={status === "loading"}
        />
      </label>

      <label>
        Subject
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          maxLength={150}
          disabled={status === "loading"}
        />
      </label>

      <label>
        Message
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          minLength={10}
          maxLength={3000}
          rows={6}
          disabled={status === "loading"}
        />
      </label>

      {feedback && (
        <p
          className={status === "success" ? styles.success : styles.error}
          role="status"
          aria-live="polite"
        >
          {feedback}
        </p>
      )}

      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          value={form.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
