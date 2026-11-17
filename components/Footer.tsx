import Image from "next/image";

export function Footer() {
    return (
        <footer className="site-footer">
            <a className="wordmark footer-mark" href="#top"><Image src="assets\ayanalogow.png" alt="1" width={100} height={50} style={{
                            width: "110px",
                            height: "auto",
                        }}
                             />
            </a>
            <div className="footer-links">
                <a href="/catalog">Украшения</a>
                <a href="/about">Наше ателье</a>
                <a href="/about">Контакты</a>
                <a href="/about">Уход и сервис</a>
            </div>
            <p>© 2026 AYANA · DUBAI</p>
        </footer>
    );
}
