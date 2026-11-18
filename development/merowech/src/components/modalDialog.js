import React, { useEffect, useId, useRef } from 'react';
import { Icon } from './icons';

export function ModalDialog({ isOpen, onClose, title, children }) {
  const dialogRef = useRef(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      dialog.returnValue = '';
      if (onClose) onClose();
    };
    dialog.addEventListener('close', handleClose);

    // Fallback for browsers that do not yet support declarative closedby="any"
    let handleBackdropClick = null;
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      handleBackdropClick = (event) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;
        if (isDialogContent) return;
        dialog.close();
      };
      dialog.addEventListener('click', handleBackdropClick);
    }

    return () => {
      dialog.removeEventListener('close', handleClose);
      if (handleBackdropClick) {
        dialog.removeEventListener('click', handleBackdropClick);
      }
    };
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      className="site-dialog"
      aria-labelledby={titleId}
      {...{ closedby: 'any' }}
    >
      <div className="dialog-header">
        <h2 id={titleId} className="dialog-title">
          {title}
        </h2>
        <form method="dialog">
          <button type="submit" className="dialog-close-btn" aria-label="Close dialog" autoFocus>
            <Icon name="close" size={18} />
          </button>
        </form>
      </div>
      <div className="dialog-body">{children}</div>
    </dialog>
  );
}
