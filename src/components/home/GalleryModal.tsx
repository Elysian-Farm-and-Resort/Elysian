'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/home/GalleryModal.module.css';

type GalleryModalProps = {
  title: string;
  children: React.ReactNode;
};

export default function GalleryModal({ title, children }: GalleryModalProps) {
  const router = useRouter();
  const overlayRef = useRef<HTMLDivElement>(null);

  // router.back() rather than push('/gallery') — keeps native browser
  // back-button behavior intact and doesn't add an extra history entry.
  const close = () => router.back();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === overlayRef.current) close();
  };

  return (
    <div
      ref={overlayRef}
      className={styles.overlay}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className={styles.panel}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button type="button" className={styles.closeButton} onClick={close} aria-label="Close">
            ✕
          </button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}