import React, { useRef, useState } from 'react';
import { Icon } from './icons';

// Page-wide tracker so repeated announcements differ by \u00A0 for VoiceOver
let lastAnnouncedMessage = '';

function legacyCopy(text) {
  const field = Object.assign(document.createElement('textarea'), { value: text });
  field.setAttribute('readonly', '');
  field.style.cssText = 'position:fixed;inset-block-start:0;opacity:0';
  document.body.append(field);
  field.select();
  try {
    return document.execCommand('copy');
  } finally {
    field.remove();
  }
}

export function CopyButton({ text, label, ariaLabel, className = '' }) {
  const [state, setState] = useState('idle'); // 'idle' | 'copied' | 'failed'
  const [tipText, setTipText] = useState('');
  const timerRef = useRef(null);

  async function handleCopy() {
    if (!text) return;
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch {
      ok = legacyCopy(text);
    }

    clearTimeout(timerRef.current);
    setState('idle');
    setTipText('');

    let msg = ok ? 'Copied' : 'Copy failed';
    if (msg === lastAnnouncedMessage) {
      msg += '\u00A0';
    }
    lastAnnouncedMessage = msg;

    requestAnimationFrame(() => {
      setState(ok ? 'copied' : 'failed');
      setTipText(msg);
    });

    timerRef.current = setTimeout(() => {
      setState('idle');
      setTipText('');
    }, 2000);
  }

  const stateProps =
    state === 'copied'
      ? { 'data-copied': '' }
      : state === 'failed'
        ? { 'data-failed': '' }
        : {};

  return (
    <span className={`copy-wrap ${className}`.trim()}>
      <button
        type="button"
        className="copy-button"
        onClick={handleCopy}
        aria-label={!label ? ariaLabel : undefined}
        {...stateProps}
      >
        <Icon name={state === 'copied' ? 'check' : 'copy'} size={15} />
        {label ? <span>{label}</span> : null}
      </button>
      <span className="copy-tip" role="status">
        {tipText}
      </span>
    </span>
  );
}
