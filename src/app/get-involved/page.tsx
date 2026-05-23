import Hero from "@/components/Hero";
import Link from "next/link";

const ways = [
  {
    title: "Donate to us",
    desc: "Your donation helps us fight crime and keep communities safe across the UK.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Volunteer",
    desc: "Join our network of volunteers helping to spread the word about Crimestoppers.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Fundraise",
    desc: "Organise a fundraising event and help us make a real difference in the fight against crime.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Run the London Marathon",
    desc: "Run for Crimestoppers in the London Marathon and help raise vital funds.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Campaigns",
    desc: "Support our campaigns tackling knife crime, county lines and other issues.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: "Partner with us",
    desc: "Work with us to protect your business and your community from crime.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export default function GetInvolvedPage() {
  return (
    <div>
      <Hero
        title="Get involved"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Get involved" },
        ]}
        subtitle="There are many ways you can support Crimestoppers and help us fight crime across the UK."
      />

      <div className="bg-gray-light">
        <div className="max-w-[1400px] mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ways.map((way) => (
              <Link
                key={way.title}
                href="#"
                className="bg-white p-6 rounded-sm card-hover cursor-pointer block group"
              >
                <div className="text-teal mb-4">{way.icon}</div>
                <h3 className="text-xl font-bold text-purple-deeper mb-2 group-hover:text-purple-dark transition-colors">
                  {way.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{way.desc}</p>
                <span className="text-red-brand font-semibold text-sm mt-4 inline-block">
                  Find out more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Donate section */}
      <section className="bg-purple-deeper text-white">
        <div className="max-w-[1400px] mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Make a donation</h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Every donation helps us fight crime and keep communities safe. Give what you can today.
          </p>
          <Link
            href="#"
            className="inline-flex items-center bg-amber-brand text-white px-10 py-4 rounded-lg font-bold text-lg cursor-pointer hover:brightness-110 transition-all"
          >
            Donate now
          </Link>
        </div>
      </section>
    </div>
  );
}
