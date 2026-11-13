"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { Icon } from "./Icons";

export function Dialog({ open, title, onClose, children }: {
    open: boolean; title: string; onClose: () => void; children: ReactNode;
}) {
    const ref = useRef<HTMLDialogElement>(null);
    const titleId = useId();
    useEffect(() => {
        const dialog = ref.current;
        if (open && dialog && !dialog.open) dialog.showModal();
        if (!open && dialog?.open) dialog.close();
    }, [open]);
    return <dialog ref={ref} className="site-dialog" aria-labelledby={titleId} onClose={onClose}
        onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
        <button type="button" className="dialog-close icon-button" aria-label="Close dialog" onClick={onClose}><Icon name="close" /></button>
        <p className="eyebrow">AYANA</p>
        <h2 id={titleId}>{title}</h2>
        {children}
    </dialog>;
}
