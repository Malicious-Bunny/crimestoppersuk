import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Keeping Safe",
  description:
    "Advice and guidance on staying safe — personal safety, online safety, knife crime, fraud, and more from Crimestoppers.",
};

const categories = [
  {
    title: "Personal safety",
    desc: "Advice on staying safe when out and about, travelling and at work.",
    color: "bg-purple-deeper",
  },
  {
    title: "Home & property safety",
    desc: "Protect your home and belongings from burglary and theft.",
    color: "bg-purple-dark",
  },
  {
    title: "Online safety",
    desc: "Stay safe online and protect yourself from cyber crime.",
    color: "bg-purple-deeper",
  },
  {
    title: "Fraud",
    desc: "Recognise and protect yourself from different types of fraud.",
    color: "bg-purple-dark",
  },
  {
    title: "Drug crime",
    desc: "Understanding drug crime and how to report it anonymously.",
    color: "bg-purple-deeper",
  },
  {
    title: "Knife crime",
    desc: "Information about knife crime and how you can help tackle it.",
    color: "bg-purple-dark",
  },
  {
    title: "Hate crime",
    desc: "Understanding hate crime and how to report it safely.",
    color: "bg-purple-deeper",
  },
  {
    title: "Modern slavery",
    desc: "Recognise the signs of modern slavery and trafficking.",
    color: "bg-purple-dark",
  },
  {
    title: "Organised crime",
    desc: "Understanding organised crime and its impact on communities.",
    color: "bg-purple-deeper",
  },
];

export default function KeepingSafePage() {
  return (
    <div>
      <Hero
        title="Keeping safe"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Keeping safe" },
        ]}
        subtitle="Information and advice to help keep you, your family and your community safe from crime."
      />

      <div className="bg-gray-light">
        <div className="max-w-[1400px] mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href="#"
                className="relative overflow-hidden rounded-sm h-56 flex items-end cursor-pointer group"
              >
                <div className={`absolute inset-0 ${cat.color}`} />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-400/30 clip-diagonal" />
                <div className="relative z-10 p-6 w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:underline">
                    {cat.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-purple-deeper mb-6">Need to report a crime?</h2>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed mb-8">
            If you have information about crime in your community, you can tell Crimestoppers 100% anonymously. We never ask for your name and we never trace your call or IP address.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/give-information/most-wanted" className="bg-red-brand text-white px-8 py-3.5 rounded-lg font-semibold cursor-pointer hover:bg-red-hover transition-colors">
              Give information
            </Link>
            <Link href="tel:0800555111" className="border-2 border-purple-dark text-purple-dark px-8 py-3.5 rounded-lg font-semibold cursor-pointer hover:bg-purple-dark hover:text-white transition-colors">
              Call 0800 555 111
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
