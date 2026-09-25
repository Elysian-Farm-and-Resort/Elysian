"use client";

import { useState, type FormEvent } from "react";
import { Lock } from "lucide-react";
import { inquiryReasons, messageMaxLength } from "@/data/Contact.data";
import styles from "@/styles/contact/ContactForm.module.css";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [messageLength, setMessageLength] = useState(0);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      reason: formData.get("reason"),
      message: formData.get("message"),
      subscribeToNewsletter: formData.get("subscribeToNewsletter") === "on",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
      setMessageLength(0);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div className={styles.card}>
        <div className={styles.successCard}>
          <h3 className={styles.successTitle}>Message sent.</h3>
          <p className={styles.successBody}>
            Thank you for reaching out — our team will get back to you shortly.
          </p>
          <button
            type="button"
            className={styles.successButton}
            onClick={() => {
              setStatus("idle");
              setErrorMessage("");
              setMessageLength(0);
            }}
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.cardHeading}>Your Enquiry</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="contact-name" className={styles.label}>
              Full Name <span className={styles.required}>*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              placeholder="Enter your full name"
              className={styles.input}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="contact-email" className={styles.label}>
              Email Address <span className={styles.required}>*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="contact-phone" className={styles.label}>
              Phone Number
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              placeholder="+234 ..."
              className={styles.input}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="contact-reason" className={styles.label}>
              I&rsquo;m interested in <span className={styles.required}>*</span>
            </label>
            <select
              id="contact-reason"
              name="reason"
              required
              className={styles.input}
              defaultValue=""
            >
              <option value="" disabled>
                Select an option
              </option>
              {inquiryReasons.map((reason) => (
                <option key={reason.value} value={reason.label}>
                  {reason.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-message" className={styles.label}>
            Message <span className={styles.required}>*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            maxLength={messageMaxLength}
            placeholder="Tell us how we can help..."
            className={styles.input}
            onChange={(event) => setMessageLength(event.target.value.length)}
          />
          <span className={styles.charCount}>
            {messageLength}/{messageMaxLength}
          </span>
        </div>

        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="subscribeToNewsletter"
            className={styles.checkbox}
          />
          <span>Subscribe me to the Elysian newsletter.</span>
        </label>

        {status === "error" && <p className={styles.errorText}>{errorMessage}</p>}

        <button type="submit" className={`btn btn-primary ${styles.submit}`} disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send Enquiry →"}
        </button>

        <p className={styles.disclaimer}>
          <Lock size={12} aria-hidden="true" />
          Your information is safe and will only be used to respond to your enquiry.
        </p>
      </form>
    </div>
  );
}