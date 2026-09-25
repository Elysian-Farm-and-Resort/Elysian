'use client';

import { useEffect, useState, type FormEvent } from 'react';
import styles from './Footer.module.css';
import { footerCta } from '../data/Footer.data';

type Status = 'idle' | 'submitting' | 'submitted' | 'error';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    if (status !== 'submitted') return;

    const timeout = window.setTimeout(() => {
      setStatus('idle');
      setEmail('');
    }, 5000);

    return () => window.clearTimeout(timeout);
  }, [status]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Newsletter signup failed');
      setStatus('submitted');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'submitted') {
    return <p className={styles.newsletterConfirm}>You&apos;re subscribed — thank you.</p>;
  }

  return (
    <form className={styles.newsletterForm} onSubmit={handleSubmit}>
      <label htmlFor="footer-newsletter-email" className={styles.newsletterLabel}>
        {footerCta.newsletterLabel}
      </label>
      <div className={styles.newsletterRow}>
        <input
          id="footer-newsletter-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={footerCta.newsletterPlaceholder}
          className={styles.newsletterInput}
        />
        <button
          type="submit"
          className={styles.newsletterButton}
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Subscribing...' : footerCta.newsletterButtonLabel}
        </button>
      </div>
      {status === 'error' && (
        <p className={styles.newsletterError} role="alert">
          We couldn&apos;t subscribe you right now. Please try again.
        </p>
      )}
    </form>
  );
}