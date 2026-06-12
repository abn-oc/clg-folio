import Card from "@/components/ui/Card";
import facultyData from "@/data/faculty.json";
import { Mail, Globe } from "lucide-react";

export const metadata = {
  title: "Our Faculty - Nestick Tech College",
  description: "Meet the brilliant minds teaching at Nestick Tech.",
};

export default function FacultyPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            World-Class Faculty
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Learn from industry veterans, acclaimed researchers, and dedicated educators committed to shaping the next generation of tech leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyData.map((faculty, index) => (
            <Card key={faculty.id} delay={index * 0.1}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={faculty.image} 
                  alt={faculty.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {faculty.name}
                </h3>
                <p className="text-primary-600 font-medium text-sm mb-4">
                  {faculty.designation}
                </p>
                <div className="flex justify-between items-center border-t border-slate-100 dark:border-slate-800 pt-4 mt-4">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                    {faculty.department}
                  </span>
                  <div className="flex space-x-2">
                    <button className="p-2 text-slate-400 hover:text-primary-600 transition-colors">
                      <Mail className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-primary-600 transition-colors">
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
