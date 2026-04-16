"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import styles from "./page.module.css";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage({ type: "success", text: "Message sent successfully! I'll get back to you soon." });
        event.currentTarget.reset();
      } else {
        const errorData = await response.json();
        setMessage({ type: "error", text: errorData.error || "Failed to send message. Please try again." });
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
          <input type="text" name="name" placeholder="Your name" autoComplete="name" />
        </label>

        <label className={styles.field}>
          <span>Email</span>
          <input type="email" name="email" placeholder="your@email.com" autoComplete="email" />
        </label>
      </div>

      <label className={styles.field}>
        <span>Subject</span>
        <input type="text" name="subject" placeholder="What would you like to talk about?" />
      </label>

      <label className={styles.field}>
        <span>Message</span>
        <textarea
          name="message"
          placeholder="Write your message here..."
          rows={4}
        />
      </label>

      <button type="submit" className={styles.submitButton}>
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

