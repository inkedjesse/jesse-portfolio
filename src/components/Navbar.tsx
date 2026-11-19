import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        isScrolled || mobileMenuOpen
          ? 'border-slate-800 bg-[#030712]/90 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        {/* Brand */}
        <a href="#about" className="group flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-700 bg-slate-900 font-mono text-xs font-semibold text-brand-300 transition-colors group-hover:border-brand-500/60">
            JS
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-semibold text-slate-100">Jesse Mae Santos</span>
            <span className="block font-mono text-[11px] text-slate-400">Frontend & UI/UX</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-400 transition-colors hover:text-slate-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-md border border-brand-500/50 px-3.5 py-1.5 text-sm font-medium text-brand-300 transition-colors hover:bg-brand-500/10 hover:text-brand-200 md:inline-flex"
        >
          Get In Touch
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-md p-2 text-slate-400 hover:bg-slate-900 hover:text-slate-100 md:hidden"
          aria-label="Toggle Menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-800 px-5 pb-5 pt-2 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block border-b border-slate-800/70 py-3 text-[15px] text-slate-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 block rounded-md bg-brand-600 py-2.5 text-center text-sm font-medium text-white hover:bg-brand-500"
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  );
};
