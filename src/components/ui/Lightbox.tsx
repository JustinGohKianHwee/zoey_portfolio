'use client';

import { useEffect, useCallback, useState } from 'react';
import Image from 'next/image';

interface LightboxState {
  open: boolean;
  src: string;
  alt: string;
}

export function useLightbox() {
  const [state, setState] = useState<LightboxState>({ open: false, src: '', alt: '' });

  const openLightbox = useCallback((src: string, alt: string) => {
    setState({ open: true, src, alt });
  }, []);

  const closeLightbox = useCallback(() => {
    setState((prev) => ({ ...prev, open: false }));
  }, []);

  return { open: state.open, src: state.src, alt: state.alt, openLightbox, closeLightbox };
}

interface LightboxProps {
  open: boolean;
  src: string;
  alt: string;
  onClose: () => void;
}

export function Lightbox({ open, src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open || !src) return null;

  return (
    <div
      className="fixed inset-0 z-[200] bg-ink/85 flex items-center justify-center motion-safe:transition-opacity motion-safe:duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        className="absolute top-4 right-6 font-sans text-2xl text-bg/60 hover:text-bg transition-colors duration-150 leading-none"
        onClick={onClose}
        aria-label="Close image"
      >
        ×
      </button>
      <div
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={1200}
          className="max-h-[90vh] max-w-[90vw] w-auto h-auto object-contain"
          sizes="90vw"
          priority
        />
      </div>
    </div>
  );
}
