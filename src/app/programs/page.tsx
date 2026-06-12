import Card from "@/components/ui/Card";
import programsData from "@/data/programs.json";
import { CheckCircle2, BookOpen } from "lucide-react";

export const metadata = {
  title: "Academic Programs - Nestick Tech College",
  description: "Explore our degree programs and fundamental courses.",
};

export default function ProgramsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Academic Programs
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Discover comprehensive degree programs designed to equip you with the skills demanded by today's rapidly evolving tech industry.
          </p>
        </div>

        <div className="space-y-12">
          {programsData.map((program, index) => (
            <Card key={program.id} delay={index * 0.1} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="p-8 md:p-12 md:w-1/2 bg-slate-50 dark:bg-slate-900 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-xl">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                      {program.title}
                    </h2>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                    {program.description}
                  </p>
                  <div className="mt-8">
                    <button className="text-primary-600 font-medium inline-flex items-center hover:underline">
                      View Curriculum Details &rarr;
                    </button>
                  </div>
                </div>
                
                <div className="p-8 md:p-12 md:w-1/2 bg-white dark:bg-slate-800">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
                    Core Courses Include:
                  </h3>
                  <ul className="space-y-4">
                    {program.courses.map((course, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-accent-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 dark:text-slate-300 font-medium text-lg">
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
