"use client";

import { useState, type ReactNode } from "react";
import { Dialog } from "./Dialog";

export function AppointmentButton({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false);
    return <>
        <button type="button" className="text-link appointment-button" onClick={() => setOpen(true)}>{children}</button>
        <Dialog open={open} title="A moment, just for you" onClose={() => setOpen(false)}>
            <p>This is a showcase preview. Appointment booking will be available once AYANA’s contact details are added.</p>
        </Dialog>
    </>;
}
