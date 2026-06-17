import { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { SearchX } from "lucide-react";
import { searchProperties } from "@/lib/properties";
import type { ListingStatus, PropertyType, SortOption } from "@/lib/types";
import { PropertyCard } from "@/components/property-card";
import { PropertyFilters } from "@/components/property-filters";

export const metadata: Metadata = {
  title: "Properties for sale & rent",
  description:
    "Browse our full collection of homes, condos, villas, and apartments for sale and rent.",
};

type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

function first(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;

  const q = first(sp.q);
  const status = first(sp.status) as ListingStatus | "All" | undefined;
  const type = first(sp.type) as PropertyType | "All" | undefined;
  const bedsRaw = first(sp.beds);
  const beds = bedsRaw ? Number(bedsRaw) : undefined;
  const sort = (first(sp.sort) as SortOption | undefined) ?? "newest";

  const results = await searchProperties({ q, status, type, beds, sort });

  return (
    <div className="bg-slate-50">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Explore properties
          </h1>
          <p className="mt-2 text-slate-500">
            {results.length} home{results.length === 1 ? "" : "s"} matching your
            search
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="h-32" />}>
          <PropertyFilters />
        </Suspense>

        {results.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">
            <SearchX className="h-12 w-12 text-slate-300" />
            <h2 className="mt-4 text-lg font-semibold text-slate-900">
              No properties found
            </h2>
            <p className="mt-2 max-w-sm text-sm text-slate-500">
              Try adjusting your filters or search for a different location.
            </p>
            <Link
              href="/properties"
              className="mt-6 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Reset search
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

