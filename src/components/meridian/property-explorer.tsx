/* eslint-disable @next/next/no-img-element */
"use client";

import { useMemo, useState } from "react";
import { MERIDIAN_PROPERTIES } from "./properties-data";

const STATUS_OPTIONS = [
  { value: "all", label: "All" },
  { value: "For Sale", label: "For Sale" },
  { value: "For Rent", label: "For Rent" },
];

const BED_OPTIONS = [
  { value: "0", label: "Any beds" },
  { value: "1", label: "1+ beds" },
  { value: "2", label: "2+ beds" },
  { value: "3", label: "3+ beds" },
  { value: "4", label: "4+ beds" },
];

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price low to high" },
  { value: "price-desc", label: "Price high to low" },
  { value: "size-desc", label: "Largest first" },
];

export function PropertyExplorer() {
  const [status, setStatus] = useState("all");
  const [city, setCity] = useState("all");
  const [type, setType] = useState("all");
  const [beds, setBeds] = useState("0");
  const [sort, setSort] = useState("featured");

  const cities = useMemo(
    () =>
      Array.from(new Set(MERIDIAN_PROPERTIES.map((p) => p.city))).sort((a, b) =>
        a.localeCompare(b),
      ),
    [],
  );
  const types = useMemo(
    () =>
      Array.from(new Set(MERIDIAN_PROPERTIES.map((p) => p.type))).sort((a, b) =>
        a.localeCompare(b),
      ),
    [],
  );

  const results = useMemo(() => {
    const minBeds = Number(beds);
    const list = MERIDIAN_PROPERTIES.filter((p) => {
      if (status !== "all" && p.status !== status) return false;
      if (city !== "all" && p.city !== city) return false;
      if (type !== "all" && p.type !== type) return false;
      if (minBeds > 0 && p.beds < minBeds) return false;
      return true;
    });

    switch (sort) {
      case "price-asc":
        return [...list].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...list].sort((a, b) => b.price - a.price);
      case "size-desc":
        return [...list].sort((a, b) => b.size - a.size);
      default:
        return list;
    }
  }, [status, city, type, beds, sort]);

  const hasFilters =
    status !== "all" ||
    city !== "all" ||
    type !== "all" ||
    beds !== "0" ||
    sort !== "featured";

  function reset() {
    setStatus("all");
    setCity("all");
    setType("all");
    setBeds("0");
    setSort("featured");
  }

  return (
    <div className="explore">
      <div className="explore-bar reveal">
        <div className="explore-tabs" role="tablist" aria-label="Listing status">
          {STATUS_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              role="tab"
              aria-selected={status === option.value}
              className={`explore-tab ${status === option.value ? "active" : ""}`}
              onClick={() => setStatus(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="explore-selects">
          <div className="explore-select">
            <select
              aria-label="City"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            >
              <option value="all">All cities</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="explore-select">
            <select
              aria-label="Property type"
              value={type}
              onChange={(event) => setType(event.target.value)}
            >
              <option value="all">Any type</option>
              {types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="explore-select">
            <select
              aria-label="Bedrooms"
              value={beds}
              onChange={(event) => setBeds(event.target.value)}
            >
              {BED_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="explore-select">
            <select
              aria-label="Sort by"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="explore-count">
        <span>
          Showing <strong>{results.length}</strong> of{" "}
          {MERIDIAN_PROPERTIES.length} listings
        </span>
        {hasFilters && (
          <button type="button" className="explore-reset" onClick={reset}>
            Clear filters ✕
          </button>
        )}
      </div>

      {results.length > 0 ? (
        <div className="prop-grid">
          {results.map((p) => (
            <article className="card" key={p.ref}>
              <div className="card-media">
                <img src={p.image} alt={p.alt} loading="lazy" />
                <div className="card-badges">
                  <span
                    className={`badge ${p.status === "For Sale" ? "sale" : "rent"}`}
                  >
                    {p.status}
                  </span>
                  {p.exclusive && (
                    <span className="badge exclusive">Exclusive</span>
                  )}
                </div>
                <span className="card-ref">{p.ref}</span>
              </div>
              <div className="card-body">
                <div className="card-top">
                  <h3 className="card-name">
                    {p.name} <span className="italic">{p.nameTail}</span>
                  </h3>
                  <span className="card-price">
                    {p.priceLabel}
                    {p.status === "For Rent" && (
                      <span className="per"> / mo</span>
                    )}
                  </span>
                </div>
                <div className="card-loc">{p.location}</div>
                <div className="card-data">
                  <span>
                    <strong>{p.beds}</strong> bd
                  </span>
                  <span>
                    <strong>{p.baths}</strong> ba
                  </span>
                  <span>
                    <strong>{p.size}</strong> m²
                  </span>
                  <span>
                    <strong>{p.tag}</strong>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="explore-empty">
          <p>No properties match these filters yet.</p>
          <button type="button" className="btn" onClick={reset}>
            Clear filters <span className="arrow">→</span>
          </button>
        </div>
      )}
    </div>
  );
}

