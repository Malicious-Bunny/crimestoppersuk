import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Most Wanted",
  description:
    "Help us find these people. Search UK most wanted suspects by region, crime type, or keyword. Give information 100% anonymously.",
  openGraph: {
    title: "Most Wanted – Crimestoppers UK",
    description:
      "Exposing those wanted by UK law enforcement. Search by region, keyword or crime type, and give information anonymously.",
  },
  twitter: {
    title: "Most Wanted – Crimestoppers UK",
    description:
      "Help us find these people. Give information 100% anonymously. Call 0800 555 111.",
  },
};

export default function MostWantedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
