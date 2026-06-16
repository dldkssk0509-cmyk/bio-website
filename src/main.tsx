import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Menu, X, MoveLeft, MoveRight, Mail, MapPin, Phone, Send, TrendingUp, Leaf, Network, Globe, Search, FlaskConical, GitBranch, Building2 } from 'lucide-react';
import './styles.css';

const assets = {
  logo: 'https://www.figma.com/api/mcp/asset/fe65b44e-d1c5-49b9-b31c-35f6973050b9',
  hero: 'https://www.figma.com/api/mcp/asset/2771d761-5bdd-44a7-9362-42bd31b39f37',
  dna: 'https://www.figma.com/api/mcp/asset/2771d761-5bdd-44a7-9362-42bd31b39f37',
  esg: 'https://www.figma.com/api/mcp/asset/1fda3249-f2d2-495d-9cf1-61b337e8f440',
  product1: 'https://www.figma.com/api/mcp/asset/c4d6a6c9-b588-43aa-8a6b-b6d1bb84520e',
  product2: 'https://www.figma.com/api/mcp/asset/98209e4b-1012-4faf-8846-978d674b52db',
  product3: 'https://www.figma.com/api/mcp/asset/cf2f52bb-3edc-4b9f-bd5e-63096a2f90fc',
  product4: 'https://www.figma.com/api/mcp/asset/342cfa3e-437a-473f-8427-2e97584d519b',
  press1: 'https://www.figma.com/api/mcp/asset/cc0da067-6fd3-4af8-8499-8a1dc1f6aaf9',
  press2: 'https://www.figma.com/api/mcp/asset/14a563f0-5799-4790-8a84-7e78378f1113',
  press3: 'https://www.figma.com/api/mcp/asset/76df49bd-4b15-4947-9735-a605a59ea35d'
};

const navItems = [
  ['About Us', 'top'],
  ['R&D', 'rnd'],
  ['B&HF', 'pipeline'],
  ['NEWS', 'news'],
  ['ESG', 'esg'],
  ['CAREERS', 'contact']
];

const rndCards = [
  ['Discovery', '질병의 원인이 되는 타겟을 정의하고 후보물질을 설계합니다.'],
  ['Preclinical', '동물 모델 기반 실험으로 후보물질의 안전성과 약효를 검증합니다.'],
  ['Pipeline', '인체 대상 임상을 통해 치료제의 안전성과 유효성을 검증합니다.'],
  ['Licensing-Out', '개발된 후보물질을 글로벌 제약사에 이전해 가치를 실현합니다.']
];

const products = [
  ['inducera', assets.product1, '이중 코팅 기술과 신공정을 적용해 성능을 높인 골이식재'],
  ['biocera-F', assets.product2, '안전하고 편리한 시린지 타입 이종골 이식재'],
  ['syncera II', assets.product3, '이중 기공 구조의 순수 β-TCP 합성골 이식재'],
  ['collaCera', assets.product4, '조작이 편리한 putty형 콜라겐 합성골']
];

const press = [
  ['2026.04.09', assets.press1, "오스코텍 R&D 설계자 윤태영... 지배구조 안개 걷어낼 '파이프라인의 힘'"],
  ['2026.04.09', assets.press2, '"오스코텍, 핵심 파이프라인 기술이전 기대감"'],
  ['2026.04.09', assets.press3, '윤태영 오스코텍 대표 "2년 내 신약 2종 기술이전"']
];

const esgIcons = [Leaf, Network, Globe];
const rndIcons = [Search, FlaskConical, GitBranch, Building2];

function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="site-header">
      <a className="logo" href="#top" aria-label="Oscotec home">
        <img src={assets.logo} alt="Oscotec" />
      </a>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">
        {navItems.map(([item, target]) => <a href={`#${target}`} key={item}>{item}</a>)}
        <a className="contact-pill" href="#contact">Contact</a>
      </nav>
      <button className="menu-button" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="container">
        <h1>FROM DISCOVERY TO VALUE</h1>
        <div className="hero-video-card reveal">
          <video autoPlay muted loop playsInline poster={assets.hero}>
            <source src="/videos/0617(1).mp4" type="video/mp4" />
          </video>
          <div className="video-overlay">
            <span>OSCOTEC R&D PLATFORM</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro section reveal">
      <div className="container narrow">
        <h2>Beyond Innovation.<br />Towards A Healthier Future For All.</h2>
        <p>오스코텍은 글로벌 임상 단계에서 혁신 신약을 연구·개발하는 기업입니다.</p>
        <p>최첨단 생명과학 성과를 신약 개발로 연결하고, 의사와 환자에게 새로운 치료 희망을 제공합니다.</p>
      </div>
    </section>
  );
}

function DnaGraphic() {
  return (
    <div className="dna-field" aria-hidden="true">
      <img className="dna-image" src={assets.dna} alt="" />
    </div>
  );
}

