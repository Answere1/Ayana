import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icons";
import { products } from "@/data/products";


const popularProducts = products.slice(0, 3);

export default function HomePage() {
  return (
    <main id="top">
      <Header />

      <section className="hero" aria-labelledby="hero-title">
        <Image
          alt="A portrait adorned with a brilliant diamond necklace"
          className="hero-image"
          src="/assets/model1.jpg"
          fill
          sizes="100vw"
          priority
        />
        <div className="hero-shade"></div>
        <div className="hero-copy">
          <p className="eyebrow">ИСКУССТВО СВЕТА</p>
          <h1 id="hero-title">
            Наследие
            <br />
            в каждом <em>аспекте.</em>
          </h1>
          <a className="light-link" href="/catalog">
            ОТКРЫТЬ КОЛЛЕКЦИЮ <Icon name="arrow" />
          </a>
        </div>
        <div className="hero-caption">
          ОСЕННЯЯ КОЛЛЕКЦИЯ <span>01 / 04</span>
        </div>
        <a className="scroll-cue" href="#pieces" aria-label="Scroll to discover">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-down"
            aria-hidden="true"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </a>
      </section>


      <section className="popular-products" id="pieces" aria-labelledby="popular-title">
        <span id="intro" className="popular-anchor" aria-hidden="true" />
        <span id="collections" className="popular-anchor" aria-hidden="true" />

        <div className="popular-heading">
          <h2 id="popular-title">Популярные украшения</h2>
          <Link href="/catalog" className="popular-view-all">
            Смотреть все <Icon name="arrow" />
          </Link>
        </div>

        <div className="popular-grid">
          {popularProducts.map((product) => (
            <article
              className={`popular-card popular-card--${product.id}`}
              key={product.id}>
              <a href="/catalog" className="popular-product-link">
                <div className="popular-image">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={1000}
                    height={750}
                    sizes="(max-width: 760px) 43vw, 21vw"
                  />
                </div>
                <div className="popular-info">
                  <h3>{product.name}</h3>
                  <p className="popular-detail">{product.detail}</p>
                  <p className="popular-price">{product.price}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="atelier" id="story">
        <div className="atelier-copy">
          <p className="eyebrow">ТРУД РЕМЕСЛЕННИКОВ</p>
          <h2>
            Одно ателье.
            <br />
            <em>Тысяча</em>
            <br />
            возможностей.
          </h2>
          <p>
            В самом сердце Дубая наши мастера дарят каждому изделию свою неповторимую, спокойную жизнь. Создано, чтобы служить вечно.
          </p>
          <a href="/about" className="light-link">НАША МАСТЕРСКАЯ <Icon name="arrow" /></a>
        </div>
        <div className="atelier-image">
          <Image
            alt="Fine gold jewelry crafted with meticulous detail"
            loading="lazy"
            src="/assets/model2.jpg"
            fill
            sizes="100vw"
          />
        </div>
      </section>

      <section className="appointment" id="appointment">
        <p className="eyebrow">МОМЕНТ ДЛЯ ВАС</p>
        <h2>
          Некоторые вещи
          <br />
          лучше <em>увидеть</em> лично.
        </h2>
          <a href="/about" className="text-link appointment-button">КОНТАКТЫ <Icon name="arrow" /></a>
      </section>

      <Footer />
    </main>
  );
}
