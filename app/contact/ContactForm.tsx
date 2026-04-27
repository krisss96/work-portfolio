"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import styles from "./page.module.css";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    if (!data.name || !data.email || !data.subject || !data.message) {
      setMessage({ type: "error", text: "Please fill in all fields." });
      setIsLoading(false);
      return;
    }

    if (!isValidEmail(data.email)) {
      setMessage({ type: "error", text: "Please enter a valid email address." });
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await response.json().catch(() => ({}));

      if (response.ok) {
        setMessage({ type: "success", text: "Message sent successfully! I'll get back to you soon." });
        event.currentTarget.reset();
      } else {
        setMessage({ type: "error", text: responseData.error || "Failed to send message. Please try again." });
      }
    } catch (error) {
      setMessage({ type: "error", text: "An error occurred. Please try again later." });
      console.error("Contact form error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <label className={styles.field}>
          <span>Name</span>
          <input type="text" name="name" placeholder="Your name" autoComplete="name" required />
        </label>

        <label className={styles.field}>
          <span>Email</span>
          <input type="email" name="email" placeholder="your@email.com" autoComplete="email" required />
        </label>
      </div>

      <label className={styles.field}>
        <span>Subject</span>
        <input type="text" name="subject" placeholder="What would you like to talk about?" required />
      </label>

      <label className={styles.field}>
        <span>Message</span>
        <textarea
          name="message"
          placeholder="Write your message here..."
          rows={4}
          required
        />
      </label>

      <button type="submit" className={styles.submitButton} disabled={isLoading}>
        {isLoading ? "Sending..." : "Send message"}
      </button>
      {message && (
        <div style={{
          marginTop: "1rem",
          padding: "0.75rem 1rem",
          borderRadius: "0.5rem",
          backgroundColor: message.type === "success" ? "rgba(34, 197, 94, 0.2)" : "rgba(239, 68, 68, 0.2)",
          color: message.type === "success" ? "#86efac" : "#fca5a5",
          fontSize: "0.9rem",
        }}>
          {message.text}
        </div>
      )}
    </form>
  );
}
