import type { SVGProps } from "react";

type IconName = "arrow" | "menu" | "close" | "search" | "bag";
export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
    const paths = {
        arrow: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
        menu: <><path d="M4 5h16M4 12h16M4 19h16" /></>,
        close: <path d="m6 6 12 12M18 6 6 18" />,
        search: <><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></>,
        bag: <><path d="M16 10a4 4 0 0 1-8 0M3.1 6h17.8" /><path d="M3.4 5.5A2 2 0 0 0 3 6.7V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.7a2 2 0 0 0-.4-1.2l-2-2.7A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /></>,
    };
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}
