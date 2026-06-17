import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Bath,
  BedDouble,
  CalendarDays,
  Check,
  ChevronRight,
  Mail,
  MapPin,
  Maximize,
  Phone,
} from "lucide-react";
import {
  getPropertyById,
  getRelatedProperties,
  properties,
} from "@/lib/properties";
import { formatArea, formatNumber, formatPrice } from "@/lib/format";
import { PropertyCard } from "@/components/property-card";

type Params = Promise<{ id: string }>;

// All listings are known at build time, so any id that isn't prerendered
// should return a genuine 404 rather than being rendered on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return properties.map((property) => ({ id: property.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { id } = await params;
  const property = await getPropertyById(id);

  if (!property) {
    return { title: "Property not found" };
  }

  return {
    title: property.title,
    description: property.description,
    openGraph: {
      title: property.title,
      description: property.description,
      images: [property.image],
    },
  };
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;
  const property = await getPropertyById(id);

  if (!property) {
    notFound();
  }

  const related = await getRelatedProperties(id, 3);

  const facts = [
    { icon: BedDouble, label: "Bedrooms", value: property.bedrooms },
    { icon: Bath, label: "Bathrooms", value: property.bathrooms },
    { icon: Maximize, label: "Area", value: formatArea(property.area) },
    { icon: CalendarDays, label: "Year built", value: property.yearBuilt },
  ];

  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/properties" className="hover:text-slate-900">
            Properties
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="line-clamp-1 text-slate-700">{property.title}</span>
        </nav>

        {/* Header */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span
                className={
                  property.status === "For Sale"
                    ? "rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white"
                    : "rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold text-white"
                }
              >
                {property.status}
              </span>
              <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700">
                {property.type}
              </span>
            </div>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              {property.title}
            </h1>
            <p className="mt-2 flex items-center gap-1.5 text-slate-500">
              <MapPin className="h-4 w-4" />
              {property.address}, {property.city}, {property.state}{" "}
              {property.zip}
            </p>
          </div>
          <p className="text-3xl font-bold text-slate-900">
            {formatPrice(property.price, property.status)}
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-6 grid gap-3">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={property.image}
              alt={property.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {property.gallery.map((src, index) => (
              <div
                key={src}
                className="relative aspect-[4/3] overflow-hidden rounded-xl"
              >
                <Image
                  src={src}
                  alt={`${property.title} photo ${index + 2}`}
                  fill
                  sizes="(max-width: 1024px) 33vw, 340px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {facts.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-xl border border-slate-200 bg-white p-4"
                >
                  <Icon className="h-5 w-5 text-amber-500" />
                  <p className="mt-3 text-lg font-semibold text-slate-900">
                    {value}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-slate-900">
                About this home
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                {property.description}
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-slate-900">
                Amenities
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {property.amenities.map((amenity) => (
                  <li
                    key={amenity}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Agent sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <Image
                  src={property.agent.avatar}
                  alt={property.agent.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-900">
                    {property.agent.name}
                  </p>
                  <p className="text-sm text-slate-500">
                    {property.agent.title}
                  </p>
                </div>
              </div>

              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="text-slate-500">Listing ID</dt>
                  <dd className="font-medium text-slate-800">
                    {property.id.toUpperCase()}
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-slate-500">Price / sqft</dt>
                  <dd className="font-medium text-slate-800">
                    $
                    {formatNumber(
                      Math.round(property.price / property.area),
                    )}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 space-y-3">
                <a
                  href={`tel:${property.agent.phone}`}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  <Phone className="h-4 w-4" />
                  Call agent
                </a>
                <a
                  href={`mailto:${property.agent.email}`}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
                >
                  <Mail className="h-4 w-4" />
                  Email agent
                </a>
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400"
                >
                  Schedule a tour
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Similar properties
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <PropertyCard key={item.id} property={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


