import Hero from "@/components/Hero";
import Link from "next/link";

const newsArticles = [
  {
    title: "Most Wanted in Spain campaign launched",
    date: "15 May 2026",
    category: "Campaign",
    excerpt: "A new appeal to locate 12 of the UK's most wanted fugitives believed to be in Spain.",
  },
  {
    title: "County Lines awareness week",
    date: "10 May 2026",
    category: "Campaign",
    excerpt: "Crimestoppers supports national county lines awareness week with new resources.",
  },
  {
    title: "Annual report 2025-26 published",
    date: "1 May 2026",
    category: "News",
    excerpt: "Our latest annual report shows record numbers of people giving information anonymously.",
  },
  {
    title: "New partnership with National Crime Agency",
    date: "25 April 2026",
    category: "Partnership",
    excerpt: "Crimestoppers strengthens partnership with NCA to tackle serious organised crime.",
  },
  {
    title: "Knife crime campaign results",
    date: "18 April 2026",
    category: "Campaign",
    excerpt: "Results from our latest knife crime campaign show significant increase in information received.",
  },
  {
    title: "Volunteer awards ceremony",
    date: "10 April 2026",
    category: "News",
    excerpt: "Celebrating our outstanding volunteers at the annual awards ceremony in London.",
  },
];

export default function NewsMediaPage() {
  return (
    <div>
      <Hero
        title="News & media"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News & media" },
        ]}
        subtitle="The latest news, press releases and campaign updates from Crimestoppers."
      />

      <div className="bg-gray-light">
        <div className="max-w-[1400px] mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((article) => (
              <Link
                key={article.title}
                href="#"
                className="bg-white rounded-sm overflow-hidden card-hover cursor-pointer block group"
              >
                <div className="h-48 bg-purple-deeper relative">
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal text-white text-xs font-bold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                  <h3 className="text-lg font-bold text-purple-deeper mb-2 group-hover:text-purple-dark transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{article.excerpt}</p>
                  <span className="text-red-brand font-semibold text-sm mt-3 inline-block">
                    Read more &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
