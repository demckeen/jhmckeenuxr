'use client';
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    const handleEscape = (e) => e.key === 'Escape' && onClose();
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div onClick={onClose} className='modal' style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center',
      alignItems: 'center', zIndex: 1000
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        position: 'relative', height: '100vh'
      }}>
        <button onClick={onClose} style={{position: 'fixed', top: 10, right: 30}}><IoClose /></button>
        {children}
      </div>
    </div>
  );
}