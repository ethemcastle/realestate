"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CITIES = [
  "All cities",
  "Tiranë",
  "Durrës",
  "Vlorë",
  "Sarandë",
  "Shkodër",
  "Korçë",
  "Elbasan",
  "Pogradec",
];

const TYPES = [
  "Any type",
  "Apartment",
  "Villa",
  "Penthouse",
  "Townhouse",
  "Studio",
  "Office",
  "Land",
  "Commercial",
];

const AREAS = [
  "Any area",
  "Blloku",
  "Liqeni i Thatë",
  "Sauk",
  "Tirana e Re",
  "Komuna e Parisit",
  "Lungomare (Vlorë)",
  "Ksamil (Sarandë)",
  "Plazh (Durrës)",
];

const PRICES = [
  "No limit",
  "€25,000",
  "€50,000",
  "€75,000",
  "€100,000",
  "€150,000",
  "€200,000+",
];

export function HeroSearch() {
  const router = useRouter();
  const [tab, setTab] = useState<"sale" | "rent">("sale");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const status = tab === "sale" ? "For Sale" : "For Rent";
    router.push(`/properties?status=${encodeURIComponent(status)}`);
  }

  return (
    <div className="search-card" id="search-card">
      <div className="search-tabs" role="tablist">
        <button
          type="button"
          className={`search-tab ${tab === "sale" ? "active" : ""}`}
          role="tab"
          aria-selected={tab === "sale"}
          onClick={() => setTab("sale")}
        >
          For Sale <span className="count">118</span>
        </button>
        <button
          type="button"
          className={`search-tab ${tab === "rent" ? "active" : ""}`}
          role="tab"
          aria-selected={tab === "rent"}
          onClick={() => setTab("rent")}
        >
          For Rent <span className="count">24</span>
        </button>
      </div>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-field has-arrow">
          <label htmlFor="f-city">City</label>
          <select id="f-city" name="city">
            {CITIES.map((city) => (
              <option key={city}>{city}</option>
            ))}
          </select>
        </div>
        <div className="search-field has-arrow">
          <label htmlFor="f-type">Property type</label>
          <select id="f-type" name="type">
            {TYPES.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="search-field has-arrow">
          <label htmlFor="f-area">Neighbourhood</label>
          <select id="f-area" name="area">
            {AREAS.map((area) => (
              <option key={area}>{area}</option>
            ))}
          </select>
        </div>
        <div className="search-field has-arrow">
          <label htmlFor="f-price">Price up to</label>
          <select id="f-price" name="price">
            {PRICES.map((price) => (
              <option key={price}>{price}</option>
            ))}
          </select>
        </div>
        <button className="search-submit" type="submit">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <line x1="20" y1="20" x2="16.5" y2="16.5" />
          </svg>
          Search
        </button>
      </form>
    </div>
  );
}

