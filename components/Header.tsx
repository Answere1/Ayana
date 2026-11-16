"use client";

import { useEffect, useState } from "react";
import { products } from "@/data/products";
import { Dialog } from "./Dialog";
import { Icon } from "./Icons";
import Image from "next/image";

const navigation = [
    { id: "collections", href: "/catalog", label: "Коллекции" },
    { id: "pieces", href: "/catalog", label: "Украшения" },
    { id: "about", href: "/about", label: "О нас" },
];

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [panel, setPanel] = useState<"search" | "bag" | null>(null);
    const [query, setQuery] = useState("");
    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, []);
    const results = products.filter(product => `${product.name} ${product.detail}`.toLowerCase().includes(query.trim().toLowerCase()));
    return <>
        <div className="announcement"></div>
        <header className="site-header">
            <button type="button" className="icon-button menu-trigger" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? "close" : "menu"} /></button>
            <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(link => <a key={link.id} href={link.href}>{link.label.toUpperCase()}</a>)}</nav>
            <a className="wordmark" href="/" aria-label="AYANA home"><Image src="assets\ayanalogo.png" alt="1" width={100} height={50} style={{
                width: "180px",
                height: "auto",
            }}
                 /></a>
            <div className="header-actions">
                <button type="button" className="icon-button search-button" aria-label="Search" onClick={() => setPanel("search")}><Icon name="search" /></button>
                <button type="button" className="icon-button bag-button" aria-label="Shopping bag, 0 items" onClick={() => setPanel("bag")}><Icon name="bag" /><span>(0)</span></button>
            </div>
        </header>
        <nav id="mobile-navigation" className="mobile-menu" aria-label="Mobile navigation" hidden={!menuOpen}>
            {[...navigation, { id: "appointment", href: "", label: "Book an appointment" }].map(link => <a key={link.id} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}<Icon name="arrow" /></a>)}
        </nav>
        <Dialog open={panel !== null} title={panel === "search" ? "Поиск украшений" : "Список избранного"} onClose={() => setPanel(null)}>
            {panel === "search" ? <>
                <label htmlFor="jewellery-search">Поиск</label>
                <input id="jewellery-search" type="search" placeholder="Кольца, ожерелья, серьги…" autoComplete="off" value={query} onChange={event => setQuery(event.target.value)} />
                <div id="search-results" aria-live="polite">{results.length ? results.map(product => <a key={product.id} href="#pieces" onClick={() => setPanel(null)}>{product.name}</a>) : <p>Не найдено</p>}</div>
            </> : <><p>Ваш список избранное пуст.</p><a className="text-link" href="#pieces" onClick={() => setPanel(null)}><Icon name="arrow" /></a></>}
        </Dialog>
    </>;
}
