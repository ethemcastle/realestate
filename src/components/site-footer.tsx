import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { BrandLogo } from "@/components/brand-logo";

const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "/properties", label: "Listings" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Buy & Rent",
    links: [
      { href: "/properties?status=For+Sale", label: "Homes for sale" },
      { href: "/properties?status=For+Rent", label: "Homes for rent" },
      { href: "/properties?type=Condo", label: "Condos" },
      { href: "/properties?type=Villa", label: "Luxury villas" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center"
            >
              <BrandLogo variant="light" size={30} />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              {SITE.description}
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-amber-500" />
                <a className="hover:text-white" href={`tel:${SITE.phone}`}>
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-amber-500" />
                <a className="hover:text-white" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          {FOOTER_LINKS.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name} Real Estate. All rights
            reserved.
          </p>
          <p>Crafted with Next.js &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

