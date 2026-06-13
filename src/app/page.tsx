import Link from "next/link";
import { ArrowRight, BookOpen, Users, Trophy } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import aboutData from "@/data/about.json";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image / Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-slate-900" />
          <div className="absolute bottom-12 right-8 text-white/20 text-sm font-mono tracking-widest uppercase z-20 hidden md:block">
            [ Placeholder: University Campus Background ]
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Shape Your Future at <br />
            <span className="text-accent-400">Nestick Tech</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto font-light">
            {aboutData.vision}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs">
              <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4">
                Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/faculty">
              <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4 border-white text-white hover:bg-white/10 dark:hover:bg-white/10">
                Meet Our Faculty
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,132.59,204.27,119,244.54,111.66,283.7,85.25,321.39,56.44Z" className="fill-white dark:fill-slate-950"></path>
          </svg>
        </div>
      </section>

      {/* About & Stats Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">A Legacy of Excellence</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                {aboutData.history}
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-extrabold text-primary-600 mb-2">{aboutData.stats.students}</div>
                  <div className="text-slate-500 font-medium uppercase tracking-wide text-sm">Students Enrolled</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-primary-600 mb-2">{aboutData.stats.faculty}</div>
                  <div className="text-slate-500 font-medium uppercase tracking-wide text-sm">Expert Faculty</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-primary-600 mb-2">{aboutData.stats.programs}</div>
                  <div className="text-slate-500 font-medium uppercase tracking-wide text-sm">Degree Programs</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-primary-600 mb-2">{aboutData.stats.alumni}</div>
                  <div className="text-slate-500 font-medium uppercase tracking-wide text-sm">Global Alumni</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://placehold.co/800x600/e2e8f0/1e293b?text=Campus+Life" 
                alt="Campus Life Placeholder" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent-100 text-accent-600 rounded-full">
                    <Trophy className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">#1 Ranked</div>
                    <div className="text-slate-500">For Tech Innovation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Discover Your Path</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Explore our core areas of study and find the program that aligns with your passions and career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/programs">
              <Card className="h-full group cursor-pointer" delay={0.1}>
                <div className="p-8 flex flex-col items-center text-center h-full">
                  <div className="p-4 bg-primary-50 dark:bg-slate-800 text-primary-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Academic Programs</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Browse our comprehensive range of undergraduate and postgraduate degrees designed for the modern tech landscape.
                  </p>
                  <span className="text-primary-600 font-medium inline-flex items-center group-hover:underline mt-auto">
                    View Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </Card>
            </Link>

            <Link href="/faculty">
              <Card className="h-full group cursor-pointer" delay={0.2}>
                <div className="p-8 flex flex-col items-center text-center h-full">
                  <div className="p-4 bg-accent-50 dark:bg-slate-800 text-accent-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">World-Class Faculty</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Learn from industry veterans, acclaimed researchers, and thought leaders dedicated to your success.
                  </p>
                  <span className="text-accent-600 font-medium inline-flex items-center group-hover:underline mt-auto">
                    Meet the Team <ArrowRight className="ml-2 h-4 w-4" />
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
