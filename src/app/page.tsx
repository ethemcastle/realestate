/* eslint-disable @next/next/no-img-element, react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { HeroSearch } from "@/components/meridian/hero-search";
import { ScrollReveal } from "@/components/meridian/scroll-reveal";
import { PropertyExplorer } from "@/components/meridian/property-explorer";
import "./meridian.css";

export const metadata: Metadata = {
  title: {
    absolute: "fixcmimi.al — Fairly priced homes across Albania",
  },
  description:
    "fixcmimi.al is a real-estate agency offering fairly priced homes for sale and rent across Albania — Tirana, Durrës, Vlorë and Sarandë.",
};

const TICKER = [
  { code: "MR-047", name: "Sauk Hilltop Villa", loc: "Tiranë", price: "€138,000" },
  { code: "MR-052", name: "Blloku Penthouse", loc: "Tiranë", price: "€119,000" },
  { code: "MR-031", name: "Lungomare Apartment", loc: "Vlorë", price: "€74,000" },
  { code: "MR-019", name: "Ksamil Beachfront Villa", loc: "Sarandë", price: "€199,000" },
  { code: "MR-068", name: "Liqeni i Thatë Residence", loc: "Tiranë", price: "€480 / mo" },
  { code: "MR-074", name: "Durrës Marina Loft", loc: "Durrës", price: "€62,000" },
  { code: "MR-082", name: "Tirana e Re Apartment", loc: "Tiranë", price: "€49,000" },
  { code: "MR-029", name: "Plazh Iliria Townhouse", loc: "Durrës", price: "€86,000" },
  { code: "MR-091", name: "Radhimë Cliff House", loc: "Vlorë", price: "€165,000" },
  { code: "MR-104", name: "Borsh Coastal Villa", loc: "Sarandë", price: "€175,000" },
];

function BrandLogo() {
  return (
    <>
      <svg className="brand-logo-mark" viewBox="0 0 36 36" aria-hidden="true">
        <rect width="36" height="36" rx="9" fill="currentColor" />
        <path d="M6.5 18 L18 8 L29.5 18 Z" fill="#fff" />
        <rect x="10.5" y="16.5" width="15" height="12" fill="#fff" />
        <rect x="15" y="20" width="6" height="6" rx="0.8" fill="currentColor" />
      </svg>
      <span className="brand-logo-word">
        <span className="accent">fix</span>cmimi<span className="accent">.</span>al
      </span>
    </>
  );
}

export default function Home() {
  return (
    <div className="meridian">
      {/* UTILITY BAR */}
      <div className="utility">
        <div className="wrap utility-inner">
          <div className="utility-left">
            <span>+355 4 224 8814</span>
            <span className="pipe">/</span>
            <a href="mailto:hello@fixcmimi.al">hello@fixcmimi.al</a>
            <span className="pipe addr">/</span>
            <span className="addr">Rr. Ibrahim Rugova 11, Tiranë</span>
          </div>
          <div className="utility-right">
            <div className="social">
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="Facebook">Facebook</a>
            </div>
            <span className="pipe">/</span>
            <div className="lang">
              <a href="#" className="active">EN</a>
              <span className="pipe">·</span>
              <a href="#">SQ</a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="main">
        <div className="wrap nav-inner">
          <Link href="/" className="brand-logo" aria-label="fixcmimi.al — home">
            <BrandLogo />
          </Link>
          <ul className="nav-links">
            <li><a href="#properties">Properties</a></li>
            <li><a href="#cities">Cities</a></li>
            <li><a href="#approach">Approach</a></li>
            <li><a href="#agents">Agents</a></li>
            <li><a href="#journal">Journal</a></li>
          </ul>
          <a href="#inquire" className="nav-cta">List a property</a>
        </div>
      </nav>

      {/* HERO BANNER */}
      <header className="hero-banner">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=2000&auto=format&q=80"
            alt="A modern Mediterranean villa above the coast at golden hour"
          />
        </div>

        <div className="wrap hero-content">
          <span className="eyebrow">Tirana · Durrës · Vlorë · Sarandë</span>
