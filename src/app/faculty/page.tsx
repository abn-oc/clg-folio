import Card from "@/components/ui/Card";
import facultyData from "@/data/faculty.json";
import { Mail, Globe } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Faculty — Nestick Tech College",
  description: "Meet the brilliant minds teaching at Nestick Tech.",
};

export default function FacultyPage() {
  return (
    <div className="pt-28 pb-20 sm:pb-28 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-stone-400" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-navy transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-stone-900 font-medium">Faculty</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-14 sm:mb-16 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 mb-4">
            World-Class Faculty
          </h1>
          <div className="w-12 h-px bg-stone-300 mb-6" />
          <p className="text-lg text-stone-500 leading-relaxed">
            Learn from industry veterans, acclaimed researchers, and dedicated
            educators committed to shaping the next generation of tech leaders.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyData.map((faculty) => (
            <Card key={faculty.id} className="flex flex-col">
              <div className="p-6 sm:p-8 flex flex-col items-center text-center flex-1">
                {/* Circular Avatar */}
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-stone-200 mb-5">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-lg font-semibold text-stone-900 mb-1">
                  {faculty.name}
                </h3>
                <p className="text-sm text-navy font-medium mb-1">
                  {faculty.designation}
                </p>
                <span className="text-xs text-stone-400 font-medium uppercase tracking-wider mb-6">
                  {faculty.department}
                </span>

                {/* Actions */}
                <div className="flex gap-2 mt-auto pt-4 border-t border-stone-100 w-full justify-center">
                  <button
                    className="p-2 rounded-md text-stone-400 hover:text-navy hover:bg-stone-100 transition-colors"
                    aria-label={`Email ${faculty.name}`}
                  >
                    <Mail className="h-4 w-4" />
                  </button>
                  <button
                    className="p-2 rounded-md text-stone-400 hover:text-navy hover:bg-stone-100 transition-colors"
                    aria-label={`Website of ${faculty.name}`}
                  >
                    <Globe className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
