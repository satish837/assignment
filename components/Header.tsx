'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Ai Banking', href: '#', dropdown: true },
  { name: 'Payments', href: '#' },
  { name: 'Payouts', href: '#' },
  { name: 'Payroll', href: '#' },
  { name: 'Contact Us', href: '#' },
];

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔒 Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`px-4 md:px-10 pt-6 w-full max-w-[1200px] mx-auto transition-all duration-500 ${
          isScrolled
            ? 'bg-[url("/header-bg.png")] bg-cover bg-center backdrop-blur max-w-full pt-1'
            : 'bg-[url("/header-bg.png")] bg-cover bg-center'
        } rounded-none md:rounded-full shadow-xl`}
      >
        <div
          className={`flex items-center justify-between px-6 md:px-9 border border-[#6cc4f7] text-white w-full bg-black bg-opacity-50 relative rounded-full transition-all duration-500 ${
            isScrolled ? 'py-2 md:py-4' : 'py-4 md:py-6'
          }`}
        >
          {/* Logo */}
          <a href="#">
            <img src="/logo.png" alt="Logo" width={70} height={20} />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 text-base">
            {navItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <button className="flex items-center gap-1 hover:text-[#63c1f9] transition">
                    {item.name}
                    <ChevronDown size={14} />
                  </button>
                  {showDropdown && (
                    <div className="absolute left-0 top-full mt-2 bg-[#0a0f24] border border-[#63c1f9] rounded-md shadow-lg z-20 px-4 py-2 w-[200px]">
                      <a href="#" className="block py-1 hover:text-[#63c1f9]">
                        Option 1
                      </a>
                      <a href="#" className="block py-1 hover:text-[#63c1f9]">
                        Option 2
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={`hover:text-[#63c1f9] transition ${
                    item.name === 'Home' ? 'text-[#63c1f9]' : ''
                  }`}
                >
                  {item.name}
                </a>
              )
            )}
          </nav>

          {/* Burger Icon (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] bg-[#000000] text-white md:hidden overflow-y-auto flex flex-col items-center justify-center">
          {/* Close Button */}
          <div className="absolute top-3 right-4 flex justify-end px-6 pt-6">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white"
              aria-label="Close Menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col items-center text-center space-y-6 text-4xl mt-10 px-6 pb-10">
            {navItems.map((item) =>
              item.dropdown ? (
                <MobileDropdown key={item.name} item={item} />
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={`hover:text-[#63c1f9] transition ${
                    item.name === 'Home' ? 'text-[#63c1f9] font-semibold' : ''
                  }`}
                >
                  {item.name}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}

// 🔽 Mobile Dropdown Component
function MobileDropdown({ item }: { item: { name: string; href: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center gap-1 focus:outline-none"
      >
        {item.name}
        <ChevronDown
          size={30}
          className={`${open ? 'rotate-180' : ''} transition-transform`}
        />
      </button>
      {open && (
        <div className="space-y-1 text-2xl">
          <a href="#" className="block hover:text-[#63c1f9]">
            Option 1
          </a>
          <a href="#" className="block hover:text-[#63c1f9]">
            Option 2
          </a>
        </div>
      )}
    </div>
  );
}
