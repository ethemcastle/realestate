import Link from "next/link";
import { Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-28 text-center">
      <span className="grid h-16 w-16 place-items-center rounded-full bg-slate-100 text-slate-400">
        <SearchX className="h-8 w-8" />
      </span>
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
        Property not found
      </h1>
      <p className="mt-3 text-slate-500">
        The listing you&apos;re looking for may have been sold, rented, or
        removed.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/properties"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
        >
          <SearchX className="h-4 w-4" />
          Browse all listings
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
        >
          <Home className="h-4 w-4" />
          Back home
        </Link>
      </div>
    </div>
  );
}

