import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, MapPin, Maximize } from "lucide-react";
import type { Property } from "@/lib/types";
import { cn, formatArea, formatPrice } from "@/lib/format";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/properties/${property.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={cn(
            "absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold",
            property.status === "For Sale"
              ? "bg-emerald-500 text-white"
              : "bg-sky-500 text-white",
          )}
        >
          {property.status}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-700">
          {property.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xl font-bold text-slate-900">
          {formatPrice(property.price, property.status)}
        </p>
        <h3 className="mt-1 line-clamp-1 text-base font-semibold text-slate-800 group-hover:text-amber-600">
          {property.title}
        </h3>
        <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
          <MapPin className="h-4 w-4 shrink-0" />
          <span className="line-clamp-1">
            {property.city}, {property.state}
          </span>
        </p>

        <div className="mt-4 flex items-center gap-4 border-t border-slate-100 pt-4 text-sm text-slate-600">
          <span className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4 text-slate-400" />
            {property.bedrooms} bd
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-slate-400" />
            {property.bathrooms} ba
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize className="h-4 w-4 text-slate-400" />
            {formatArea(property.area)}
          </span>
        </div>
      </div>
    </Link>
  );
}

