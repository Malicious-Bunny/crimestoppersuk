import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Crimestoppers, the independent UK charity that takes information about crime 100% anonymously.",
};

export default function AboutUsPage() {
  return (
    <div>
      <Hero
        title="About us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About us" },
        ]}
        subtitle="We're an independent charity that gives people the power to speak up and stop crime - 100% anonymously. Find out more."
      />

      <div className="bg-white">
        <div className="max-w-[1400px] mx-auto px-4 py-12">
          {/* Who we are */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-purple-deeper mb-6">Who we are</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Crimestoppers is an independent charity that gives people the power to speak up to stop crime, 100% anonymously. We have been taking anonymous information about crime since 1988.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Every day, over a thousand people trust us with information about crime. That information leads to arrests and convictions, and helps make our communities safer.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When you contact us, you won&apos;t be asked to give your name, and your call or online report can never be traced. This is our guarantee to you.
                </p>
              </div>
              <div className="bg-purple-deeper rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our impact</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-3xl font-bold text-amber-brand">1,000+</p>
                    <p className="text-white/80">pieces of actionable information every day</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-amber-brand">130,000+</p>
                    <p className="text-white/80">arrests made from our information</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-teal">100%</p>
                    <p className="text-white/80">anonymous, always</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Links */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Who we work with", desc: "Learn about our partnerships with police forces and other organisations." },
                { title: "Work with us", desc: "View current vacancies and opportunities at Crimestoppers." },
                { title: "General Enquiries", desc: "Get in touch with us for general questions and media enquiries." },
              ].map((item) => (
                <Link
                  key={item.title}
                  href="#"
                  className="bg-gray-light p-6 rounded-sm card-hover cursor-pointer block group"
                >
                  <h3 className="text-xl font-bold text-purple-deeper mb-2 group-hover:text-purple-dark transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                  <span className="text-red-brand font-semibold text-sm mt-3 inline-block">
                    Find out more &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
