import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary-600 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                Nestick Tech
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Empowering the next generation of innovators through academic excellence and cutting-edge research.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-primary-600 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary-600 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary-600 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary-600 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm">
                  Academic Programs
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm">
                  Our Faculty
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm">
                  Admissions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                <MapPin className="h-5 w-5 text-primary-600 shrink-0" />
                <span>123 Innovation Drive,<br />Tech City, TC 90210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <Phone className="h-5 w-5 text-primary-600 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <Mail className="h-5 w-5 text-primary-600 shrink-0" />
                <span>info@nesticktech.edu</span>
              </li>
            </ul>
          </div>
          
          <div>
             <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Newsletter
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              Subscribe to get the latest news and updates from our campus.
            </p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button 
                type="button"
                className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Nestick Tech College. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500 dark:text-slate-400">
            <a href="#" className="hover:text-primary-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
