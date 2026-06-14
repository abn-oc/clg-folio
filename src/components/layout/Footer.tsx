import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  const socialLinks = Array.from({ length: 4 }, (_, i) => i);

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="interactive flex items-center gap-2.5 mb-4 group">
              <div className="p-2 bg-primary-500 rounded-lg group-hover:bg-primary-600 transition-colors">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-slate-900">
                Nestick Tech
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-xs">
              Empowering the next generation of innovators through academic excellence and cutting-edge research.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((i) => (
                <a
                  key={i}
                  href="#"
                  className="interactive p-2 rounded-lg text-slate-400 hover:text-primary-600 hover:bg-slate-100 transition-colors"
                  aria-label={`Social media link ${i + 1}`}
                >
                  <Globe className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Academic Programs", href: "/programs" },
                { name: "Our Faculty", href: "/faculty" },
                { name: "Admissions", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="interactive text-sm text-slate-500 hover:text-primary-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <MapPin className="h-4 w-4 text-primary-500 shrink-0 mt-0.5" />
                <span>123 Innovation Drive,<br />Tech City, TC 90210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Phone className="h-4 w-4 text-primary-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Mail className="h-4 w-4 text-primary-500 shrink-0" />
                <span>info@nesticktech.edu</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-5">
              Newsletter
            </h3>
            <p className="text-sm text-slate-500 mb-4">
              Subscribe to get the latest news and updates from our campus.
            </p>
            <form className="flex flex-col gap-2.5">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-surface text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-colors"
              />
              <button
                type="button"
                className="interactive w-full px-4 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-200 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Nestick Tech College. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-400">
            <a href="#" className="interactive hover:text-primary-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="interactive hover:text-primary-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