function RnD() {
  return (
    <section className="rnd section" id="rnd">
      <div className="container rnd-grid">
        <div className="section-copy reveal">
          <span className="eyebrow">Research & Development</span>
          <h2>Cutting-edge Technology for Global Health</h2>
          <p>독자적인 기술 플랫폼을 기반으로 혁신 신약 개발의 전 과정을 내재화하여 글로벌 수준의 연구 역량을 확보하고 있습니다.</p>
          <a className="text-link" href="#pipeline">Learn More About Our Science <ArrowRight size={18} /></a>
        </div>
        <DnaGraphic />
        <div className="rnd-card-grid">
          {rndCards.map(([title, desc], index) => {
            const Icon = rndIcons[index];
            return (
              <article className="rnd-card reveal" style={{ transitionDelay: `${index * 80}ms` }} key={title}>
                <div className="card-icon"><Icon size={24} strokeWidth={2} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Pipeline() {
  return (
    <section className="pipeline section" id="pipeline">
      <div className="container pipeline-layout">
        <div className="pipeline-head reveal">
          <h2>바이오 의약품<br />제품 및 파이프라인</h2>
          <div className="tabs" aria-label="제품 분류">
            <button className="active">치료제/의약품 사업</button>
            <button>치과용 의료기기</button>
          </div>
        </div>
        <div className="product-wrap">
          <div className="mint-glow" />
          {products.map(([name, image, desc], index) => (
            <article className="product-card reveal" style={{ transitionDelay: `${index * 70}ms` }} key={name}>
              <h3>{name}</h3>
              <div className="product-image"><img src={image} alt="" /></div>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ESG() {
  const items = ['Environmental', 'Social', 'Governance'];
  return (
    <section className="esg section" id="esg">
      <img src={assets.esg} alt="" className="esg-bg" />
      <div className="container esg-content">
        <div className="section-copy light reveal">
          <span className="eyebrow">Sustainable Management</span>
          <h2>ESG</h2>
          <p>환경과 사회, 투명한 지배구조를 바탕으로 지속 가능한 혁신을 만들어갑니다.</p>
          <a className="white-button" href="#">ESG Report 2025 <ArrowRight size={16} /></a>
        </div>
        <div className="esg-cards">
          {items.map((item, index) => {
            const Icon = esgIcons[index];
            return (
              <article className="glass-card reveal" style={{ transitionDelay: `${index * 90}ms` }} key={item}>
                <span className="esg-icon"><Icon size={22} strokeWidth={2.1} /></span>
                <h3>{item}</h3>
                <p>{index === 0 ? '지속 가능한 연구 환경' : index === 1 ? '임직원과 지역사회 가치' : '투명하고 책임 있는 경영'}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PressRelease() {
  return (
    <section className="press section" id="news">
      <div className="container">
        <div className="section-title-row reveal">
          <button aria-label="Previous press release"><MoveLeft size={22} /></button>
          <h2>Press Release</h2>
          <button aria-label="Next press release"><MoveRight size={22} /></button>
        </div>
        <div className="press-grid">
          {press.map(([date, image, title], index) => (
            <article className="press-card reveal" style={{ transitionDelay: `${index * 70}ms` }} key={title}>
              <img src={image} alt="" />
              <time>{date}</time>
              <h3>{title}</h3>
            </article>
          ))}
        </div>
        <a className="outline-button reveal" href="#">Read More <ArrowRight size={18} /></a>
      </div>
    </section>
  );
}

function Investor() {
  return (
    <section className="investor section" id="ir/pr">
      <div className="container investor-grid">
        <article className="stock-card reveal">
          <div className="stock-meta"><span>오스코텍</span><span>322440</span><span>KOSPI</span></div>
          <div className="stock-price">
            <small>2026년 4월 00일 현재가(원)</small>
            <strong>42,200</strong>
            <span><TrendingUp size={24} /> 550 (1.32%)</span>
          </div>
        </article>
        <article className="ir-card reveal">
          <h2>Investor<br />Relations</h2>
          <a href="#">Read More <ArrowRight size={18} /></a>
        </article>
      </div>
    </section>
  );
}

function ContactUs() {
  const items = ['Careers', 'Customer Inquiries', 'COM'];
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2>Contact US</h2>
        <div className="contact-list">
          {items.map((item) => (
            <a href="#" key={item}>
              <span>{item}</span>
              <small>{item === 'Careers' ? '인재채용 문의' : item === 'COM' ? '기업소개 자료' : '고객문의 및 제휴'}</small>
              <ArrowRight size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img src={assets.logo} alt="Oscotec" className="footer-logo" />
          <p>Advancing innovative therapeutics through cutting-edge R&D to improve human health.</p>
          <div className="socials" aria-label="Social links">
            <span>IG</span><span>FB</span><Send /><span>IN</span><span>YT</span>
          </div>
        </div>
        <div><h3>Quick Links</h3><a>About Company</a><a>Research & Development</a><a>Investor Relations</a><a>Careers</a></div>
        <div><h3>Contact</h3><p><MapPin size={16} /> 경기도 성남시 분당구 대왕판교로 700</p><p><Phone size={16} /> +82 031-628-7668</p><p><Mail size={16} /> careers@oscotec.com</p></div>
        <div><h3>Newsletter</h3><p>Stay updated with our latest research and news.</p><form><input placeholder="email address" /><button>Join</button></form></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 OSCOTEC Inc. All rights reserved.</span><span>개인정보처리방침 · 이용약관 · 쿠키 설정</span></div>
    </footer>
  );
}

function App() {
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.16 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <RnD />
        <Pipeline />
        <ESG />
        <PressRelease />
        <Investor />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
