"use client";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="flex flex-col md:flex-row justify-between gap-12 px-6 md:px-20 w-full">
        {/* Company Info */}
        <div className="space-y-4 w-full md:w-[30%]">
          <h2 className="text-lg font-bold">
            <img src="/logo.png" alt="logo" />
          </h2>
          <p className="text-sm text-gray-400">
            Our payment gateway simplifies transactions for e-commerce
            businesses, delivering fast and secure processing. With smooth
            integration, we enhance your store's payment capabilities. Optimize
            your checkout process and boost customer satisfaction easily.
          </p>

          <div className="flex gap-4 mt-4">
            {[<FaFacebookF />, <FaXTwitter />, <FaInstagram />].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-gray-800 transition"
              >
                {Icon}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-[70%]">
          {/* Payment */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold border-l border-gray-600 pl-2 mb-2 h-5">
              Payment
            </h4>
            {[
              "Payment Gateway",
              "Payment Links",
              "Payment Methods",
              "Bulk Payment",
              "Invoice",
            ].map((item) => (
              <p
                key={item}
                className="text-sm text-gray-400 hover:text-white cursor-pointer"
              >
                {item}
              </p>
            ))}
          </div>

          {/* AI Banking */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold border-l border-gray-600 pl-2 mb-2 h-5">
              AI Banking
            </h4>
            {[
              "Current Account",
              "Accounting",
              "API Banking",
              "UPI Autopay",
              "Tax Payment",
            ].map((item) => (
              <p
                key={item}
                className="text-sm text-gray-400 hover:text-white cursor-pointer"
              >
                {item}
              </p>
            ))}
          </div>

          {/* Cards + CMS */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold pl-2 mb-2 h-5 invisible">.</h4>
            {["Cards", "CMS"].map((item) => (
              <p
                key={item}
                className="text-sm text-gray-400 hover:text-white cursor-pointer"
              >
                {item}
              </p>
            ))}
          </div>

          {/* Company Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold border-l border-gray-600 pl-2 mb-2 h-5">
              Company
            </h4>
            {["About us", "Contact us"].map((item) => (
              <p
                key={item}
                className="text-sm text-gray-400 hover:text-white cursor-pointer"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-16 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 px-6 md:px-20">
        <p>© 2025 UzOPay</p>

        <div className="flex gap-6 mt-4 md:mt-0 items-center">
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-700 transition ml-4"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M5 8.333V1.667M5 1.667L1.667 5M5 1.667L8.333 5"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
