import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-14">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="p-1.5 bg-navy rounded-md">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-stone-900 tracking-tight">
                Nestick Tech
              </span>
            </Link>
            <p className="text-sm text-stone-500 leading-relaxed max-w-xs">
              Empowering the next generation of innovators through academic
              excellence and cutting-edge research.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-stone-900 uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Academic Programs", href: "/programs" },
                { name: "Our Faculty", href: "/faculty" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-500 hover:text-navy transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-stone-900 uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-stone-500">
                <MapPin className="h-4 w-4 text-navy shrink-0 mt-0.5" />
                <span>
                  123 Innovation Drive,
                  <br />
                  Tech City, TC 90210
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-stone-500">
                <Phone className="h-4 w-4 text-navy shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-stone-500">
                <Mail className="h-4 w-4 text-navy shrink-0" />
                <span>info@nesticktech.edu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-200 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} Nestick Tech College. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-stone-400">
            <a
              href="#"
              className="hover:text-navy transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-navy transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
