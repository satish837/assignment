"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tabs = [
  {
    id: "payments",
    label: "Payments",
    heading: "Elevate Your Online Store's Payment Experience",
    description:
      "Our payment gateway simplifies transactions for e-commerce businesses, delivering fast and secure processing. With smooth integration, we enhance your store's payment capabilities.",
    points: [
      { icon: "/tab-content-icon1.svg", text: "Optimize Your Checkout" },
      { icon: "/tab-content-icon2.svg", text: "Fast and Secure" },
      { icon: "/tab-content-icon3.svg", text: "Smooth Integration" },
    ],
    image: "/tab-content-right-thumb.png",
    icon: "/payments-tab-icon.svg",
  },
  {
    id: "payout",
    label: "Payout",
    heading: "Effortless Vendor Payouts",
    description:
      "Automate your payouts to vendors or contractors. Ensure timely, secure payments with our smart payout infrastructure.",
    points: [
      { icon: "/tab-content-icon1.svg", text: "Automated Workflows" },
      { icon: "/tab-content-icon2.svg", text: "Secure Transfers" },
      { icon: "/tab-content-icon3.svg", text: "Global Coverage" },
    ],
    image: "/tab-content-right-thumb.png",
    icon: "/payout-tab-icon.svg",
  },
  {
    id: "payroll",
    label: "Payroll",
    heading: "Streamlined Payroll Management",
    description:
      "Manage employee payrolls efficiently. Handle salaries, deductions, and compliance effortlessly through our dashboard.",
    points: [
      { icon: "/tab-content-icon1.svg", text: "HR-Friendly" },
      { icon: "/tab-content-icon2.svg", text: "On-time Processing" },
      { icon: "/tab-content-icon3.svg", text: "Data Secure" },
    ],
    image: "/tab-content-right-thumb.png",
    icon: "/payroll-tab-icon.svg",
  },
  {
    id: "banking",
    label: "AI Banking",
    heading: "Intelligent AI-Powered Banking",
    description:
      "Leverage AI to optimize your banking operations, from risk detection to predictive analytics for smoother financial decisions.",
    points: [
      { icon: "/tab-content-icon1.svg", text: "Smart Risk Detection" },
      { icon: "/tab-content-icon2.svg", text: "Real-time Insights" },
      { icon: "/tab-content-icon3.svg", text: "Predictive Analytics" },
    ],
    image: "/tab-content-right-thumb.png",
    icon: "/ai-banking-tab-icon.svg",
  },
];

export default function TabbedSection() {
  const [activeTab, setActiveTab] = useState("payments");
  const current = tabs.find((tab) => tab.id === activeTab);

  // CTA Sound Ref
  const ctaSoundRef = useRef<HTMLAudioElement | null>(null);

  const handleCTAClick = () => {
    if (!ctaSoundRef.current) {
      ctaSoundRef.current = new Audio("/click-sound.wav");
    }
    ctaSoundRef.current.currentTime = 0;
    ctaSoundRef.current.play();
  };

  return (
    <section className="text-white py-14">
      <div className="w-[90%] max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <p className="text-sm text-gray-400 uppercase tracking-widest">Enhancing payments</p>
            <span className="h-px w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </div>
          <h2 className="text-2xl font-medium bg-gradient-to-r from-white via-gray-300 to-white text-transparent bg-clip-text lg:text-5xl lg:max-w-3xl mx-auto">
            <span className="block md:mb-4">Powering Payments Across</span>
            <span className="block">Industries</span>
          </h2>
        </div>

        {/* Container with background */}
        <div className="w-full rounded-2xl p-4 bg-[url('/tab-bg.jpg')] bg-cover bg-right bg-no-repeat">
          {/* Tabs */}
          <div className="w-full md:w-[80%] mx-auto flex flex-col md:flex-row justify-center gap-2 md:gap-4 mb-8 border-2 border-[#182834] rounded-xl overflow-hidden p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full px-5 py-3 rounded-xl text-lg md:text-2xl font-medium transition duration-200 ${
                  activeTab === tab.id
                    ? "bg-[#21212c] text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <img
                    src={tab.icon}
                    alt={`${tab.label} icon`}
                    className={`w-6 h-6 md:w-8 md:h-8 transition ${
                      activeTab === tab.id ? "filter-icon-purple" : "grayscale opacity-60"
                    }`}
                  />
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="w-full px-0 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Text */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl md:text-4xl font-normal mt-6 mb-6">{current?.heading}</h3>
              <p className="text-gray-400 text-base md:text-lg mb-6">{current?.description}</p>

              <ul className="space-y-4 text-sm">
                {current?.points.map((point, idx) => (
                  <li key={idx} className="flex items-center justify-center md:justify-start gap-4">
                    <img src={point.icon} alt={point.text} className="w-6 h-6 object-contain" />
                    <span className="text-base md:text-lg">{point.text}</span>
                  </li>
                ))}
              </ul>

              <Link href="javascript:void(0)">
                <button
                  onClick={handleCTAClick}
                  className="relative inline-block p-px leading-6 text-white no-underline bg-gray-800 shadow-2xl cursor-pointer group rounded-xl hover:shadow-[#2a5268] my-10"
                >
                  <span className="absolute inset-0 overflow-hidden rounded-xl">
                    <span className="absolute inset-0 rounded-xl bg-[radial-gradient(75%_100%_at_50%_0%,rgba(41,57,117,1)_10%,rgba(32,26,76,1)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </span>
                  <div className="relative z-10 flex items-center px-6 py-3 rounded-xl bg-gray-950/50 ring-1 ring-[white]/10 font-sans">
                    <span className="text-base">Get Started</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                </button>
              </Link>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center mt-2 md:mt-0">
              <div className="relative w-[280px] h-[150px] md:w-full md:h-auto">
                <img
                  src={current?.image}
                  alt={current?.label}
                  className="w-full h-full object-contain transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
