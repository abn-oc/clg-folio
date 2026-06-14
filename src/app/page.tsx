import Link from "next/link";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import aboutData from "@/data/about.json";

export default function Home() {
  const stats = [
    { value: aboutData.stats.students, label: "Students Enrolled" },
    { value: aboutData.stats.faculty, label: "Expert Faculty" },
    { value: aboutData.stats.programs, label: "Degree Programs" },
    { value: aboutData.stats.alumni, label: "Global Alumni" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6e5e1_1px,transparent_1px),linear-gradient(to_bottom,#e6e5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
            Established 1995
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Shape Your Future at{" "}
            <span className="text-primary-500">Nestick Tech</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            {aboutData.vision}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/programs" className="interactive">
              <Button variant="primary" size="lg">
                Explore Programs <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/faculty" className="interactive">
              <Button variant="outline" size="lg">
                Meet Our Faculty
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-12 sm:h-16 md:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,132.59,204.27,119,244.54,111.66,283.7,85.25,321.39,56.44Z" className="fill-[#f7f6f3]" />
          </svg>
        </div>
      </section>

      {/* About & Stats */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                A Legacy of Excellence
              </h2>
              <p className="text-base sm:text-lg text-slate-500 mb-10 leading-relaxed">
                {aboutData.history}
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl sm:text-4xl font-bold text-primary-500 mb-1.5">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://placehold.co/800x600/e6e5e1/1c1b18?text=Campus+Life"
                alt="Campus Life Placeholder"
                className="rounded-xl border border-slate-200"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl border border-slate-200 shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-amber-50 text-amber-600 rounded-lg">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-slate-900">#1 Ranked</div>
                    <div className="text-xs text-slate-500">For Tech Innovation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Discover Your Path
            </h2>
            <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
              Explore our core areas of study and find the program that aligns with your passions and career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/programs" className="interactive">
              <Card className="h-full group cursor-pointer" delay={0.1}>
                <div className="p-8 sm:p-10 flex flex-col items-center text-center h-full">
                  <div className="p-3.5 bg-primary-50 text-primary-500 rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    Academic Programs
                  </h3>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed max-w-sm">
                    Browse our comprehensive range of undergraduate and postgraduate degrees designed for the modern tech landscape.
                  </p>
                  <span className="text-sm font-medium text-primary-600 inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all mt-auto">
                    View Programs <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Card>
            </Link>

            <Link href="/faculty" className="interactive">
              <Card className="h-full group cursor-pointer" delay={0.2}>
                <div className="p-8 sm:p-10 flex flex-col items-center text-center h-full">
                  <div className="p-3.5 bg-emerald-50 text-emerald-500 rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    World-Class Faculty
                  </h3>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed max-w-sm">
                    Learn from industry veterans, acclaimed researchers, and thought leaders dedicated to your success.
                  </p>
                  <span className="text-sm font-medium text-emerald-600 inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all mt-auto">
                    Meet the Team <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
