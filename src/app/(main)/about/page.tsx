import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Award, HeartHandshake, Target } from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Learn about Estate — our mission, our values, and the team helping people find homes they love.",
};

const VALUES = [
  {
    icon: Target,
    title: "Client-first, always",
    description:
      "We measure success by the keys we hand over, not the deals we close. Your goals lead every conversation.",
  },
  {
    icon: HeartHandshake,
    title: "Honest guidance",
    description:
      "Transparent pricing, clear timelines, and straight answers — even when they aren't what you hoped to hear.",
  },
  {
    icon: Award,
    title: "Local expertise",
    description:
      "Our agents live and work in the neighborhoods they serve, so you get insight that data alone can't provide.",
  },
];

const TEAM = [
  {
    name: "Amara Bennett",
    title: "Senior Listing Agent",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=480&q=80",
  },
  {
    name: "David Okafor",
    title: "Luxury Property Specialist",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=480&q=80",
  },
  {
    name: "Sofia Marchetti",
    title: "Residential Advisor",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=480&q=80",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            About {SITE.name}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            We help people find a place to call home
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            {SITE.description} For over fifteen years we&apos;ve paired
            data-driven insight with genuine, human guidance to make buying,
            selling, and renting feel effortless.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
              alt="Bright, welcoming living room"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Our story
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              {SITE.name} started with a simple belief: finding a home should be
              exciting, not exhausting. What began as a small neighborhood
              brokerage has grown into a trusted team across more than thirty
              cities — but our approach hasn&apos;t changed.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              We invest in the details that matter: accurate listings,
              responsive agents, and a process that respects your time. Whether
              it&apos;s a first apartment or a forever home, we treat every
              search like it&apos;s our own.
            </p>
            <Link
              href="/properties"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-amber-600"
            >
              Explore our listings
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            What we stand for
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-slate-900 text-amber-400">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Meet the team
            </h2>
            <p className="mt-3 text-slate-500">
              Experienced advisors ready to guide your next move.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm"
              >
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="h-24 w-24 rounded-full object-cover"
                />
                <h3 className="mt-4 font-semibold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-sm text-amber-600">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

