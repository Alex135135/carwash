'use client';

import { useEffect, ReactNode } from 'react';
import s from './Modal.module.scss';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    type?: 'success' | 'error' | 'info' | 'warning';
    showCloseButton?: boolean;
    closeOnOverlayClick?: boolean;
}

export function Modal({
    isOpen,
    onClose,
    title,
    children,
    type = 'info',
    showCloseButton = true,
    closeOnOverlayClick = true,
}: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (closeOnOverlayClick && e.target === e.currentTarget) {
            onClose();
        }
    };

    const getIcon = () => {
        switch (type) {
            case 'success':
                return (
                    <svg className={s.icon} viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                );
            case 'error':
                return (
                    <svg className={s.icon} viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                );
            case 'warning':
                return (
                    <svg className={s.icon} viewBox="0 0 24 24" fill="none">
                        <path d="M12 9V13M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 3L3 21H21L12 3Z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                );
            default:
                return (
                    <svg className={s.icon} viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M12 12V16M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                );
        }
    };

    return (
        <div className={s.overlay} onClick={handleOverlayClick}>
            <div className={`${s.modal} ${s[type]}`}>
                {(title || getIcon()) && (
                    <div className={s.header}>
                        <div className={s.headerLeft}>
                            {getIcon()}
                            {title && <h3 className={s.title}>{title}</h3>}
                        </div>
                        {showCloseButton && (
                            <button className={s.closeButton} onClick={onClose} aria-label="Закрыть">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>
                        )}
                    </div>
                )}
                <div className={s.content}>{children}</div>
                {type !== 'info' && (
                    <div className={s.footer}>
                        <button className={s.button} onClick={onClose}>
                            {type === 'success' ? 'Отлично!' : 'Закрыть'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}