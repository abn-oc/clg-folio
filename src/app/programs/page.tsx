import Card from "@/components/ui/Card";
import programsData from "@/data/programs.json";
import { CheckCircle2, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Academics — Nestick Tech College",
  description: "Explore our degree programs and fundamental courses.",
};

export default function ProgramsPage() {
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
            <li className="text-stone-900 font-medium">Academics</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-14 sm:mb-16 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 mb-4">
            Academic Programs
          </h1>
          <div className="w-12 h-px bg-stone-300 mb-6" />
          <p className="text-lg text-stone-500 leading-relaxed">
            Discover comprehensive degree programs designed to equip you with
            the skills demanded by today&apos;s rapidly evolving tech industry.
          </p>
        </div>

        {/* Program Cards */}
        <div className="space-y-8">
          {programsData.map((program) => (
            <Card
              key={program.id}
              className="overflow-hidden border-l-4 border-l-navy"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-stone-200">
                {/* Left: Info */}
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-navy-50 text-navy rounded-md">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-stone-900">
                      {program.title}
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base text-stone-500 leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <button className="mt-6 text-sm font-medium text-navy inline-flex items-center gap-1.5 hover:gap-2.5 transition-all self-start hover:underline underline-offset-4">
                    View Curriculum Details &rarr;
                  </button>
                </div>

                {/* Right: Courses */}
                <div className="p-6 sm:p-8 lg:p-10 bg-stone-50">
                  <h3 className="text-xs font-semibold text-stone-900 mb-5 uppercase tracking-wider">
                    Core Courses
                  </h3>
                  <ul className="space-y-3">
                    {program.courses.map((course, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-stone-700">
                          {course}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
