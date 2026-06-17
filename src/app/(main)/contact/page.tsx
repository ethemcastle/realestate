import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Get in touch with the Estate team. Call, email, or send us a message and an agent will be in touch.",
};

const CONTACT_DETAILS = [
  {
    icon: Phone,
    label: "Phone",
    value: SITE.phone,
    href: `tel:${SITE.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: MapPin,
    label: "Office",
    value: SITE.address,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Sat, 9:00am – 6:00pm",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Let&apos;s find your next home
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Have a question about a listing or want to start your search? Send us
            a message and one of our agents will get back to you shortly.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-1">
            <h2 className="text-xl font-semibold text-slate-900">
              Get in touch
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Prefer to reach us directly? Here&apos;s how.
            </p>
            <ul className="mt-8 space-y-6">
              {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-900 text-amber-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-slate-800 hover:text-amber-600"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-slate-800">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

