"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Dialog } from "@/components/Dialog";
import { catalogProducts, type CatalogProduct } from "@/data/catalog-products";
import "./module-catalog.css";


const groups = [
  { key: "category", title: "Категория", values: ["Кольца", "Серьги", "Ожерелья", "Браслеты"] },
  { key: "metal", title: "Металл", values: ["Жёлтое золото", "Белое золото", "Розовое золото", "Платина"] },
  { key: "stone", title: "Вставка", values: ["Бриллиант", "Сапфир", "Изумруд", "Рубин", "Без камней"] },
] as const;
type FilterKey = (typeof groups)[number]["key"];
type Filters = Record<FilterKey, string[]>;
const emptyFilters: Filters = { category: [], metal: [], stone: [] };
const ceiling = Math.max(...catalogProducts.map(product => product.price));
const money = (value: number) => new Intl.NumberFormat("ru-RU").format(value) + " ₸";
function resultLabel(count: number) {
  const remainder = count % 100;
  const last = count % 10;
  return remainder >= 11 && remainder <= 14 ? "изделий" : last === 1 ? "изделие" : last >= 2 && last <= 4 ? "изделия" : "изделий";
}

// Поддерживает и прежние строки, и массивы из нескольких вставок.
function getStones(stone: string | readonly string[]): readonly string[] {
  return typeof stone === "string" ? [stone] : stone;
}

