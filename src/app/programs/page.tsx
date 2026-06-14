import Card from "@/components/ui/Card";
import programsData from "@/data/programs.json";
import { CheckCircle2, BookOpen } from "lucide-react";

export const metadata = {
  title: "Academic Programs - Nestick Tech College",
  description: "Explore our degree programs and fundamental courses.",
};

export default function ProgramsPage() {
  return (
    <div className="pt-28 pb-20 sm:pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Academic Programs
          </h1>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Discover comprehensive degree programs designed to equip you with the skills demanded by today&apos;s rapidly evolving tech industry.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {programsData.map((program, index) => (
            <Card
              key={program.id}
              delay={index * 0.1}
              className="overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-slate-100 sm:flex"
            >
              <div className="p-6 sm:p-8 lg:p-10 sm:w-1/2 flex flex-col justify-center bg-slate-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-primary-50 text-primary-500 rounded-lg">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {program.title}
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                  {program.description}
                </p>
                <button className="interactive mt-6 text-sm font-medium text-primary-600 inline-flex items-center gap-1.5 hover:gap-2.5 transition-all self-start hover:underline underline-offset-4">
                  View Curriculum Details &rarr;
                </button>
              </div>

              <div className="p-6 sm:p-8 lg:p-10 sm:w-1/2">
                <h3 className="text-sm font-semibold text-slate-900 mb-5 uppercase tracking-wider">
                  Core Courses
                </h3>
                <ul className="space-y-3">
                  {program.courses.map((course, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-slate-700">
                        {course}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
