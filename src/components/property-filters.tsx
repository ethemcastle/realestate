"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import {
  BEDROOM_OPTIONS,
  LISTING_STATUSES,
  PROPERTY_TYPES,
  SORT_OPTIONS,
} from "@/lib/constants";

const selectClass =
  "h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-amber-200";

export function PropertyFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const current = {
    q: searchParams.get("q") ?? "",
    status: searchParams.get("status") ?? "All",
    type: searchParams.get("type") ?? "All",
    beds: searchParams.get("beds") ?? "",
    sort: searchParams.get("sort") ?? "newest",
  };

  const hasFilters =
    current.q !== "" ||
    current.status !== "All" ||
    current.type !== "All" ||
    current.beds !== "" ||
    current.sort !== "newest";

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "All") {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/properties?${params.toString()}`, { scroll: false });
  }

  function onSearchSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    updateParam("q", String(formData.get("q") ?? ""));
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="grid gap-3 lg:grid-cols-12">
        <form
          onSubmit={onSearchSubmit}
          className="relative lg:col-span-4"
          role="search"
        >
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            name="q"
            defaultValue={current.q}
            placeholder="Search city, address, or type"
            className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-700 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-amber-200"
          />
        </form>

        <select
          aria-label="Status"
          value={current.status}
          onChange={(event) => updateParam("status", event.target.value)}
          className={`${selectClass} lg:col-span-2`}
        >
          <option value="All">Any status</option>
          {LISTING_STATUSES.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        <select
          aria-label="Property type"
          value={current.type}
          onChange={(event) => updateParam("type", event.target.value)}
          className={`${selectClass} lg:col-span-2`}
        >
          <option value="All">Any type</option>
          {PROPERTY_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          aria-label="Minimum bedrooms"
          value={current.beds}
          onChange={(event) => updateParam("beds", event.target.value)}
          className={`${selectClass} lg:col-span-2`}
        >
          <option value="">Any beds</option>
          {BEDROOM_OPTIONS.map((beds) => (
            <option key={beds} value={beds}>
              {beds}+ beds
            </option>
          ))}
        </select>

        <select
          aria-label="Sort by"
          value={current.sort}
          onChange={(event) => updateParam("sort", event.target.value)}
          className={`${selectClass} lg:col-span-2`}
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
        <span className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Refine your search
        </span>
        {hasFilters && (
          <button
            type="button"
            onClick={() => router.push("/properties", { scroll: false })}
            className="flex items-center gap-1 font-medium text-slate-600 hover:text-slate-900"
          >
            <X className="h-4 w-4" />
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
}

