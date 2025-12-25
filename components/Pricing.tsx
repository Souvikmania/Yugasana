"use client";

import { useState } from "react";

/* ICON HELPERS */
const Check = () => (
  <span className="w-6 h-6 flex items-center justify-center rounded-md bg-indigo-500 text-white text-sm">
    ✓
  </span>
);

const Cross = () => (
  <span className="w-6 h-6 flex items-center justify-center rounded-md bg-gray-100 text-gray-400 text-sm">
    ✕
  </span>
);

const Info = () => (
  <span className="text-gray-400 text-sm">ⓘ</span>
);

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="bg-white py-32">
      <div className="max-w-[1300px] mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-[850px] mx-auto">
          <h2 className="text-[44px] leading-[56px] font-bold text-gray-900">
            Flexible Pricing, Unbeatable Value
          </h2>

          <p className="mt-6 text-gray-600 text-[18px] leading-[30px]">
            Discover the perfect plan to power your championships—whether you’re
            managing local events or global competitions. Our transparent pricing
            offers all the tools you need, without hidden fees.
          </p>

          {/* BILLING TOGGLE */}
          <div className="mt-10 inline-flex items-center gap-2 bg-gray-100 p-2 rounded-full">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                billing === "monthly"
                  ? "bg-indigo-500 text-white"
                  : "text-gray-700"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                billing === "yearly"
                  ? "bg-indigo-500 text-white"
                  : "text-gray-700"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* PLANS */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* STARTER */}
          <PricingCard
            title="Starter"
            price="$599"
            badge="For Individuals"
            buttonStyle="outline"
            features={[
              { name: "Task Management", enabled: true },
              { name: "Real-time Collaboration", enabled: true },
              { name: "Customizable Dashboards", enabled: true },
              { name: "Advanced Analytics", enabled: false },
              { name: "Resource Allocation", enabled: false },
              { name: "Mobile Accessibility", enabled: false },
            ]}
          />

          {/* PRO */}
          <PricingCard
            title="Pro"
            price="$999"
            badge="For Startups"
            highlighted
            discount
            features={[
              { name: "Task Management", enabled: true },
              { name: "Real-time Collaboration", enabled: true },
              { name: "Customizable Dashboards", enabled: true },
              { name: "Advanced Analytics", enabled: true },
              { name: "Resource Allocation", enabled: false },
              { name: "Mobile Accessibility", enabled: false },
            ]}
          />

          {/* ENTERPRISE */}
          <PricingCard
            title="Enterprise"
            price="$1,999"
            badge="For Organizations"
            buttonStyle="outline"
            features={[
              { name: "Task Management", enabled: true },
              { name: "Real-time Collaboration", enabled: true },
              { name: "Customizable Dashboards", enabled: true },
              { name: "Advanced Analytics", enabled: true },
              { name: "Resource Allocation", enabled: true },
              { name: "Mobile Accessibility", enabled: true },
            ]}
          />

        </div>
      </div>
    </section>
  );
}

/* CARD COMPONENT */
function PricingCard({
  title,
  price,
  badge,
  features,
  highlighted,
  discount,
  buttonStyle = "solid",
}: any) {
  return (
    <div
      className={`relative rounded-3xl p-8 ${
        highlighted
          ? "border-2 border-blue-500 shadow-xl"
          : "border border-gray-200"
      }`}
    >
      {discount && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-sm px-4 py-1 rounded-full">
          Use “FIRST100” code for 60% Discount
        </span>
      )}

      <div className="flex justify-between items-start mt-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="font-semibold text-gray-900">
          {price} <span className="text-sm text-gray-500">/ Yearly</span>
        </span>
      </div>

      <span className="inline-block mt-2 bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
        {badge}
      </span>

      <button
        className={`mt-8 w-full py-3 rounded-xl font-medium ${
          highlighted
            ? "bg-blue-600 text-white"
            : "border border-gray-300"
        }`}
      >
        Get Started →
      </button>

      {/* FEATURES */}
      <div className="mt-8">
        <p className="font-semibold mb-4">Features Included:</p>

        <ul className="divide-y">
          {features.map((f: any) => (
            <li
              key={f.name}
              className={`flex items-center justify-between py-3 ${
                !f.enabled ? "text-gray-400" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                {f.enabled ? <Check /> : <Cross />}
                {f.name}
              </div>
              <Info />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
