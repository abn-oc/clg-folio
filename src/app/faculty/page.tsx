import Card from "@/components/ui/Card";
import facultyData from "@/data/faculty.json";
import { Mail, Globe } from "lucide-react";

export const metadata = {
  title: "Our Faculty - Nestick Tech College",
  description: "Meet the brilliant minds teaching at Nestick Tech.",
};

export default function FacultyPage() {
  return (
    <div className="pt-28 pb-20 sm:pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            World-Class Faculty
          </h1>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Learn from industry veterans, acclaimed researchers, and dedicated educators committed to shaping the next generation of tech leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyData.map((faculty, index) => (
            <Card key={faculty.id} delay={index * 0.1} className="flex flex-col group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-0.5">
                  {faculty.name}
                </h3>
                <p className="text-sm text-primary-600 font-medium mb-4">
                  {faculty.designation}
                </p>
                <div className="flex justify-between items-center border-t border-slate-100 pt-4 mt-auto">
                  <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    {faculty.department}
                  </span>
                  <div className="flex gap-1">
                    <button
                      className="interactive p-2 rounded-lg text-slate-400 hover:text-primary-600 hover:bg-slate-100 transition-colors"
                      aria-label={`Email ${faculty.name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </button>
                    <button
                      className="interactive p-2 rounded-lg text-slate-400 hover:text-primary-600 hover:bg-slate-100 transition-colors"
                      aria-label={`Website of ${faculty.name}`}
                    >
                      <Globe className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
