'use client';

import { useState, type FormEvent } from 'react';
import styles from './Footer.module.css';
import { footerCta } from '../data/Footer.data';

// TODO: wire this up to the real lead pipeline once decided —
// options discussed: Sanity "leads" dataset, or a direct API route
// into Resend/ConvertKit. For now it just confirms locally so the
// UI is real and testable without a backend dependency.
export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    // Placeholder: replace with a real POST to /api/waitlist
    setStatus('submitted');
  };

  if (status === 'submitted') {
    return <p className={styles.waitlistConfirm}>You&apos;re on the list — thank you.</p>;
  }

  return (
    <form className={styles.waitlistForm} onSubmit={handleSubmit}>
      <label htmlFor="footer-waitlist-email" className={styles.waitlistLabel}>
        {footerCta.waitlistLabel}
      </label>
      <div className={styles.waitlistRow}>
        <input
          id="footer-waitlist-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={footerCta.waitlistPlaceholder}
          className={styles.waitlistInput}
        />
        <button type="submit" className={styles.waitlistButton}>
          {footerCta.waitlistButtonLabel}
        </button>
      </div>
    </form>
  );
}