export default function CatalogPage() {
  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("popular");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [query, setQuery] = useState("");
  const [mobileFilters, setMobileFilters] = useState(false);
  const [selected, setSelected] = useState<CatalogProduct | null>(null);
  const minimum = minPrice === "" ? 0 : Number(minPrice);
  const maximum = maxPrice === "" ? ceiling : Number(maxPrice);
  const results = catalogProducts.filter(product =>
    groups.every(group => {
      const chosen = filters[group.key];
      if (!chosen.length) return true;
      return group.key === "stone"
        ? chosen.some(stone => getStones(product.stone).includes(stone))
        : chosen.includes(product[group.key]);
    }) &&
    product.price >= minimum && product.price <= maximum &&
    `${product.name} ${product.category} ${product.metal} ${getStones(product.stone).join(" ")}`.toLocaleLowerCase("ru-RU").includes(query.trim().toLocaleLowerCase("ru-RU"))
  ).sort((a, b) => sort === "price-low" ? a.price - b.price : sort === "price-high" ? b.price - a.price : sort === "name" ? a.name.localeCompare(b.name, "ru") : a.rank - b.rank);
  const activeCount = Object.values(filters).flat().length + Number(minPrice !== "") + Number(maxPrice !== "");
  function toggle(key: FilterKey, value: string) {
    setFilters(previous => ({ ...previous, [key]: previous[key].includes(value) ? previous[key].filter(item => item !== value) : [...previous[key], value] }));
  }
  function reset() { setFilters(emptyFilters); setMinPrice(""); setMaxPrice(""); setQuery(""); }

  return <>
    <Header />
    <main className="catalog-page" id="top">
      <div className="catalog-layout">
        <aside className={`catalog-sidebar${mobileFilters ? " catalog-sidebar-open" : ""}`} id="catalog-filters" aria-label="Фильтры каталога">
          <div className="catalog-filter-heading"><h2>Фильтры</h2><button type="button" onClick={reset}>Сбросить</button></div>
          {groups.map(group => <details className="catalog-filter-group" key={group.key} open>
            <summary>{group.title}<span aria-hidden="true">⌄</span></summary>
            <div className="catalog-options">{group.values.map(value => {
              const count = catalogProducts.filter(product =>
                group.key === "stone"
                  ? getStones(product.stone).includes(value)
                  : product[group.key] === value
              ).length;
              return <label key={value} className={count ? "" : "catalog-option-disabled"}>
                <input type="checkbox" checked={filters[group.key].includes(value)} disabled={!count} onChange={() => toggle(group.key, value)} />
                <span>{value} <span className="catalog-option-count">({count})</span></span>
              </label>;
            })}</div>
          </details>)}
          <details className="catalog-filter-group" open>
            <summary>Цена<span aria-hidden="true">⌄</span></summary>
            <div className="catalog-price-inputs">
              <label><span className="catalog-sr-only">Цена от, тенге</span><input type="number" min="0" max={ceiling} placeholder="От" value={minPrice} onChange={event => setMinPrice(event.target.value)} /></label>
              <label><span className="catalog-sr-only">Цена до, тенге</span><input type="number" min="0" placeholder="До" value={maxPrice} onChange={event => setMaxPrice(event.target.value)} /></label>
            </div>
            <div className="catalog-price-ranges">
              <label>От: {money(minimum)}<input type="range" min="0" max={ceiling} step="10000" value={Math.min(Math.max(minimum, 0), ceiling)} onChange={event => setMinPrice(event.target.value)} /></label>
              <label>До: {money(maximum)}<input type="range" min="0" max={ceiling} step="10000" value={Math.min(Math.max(maximum, 0), ceiling)} onChange={event => setMaxPrice(event.target.value)} /></label>
            </div>
            {minimum > maximum && <p className="catalog-price-error" role="status">Цена «от» превышает цену «до».</p>}
          </details>
          <button className="catalog-apply-mobile" type="button" onClick={() => setMobileFilters(false)}>Показать {results.length} {resultLabel(results.length)}</button>
        </aside>

        <section className="catalog-content" aria-labelledby="catalog-title">
          <nav className="catalog-breadcrumbs" aria-label="Хлебные крошки"><Link href="/">Главная</Link><span aria-hidden="true">/</span><span aria-current="page">Каталог</span></nav>
          <h1 id="catalog-title">Каталог</h1>
          <div className="catalog-toolbar">
            <p className="catalog-result-count" role="status">Найдено: {results.length} {resultLabel(results.length)}</p>
            <button type="button" className="catalog-filter-toggle" aria-expanded={mobileFilters} aria-controls="catalog-filters" onClick={() => setMobileFilters(!mobileFilters)}>Фильтры{activeCount > 0 ? ` (${activeCount})` : ""}</button>
            <div className="catalog-sort"><label htmlFor="catalog-sort">Сортировка:</label><select id="catalog-sort" value={sort} onChange={event => setSort(event.target.value)}><option value="popular">По популярности</option><option value="price-low">Сначала дешевле</option><option value="price-high">Сначала дороже</option><option value="name">По названию</option></select></div>
            <div className="catalog-view" role="group" aria-label="Вид каталога">
              <button type="button" aria-label="Сетка" aria-pressed={view === "grid"} onClick={() => setView("grid")}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" fill="currentColor" /></svg></button>
              <button type="button" aria-label="Список" aria-pressed={view === "list"} onClick={() => setView("list")}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 5h20M2 12h20M2 19h20" stroke="currentColor" fill="none" /></svg></button>
            </div>
          </div>
          <label className="catalog-search"><span className="catalog-sr-only">Поиск по каталогу</span><input type="search" placeholder="Найти украшение" value={query} onChange={event => setQuery(event.target.value)} /></label>
          {activeCount > 0 && <div className="catalog-active-filters">{groups.flatMap(group => filters[group.key].map(value => <button type="button" key={`${group.key}-${value}`} onClick={() => toggle(group.key, value)} aria-label={`Убрать фильтр ${value}`}>{value} <span aria-hidden="true">×</span></button>))}<button type="button" onClick={reset}>Сбросить всё</button></div>}
          <div className={`catalog-products${view === "list" ? " catalog-products-list" : ""}`}>
            {results.map(product => <article className={`catalog-card catalog-card--${product.id}`} key={product.id}>
              <button type="button" className="catalog-product-button" onClick={() => setSelected(product)} aria-label={`Подробнее: ${product.name}`} aria-haspopup="dialog">
                <div className="catalog-product-image"><Image src={product.image} alt={product.name} width={600} height={480} /></div>
                <div className="catalog-product-info"><h2>{product.name}</h2><p className="catalog-product-price">{money(product.price)}</p><p className="catalog-product-detail">{product.metal}, {getStones(product.stone).join(", ").toLocaleLowerCase("ru-RU")}</p></div>
              </button>
            </article>)}
          </div>
          {!results.length && <div className="catalog-empty"><h2>Ничего не найдено</h2><p>Измените фильтры или поисковый запрос.</p><button type="button" onClick={reset}>Сбросить фильтры</button></div>}
        </section>
      </div>
    </main>
    <Footer />
    <Dialog open={selected !== null} title={selected?.name ?? "Украшение"} onClose={() => setSelected(null)}>
      {selected && <div className="catalog-modal-content">
        <Image src={selected.image} alt={selected.name} width={600} height={480} className="catalog-modal-image" />
        <p className="catalog-modal-price">{money(selected.price)}</p>
        <dl className="catalog-specs"><div><dt>Категория</dt><dd>{selected.category}</dd></div><div><dt>Металл</dt><dd>{selected.metal}</dd></div><div><dt>Вставка</dt><dd>{getStones(selected.stone).join(", ")}</dd></div></dl>
        <p>{selected.description}</p>
        <Link className="catalog-contact" href="/#appointment" onClick={() => setSelected(null)}>Узнать подробнее</Link>
      </div>}
    </Dialog>
  </>;
}
