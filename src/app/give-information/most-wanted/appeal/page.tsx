"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Hero from "@/components/Hero";
import Link from "next/link";
import { wantedPersons } from "@/data/wanted";

function AppealContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const person = wantedPersons.find((p) => p.id === Number(id));

  if (!person) {
    return (
      <div className="max-w-[1400px] mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-purple-deeper">Appeal not found</h2>
        <p className="mt-4 text-gray-600">The appeal you are looking for does not exist.</p>
        <Link href="/give-information/most-wanted" className="mt-6 inline-block bg-purple-dark text-white px-8 py-3 rounded-lg font-semibold cursor-pointer hover:bg-purple-light transition-colors">
          Back to Most Wanted
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Hero
        title={person.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Give information", href: "/give-information/most-wanted" },
          { label: "Most Wanted", href: "/give-information/most-wanted" },
          { label: person.name },
        ]}
        showCta
      />

      <div className="max-w-[1400px] mx-auto px-4 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
          {/* Photo */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 border border-gray-200 aspect-square sm:aspect-[3/4] max-h-[400px] sm:max-h-none flex items-center justify-center overflow-hidden mx-auto w-full max-w-[300px] sm:max-w-none">
              {person.image ? (
                <img
                  src={person.image}
                  alt={`${person.name} wanted for ${person.crimeType}`}
                  className="w-full h-full object-contain"
                />
              ) : (
                <svg className="w-32 h-32 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              )}
            </div>
          </div>

          {/* Info sidebar */}
          <div className="lg:col-span-2">
            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-3">
                <span className="teal-triangle mt-1.5"></span>
                <div>
                  <span className="font-bold">Crime type:</span> {person.crimeType}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="teal-triangle mt-1.5"></span>
                <div>
                  <span className="font-bold">Crime location:</span> {person.crimeLocation}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="teal-triangle mt-1.5"></span>
                <div>
                  <span className="font-bold">Suspect name:</span> {person.name}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="teal-triangle mt-1.5"></span>
                <div>
                  <span className="font-bold">Police force:</span> {person.policeForce}
                </div>
              </div>
            </div>

            {/* Summary */}
            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-deeper mb-3">Summary</h2>
              <p className="text-gray-700 leading-relaxed">{person.summary}</p>
            </section>

            {/* Full Details */}
            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-deeper mb-3">Full Details</h2>
              <p className="text-gray-700 leading-relaxed">{person.details}</p>
            </section>

            {/* Suspect description */}
            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-deeper mb-3">Suspect description</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="teal-triangle mt-1.5"></span>
                  <div><span className="font-bold">Suspect name:</span> {person.name}</div>
                </div>
                {person.age && (
                  <div className="flex items-start gap-3">
                    <span className="teal-triangle mt-1.5"></span>
                    <div><span className="font-bold">Age:</span> {person.age}</div>
                  </div>
                )}
                {person.height && (
                  <div className="flex items-start gap-3">
                    <span className="teal-triangle mt-1.5"></span>
                    <div><span className="font-bold">Height:</span> {person.height}</div>
                  </div>
                )}
                {person.build && (
                  <div className="flex items-start gap-3">
                    <span className="teal-triangle mt-1.5"></span>
                    <div><span className="font-bold">Build:</span> {person.build}</div>
                  </div>
                )}
                {person.hair && (
                  <div className="flex items-start gap-3">
                    <span className="teal-triangle mt-1.5"></span>
                    <div><span className="font-bold">Hair:</span> {person.hair}</div>
                  </div>
                )}
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gray-light p-4 md:p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-purple-deeper mb-2">Do you have information?</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">If you have any information about this person, please contact Crimestoppers anonymously.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#"
                  className="bg-red-brand text-white px-6 py-3 rounded-lg font-semibold cursor-pointer hover:bg-red-hover transition-colors text-center"
                >
                  Give information online
                </Link>
                <Link
                  href="tel:0800555111"
                  className="border-2 border-purple-dark text-purple-dark px-6 py-3 rounded-lg font-semibold cursor-pointer hover:bg-purple-dark hover:text-white transition-colors text-center"
                >
                  Call 0800 555 111
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AppealPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <AppealContent />
    </Suspense>
  );
}