<h1 className="hero-headline"><span className="softer">text </span><span className="italic">changed</span></h1><p className="hero-sub">A boutique real-estate agency working with a small, considered collection of properties across Albania — from a sea-facing apartment in Vlorë to a hillside villa above Tirana.</p>

          <HeroSearch />
        </div>
      </header>

      {/* STATS STRIP */}
      <section className="hero-strip">
        <div className="wrap hero-strip-inner">
          <div className="hero-strip-item"><span className="num">142</span><span className="lbl">Active listings</span></div>
          <div className="hero-strip-item"><span className="num">4</span><span className="lbl">Cities covered</span></div>
          <div className="hero-strip-item"><span className="num">8</span><span className="lbl">Agents</span></div>
          <div className="hero-strip-item"><span className="num">2018</span><span className="lbl">Founded</span></div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker" aria-label="Currently listed properties">
        <div className="ticker-track">
          {[...TICKER, ...TICKER].map((item, index) => (
            <div className="ticker-item" key={`${item.code}-${index}`}>
              <span className="code">{item.code}</span>
              <span className="name">
                {item.name}{" "}
                <span style={{ color: "rgba(251,250,245,.4)" }}>· {item.loc}</span>
              </span>
              <span className="price">{item.price}</span>
              <span className="sep" />
            </div>
          ))}
        </div>
      </div>

      {/* PROPERTIES */}
      <section className="properties" id="properties">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Now showing</span>
              <h2>Properties of <span className="italic">substance.</span></h2>
            </div>
            <div className="meta">
              06 / <strong>142</strong> shown <br />
              Updated June 17, 2026
            </div>
          </div>

          <div className="prop-grid">
            <article className="card reveal">
              <div className="card-media">
                <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1000&auto=format&q=80" alt="Three-storey villa in Sauk i Ri with garden" />
                <div className="card-badges">
                  <span className="badge sale">For Sale</span>
                  <span className="badge exclusive">Exclusive</span>
                </div>
                <span className="card-ref">MR-047</span>
              </div>
              <div className="card-body">
                <div className="card-top">
                  <h3 className="card-name">Sauk Hilltop <span className="italic">Villa</span></h3>
                  <span className="card-price">€138,000</span>
                </div>
                <div className="card-loc">Sauk i Ri, Tiranë</div>
                <div className="card-data">
                  <span><strong>4</strong> bd</span>
                  <span><strong>3.5</strong> ba</span>
                  <span><strong>320</strong> m²</span>
                  <span><strong>3</strong> floors</span>
                </div>
              </div>
            </article>

            <article className="card reveal">
              <div className="card-media">
                <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1000&auto=format&q=80" alt="Top-floor penthouse in Blloku with skyline view" />
                <div className="card-badges">
                  <span className="badge sale">For Sale</span>
                </div>
                <span className="card-ref">MR-052</span>
              </div>
              <div className="card-body">
                <div className="card-top">
                  <h3 className="card-name">Blloku <span className="italic">Penthouse</span></h3>
                  <span className="card-price">€119,000</span>
                </div>
                <div className="card-loc">Blloku, Tiranë</div>
                <div className="card-data">
                  <span><strong>3</strong> bd</span>
                  <span><strong>2</strong> ba</span>
                  <span><strong>185</strong> m²</span>
                  <span><strong>9th</strong> fl</span>
                </div>
              </div>
            </article>

            <article className="card reveal">
              <div className="card-media">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&auto=format&q=80" alt="Modern apartment in Lungomare Vlorë with sea view" />
                <div className="card-badges">
                  <span className="badge sale">For Sale</span>
                </div>
                <span className="card-ref">MR-031</span>
              </div>
              <div className="card-body">
                <div className="card-top">
                  <h3 className="card-name">Lungomare <span className="italic">Apartment</span></h3>
                  <span className="card-price">€74,000</span>
                </div>
                <div className="card-loc">Lungomare, Vlorë</div>
                <div className="card-data">
                  <span><strong>2</strong> bd</span>
                  <span><strong>2</strong> ba</span>
                  <span><strong>120</strong> m²</span>
                  <span><strong>Sea</strong> view</span>
                </div>
              </div>
            </article>

            <article className="card reveal">
              <div className="card-media">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&auto=format&q=80" alt="Beachfront villa in Ksamil with white walls and pool" />
                <div className="card-badges">
                  <span className="badge sale">For Sale</span>
                  <span className="badge exclusive">Exclusive</span>
                </div>
                <span className="card-ref">MR-019</span>
              </div>
              <div className="card-body">
                <div className="card-top">
                  <h3 className="card-name">Ksamil Beachfront <span className="italic">Villa</span></h3>
                  <span className="card-price">€199,000</span>
                </div>
                <div className="card-loc">Ksamil, Sarandë</div>
                <div className="card-data">
                  <span><strong>5</strong> bd</span>
                  <span><strong>4</strong> ba</span>
                  <span><strong>380</strong> m²</span>
                  <span><strong>Beach</strong></span>
                </div>
              </div>
            </article>

            <article className="card reveal">
              <div className="card-media">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&auto=format&q=80" alt="Modern apartment in Liqeni i Thatë" />
                <div className="card-badges">
                  <span className="badge rent">For Rent</span>
                </div>
                <span className="card-ref">MR-068</span>
              </div>
              <div className="card-body">
                <div className="card-top">
                  <h3 className="card-name">Liqeni i Thatë <span className="italic">Residence</span></h3>
                  <span className="card-price">€480<span className="per"> / mo</span></span>
                </div>
                <div className="card-loc">Liqeni i Thatë, Tiranë</div>
                <div className="card-data">
                  <span><strong>3</strong> bd</span>
                  <span><strong>2</strong> ba</span>
                  <span><strong>165</strong> m²</span>
                  <span><strong>Furn.</strong></span>
                </div>
              </div>
            </article>

            <article className="card reveal">
              <div className="card-media">
                <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1000&auto=format&q=80" alt="Modern marina-front loft in Durrës" />
                <div className="card-badges">
                  <span className="badge sale">For Sale</span>
                </div>
                <span className="card-ref">MR-074</span>
              </div>
              <div className="card-body">
                <div className="card-top">
                  <h3 className="card-name">Durrës Marina <span className="italic">Loft</span></h3>
                  <span className="card-price">€62,000</span>
                </div>
                <div className="card-loc">Plazh, Durrës</div>
                <div className="card-data">
                  <span><strong>2</strong> bd</span>
                  <span><strong>2</strong> ba</span>
                  <span><strong>110</strong> m²</span>
                  <span><strong>Port</strong> view</span>
                </div>
              </div>
            </article>
          </div>

          <div className="properties-foot">
            <a href="#listings" className="btn">
              Browse all 142 listings <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* LISTINGS */}
      <section className="listings" id="listings">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">The collection</span>
              <h2>Browse every <span className="italic">listing.</span></h2>
            </div>
            <div className="meta">
              Filter by city,<br />
              type &amp; bedrooms
            </div>
          </div>
          <PropertyExplorer />
        </div>
      </section>

      {/* STUDIO */}
      <section className="studio" id="studio">
        <div className="wrap">
          <div className="studio-head reveal">
            <div>
              <span className="eyebrow">Inside the studio</span>
              <h2>Six rooms above the <span className="italic">boulevard.</span></h2>
            </div>
            <p>
              We work from a small office on Rruga Ibrahim Rugova in central
              Tirana — eight of us, a long table for viewings on paper, and a
              wall of keys to properties we know well. Most days we're out:
              walking listings, meeting owners, climbing the stairs of a
              building one more time before we recommend it.
            </p>
          </div>

          <div className="studio-grid">
            <figure className="studio-img tall reveal">
              <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=900&auto=format&q=80" alt="Mediterranean facade with shutters and stone detail" />
              <figcaption className="caption">Tiranë · Rr. Ibrahim Rugova</figcaption>
            </figure>
            <figure className="studio-img wide reveal">
              <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&auto=format&q=80" alt="Office interior with long wooden table and natural light" />
              <figcaption className="caption">The long table</figcaption>
            </figure>
            <figure className="studio-img small1 reveal">
              <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&q=80" alt="Albanian Alps and mountain landscape" />
              <figcaption className="caption">The hinterland</figcaption>
            </figure>
            <figure className="studio-img small2 reveal">
              <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&auto=format&q=80" alt="A property viewing in progress, light through tall windows" />
              <figcaption className="caption">A viewing</figcaption>
            </figure>
          </div>

          <div className="studio-foot reveal">
            <div className="studio-fact">
              <div className="v">142<span className="unit">+</span></div>
              <div className="l">Properties listed</div>
            </div>
            <div className="studio-fact">
              <div className="v">€48<span className="unit">M</span></div>
              <div className="l">Closed in 2025</div>
            </div>
            <div className="studio-fact">
              <div className="v">8</div>
              <div className="l">People on the team</div>
            </div>
            <div className="studio-fact">
              <div className="v">96<span className="unit">%</span></div>
              <div className="l">Clients via referral</div>
            </div>
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section className="cities" id="cities">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Coverage · Four cities</span>
              <h2>Where we <span className="italic">work.</span></h2>
            </div>
            <div className="meta">Albania</div>
          </div>

          <div className="cities-grid">
            <article className="city reveal">
              <div className="city-img">
                <img src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=900&auto=format&q=80" alt="Tiranë old town with renovated buildings" />
              </div>
              <div className="city-body">
                <div className="city-head">
                  <span className="city-name">Tiranë</span>
                  <span className="city-coord">41.32° N</span>
                </div>
                <div className="city-meta">
                  <span><span className="count">86</span> listings</span>
                  <span className="arrow">→</span>
                </div>
              </div>
            </article>

            <article className="city reveal">
              <div className="city-img">
                <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&auto=format&q=80" alt="Durrës coastline and beach" />
              </div>
              <div className="city-body">
                <div className="city-head">
                  <span className="city-name">Durrës</span>
                  <span className="city-coord">41.32° N</span>
                </div>
                <div className="city-meta">
                  <span><span className="count">22</span> listings</span>
                  <span className="arrow">→</span>
                </div>
              </div>
            </article>

            <article className="city reveal">
              <div className="city-img">
                <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&q=80" alt="Vlorë seafront and bay" />
              </div>
              <div className="city-body">
                <div className="city-head">
                  <span className="city-name">Vlorë</span>
                  <span className="city-coord">40.46° N</span>
                </div>
                <div className="city-meta">
                  <span><span className="count">19</span> listings</span>
                  <span className="arrow">→</span>
                </div>
              </div>
            </article>

            <article className="city reveal">
              <div className="city-img">
                <img src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&auto=format&q=80" alt="Sarandë coastline and the Ionian sea" />
              </div>
              <div className="city-body">
                <div className="city-head">
                  <span className="city-name">Sarandë</span>
                  <span className="city-coord">39.87° N</span>
                </div>
                <div className="city-meta">
                  <span><span className="count">15</span> listings</span>
                  <span className="arrow">→</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* COVERAGE / MAP */}
      <section className="coverage" id="coverage">
        <div className="wrap">
          <div className="coverage-grid">
            <div className="albania-map-wrap reveal">
              <svg
                className="albania-map"
                viewBox="0 0 360 560"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Stylized map of Albania showing the four cities served by fixcmimi.al"
              >
                <g stroke="#E4E2DA" strokeWidth="0.5" fill="none">
                  <line x1="0" y1="80" x2="360" y2="80" />
                  <line x1="0" y1="160" x2="360" y2="160" />
                  <line x1="0" y1="240" x2="360" y2="240" />
                  <line x1="0" y1="320" x2="360" y2="320" />
                  <line x1="0" y1="400" x2="360" y2="400" />
                  <line x1="0" y1="480" x2="360" y2="480" />
                  <line x1="80" y1="0" x2="80" y2="560" />
                  <line x1="160" y1="0" x2="160" y2="560" />
                  <line x1="240" y1="0" x2="240" y2="560" />
                </g>

                <g fontSize="8" fill="#B5B0A2">
                  <text x="4" y="84">42°N</text>
                  <text x="4" y="164">41°N</text>
                  <text x="4" y="244">40°N</text>
                  <text x="4" y="324">39°N</text>
                  <text x="84" y="12">19°E</text>
                  <text x="164" y="12">20°E</text>
                  <text x="244" y="12">21°E</text>
                </g>

                <path
                  d="M 70,55 L 115,42 L 160,38 L 180,62 L 205,55 L 225,90 L 252,118 L 258,150 L 262,185 L 268,225 L 254,260 L 248,288 L 252,316 L 235,344 L 222,372 L 200,398 L 175,418 L 148,432 L 128,440 L 118,425 L 110,395 L 95,365 L 85,330 L 78,295 L 75,260 L 92,235 L 78,210 L 68,180 L 60,148 L 72,112 L 58,85 Z"
                  fill="#FBFAF5"
                  stroke="#0A0A0A"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />

                <ellipse cx="78" cy="68" rx="16" ry="9" fill="#E8ECFD" stroke="#0A0A0A" strokeWidth="0.7" />
                <ellipse cx="258" cy="240" rx="7" ry="13" fill="#E8ECFD" stroke="#0A0A0A" strokeWidth="0.7" />

                <text className="serif" x="20" y="380" fontStyle="italic" fontSize="13" fill="#8B8B8B" letterSpacing="0.5">Ionian</text>
                <text className="serif" x="20" y="200" fontStyle="italic" fontSize="13" fill="#8B8B8B" letterSpacing="0.5">Adriatic</text>

                <g>
                  <circle cx="95" cy="78" r="3" fill="#0A0A0A" />
                  <text x="105" y="81" fontSize="8.5" fill="#4A4A4A" letterSpacing="0.5">SHKODËR</text>
                </g>
                <g>
                  <circle cx="205" cy="180" r="3" fill="#0A0A0A" />
                  <text x="215" y="183" fontSize="8.5" fill="#4A4A4A" letterSpacing="0.5">ELBASAN</text>
                </g>
                <g>
                  <circle cx="232" cy="295" r="3" fill="#0A0A0A" />
                  <text x="241" y="298" fontSize="8.5" fill="#4A4A4A" letterSpacing="0.5">KORÇË</text>
                </g>

                <g className="city-main">
                  <circle className="halo" cx="155" cy="178" r="24" fill="#14B8B0" opacity="0.1" />
                  <circle className="dot" cx="155" cy="178" r="6" fill="#14B8B0" />
                  <circle cx="155" cy="178" r="2.4" fill="#FBFAF5" />
                  <text className="serif" x="170" y="175" fontSize="17" fill="#0A0A0A" fontWeight="500">Tiranë</text>
                  <text x="170" y="188" fontSize="8.5" fill="#14B8B0" letterSpacing="0.5">86 LISTINGS</text>
                </g>
                <g className="city-main">
                  <circle className="halo" cx="105" cy="200" r="20" fill="#14B8B0" opacity="0.1" />
                  <circle className="dot" cx="105" cy="200" r="5.5" fill="#14B8B0" />
                  <circle cx="105" cy="200" r="2" fill="#FBFAF5" />
                  <text className="serif" x="25" y="218" fontSize="15" fill="#0A0A0A" fontWeight="500">Durrës</text>
                  <text x="25" y="230" fontSize="8" fill="#14B8B0" letterSpacing="0.5">22 LISTINGS</text>
                </g>
                <g className="city-main">
                  <circle className="halo" cx="118" cy="345" r="20" fill="#14B8B0" opacity="0.1" />
                  <circle className="dot" cx="118" cy="345" r="5.5" fill="#14B8B0" />
                  <circle cx="118" cy="345" r="2" fill="#FBFAF5" />
                  <text className="serif" x="34" y="362" fontSize="15" fill="#0A0A0A" fontWeight="500">Vlorë</text>
                  <text x="34" y="374" fontSize="8" fill="#14B8B0" letterSpacing="0.5">19 LISTINGS</text>
                </g>
                <g className="city-main">
                  <circle className="halo" cx="160" cy="430" r="20" fill="#14B8B0" opacity="0.1" />
                  <circle className="dot" cx="160" cy="430" r="5.5" fill="#14B8B0" />
                  <circle cx="160" cy="430" r="2" fill="#FBFAF5" />
                  <text className="serif" x="176" y="432" fontSize="15" fill="#0A0A0A" fontWeight="500">Sarandë</text>
                  <text x="176" y="445" fontSize="8" fill="#14B8B0" letterSpacing="0.5">15 LISTINGS</text>
                </g>

                <g transform="translate(305, 70)">
                  <circle cx="0" cy="0" r="20" fill="#FBFAF5" stroke="#0A0A0A" strokeWidth="0.8" />
                  <line x1="0" y1="-15" x2="0" y2="15" stroke="#0A0A0A" strokeWidth="0.5" />
                  <line x1="-15" y1="0" x2="15" y2="0" stroke="#0A0A0A" strokeWidth="0.5" />
                  <polygon points="0,-15 -4,-3 4,-3" fill="#14B8B0" />
                  <text x="0" y="-23" fontSize="8" fill="#14B8B0" textAnchor="middle" fontWeight="500">N</text>
                </g>

                <g transform="translate(40, 510)">
                  <line x1="0" y1="0" x2="60" y2="0" stroke="#0A0A0A" strokeWidth="1" />
                  <line x1="0" y1="-4" x2="0" y2="4" stroke="#0A0A0A" strokeWidth="1" />
                  <line x1="30" y1="-3" x2="30" y2="3" stroke="#0A0A0A" strokeWidth="1" />
                  <line x1="60" y1="-4" x2="60" y2="4" stroke="#0A0A0A" strokeWidth="1" />
                  <text x="0" y="16" fontSize="8" fill="#4A4A4A">0</text>
                  <text x="30" y="16" fontSize="8" fill="#4A4A4A" textAnchor="middle">100</text>
                  <text x="60" y="16" fontSize="8" fill="#4A4A4A" textAnchor="middle">200 KM</text>
                </g>

                <g transform="translate(330, 520)">
                  <text x="0" y="0" fontSize="9" fill="#4A4A4A" letterSpacing="1.5" textAnchor="end">ALBANIA · SHQIPËRIA</text>
                  <text x="0" y="13" fontSize="7" fill="#8B8B8B" letterSpacing="0.5" textAnchor="end">FIXCMIMI.AL COVERAGE / 2026</text>
                </g>
              </svg>
            </div>

            <div className="coverage-side reveal">
              <span className="eyebrow">Coverage · Albania</span>
              <h2>Four cities. The coast <span className="italic">and the capital.</span></h2>
              <p>
                We work along a single corridor — from Shkodër down through
                Tiranë and out to the Ionian. Anywhere outside it, we'll be
                honest and recommend someone better placed than us. Below: where
                the listings are right now.
              </p>

              <ul className="coverage-list">
                <li>
                  <span className="ix">01</span>
                  <span className="name">Tiranë</span>
                  <span className="count">86 active</span>
                  <span className="arrow">→</span>
                </li>
                <li>
                  <span className="ix">02</span>
                  <span className="name">Durrës</span>
                  <span className="count">22 active</span>
                  <span className="arrow">→</span>
                </li>
                <li>
                  <span className="ix">03</span>
                  <span className="name">Vlorë</span>
                  <span className="count">19 active</span>
                  <span className="arrow">→</span>
                </li>
                <li>
                  <span className="ix">04</span>
                  <span className="name">Sarandë</span>
                  <span className="count">15 active</span>
                  <span className="arrow">→</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* APPROACH */}
      <section className="approach" id="approach">
        <div className="wrap approach-grid">
          <div className="approach-intro reveal">
            <span className="eyebrow">Our approach</span>
            <h3>Fewer listings, <span className="italic">more time on each.</span></h3>
            <p>
              We list properties we'd be happy to live in ourselves. The process
              is short enough to remember and the same five steps from a first
              conversation to the keys in your hand.
            </p>
          </div>

          <ol className="steps reveal">
            <li className="step">
              <span className="step-num">01</span>
              <span className="step-title">Discover</span>
              <span className="step-detail">A long first conversation. We learn how you live before we look at what's listed.</span>
            </li>
            <li className="step">
              <span className="step-num">02</span>
              <span className="step-title">Search</span>
              <span className="step-detail">A shortlist of three to five properties, hand-picked. No algorithmic flooding.</span>
            </li>
            <li className="step">
              <span className="step-num">03</span>
              <span className="step-title">Visit</span>
              <span className="step-detail">In person, in daylight, more than once. We come with you, and we take notes.</span>
            </li>
            <li className="step">
              <span className="step-num">04</span>
              <span className="step-title">Negotiate</span>
              <span className="step-detail">On your side, in plain language. We tell you what's fair, what's possible, what's not.</span>
            </li>
            <li className="step">
              <span className="step-num">05</span>
              <span className="step-title">Close</span>
              <span className="step-detail">Notary, legal, registration. We stay with the file until the keys change hands.</span>
            </li>
          </ol>
        </div>
      </section>

      {/* AGENTS */}
      <section className="agents" id="agents">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">The team</span>
              <h2>Meet the <span className="italic">agents.</span></h2>
            </div>
            <div className="meta">08 agents · 4 cities</div>
          </div>

          <div className="agents-grid">
            <article className="agent reveal">
              <div className="agent-photo">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=650&fit=crop&auto=format&q=80" alt="Portrait of Endri Hoxha" />
                <span className="agent-num">01</span>
              </div>
              <div className="agent-body">
                <h3 className="agent-name">Endri Hoxha</h3>
                <div className="agent-role">Founder · Principal broker</div>
                <div className="agent-contact">
                  <a href="mailto:endri@fixcmimi.al">endri@fixcmimi.al</a><br />
                  <a href="tel:+355676722101">+355 67 672 2101</a>
                </div>
              </div>
            </article>

            <article className="agent reveal">
              <div className="agent-photo">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=650&fit=crop&auto=format&q=80" alt="Portrait of Era Krasniqi" />
                <span className="agent-num">02</span>
              </div>
              <div className="agent-body">
                <h3 className="agent-name">Era Krasniqi</h3>
                <div className="agent-role">Senior agent · Coastal</div>
                <div className="agent-contact">
                  <a href="mailto:era@fixcmimi.al">era@fixcmimi.al</a><br />
                  <a href="tel:+355676722102">+355 67 672 2102</a>
                </div>
              </div>
            </article>

            <article className="agent reveal">
              <div className="agent-photo">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=650&fit=crop&auto=format&q=80" alt="Portrait of Klejdi Marku" />
                <span className="agent-num">03</span>
              </div>
              <div className="agent-body">
                <h3 className="agent-name">Klejdi Marku</h3>
                <div className="agent-role">Senior agent · Tiranë</div>
                <div className="agent-contact">
                  <a href="mailto:klejdi@fixcmimi.al">klejdi@fixcmimi.al</a><br />
                  <a href="tel:+355676722103">+355 67 672 2103</a>
                </div>
              </div>
            </article>

            <article className="agent reveal">
              <div className="agent-photo">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=650&fit=crop&auto=format&q=80" alt="Portrait of Mira Sopi" />
                <span className="agent-num">04</span>
              </div>
              <div className="agent-body">
                <h3 className="agent-name">Mira Sopi</h3>
                <div className="agent-role">Buyer relations</div>
                <div className="agent-contact">
                  <a href="mailto:mira@fixcmimi.al">mira@fixcmimi.al</a><br />
                  <a href="tel:+355676722104">+355 67 672 2104</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="journal" id="journal">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">From the journal</span>
              <h2>Notes on <span className="italic">place.</span></h2>
            </div>
            <div className="meta">
              <a href="#" style={{ color: "var(--ink)", borderBottom: "1px solid var(--ink)", paddingBottom: "2px" }}>All articles →</a>
            </div>
          </div>

          <div className="journal-grid">
            <a href="#" className="article lead reveal">
              <div className="article-media">
                <img src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1200&auto=format&q=80" alt="Old Tirana neighborhood with renovated buildings" />
              </div>
              <div>
                <div className="article-meta">
                  <span className="cat">Tiranë</span>
                  <span>10 June 2026</span>
                  <span>· 6 min read</span>
                </div>
                <h3 className="article-title">Blloku, twenty years on. <span className="italic">What the neighbourhood became.</span></h3>
                <p className="article-excerpt">Once closed off, now the most expensive square kilometre in Albania. A walk through Blloku with notes on what has actually changed — and what hasn't.</p>
              </div>
            </a>

            <a href="#" className="article reveal">
              <div className="article-media">
                <img src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1000&auto=format&q=80" alt="Coastal road and Ionian sea near Sarandë" />
              </div>
              <div>
                <div className="article-meta">
                  <span className="cat">Coast</span>
                  <span>28 May 2026</span>
                </div>
                <h3 className="article-title">Buying a place on the Albanian coast: <span className="italic">what to actually check.</span></h3>
                <p className="article-excerpt">A practical guide to property paperwork, planning permissions, and the questions worth asking before you fall for the view.</p>
              </div>
            </a>

            <a href="#" className="article reveal">
              <div className="article-media">
                <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1000&auto=format&q=80" alt="Modern Albanian apartment interior with natural light" />
              </div>
              <div>
                <div className="article-meta">
                  <span className="cat">Living</span>
                  <span>14 May 2026</span>
                </div>
                <h3 className="article-title">Where the light falls. <span className="italic">A small note on orientation.</span></h3>
                <p className="article-excerpt">Why a south-facing apartment in Tiranë doesn't quite mean what it does in Stockholm, and what to look for in the afternoon instead.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* INQUIRE */}
      <section className="inquire" id="inquire">
        <div className="wrap inquire-inner">
          <div>
            <span className="eyebrow">Get in touch</span>
            <h2>
              Looking for<br />
              <span className="italic">somewhere?</span>
            </h2>
          </div>
          <div className="inquire-side">
            <p>
              Tell us a little about how you'd like to live — neighbourhood,
              daylight, the kitchen, anything. We'll write back with a short list
              worth your time, and a date to visit.
            </p>
            <a href="mailto:hello@fixcmimi.al" className="btn">
              Start a conversation <span className="arrow">→</span>
            </a>
            <div className="inquire-channels">
              <div className="inquire-channel">
                <span className="l">Email</span>
                <span className="v">hello@fixcmimi.al</span>
              </div>
              <div className="inquire-channel">
                <span className="l">Phone</span>
                <span className="v">+355 4 224 8814</span>
              </div>
              <div className="inquire-channel">
                <span className="l">Office</span>
                <span className="v">Rr. Ibrahim Rugova 11, Tiranë</span>
              </div>
              <div className="inquire-channel">
                <span className="l">Hours</span>
                <span className="v">Mon–Fri, 09:00–18:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-brand">
              <Link href="/" className="brand-logo on-dark"><BrandLogo /></Link>
              <p>A boutique real estate agency working with a small collection of properties across Albania.</p>
            </div>

            <div className="foot-col">
              <h4>Properties</h4>
              <ul>
                <li><Link href="/properties">All listings</Link></li>
                <li><Link href="/properties?status=For+Sale">For sale</Link></li>
                <li><Link href="/properties?status=For+Rent">For rent</Link></li>
                <li><a href="#">Exclusive</a></li>
                <li><a href="#">Coming soon</a></li>
              </ul>
            </div>

            <div className="foot-col">
              <h4>Cities</h4>
              <ul>
                <li><a href="#cities">Tiranë (86)</a></li>
                <li><a href="#cities">Durrës (22)</a></li>
                <li><a href="#cities">Vlorë (19)</a></li>
                <li><a href="#cities">Sarandë (15)</a></li>
              </ul>
            </div>

            <div className="foot-col">
              <h4>Agency</h4>
              <ul>
                <li><a href="#approach">Approach</a></li>
                <li><a href="#agents">Agents</a></li>
                <li><a href="#journal">Journal</a></li>
                <li><a href="#inquire">Contact</a></li>
                <li><a href="#inquire">List with us</a></li>
              </ul>
            </div>
          </div>

          <div className="foot-bottom">
            <span>© 2026 fixcmimi.al sh.p.k. · NIPT L42107033K · All rights reserved</span>
            <span>
              <a href="#">Terms</a> &nbsp;·&nbsp; <a href="#">Privacy</a> &nbsp;·&nbsp;{" "}
              <a href="#">Imprint</a>
            </span>
          </div>
        </div>
      </footer>

      <ScrollReveal />
    </div>
  );
}



